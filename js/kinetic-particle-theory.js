// Ensure window.topicData exists
window.topicData = window.topicData || {};

// Add Kinetic Particle Theory topic
window.topicData['kinetic_particle_theory'] = {
  title: 'Kinetic Particle Theory & Diffusion',
  description: 'Questions covering States of Matter, Kinetic Particle Theory, and Rates of Diffusion.',
  questions: [
    {
      id: 'kpt_q1',
      source: '[2014 Paper 1, Q4]',
      question: 'Two gases, P and Q, were separately released in a laboratory on a cold day. The experiment was repeated on a hot day. The time taken for the gases to reach the opposite end of the laboratory was recorded for each experiment.<br><br>The relative molecular mass of gas P was 34 and the relative molecular mass of gas Q was 64.<br><br>Which gas on which day would reach the end of the laboratory in the shortest time?',
      options: [
        'gas: P, day: cold',
        'gas: P, day: hot',
        'gas: Q, day: cold',
        'gas: Q, day: hot'
      ],
      answer: 1,
      explanation: 'Gas P has a lower relative molecular mass (Mr = 34) than Gas Q (Mr = 64), so it diffuses faster. Higher temperature (hot day) gives particles more kinetic energy, increasing diffusion speed and shortening the time taken.'
    },
    {
      id: 'kpt_q2',
      source: '[2016 Paper 1, Q3]',
      question: 'Which row correctly shows the order of the rates of diffusion of the gases ammonia, carbon dioxide and hydrogen bromide?',
      image: 'https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/experimental-chemistry-02.png',
      options: [
        'CO<sub>2</sub>, HBr, NH<sub>3</sub>',
        'HBr, CO<sub>2</sub>, NH<sub>3</sub>',
        'HBr, NH<sub>3</sub>, CO<sub>2</sub>',
        'NH<sub>3</sub>, CO<sub>2</sub>, HBr'
      ],
      answer: 1,
      explanation: 'Rate of diffusion is inversely proportional to molecular mass. Comparing Mr values: HBr (81) > CO2 (44) > NH3 (17). Therefore, HBr diffuses slowest and NH3 diffuses fastest.'
    },
    {
      id: 'kpt_q3',
      source: '[2017 Paper 1, Q3]',
      question: 'The stopper was removed from a bottle containing perfume X and the time taken for the smell to reach the opposite side of the room was noted.<br><br>The experiment was repeated using perfume Y. Perfume Y has a higher relative molecular mass than perfume X.<br><br>Which row gives:<br>• the name of the process by which the perfume spreads around the room,<br>• the identity of the perfume that reaches the opposite side of the room in the shorter time?',

      options: [
        'name of process: diffusion | perfume reaching opposite side of room in shorter time: perfume X',
        'name of process: diffusion | perfume reaching opposite side of room in shorter time: perfume Y',
        'name of process: evaporation | perfume reaching opposite side of room in shorter time: perfume X',
        'name of process: evaporation | perfume reaching opposite side of room in shorter time: perfume Y'
      ],
      answer: 0,
      explanation: 'Particles move randomly from an area of higher concentration to lower concentration by diffusion. Perfume X has a lower relative molecular mass, so it diffuses faster and reaches the end of the room in a shorter time.'
    },
    {
      id: 'kpt_q4',
      source: '[2018 Paper 1, Q1]',
      question: 'Under the same conditions, which gas diffuses at the same rate as nitrogen gas?',
      image: '',
      options: [
        'carbon dioxide',
        'carbon monoxide',
        'neon',
        'sulfur dioxide'
      ],
      answer: 1,
      explanation: 'Gases with the same relative molecular mass (Mr) diffuse at the same rate. Nitrogen (N2) has an Mr of 28 (14 x 2), which equals the Mr of carbon monoxide (CO = 12 + 16 = 28).'
    },
    {
      id: 'kpt_q5',
      source: '[2020 Paper 1, Q5]',
      question: 'The rate of diffusion of two gases is measured at different temperatures but at constant pressure.<br><br>Which would diffuse most quickly?',
      image: '',
      options: [
        'argon at 15 °C',
        'argon at 40 °C',
        'carbon dioxide at 15 °C',
        'carbon dioxide at 40 °C'
      ],
      answer: 1,
      explanation: 'Argon (Ar, Mr = 40) is lighter than Carbon Dioxide (CO2, Mr = 44), so Argon diffuses faster. Higher temperature (40 °C) provides more kinetic energy, making Argon at 40 °C the fastest.'
    },
    {
  id: 'kpt_q6',
  source: '[2021 Paper 1, Q4]',
  question: 'The rate of diffusion of five gases is measured. The gases are CO, CO<sub>2</sub>, C<sub>2</sub>H<sub>4</sub>, C<sub>3</sub>H<sub>8</sub> and N<sub>2</sub>.<br><br>The list gives four pairs of gases:<br>1. CO and C<sub>2</sub>H<sub>4</sub><br>2. CO and N<sub>2</sub><br>3. CO<sub>2</sub> and C<sub>3</sub>H<sub>8</sub><br>4. C<sub>2</sub>H<sub>4</sub> and C<sub>3</sub>H<sub>8</sub><br><br>In which pairs would both gases diffuse at the same rate, under the same conditions of temperature and pressure?',
  image: '',
  options: [
    '1, 2 and 3',
    '1 and 2 only',
    '1 only',
    '3 and 4'
  ],
  answer: 0,
  explanation: 'Gases with equal relative molecular masses (Mr) diffuse at identical rates under identical conditions:<br>• Pair 1: CO (28) and C<sub>2</sub>H<sub>4</sub> (28)<br>• Pair 2: CO (28) and N<sub>2</sub> (28)<br>• Pair 3: CO<sub>2</sub> (44) and C<sub>3</sub>H<sub>8</sub> (44)'
    }
  ]
};
