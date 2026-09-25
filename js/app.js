// Access the topics loaded from external files
const topicData = window.topicData || {};

// App State
let currentTopicKey = Object.keys(topicData)[0] || "";
let activeFilter = "all"; // "all", "incorrect", "unanswered"
let userAnswers = JSON.parse(localStorage.getItem("mcq_user_answers") || "{}");
let topicShuffledOrder = {}; // Stores randomized question orders per topic
let activeExamQuestions = null; // Holds active 40-MCQ Exam paper when in Exam Mode
let isExamGraded = false;

// Initialize UI on DOM Load
document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    renderTopicSidebar();
    if (currentTopicKey) {
        selectTopic(currentTopicKey);
    }
    updateGlobalStats();
    setupEventListeners();
}

// Setup Event Listeners
function setupEventListeners() {
    const mobileBtn = document.getElementById("mobile-menu-btn");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebar-overlay");

    const toggleMobileMenu = () => {
        if (sidebar) sidebar.classList.toggle("-translate-x-full");
        if (overlay) overlay.classList.toggle("hidden");
    };

    if (mobileBtn && sidebar && overlay) {
        mobileBtn.addEventListener("click", toggleMobileMenu);
        overlay.addEventListener("click", toggleMobileMenu);
    }

    const resetBtn = document.getElementById("reset-progress-btn");
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            if (confirm("Are you sure you want to reset all saved practice answers and progress?")) {
                userAnswers = {};
                localStorage.removeItem("mcq_user_answers");
                activeExamQuestions = null;
                isExamGraded = false;
                renderTopicSidebar();
                if (currentTopicKey) selectTopic(currentTopicKey);
                updateGlobalStats();
            }
        });
    }

    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".filter-btn").forEach(b => {
                b.classList.remove("bg-indigo-50", "text-indigo-700", "active");
                b.classList.add("text-slate-600");
            });
            e.currentTarget.classList.add("bg-indigo-50", "text-indigo-700", "active");
            e.currentTarget.classList.remove("text-slate-600");

            if (e.currentTarget.id === "filter-all-btn") activeFilter = "all";
            if (e.currentTarget.id === "filter-incorrect-btn") activeFilter = "incorrect";
            if (e.currentTarget.id === "filter-unanswered-btn") activeFilter = "unanswered";

            renderQuestions();
        });
    });

    const randomizeBtn = document.getElementById("randomize-btn");
    if (randomizeBtn) {
        randomizeBtn.addEventListener("click", () => {
            if (activeExamQuestions) {
                alert("Question shuffling is disabled during an active exam paper.");
                return;
            }
            const topic = topicData[currentTopicKey];
            if (!topic) return;
            
            let indices = topic.questions.map((_, idx) => idx);
            for (let i = indices.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [indices[i], indices[j]] = [indices[j], indices[i]];
            }
            topicShuffledOrder[currentTopicKey] = indices;
            renderQuestions();
        });
    }

    const submitBtn = document.getElementById("submit-topic-btn");
    if (submitBtn) {
        submitBtn.addEventListener("click", () => {
            handleSubmitPaper();
        });
    }
}

/**
 * Exits Exam Mode and restores Practice Mode
 */
function exitExamMode() {
    if (activeExamQuestions && !isExamGraded) {
        const confirmExit = confirm("Are you sure you want to exit the exam? Your current exam progress will be lost.");
        if (!confirmExit) return;
    }

    if (window.ExamEngine && typeof ExamEngine.stopTimer === 'function') {
        ExamEngine.stopTimer();
    }

    activeExamQuestions = null;
    isExamGraded = false;

    // Hide Timer Bar
    const timerBar = document.getElementById('exam-timer-bar');
    if (timerBar) timerBar.classList.add('hidden');

    // Restore selected practice topic UI
    if (currentTopicKey) {
        selectTopic(currentTopicKey);
    } else {
        renderTopicSidebar();
        renderQuestions();
    }
}

// Global hook for direct DOM onclick handlers
window.exitExamMode = exitExamMode;

/**
 * Handles Submission for both Exam Paper Mode and Practice Topic Mode
 */
function handleSubmitPaper() {
    const questions = getActiveQuestions();
    if (!questions || questions.length === 0) return;

    let unansweredCount = 0;
    questions.forEach(q => {
        if (!userAnswers[q.id] || userAnswers[q.id].selected === undefined) {
            unansweredCount++;
        }
    });

    if (unansweredCount > 0) {
        const confirmSubmit = confirm(`You have ${unansweredCount} unanswered question(s). Are you sure you want to submit and grade this paper?`);
        if (!confirmSubmit) return;
    }

    if (activeExamQuestions) {
        isExamGraded = true;
        
        // Hide top sticky timer bar
        const timerBar = document.getElementById('exam-timer-bar');
        if (timerBar) timerBar.classList.add('hidden');

        // Stop timer & calculate results from ExamEngine
        let results = null;
        if (window.ExamEngine && typeof ExamEngine.submitExam === 'function') {
            results = ExamEngine.submitExam(userAnswers);
        } else {
            if (window.ExamEngine && typeof ExamEngine.stopTimer === 'function') {
                ExamEngine.stopTimer();
            }
            results = calculateExamResults(questions);
        }

        // Show score and time spent popup
        showExamResultsModal(results);
    }

    // Mark all questions as submitted to reveal answer key & explanations
    questions.forEach(q => {
        if (!userAnswers[q.id]) {
            userAnswers[q.id] = { selected: undefined };
        }
        userAnswers[q.id].submitted = true;
    });

    if (!activeExamQuestions) {
        saveProgress();
    }

    renderQuestions();
    updateGlobalStats();
    updateTopicProgress();
    renderTopicSidebar();

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function calculateExamResults(questions) {
    let score = 0;
    const total = questions.length;

    questions.forEach(q => {
        const state = userAnswers[q.id];
        if (state && state.selected !== undefined && state.selected === q.answer) {
            score++;
        }
    });

    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
    
    return {
        score: score,
        total: total,
        percentage: percentage,
        timeSpentFormatted: "Completed"
    };
}

function showExamResultsModal(results) {
    const oldModal = document.getElementById('exam-result-modal');
    if (oldModal) oldModal.remove();

    const badgeColor = results.percentage >= 75 ? 'bg-emerald-500' : (results.percentage >= 50 ? 'bg-amber-500' : 'bg-rose-500');

    const modalHTML = `
        <div id="exam-result-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
            <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100 text-center relative">
                <div class="w-16 h-16 ${badgeColor} text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-lg">
                    <i class="fa-solid ${results.percentage >= 50 ? 'fa-award' : 'fa-triangle-exclamation'}"></i>
                </div>

                <h2 class="text-2xl font-bold text-slate-900">Exam Completed!</h2>
                <p class="text-xs text-slate-500 mt-1">Here is your final performance breakdown.</p>

                <div class="grid grid-cols-2 gap-3 my-6">
                    <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                        <span class="text-xs font-medium text-slate-400 block uppercase tracking-wider">Score</span>
                        <span class="text-2xl font-black text-indigo-600">${results.score} <span class="text-sm text-slate-400 font-normal">/ ${results.total}</span></span>
                        <span class="text-xs text-slate-500 block mt-0.5">(${results.percentage}%)</span>
                    </div>
                    <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                        <span class="text-xs font-medium text-slate-400 block uppercase tracking-wider">Time Spent</span>
                        <span class="text-lg font-bold text-slate-800 block mt-1">${results.timeSpentFormatted || 'Finished'}</span>
                        <span class="text-[11px] text-slate-400 block">Out of 60:00</span>
                    </div>
                </div>

                <button onclick="document.getElementById('exam-result-modal').remove()" class="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-xl shadow-md transition cursor-pointer">
                    Review Answers & Explanations
                </button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function renderTopicSidebar() {
    const list = document.getElementById("topic-list");
    const countBadge = document.getElementById("topic-count-badge");
    const keys = Object.keys(topicData);
    
    if (countBadge) countBadge.textContent = `${keys.length} Topics`;
    if (!list) return;
    
    list.innerHTML = "";

    keys.forEach((key, index) => {
        const topic = topicData[key];
        const qCount = topic.questions.length;
        
        let answeredCount = 0;
        topic.questions.forEach(q => {
            if (userAnswers[q.id] !== undefined && userAnswers[q.id].selected !== undefined) answeredCount++;
        });

        const isSelected = key === currentTopicKey && !activeExamQuestions;
        const btn = document.createElement("button");
        btn.className = `w-full text-left p-3 rounded-xl transition flex items-center justify-between group ${
            isSelected 
                ? "bg-indigo-50/80 border border-indigo-200 text-indigo-900 font-medium" 
                : "hover:bg-slate-100 text-slate-700 border border-transparent"
        }`;

        btn.onclick = () => {
            if (activeExamQuestions && !isExamGraded) {
                const leaveExam = confirm("You are currently taking a timed exam. Leaving now will exit your exam paper. Do you want to return to Practice Mode?");
                if (!leaveExam) return;
                
                if (window.ExamEngine && typeof ExamEngine.stopTimer === 'function') {
                    ExamEngine.stopTimer();
                }
            }
            
            activeExamQuestions = null;
            isExamGraded = false;
            
            const timerBar = document.getElementById('exam-timer-bar');
            if (timerBar) timerBar.classList.add('hidden');

            selectTopic(key);
            
            const sidebar = document.getElementById("sidebar");
            const overlay = document.getElementById("sidebar-overlay");
            if (sidebar) sidebar.classList.add("-translate-x-full");
            if (overlay) overlay.classList.add("hidden");
        };

        btn.innerHTML = `
            <div class="truncate pr-2">
                <div class="text-xs ${isSelected ? 'text-indigo-600 font-semibold' : 'text-slate-400'}">Topic ${index + 1}</div>
                <div class="text-sm truncate font-medium">${topic.title.replace(/^Topic \d+:\s*/, '')}</div>
            </div>
            <div class="text-right flex-shrink-0">
                <span class="text-xs px-2 py-0.5 rounded-full ${
                    answeredCount === qCount && qCount > 0
                        ? 'bg-emerald-100 text-emerald-800 font-medium'
                        : 'bg-slate-100 text-slate-500'
                }">${answeredCount}/${qCount}</span>
            </div>
        `;

        list.appendChild(btn);
    });
}

function selectTopic(key) {
    const sidebar = document.getElementById("sidebar");
    const mobileBtn = document.getElementById("mobile-menu-btn");
    const mainContainer = document.querySelector("main");

    if (sidebar) sidebar.classList.remove("hidden");
    if (mobileBtn) mobileBtn.classList.remove("hidden");
    
    if (mainContainer) {
        mainContainer.classList.remove("w-full");
        mainContainer.classList.add("md:ml-64");
    }

    activeExamQuestions = null;
    isExamGraded = false;
    currentTopicKey = key;
    renderTopicSidebar();

    const topic = topicData[key];
    if (!topic) return;

    const topicBadge = document.getElementById("current-topic-badge");
    const topicTitle = document.getElementById("current-topic-title");
    const topicDesc = document.getElementById("current-topic-desc");
    const topicTotalQ = document.getElementById("current-topic-total-q");

    if (topicBadge) topicBadge.textContent = `Practice Mode - Topic ${Object.keys(topicData).indexOf(key) + 1}`;
    if (topicTitle) topicTitle.textContent = topic.title;
    if (topicDesc) topicDesc.textContent = topic.description;
    if (topicTotalQ) topicTotalQ.textContent = `${topic.questions.length} Questions`;

    updateTopicProgress();
    renderQuestions();
}

function getActiveQuestions() {
    if (activeExamQuestions) {
        return activeExamQuestions;
    }
    const topic = topicData[currentTopicKey];
    return topic ? topic.questions : [];
}

function updateTopicProgress() {
    const questions = getActiveQuestions();
    if (!questions) return;

    const total = questions.length;
    let answered = 0;

    questions.forEach(q => {
        if (userAnswers[q.id] !== undefined && userAnswers[q.id].selected !== undefined) answered++;
    });

    const percent = total > 0 ? Math.round((answered / total) * 100) : 0;
    const progressText = document.getElementById("topic-progress-text");
    const progressBar = document.getElementById("topic-progress-bar");

    if (progressText) progressText.textContent = `${percent}%`;
    if (progressBar) progressBar.style.width = `${percent}%`;
}

function updateGlobalStats() {
    let totalQuestions = 0;
    let totalAnswered = 0;
    let totalCorrect = 0;

    Object.keys(topicData).forEach(key => {
        const topic = topicData[key];
        topic.questions.forEach(q => {
            totalQuestions++;
            if (userAnswers[q.id] !== undefined && userAnswers[q.id].selected !== undefined) {
                totalAnswered++;
                if (userAnswers[q.id].selected === q.answer) {
                    totalCorrect++;
                }
            }
        });
    });

    const globalAnsweredEl = document.getElementById("global-total-answered");
    const globalAccuracyEl = document.getElementById("global-accuracy");

    if (globalAnsweredEl) globalAnsweredEl.textContent = `${totalAnswered} / ${totalQuestions}`;
    const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
    if (globalAccuracyEl) globalAccuracyEl.textContent = `${accuracy}%`;
}

function renderQuestions() {
    const container = document.getElementById("questions-list");
    if (!container) return;

    const questions = getActiveQuestions();
    container.innerHTML = "";

    if (!questions || questions.length === 0) {
        container.innerHTML = `
            <div class="bg-white p-12 text-center rounded-2xl border border-slate-200">
                <i class="fa-solid fa-folder-open text-4xl text-slate-300 mb-3"></i>
                <h3 class="text-slate-600 font-medium">No questions loaded for this paper.</h3>
            </div>
        `;
        return;
    }

    let questionIndices = questions.map((_, i) => i);
    if (!activeExamQuestions && topicShuffledOrder[currentTopicKey]) {
        questionIndices = topicShuffledOrder[currentTopicKey];
    }

    let renderedCount = 0;

    questionIndices.forEach(qIdx => {
        const q = questions[qIdx];
        const state = userAnswers[q.id];

        if (activeFilter === "unanswered" && state && state.selected !== undefined) return;
        if (activeFilter === "incorrect" && (!state || !state.submitted || state.selected === q.answer)) return;

        renderedCount++;

        const card = document.createElement("div");
        card.className = "bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition hover:border-slate-300 mb-6 last:mb-0";

        // In Exam Mode, keep options and answers unrevealed until graded
        const isSubmitted = activeExamQuestions ? isExamGraded : (state && state.submitted);
        const selectedOpt = state ? state.selected : undefined;

        let imageHTML = "";
        if (q.image) {
            imageHTML = `
                <div class="my-4 flex justify-center">
                    <img src="${q.image}" alt="Question Diagram" class="max-h-72 w-auto object-contain rounded-xl border border-slate-200 bg-slate-50 p-2 shadow-sm" />
                </div>
            `;
        }

        let optionsHTML = "";
        q.options.forEach((optText, optIdx) => {
            let optionStyles = "border-slate-200 hover:bg-slate-50 text-slate-700";
            let badgeHTML = `<span class="w-6 h-6 rounded-lg border border-slate-300 text-slate-500 flex items-center justify-center text-xs font-semibold mr-3 group-hover:border-indigo-500 group-hover:text-indigo-600">${String.fromCharCode(65 + optIdx)}</span>`;

            if (selectedOpt === optIdx) {
                optionStyles = "border-indigo-600 bg-indigo-50/50 text-indigo-900 font-medium";
                badgeHTML = `<span class="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-semibold mr-3">${String.fromCharCode(65 + optIdx)}</span>`;
            }

            if (isSubmitted) {
                if (optIdx === q.answer) {
                    optionStyles = "border-emerald-500 bg-emerald-50 text-emerald-900 font-medium";
                    badgeHTML = `<span class="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs font-semibold mr-3"><i class="fa-solid fa-check"></i></span>`;
                } else if (selectedOpt === optIdx && selectedOpt !== q.answer) {
                    optionStyles = "border-rose-400 bg-rose-50 text-rose-900";
                    badgeHTML = `<span class="w-6 h-6 rounded-lg bg-rose-500 text-white flex items-center justify-center text-xs font-semibold mr-3"><i class="fa-solid fa-xmark"></i></span>`;
                } else {
                    optionStyles = "border-slate-100 opacity-60 text-slate-500";
                }
            }

            optionsHTML += `
                <button 
                    onclick="selectOption('${q.id}', ${optIdx})"
                    ${isSubmitted ? 'disabled' : ''}
                    class="w-full text-left p-3.5 rounded-xl border ${optionStyles} transition flex items-center group cursor-pointer mb-2.5 last:mb-0"
                >
                    ${badgeHTML}
                    <span class="text-sm flex-1">${optText}</span>
                </button>
            `;
        });

        let feedbackBanner = "";
        if (isSubmitted) {
            const isCorrect = selectedOpt === q.answer;
            feedbackBanner = `
                <div class="mt-4 p-4 rounded-xl text-sm ${isCorrect ? 'bg-emerald-50 border border-emerald-200 text-emerald-900' : 'bg-rose-50 border border-rose-200 text-rose-900'}">
                    <div class="font-semibold flex items-center space-x-1.5 mb-1">
                        <i class="fa-solid ${isCorrect ? 'fa-circle-check text-emerald-600' : 'fa-circle-xmark text-rose-600'}"></i>
                        <span>${isCorrect ? 'Correct!' : 'Incorrect'}</span>
                    </div>
                    <p class="text-xs leading-relaxed text-slate-700 mt-1">${q.explanation || 'No detailed explanation provided for this question.'}</p>
                </div>
            `;
        }

        card.innerHTML = `
            <div class="p-5 sm:p-6">
                <div class="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span class="font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">Q${qIdx + 1}</span>
                    <span class="text-slate-400"><i class="fa-solid fa-bookmark mr-1"></i>${q.source || 'Exam Question'}</span>
                </div>
                <h3 class="text-slate-900 font-semibold text-base sm:text-lg mb-4 leading-snug">${q.question}</h3>
                
                ${imageHTML}

                <div class="space-y-2">
                    ${optionsHTML}
                </div>
                ${feedbackBanner}
                
                ${!activeExamQuestions ? `
                    <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end">
                        ${!isSubmitted ? `
                            <button onclick="gradeSingleQuestion('${q.id}')" ${selectedOpt === undefined ? 'disabled' : ''} class="text-xs font-semibold px-3 py-1.5 rounded-lg ${selectedOpt === undefined ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-slate-800 hover:bg-slate-900 text-white'} transition">
                                Check Answer
                            </button>
                        ` : `
                            <button onclick="resetSingleQuestion('${q.id}')" class="text-xs font-medium text-slate-500 hover:text-indigo-600 transition">
                                <i class="fa-solid fa-rotate-right mr-1"></i> Retry Question
                            </button>
                        `}
                    </div>
                ` : ''}
            </div>
        `;

        container.appendChild(card);
    });

    if (renderedCount === 0) {
        container.innerHTML = `
            <div class="bg-white p-12 text-center rounded-2xl border border-slate-200">
                <i class="fa-solid fa-filter-circle-xmark text-4xl text-slate-300 mb-3"></i>
                <h3 class="text-slate-600 font-medium">No questions match the selected filter.</h3>
            </div>
        `;
    }
}

function selectOption(qId, optIdx) {
    if (!userAnswers[qId]) {
        userAnswers[qId] = {};
    }
    userAnswers[qId].selected = optIdx;

    const scrollPos = window.scrollY;
    if (!activeExamQuestions) {
        saveProgress();
    }
    renderQuestions();
    updateTopicProgress();
    updateGlobalStats();
    renderTopicSidebar();
    window.scrollTo({ top: scrollPos });
}

function gradeSingleQuestion(qId) {
    if (userAnswers[qId] && userAnswers[qId].selected !== undefined) {
        userAnswers[qId].submitted = true;
        const scrollPos = window.scrollY;
        saveProgress();
        renderQuestions();
        updateGlobalStats();
        window.scrollTo({ top: scrollPos });
    }
}

function resetSingleQuestion(qId) {
    delete userAnswers[qId];
    const scrollPos = window.scrollY;
    saveProgress();
    renderQuestions();
    updateTopicProgress();
    updateGlobalStats();
    renderTopicSidebar();
    window.scrollTo({ top: scrollPos });
}

function saveProgress() {
    localStorage.setItem("mcq_user_answers", JSON.stringify(userAnswers));
}

/**
 * Global Bridge: Called by ExamEngine when clicking "Start Exam Paper"
 */
window.renderExamToUI = function(examQuestions) {
    if (!examQuestions || examQuestions.length === 0) return;

    activeExamQuestions = examQuestions;
    isExamGraded = false;

    // Reset user answers for all questions in this exam paper so they display blank
    examQuestions.forEach(q => {
        delete userAnswers[q.id];
    });

    // 1. Hide Sidebar for Full Workspace Mode
    const sidebar = document.getElementById("sidebar");
    const mobileBtn = document.getElementById("mobile-menu-btn");
    if (sidebar) sidebar.classList.add("hidden");
    if (mobileBtn) mobileBtn.classList.add("hidden");

    // 2. Expand Main Container
    const mainContainer = document.querySelector("main");
    if (mainContainer) mainContainer.classList.remove("md:ml-64");

    // 3. Show & Populate Sticky Timer / Action Bar with Exit Exam Button
    const timerBar = document.getElementById('exam-timer-bar');
    if (timerBar) {
        timerBar.classList.remove('hidden');
        timerBar.innerHTML = `
            <div class="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <span class="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md">
                        <i class="fa-solid fa-stopwatch mr-1"></i> Exam Mode
                    </span>
                    <span id="exam-timer-display" class="text-lg font-mono font-bold text-slate-800">60:00</span>
                </div>
                
                <div class="flex items-center space-x-2">
                    <button onclick="exitExamMode()" class="text-xs font-semibold px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer">
                        <i class="fa-solid fa-arrow-left mr-1.5"></i> Exit Exam
                    </button>
                    <button onclick="handleSubmitPaper()" class="text-xs font-semibold px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition cursor-pointer">
                        Submit Exam
                    </button>
                </div>
            </div>
        `;
    }

    // 4. Update Header Details
    const topicBadge = document.getElementById("current-topic-badge");
    const topicTitle = document.getElementById("current-topic-title");
    const topicDesc = document.getElementById("current-topic-desc");
    const topicTotalQ = document.getElementById("current-topic-total-q");

    if (topicBadge) topicBadge.textContent = `EXAM MODE`;
    if (topicTitle) topicTitle.textContent = `40 MCQ Timed Mock Exam`;
    if (topicDesc) topicDesc.textContent = `Timed paper active. Select your answers and click "Submit Exam" when finished.`;
    if (topicTotalQ) topicTotalQ.textContent = `${activeExamQuestions.length} Questions`;

    updateTopicProgress();
    renderQuestions();
};
