// Ensure window.topicData exists
window.topicData = window.topicData || {};

// Add Separation Techniques topic
window.topicData['separation_techniques'] = {
  title: 'Separation Techniques & Purity',
  description: 'Questions covering chromatography, distillation, separating funnels, filtration, and purity testing.',
  questions: [
    {
      id: 'sep_q1',
      source: '[2014 Paper 1, Q1]',
      question: 'A paper chromatogram was prepared using a mixture of substances. After drying, the chromatogram is shown in the diagram.<br><br>Which statement is correct?',
      image: 'https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/separation-techniques-01.png',
      options: [
        'Locating agents are always needed to interpret a chromatogram.',
        'The chromatography paper must have been placed with the solvent below level Z.',
        'There must have been two substances present in the mixture.',
        'The substance at level X has a lower Rf value than the substance at level Y.'
      ],
      answer: 1,
      explanation: 'The baseline (Z) where samples are spotted must be placed above the solvent level so the spots do not dissolve directly into the solvent reservoir.'
    },
    {
      id: 'sep_q2',
      source: '[2014 Paper 1, Q2]',
      question: 'Three separations are listed:<br>1. obtaining water from sodium chloride solution<br>2. obtaining iodine from a mixture of iodine and nickel<br>3. obtaining solid sodium chloride from aqueous sodium chloride<br><br>Which techniques would be involved in these separations?',
      options: [
        '1: distillation, 2: sublimation, 3: evaporation',
        '1: distillation, 2: sublimation, 3: filtration',
        '1: filtration, 2: crystallisation, 3: evaporation',
        '1: sublimation, 2: crystallisation, 3: filtration'
      ],
      answer: 0,
      explanation: 'Distillation recovers pure solvent (water) from a salt solution. Sublimation separates iodine (which sublimes easily) from nickel. Evaporation recovers solid sodium chloride from solution.'
    },
    {
      id: 'sep_q3',
      source: '[2015 Paper 1, Q2]',
      question: 'Which physical processes could be used to separate diesel and water?<br><br>1. distillation<br>2. filtration<br>3. sublimation<br>4. use of a separating funnel',
      image: '',
      options: [
        '1, 2, 3 and 4',
        '1, 2 and 3 only',
        '1 and 2 only',
        '1 and 4 only'
      ],
      answer: 3,
      explanation: 'Diesel and water are immiscible liquids with different boiling points. A separating funnel separates them based on density layers, and fractional distillation separates them based on boiling point differences.'
    },
    {
      id: 'sep_q4',
      source: '[2018 Paper 1, Q2]',
      question: 'The diagram shows the results of a chromatography experiment to identify the dyes present in a sample of ink.<br><br>Which two dyes make up the ink sample?',
      image: 'https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/separation-techniques-04.png',
      options: [
        '1 and 2',
        '1 and 5',
        '2 and 4',
        '3 and 4'
      ],
      answer: 2,
      explanation: 'Comparing vertical spot alignments on the chromatogram shows that the spots in the ink sample match the heights of spots in dyes 2 and 4.'
    },
    {
      id: 'sep_q5',
      source: '[2019 Paper 1, Q3]',
      question: 'Liquids X and Y are immiscible.<br>• X has a higher boiling point than Y.<br>• X has a higher density than Y.<br>• X and Y can be separated from each other both by fractional distillation and by use of a separating funnel.<br><br>Which row correctly gives the first liquid to be collected by fractional distillation and the lower liquid in the separating funnel?',
      image: 'https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/separation-techniques-05.png',
      options: [
        'First liquid collected by fractional distillation: X | Lower liquid in separating funnel: X',
        'First liquid collected by fractional distillation: X | Lower liquid in separating funnel: Y',
        'First liquid collected by fractional distillation: Y | Lower liquid in separating funnel: X',
        'First liquid collected by fractional distillation: Y | Lower liquid in separating funnel: Y'
      ],
      answer: 2,
      explanation: 'In fractional distillation, the liquid with the lower boiling point (Y) distils off and is collected first. In a separating funnel, the denser liquid (X) settles at the bottom.'
    },
    {
      id: 'sep_q6',
      source: '[2020 Paper 1, Q4]',
      question: 'A colourless substance is made in an experiment.<br><br>Which are possible methods to determine if this substance is pure?<br>1. Measure the melting point of the substance and compare with the reference value.<br>2. Measure the boiling point of the substance and compare with the reference value.<br>3. Test the substance using paper chromatography and a locating agent.',
      image: '',
      options: [
        '1, 2 and 3',
        '1 and 2 only',
        '2 and 3 only',
        '2 only'
      ],
      answer: 0,
      explanation: 'A pure substance has a sharp, fixed melting point and boiling point matching standard reference values. Paper chromatography (with a locating agent for colourless spots) will produce a single spot if the substance is pure.'
    },
    {
      id: 'sep_q7',
      source: '[2021 Paper 1, Q2]',
      question: 'The boiling points of some of the substances found in air are given in the table.<br>Air is cooled to -250 °C so that some of the substances in it condense.<br><br>As the temperature is raised, which substance will turn into a gas first?',
      image: 'https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/separation-techniques-07.png',
      options: [
        'argon',
        'neon',
        'nitrogen',
        'oxygen'
      ],
      answer: 1,
      explanation: 'The substance with the lowest boiling point (neon at -246 °C) boils and converts back into a gas first as temperature rises from -250 °C.'
    },
    {
      id: 'sep_q8',
      source: '[2022 Paper 1, Q2]',
      question: 'X, Y and Z are all mixtures of alcohols. A paper chromatogram is obtained for samples of X, Y and Z.<br><br>Which row is correct?',
      image: 'https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/separation-techniques-08.png',
      options: [
        'Statement 1: Z contains at least four alcohols. | Statement 2: X, Y and Z could contain the same alcohol.',
        'Statement 1: Z contains at least four alcohols. | Statement 2: X, Y and Z could not contain the same alcohol.',
        'Statement 1: Z contains no more than four alcohols. | Statement 2: X, Y and Z could contain the same alcohol.',
        'Statement 1: Z contains no more than four alcohols. | Statement 2: X, Y and Z could not contain the same alcohol.'
      ],
      answer: 0,
      explanation: 'Four distinct spots on sample Z mean it contains at least 4 components (some spots may overlap). Horizontal spot alignment across X, Y, and Z shows that all three mixtures share a common alcohol component.'
    }
  ]
};
