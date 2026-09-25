/**
 * Exam Engine - Handles Timed Mock Exam Mode with Score & Time Tracking
 */
window.ExamEngine = (function () {
    let timerInterval = null;
    let totalExamDuration = 3600; // Default 60 mins in seconds
    let timeRemaining = 3600;
    let isExamActive = false;
    let examPaper = [];
    let userAnswers = {}; // Stores user answers: { questionId: selectedIndex }

    function getAvailableTopics() {
        const topicData = window.topicData || {};
        return Object.keys(topicData).map(key => ({
            key: key,
            title: topicData[key].title || key
        }));
    }

    function generateExam(selectedTopicKeys = [], count = 40) {
        const topicData = window.topicData || {};
        let pool = [];

        const keysToUse = selectedTopicKeys.length > 0 ? selectedTopicKeys : Object.keys(topicData);

        keysToUse.forEach(key => {
            const topic = topicData[key];
            if (topic && Array.isArray(topic.questions)) {
                topic.questions.forEach((q, idx) => {
                    pool.push({
                        ...q,
                        topicKey: key,
                        uniqueId: `exam_${key}_${q.id || idx}`
                    });
                });
            }
        });

        if (pool.length === 0) return [];

        // Shuffle pool
        for (let i = pool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pool[i], pool[j]] = [pool[j], pool[i]];
        }

        examPaper = pool.slice(0, Math.min(count, pool.length));
        userAnswers = {}; // Reset answers
        isExamActive = true;
        return examPaper;
    }

    function recordAnswer(questionId, optionIndex) {
        userAnswers[questionId] = optionIndex;
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

    /**
     * Grades the exam and calculates time spent
     */
    function submitExam() {
        stopTimer();

        const secondsUsed = totalExamDuration - timeRemaining;
        let score = 0;
        const total = examPaper.length;

        examPaper.forEach(q => {
            const selected = userAnswers[q.uniqueId];
            if (selected !== undefined && selected === q.correctAnswer) {
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
            timeSpentFormatted: timeSpentFormatted,
            userAnswers: userAnswers,
            examPaper: examPaper
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
        getAvailableTopics: getAvailableTopics,
        generateExam: generateExam,
        recordAnswer: recordAnswer,
        startTimer: startTimer,
        stopTimer: stopTimer,
        submitExam: submitExam,
        isExamRunning: function () { return isExamActive; }
    };
})();
