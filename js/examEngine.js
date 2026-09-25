/**
 * Advanced Exam Engine Utility with Topic Selection & Sticky Timer
 */
const ExamEngine = {
  activeExam: [],
  timerInterval: null,
  timeRemaining: 60 * 60, // 60 minutes in seconds

  /**
   * Retrieves available topics loaded in window.topicData.
   * @returns {Array} List of objects with key and title.
   */
  getAvailableTopics() {
    if (!window.topicData) return [];
    return Object.keys(window.topicData).map(key => ({
      key: key,
      title: window.topicData[key].title || key
    }));
  },

  /**
   * Generates an exam paper guaranteed to include at least 1 question per selected topic.
   * @param {Array<string>} selectedTopicKeys - Keys of selected topics (if empty/null, selects ALL)
   * @param {number} totalQuestions - Target paper size (default: 40)
   * @returns {Array} List of indexed exam questions
   */
  generateExam(selectedTopicKeys = [], totalQuestions = 40) {
    this.stopTimer();

    if (!window.topicData || Object.keys(window.topicData).length === 0) {
      console.error('ExamEngine: No topics found in window.topicData');
      return [];
    }

    // Default to ALL topics if none specified or array is empty
    let topicsToUse = selectedTopicKeys;
    if (!topicsToUse || topicsToUse.length === 0) {
      topicsToUse = Object.keys(window.topicData);
    }

    const mandatoryQuestions = [];
    const poolRemaining = [];

    // 1. Separate questions: ensure at least 1 per selected topic
    topicsToUse.forEach(topicKey => {
      const topic = window.topicData[topicKey];
      if (topic && topic.questions && topic.questions.length > 0) {
        // Clone questions and attach topic metadata
        const formatted = topic.questions.map(q => ({
          ...q,
          parentTopicKey: topicKey,
          parentTopicTitle: topic.title
        }));

        // Shuffle questions within this topic
        this.shuffleArray(formatted);

        // Take the first question as mandatory for this topic
        mandatoryQuestions.push(formatted[0]);

        // Put the rest into the general pool
        for (let i = 1; i < formatted.length; i++) {
          poolRemaining.push(formatted[i]);
        }
      }
    });

    // 2. Shuffle remaining pool and gather needed extra questions
    this.shuffleArray(poolRemaining);
    const slotsNeeded = Math.max(0, totalQuestions - mandatoryQuestions.length);
    const extraQuestions = poolRemaining.slice(0, slotsNeeded);

    // 3. Combine mandatory + extra, then shuffle the full exam order
    const finalSelection = [...mandatoryQuestions, ...extraQuestions];
    this.shuffleArray(finalSelection);

    // 4. Assign exam numbers 1 to N
    this.activeExam = finalSelection.map((q, index) => ({
      ...q,
      examNumber: index + 1
    }));

    return this.activeExam;
  },

  /**
   * Fisher-Yates array shuffle helper
   */
  shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  },

  /**
   * Starts the 60-minute countdown timer.
   */
  startTimer(onTick, onTimeUp, minutes = 60) {
    this.stopTimer();
    this.timeRemaining = minutes * 60;

    if (typeof onTick === 'function') {
      onTick(this.getFormattedTime(), this.timeRemaining);
    }

    this.timerInterval = setInterval(() => {
      this.timeRemaining--;

      if (typeof onTick === 'function') {
        onTick(this.getFormattedTime(), this.timeRemaining);
      }

      if (this.timeRemaining <= 0) {
        this.stopTimer();
        if (typeof onTimeUp === 'function') {
          onTimeUp();
        }
      }
    }, 1000);
  },

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  },

  getFormattedTime() {
    const mins = Math.floor(this.timeRemaining / 60);
    const secs = this.timeRemaining % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  },

  /**
   * Grades responses and calculates final score
   */
  gradeExam(userAnswers = {}) {
    this.stopTimer();

    let score = 0;
    const total = this.activeExam.length;

    const results = this.activeExam.map(q => {
      const selectedIndex = userAnswers[q.examNumber];
      const isCorrect = selectedIndex !== undefined && Number(selectedIndex) === q.answer;

      if (isCorrect) score++;

      return {
        examNumber: q.examNumber,
        question: q.question,
        parentTopic: q.parentTopicTitle,
        source: q.source,
        userSelection: selectedIndex !== undefined ? Number(selectedIndex) : null,
        correctAnswer: q.answer,
        isCorrect: isCorrect,
        explanation: q.explanation
      };
    });

    return {
      score,
      total,
      percentage: total > 0 ? parseFloat(((score / total) * 100).toFixed(1)) : 0,
      results
    };
  }
};
