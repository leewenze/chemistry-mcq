// Ensure window.topicData exists
window.topicData = window.topicData || {};

// Add Laboratory Apparatus, Purity & Separation Techniques topic
window.topicData['experimental_chemistry'] = {
  title: 'Experimental Chemistry & Measurement of Gases',
  description: 'Questions covering apparatus selection, gas collection methods, and rate measurements.',
  questions: [
    {
      id: 't2_q1',
      source: '[2015 Paper 1, Q1]',
      question: 'Magnesium ribbon was reacted with excess dilute hydrochloric acid. The graph shows the volume of hydrogen gas evolved at 20 second intervals until the reaction had finished. Which piece of apparatus would be suitable for measuring the volume of hydrogen gas evolved?',
      // Fixed: Raw URL + Property renamed to 'image'
      image: 'https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/experimental-chemistry-01.png',
      options: [
        '50 cm³ burette',
        '100 cm³ gas syringe',
        '50 cm³ graduated tube',
        '10 cm³ measuring cylinder'
      ],
      answer: 1,
      explanation: 'A gas syringe is designed specifically to collect and accurately measure gas volumes released during a reaction.'
    },
    {
      id: 't2_q2',
      source: '[2016 Paper 1, Q1]',
      question: 'The table gives the density and solubility in water of four gases. Two methods of collection of gases are by upward delivery and by displacement of water. Which row correctly shows whether each of these methods could or could not be used to collect each gas?',
      image: 'PASTE_YOUR_RAW_IMAGE_URL_HERE',
      options: [
        'gas 1 | upward delivery: no | displacement of water: no',
        'gas 2 | upward delivery: no | displacement of water: yes',
        'gas 3 | upward delivery: yes | displacement of water: yes',
        'gas 4 | upward delivery: yes | displacement of water: yes'
      ],
      answer: 1,
      explanation: 'Upward delivery is used for gases less dense than air. Displacement of water requires the gas to be insoluble or sparingly soluble in water.'
    },
    {
      id: 't2_q3',
      source: '[2017 Paper 1, Q1]',
      question: 'A student is provided with two drying agents: concentrated sulfuric acid and calcium oxide. Which method should he use to collect a sample of dry ammonia? [Mr: NH3, 17]',
      image: 'PASTE_YOUR_RAW_IMAGE_URL_HERE',
      options: [
        'Concentrated sulfuric acid drying agent with upward delivery',
        'Concentrated sulfuric acid drying agent with downward delivery',
        'Calcium oxide drying agent with downward delivery',
        'Calcium oxide drying agent with upward delivery'
      ],
      answer: 3,
      explanation: 'Ammonia is alkaline, so it reacts with sulfuric acid and must be dried with calcium oxide instead. Since ammonia is lighter than air (Mr = 17 vs air ~ 29), it is collected by upward delivery.'
    },
    {
      id: 't2_q4',
      source: '[2019 Paper 1, Q1]',
      question: 'A gas turns moist red litmus paper blue, is soluble in water and is less dense than air. Which diagram shows a correct way of drying and collecting the gas?',
      image: 'PASTE_YOUR_RAW_IMAGE_URL_HERE',
      options: [
        'Calcium oxide drying tube and upward delivery',
        'Concentrated sulfuric acid wash bottle and downward delivery',
        'Calcium oxide drying tube and displacement of water',
        'Concentrated sulfuric acid wash bottle and upward delivery'
      ],
      answer: 0,
      explanation: 'The gas is basic (ammonia). It reacts with acid, so calcium oxide must be used as the drying agent. Since it is soluble in water and less dense than air, upward delivery (downward displacement of air) must be used.'
    },
    {
      id: 't2_q5',
      source: '[2020 Paper 1, Q1]',
      question: 'When an excess of dilute acid is added to a known quantity of sodium carbonate, the temperature of the mixture changes. An experiment is designed to measure the temperature change when all the carbonate reacts with the acid. In addition to a thermometer and measuring cylinder, the following pieces of apparatus are available:\n1. gas syringe\n2. stopwatch\n3. balance\n4. Styrofoam cup\n\nWhich pieces of apparatus are needed for this experiment?',
      image: '',
      options: [
        '1, 2, 3 and 4',
        '1 and 2 only',
        '2, 3 and 4 only',
        '3 and 4 only'
      ],
      answer: 3,
      explanation: 'To determine temperature change upon complete reaction of a known mass, a balance (to weigh the carbonate) and a Styrofoam cup (to act as an insulated calorimeter) are required.'
    },
    {
      id: 't2_q6',
      source: '[2021 Paper 1, Q1]',
      question: 'A student follows the rate of the reaction when 0.19 g of magnesium reacts with excess acid at room temperature and pressure. What is most suitable for measuring the volume of gas produced at different times during this experiment?',
      image: '',
      options: [
        'a 50 cm³ gas syringe',
        'an inverted 250 cm³ measuring cylinder filled with water',
        'an inverted 50 cm³ burette filled with water',
        'place the apparatus on a balance and measure the loss in mass'
      ],
      answer: 1,
      explanation: '0.19 g of Mg produces roughly 190 cm³ of hydrogen gas at RTP (0.19/24 × 24000 ≈ 190 cm³), which exceeds 50 cm³ capacity. Therefore, an inverted 250 cm³ measuring cylinder filled with water is required.'
    },
    {
      id: 't2_q7',
      source: '[2022 Paper 1, Q1]',
      question: 'A student investigates the rate of reaction between a solid and a liquid. During the reaction, the student measures the volume of gas released. The student is provided with a conical flask, a pipette and a balance. Which additional apparatus is needed?\n1. stopwatch\n2. gas syringe\n3. thermometer',
      image: '',
      options: [
        '1 and 2',
        '1 and 3',
        '1 only',
        '2 only'
      ],
      answer: 0,
      explanation: 'Measuring the rate of gas release requires a gas syringe (to measure volume) and a stopwatch (to track time intervals).'
    }
  ]
};
