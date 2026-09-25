/**
 * Exam Engine - Handles Timed Mock Exam Mode with Score & Time Tracking
 */
window.ExamEngine = (function () {
    let timerInterval = null;
    let totalExamDuration = 3600; // 60 mins in seconds
    let timeRemaining = 3600;
    let isExamActive = false;
    let examPaper = [];

    // Automatically bind modal controls once DOM loads
    document.addEventListener("DOMContentLoaded", () => {
        setupExamModal();
    });

    function setupExamModal() {
        const startExamBtn = document.getElementById("start-exam-btn");
        const examModal = document.getElementById("exam-setup-modal");
        const openExamModalBtn = document.getElementById("open-exam-modal-btn") || document.getElementById("exam-mode-btn");

        // Show modal when Exam Mode button is clicked
        if (openExamModalBtn && examModal) {
            openExamModalBtn.addEventListener("click", () => {
                examModal.classList.remove("hidden");
                examModal.classList.add("flex");
            });
        }

        // Handle "Start Exam" action
        if (startExamBtn) {
            startExamBtn.addEventListener("click", () => {
                startNewExamSession();
            });
        }
    }

    function startNewExamSession() {
        // Collect checked topic checkboxes if present, or use all topics
        const checkedBoxes = document.querySelectorAll('.topic-select-checkbox:checked');
        let selectedKeys = [];
        if (checkedBoxes.length > 0) {
            selectedKeys = Array.from(checkedBoxes).map(cb => cb.value);
        }

        // Generate paper
        const paper = generateExam(selectedKeys, 40);

        if (!paper || paper.length === 0) {
            alert("No questions found to generate an exam paper.");
            return;
        }

        // Hide setup modal if visible
        const examModal = document.getElementById("exam-setup-modal");
        if (examModal) {
            examModal.classList.add("hidden");
            examModal.classList.remove("flex");
        }

        // Show sticky top timer bar
        const timerBar = document.getElementById('exam-timer-bar');
        const timerDisplay = document.getElementById('exam-timer-display');
        if (timerBar) timerBar.classList.remove('hidden');

        // Start 60-minute countdown
        startTimer(
            (timeStr) => {
                if (timerDisplay) timerDisplay.textContent = timeStr;
            },
            () => {
                alert("Time's up! Submitting your exam automatically.");
                if (window.handleSubmitPaper) window.handleSubmitPaper();
            },
            60
        );

        // Bridge: Call app.js to render exam questions onto screen
        if (typeof window.renderExamToUI === "function") {
            window.renderExamToUI(paper);
        } else {
            console.error("renderExamToUI is not defined in app.js!");
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function generateExam(selectedTopicKeys = [], count = 40) {
        const topicData = window.topicData || {};
        let pool = [];

        const keysToUse = (selectedTopicKeys && selectedTopicKeys.length > 0) 
            ? selectedTopicKeys 
            : Object.keys(topicData);

        keysToUse.forEach(key => {
            const topic = topicData[key];
            if (topic && Array.isArray(topic.questions)) {
                topic.questions.forEach((q, idx) => {
                    pool.push({
                        ...q,
                        topicKey: key,
                        id: q.id || `exam_${key}_${idx}`
                    });
                });
            }
        });

        if (pool.length === 0) return [];

        // Fisher-Yates Randomization Shuffle
        for (let i = pool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pool[i], pool[j]] = [pool[j], pool[i]];
        }

        examPaper = pool.slice(0, Math.min(count, pool.length));
        isExamActive = true;
        return examPaper;
    }

    function startTimer(onTick, onTimeUp, minutes = 60) {
        stopTimer();
        totalExamDuration = minutes * 60;
        timeRemaining = totalExamDuration;
        isExamActive = true;

        if (onTick) onTick(formatTime(timeRemaining), timeRemaining);

        timerInterval = setInterval(() => {
            timeRemaining--;
            if (onTick) onTick(formatTime(timeRemaining), timeRemaining);

            if (timeRemaining <= 0) {
                stopTimer();
                if (onTimeUp) onTimeUp();
            }
        }, 1000);
    }

    function stopTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        isExamActive = false;
    }

    function submitExam(userAnswers = {}) {
        stopTimer();

        const secondsUsed = totalExamDuration - timeRemaining;
        let score = 0;
        const total = examPaper.length;

        examPaper.forEach(q => {
            const userEntry = userAnswers[q.id];
            const selected = userEntry ? userEntry.selected : undefined;
            if (selected !== undefined && selected === q.answer) {
                score++;
            }
        });

        const timeSpentFormatted = formatTimeSpent(secondsUsed);
        const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

        return {
            score: score,
            total: total,
            percentage: percentage,
            secondsUsed: secondsUsed,
            timeSpentFormatted: timeSpentFormatted
        };
    }

    function formatTime(seconds) {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }

    function formatTimeSpent(seconds) {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        if (m === 0) return `${s} second${s !== 1 ? 's' : ''}`;
        return `${m} min${m !== 1 ? 's' : ''} ${s} sec${s !== 1 ? 's' : ''}`;
    }

    return {
        generateExam: generateExam,
        startNewExamSession: startNewExamSession,
        startTimer: startTimer,
        stopTimer: stopTimer,
        submitExam: submitExam,
        isExamRunning: function () { return isExamActive; }
    };
})();
