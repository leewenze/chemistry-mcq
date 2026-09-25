/**
 * Exam Engine - Manages the 40 MCQ Timed Mock Exam Mode
 */
window.ExamEngine = (function () {
    let timerInterval = null;
    let timeRemaining = 3600; // 60 minutes in seconds

    /**
     * Collects 40 questions across all loaded topics and starts Exam Mode.
     */
    function startExam() {
        const topicData = window.topicData || {};
        const allQuestions = [];

        // Pool all questions across all loaded topics
        Object.keys(topicData).forEach(topicKey => {
            const topic = topicData[topicKey];
            if (topic && topic.questions && Array.isArray(topic.questions)) {
                topic.questions.forEach((q, idx) => {
                    allQuestions.push({
                        ...q,
                        // Ensure unique ID for local storage tracking
                        id: `exam_${topicKey}_${q.id || idx}` 
                    });
                });
            }
        });

        if (allQuestions.length === 0) {
            alert("No questions found! Please check that topicData is loaded.");
            return;
        }

        // Shuffle all collected questions
        for (let i = allQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
        }

        // Select up to 40 MCQs
        const examPaper = allQuestions.slice(0, Math.min(40, allQuestions.length));

        // Start 60-Minute Countdown Timer
        startTimer(3600);

        // Render the questions in the app
        if (typeof window.renderExamToUI === "function") {
            window.renderExamToUI(examPaper);
        } else {
            console.error("renderExamToUI function is missing in app.js.");
        }
    }

    function startTimer(durationInSeconds) {
        stopTimer(); // Clear any running timer
        timeRemaining = durationInSeconds;

        let timerBar = document.getElementById("exam-timer-bar");
        let timerDisplay = document.getElementById("exam-timer-display");

        // Create timer banner if missing in DOM
        if (!timerBar) {
            timerBar = document.createElement("div");
            timerBar.id = "exam-timer-bar";
            timerBar.className = "sticky top-0 z-30 bg-slate-900 text-white px-4 py-3 shadow-md flex items-center justify-between";
            timerBar.innerHTML = `
                <div class="flex items-center space-x-2">
                    <span class="inline-block w-2.5 h-2.5 bg-rose-500 rounded-full animate-pulse"></span>
                    <span class="font-semibold text-sm">Exam Mode Active (40 MCQs)</span>
                </div>
                <div class="font-mono text-sm font-bold bg-slate-800 px-3 py-1 rounded-lg border border-slate-700" id="exam-timer-display">
                    60:00
                </div>
            `;
            document.body.prepend(timerBar);
            timerDisplay = document.getElementById("exam-timer-display");
        } else {
            timerBar.classList.remove("hidden");
        }

        updateTimerUI(timerDisplay);

        timerInterval = setInterval(() => {
            timeRemaining--;
            updateTimerUI(timerDisplay);

            if (timeRemaining <= 0) {
                stopTimer();
                alert("Time's up! Submitting your exam paper now.");
                const submitBtn = document.getElementById("submit-topic-btn");
                if (submitBtn) submitBtn.click();
            }
        }, 1000);
    }

    function updateTimerUI(displayEl) {
        if (!displayEl) return;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        displayEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    function stopTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }

    return {
        start: startExam,
        stopTimer: stopTimer
    };
})();
