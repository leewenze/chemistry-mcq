// Access the topics loaded from external files
const topicData = window.topicData || {};

// App State
let currentTopicKey = Object.keys(topicData)[0] || "";
let activeFilter = "all"; // "all", "incorrect", "unanswered"
let userAnswers = JSON.parse(localStorage.getItem("mcq_user_answers") || "{}");
let topicShuffledOrder = {}; // Stores randomized question orders per topic
let activeExamQuestions = null; // Holds ExamEngine paper when running a timed exam

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
        sidebar.classList.toggle("-translate-x-full");
        overlay.classList.toggle("hidden");
    };

    if (mobileBtn && sidebar && overlay) {
        mobileBtn.addEventListener("click", toggleMobileMenu);
        overlay.addEventListener("click", toggleMobileMenu);
    }

    const resetBtn = document.getElementById("reset-progress-btn");
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            if (confirm("Are you sure you want to reset all saved answers and progress?")) {
                userAnswers = {};
                localStorage.removeItem("mcq_user_answers");
                activeExamQuestions = null;
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
            e.target.classList.add("bg-indigo-50", "text-indigo-700", "active");
            e.target.classList.remove("text-slate-600");

            if (e.target.id === "filter-all-btn") activeFilter = "all";
            if (e.target.id === "filter-incorrect-btn") activeFilter = "incorrect";
            if (e.target.id === "filter-unanswered-btn") activeFilter = "unanswered";

            renderQuestions();
        });
    });

    const randomizeBtn = document.getElementById("randomize-btn");
    if (randomizeBtn) {
        randomizeBtn.addEventListener("click", () => {
            if (activeExamQuestions) {
                alert("Question shuffling is disabled during active timed mock exams.");
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
            handleSubmitExam();
        });
    }
}

/**
 * Handles Grading for both Active ExamEngine Papers & Standard Topic Practice
 */
function handleSubmitExam() {
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

    // Stop ExamEngine timer if running
    if (window.ExamEngine && typeof ExamEngine.stopTimer === 'function') {
        ExamEngine.stopTimer();
    }

    // Mark all answered (and unanswered) items as submitted to trigger explanation card expansion
    questions.forEach(q => {
        if (!userAnswers[q.id]) {
            userAnswers[q.id] = { selected: undefined };
        }
        userAnswers[q.id].submitted = true;
    });

    saveProgress();
    renderQuestions();
    updateGlobalStats();
    updateTopicProgress();
    renderTopicSidebar();

    // Scroll smoothly to top of paper to view score and feedback
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    activeExamQuestions = null; // Exit exam mode if active
    currentTopicKey = key;
    renderTopicSidebar();

    const topic = topicData[key];
    if (!topic) return;

    const topicBadge = document.getElementById("current-topic-badge");
    const topicTitle = document.getElementById("current-topic-title");
    const topicDesc = document.getElementById("current-topic-desc");
    const topicTotalQ = document.getElementById("current-topic-total-q");

    if (topicBadge) topicBadge.textContent = `Topic ${Object.keys(topicData).indexOf(key) + 1}`;
    if (topicTitle) topicTitle.textContent = topic.title;
    if (topicDesc) topicDesc.textContent = topic.description;
    if (topicTotalQ) topicTotalQ.textContent = `${topic.questions.length} Questions`;

    updateTopicProgress();
    renderQuestions();
}

/**
 * Returns active questions based on whether an Exam Engine paper or single topic is selected
 */
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
                <h3 class="text-slate-600 font-medium">No questions available in this selection.</h3>
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

        const isSubmitted = state && state.submitted;
        const selectedOpt = state ? state.selected : undefined;

        // Image Handling
        let imageHTML = "";
        if (q.image) {
            imageHTML = `
                <div class="my-4 flex justify-center">
                    <img src="${q.image}" alt="Question Diagram" class="max-h-72 w-auto object-contain rounded-xl border border-slate-200 bg-slate-50 p-2 shadow-sm" />
                </div>
            `;
        }

        // Options Rendering
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

        // Answer Feedback & Explanation Box
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
    saveProgress();
    renderQuestions();
    updateTopicProgress();
    updateGlobalStats();
    renderTopicSidebar();
}

function gradeSingleQuestion(qId) {
    if (userAnswers[qId] && userAnswers[qId].selected !== undefined) {
        userAnswers[qId].submitted = true;
        saveProgress();
        renderQuestions();
        updateGlobalStats();
    }
}

function resetSingleQuestion(qId) {
    delete userAnswers[qId];
    saveProgress();
    renderQuestions();
    updateTopicProgress();
    updateGlobalStats();
    renderTopicSidebar();
}

function gradeTopic(key) {
    handleSubmitExam();
}

function saveProgress() {
    localStorage.setItem("mcq_user_answers", JSON.stringify(userAnswers));
}

/**
 * Global Bridge: Invoked when ExamEngine generates and launches a timed mock exam paper
 */
window.renderExamToUI = function(examQuestions) {
    activeExamQuestions = examQuestions;

    const topicBadge = document.getElementById("current-topic-badge");
    const topicTitle = document.getElementById("current-topic-title");
    const topicDesc = document.getElementById("current-topic-desc");
    const topicTotalQ = document.getElementById("current-topic-total-q");

    if (topicBadge) topicBadge.textContent = `Mock Exam`;
    if (topicTitle) topicTitle.textContent = `60-Minute Timed Practice Paper`;
    if (topicDesc) topicDesc.textContent = `Full randomized exam generated across all topics. Complete all questions and click submit to grade.`;
    if (topicTotalQ) topicTotalQ.textContent = `${examQuestions.length} Questions`;

    renderTopicSidebar();
    updateTopicProgress();
    renderQuestions();
};
