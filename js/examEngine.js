/**
 * Exam Engine - Handles Exam Generation & Timer Logic
 */
window.ExamEngine = (function () {
    let timerInterval = null;
    let totalExamDuration = 3600; // 60 mins in seconds
    let timeRemaining = 3600;
    let isExamActive = false;
    let examPaper = [];

    /**
     * Gets available topics for the checkbox configuration drawer
     */
    function getAvailableTopics() {
        const topicData = window.topicData || {};
        return Object.keys(topicData).map(key => ({
            key: key,
            title: topicData[key].title ? topicData[key].title.replace(/^Topic \d+:\s*/, '') : key
        }));
    }

    /**
     * Generates a randomized exam paper across selected topic keys
     */
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

        // Fisher-Yates Shuffle
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

    /**
     * FIXED: Can take userAnswers AND optional activeQuestions fallback array
     */
    function submitExam(userAnswers = {}, fallbackQuestions = []) {
        stopTimer();

        const secondsUsed = totalExamDuration - timeRemaining;
        let score = 0;
        
        // Use internal examPaper, or fallback to passed questions if internal paper is empty
        const activePaper = (examPaper && examPaper.length > 0) ? examPaper : fallbackQuestions;
        const total = activePaper.length;

        activePaper.forEach(q => {
            const userEntry = userAnswers[q.id];
            const selected = userEntry ? userEntry.selected : undefined;
            if (selected !== undefined && Number(selected) === Number(q.answer)) {
                score++;
            }
        });

        const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

        return {
            score: score,
            total: total,
            percentage: percentage,
            secondsUsed: secondsUsed,
            timeSpentFormatted: formatTimeSpent(secondsUsed)
        };
    }

    function formatTime(seconds) {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }

    function formatTimeSpent(seconds) {
        if (isNaN(seconds) || seconds < 0) return "0 sec";
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        if (m === 0) return `${s} sec${s !== 1 ? 's' : ''}`;
        return `${m} min${m !== 1 ? 's' : ''} ${s} sec${s !== 1 ? 's' : ''}`;
    }

    return {
        getAvailableTopics: getAvailableTopics,
        generateExam: generateExam,
        startTimer: startTimer,
        stopTimer: stopTimer,
        submitExam: submitExam,
        isExamRunning: function () { return isExamActive; },
        getExamPaper: function () { return examPaper; }
    };
})();
