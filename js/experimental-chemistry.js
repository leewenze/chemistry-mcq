window.topicData = window.topicData || {};

window.topicData['topic_kinetic_theory'] = {
 title: 'Laboratory Apparatus, Purity & Separation Techniques',
  description: 'Apparatus selection, measurement, criteria of purity, filtration, distillation, and chromatography.',
  questions: [
    {
      id: 'lab_q1',
      source: '[2020 Winter Paper 21, Q2]',
      question: 'A mixture of colourless amino acids is separated using chromatography. The solvent used is propanol. The chromatogram is sprayed with a locating agent. Which row describes the purpose of the propanol and the locating agent?',
      options: [
        'purpose of propanol: to make the individual amino acids visible | purpose of locating agent: to prevent the amino acids moving any further',
        'purpose of propanol: to move the amino acids up the chromatography paper | purpose of locating agent: to make the individual amino acids visible',
        'purpose of propanol: to move the amino acids up the chromatography paper | purpose of locating agent: to prevent the amino acids moving any further',
        'purpose of propanol: to prevent the amino acids moving too far up the paper | purpose of locating agent: to make the individual amino acids visible'
      ],
      answer: 1,
      explanation: 'Propanol acts as the mobile phase solvent to carry the amino acids up the paper. A locating agent reacts with colourless substances like amino acids to make them visible.'
    },
    {
      id: 'lab_q2',
      source: '[2020 Winter Paper 21, Q3]',
      question: 'Which piece of apparatus can only measure a single fixed volume?',
      options: [
        '250 cm³ beaker',
        '50 cm³ burette',
        '100 cm³ measuring cylinder',
        '25 cm³ pipette'
      ],
      answer: 3,
      explanation: 'A volumetric pipette is designed to accurately measure one specific, fixed volume (e.g., exactly 25.0 cm³).'
    },
    {
      id: 'lab_q5',
      source: '[2020 Winter Paper 22, Q5]',
      question: 'Different methods of separation rely on substances having different properties. Which property does distillation make use of?',
      options: [
        'boiling point',
        'colour',
        'particle size',
        'solubility in different solvents'
      ],
      answer: 0,
      explanation: 'Distillation separates substances based on differences in their boiling points.'
    },
    {
      id: 'lab_q7',
      source: '[2021 Winter Paper 21, Q2]',
      question: 'A student put exactly 25.00 cm³ of dilute hydrochloric acid into a conical flask. The student added 2.5 g of solid sodium carbonate and measured the change in temperature of the mixture. Which apparatus does the student need to use?',
      options: [
        'balance, measuring cylinder, thermometer',
        'balance, pipette, stopwatch',
        'balance, pipette, thermometer',
        'burette, pipette, thermometer'
      ],
      answer: 2,
      explanation: 'Measuring 2.5 g requires a balance; measuring 25.00 cm³ precisely requires a pipette; measuring temperature change requires a thermometer.'
    },
    {
      id: 'lab_q9',
      source: '[2021 Winter Paper 22, Q2]',
      question: 'A student put exactly 25.00 cm³ of dilute hydrochloric acid into a conical flask. The student added 2.5 g of solid sodium carbonate and measured the change in temperature of the mixture. Which apparatus does the student need to use?',
      options: [
        'balance, measuring cylinder, thermometer',
        'balance, pipette, stopwatch',
        'balance, pipette, thermometer',
        'burette, pipette, thermometer'
      ],
      answer: 2,
      explanation: 'A balance measures the mass (2.5 g), a pipette measures exact liquid volume (25.00 cm³), and a thermometer records temperature change.'
    },
    {
      id: 'lab_q12',
      source: '[2022 Summer Paper 21, Q2]',
      question: 'A student measures the time taken for 2.0 g of magnesium to dissolve in 50 cm³ of dilute sulfuric acid. Which apparatus is essential to complete the experiment?\n1. stop-clock\n2. measuring cylinder\n3. thermometer\n4. balance',
      options: [
        '1, 2 and 4',
        '1 and 2 only',
        '1 and 4 only',
        '2, 3 and 4'
      ],
      answer: 0,
      explanation: 'Measuring mass (2.0 g) requires a balance (4), volume (50 cm³) requires a measuring cylinder (2), and time requires a stop-clock (1).'
    },
    {
      id: 'lab_q15',
      source: '[2023 Summer Paper 21, Q40]',
      question: 'Which chromatogram shows how the Rf value of a substance is calculated?',
      options: [
        'Rf = y / x where y is spot distance from baseline, x is solvent front distance from baseline',
        'Rf = y / x where y is spot distance from paper bottom, x is solvent front distance from paper bottom',
        'Rf = x / y where y is spot distance from baseline, x is solvent front distance from baseline',
        'Rf = x / y where y is total paper height, x is distance from solvent front to spot'
      ],
      answer: 0,
      explanation: 'Rf is always calculated as the distance travelled by the spot from the baseline divided by the distance travelled by the solvent front from the baseline.'
    },
    {
      id: 'lab_q18',
      source: '[2023 Winter Paper 21, Q29]',
      question: 'Which test is used to show that a sample of water is pure?',
      options: [
        'Evaporate the water to see if any solids remain.',
        'Heat the water to check its boiling point.',
        'Test with anhydrous cobalt(II) chloride.',
        'Use universal indicator paper to check its pH.'
      ],
      answer: 1,
      explanation: 'Chemical tests (like cobalt chloride) show the presence of water, but checking for a sharp boiling point at exactly 100°C proves purity.'
    },
    {
      id: 'lab_q20',
      source: '[2023 Winter Paper 21, Q39]',
      question: 'The equation for the reaction of aqueous calcium nitrate and aqueous sodium hydroxide is shown:\nCa(NO3)2(aq) + 2NaOH(aq) -> Ca(OH)2(s) + 2NaNO3(aq)\nWhich process is used to remove calcium hydroxide from the mixture?',
      options: [
        'chromatography',
        'crystallisation',
        'distillation',
        'filtration'
      ],
      answer: 3,
      explanation: 'Calcium hydroxide is formed as an insoluble solid precipitate (s), which can be separated from the aqueous solution by filtration.'
    },
    {
      id: 'lab_q22',
      source: '[2023 Winter Paper 23, Q39]',
      question: 'Rf values are used to identify unknown substances using paper chromatography. Which statements about Rf values are correct?\n1. Rf values are always less than 1.0.\n2. Rf value = distance travelled by solvent ÷ distance travelled by unknown substance.\n3. The higher the Rf value, the further the unknown substance travels.\n4. Rf values are not affected by the solubility of the unknown substance.',
      options: [
        '1 and 2',
        '1 and 3',
        '2 and 3',
        '3 and 4'
      ],
      answer: 1,
      explanation: 'Rf values are always ≤ 1.0 because a solute cannot move faster than the solvent front. A higher Rf value means the substance moved further.'
    },
    {
      id: 'lab_q23',
      source: '[2024 Summer Paper 21, Q40]',
      question: 'Which statement about chromatography is correct?',
      options: [
        'Rf value = distance travelled by solvent / distance travelled by substance',
        'The baseline on chromatography paper should be drawn in ink.',
        'It is possible to use chromatography on colourless substances using a locating agent.',
        'Rf values are always greater than 1.0.'
      ],
      answer: 2,
      explanation: 'Locating agents react with colourless compounds (such as amino acids) on a chromatogram to produce visible coloured spots.'
    },
    {
      id: 'lab_q24',
      source: '[2024 Summer Paper 22, Q40]',
      question: 'Which piece of apparatus is used to measure 24.5 cm³ of gas produced during a reaction?',
      options: [
        'beaker',
        'conical flask',
        'measuring cylinder',
        'volumetric pipette'
      ],
      answer: 2,
      explanation: 'A measuring cylinder inverted over water or a gas syringe is used to collect and measure gas volumes.'
    },
    {
      id: 'lab_q25',
      source: '[2024 Summer Paper 23, Q38]',
      question: 'Four pure substances, P, Q, R and S, are tested using chromatography under identical conditions:\n- P: spot = 4.5 cm, solvent = 10.0 cm\n- Q: spot = 3.0 cm, solvent = 20.0 cm\n- R: spot = 4.5 cm, solvent = 20.0 cm\n- S: spot = 13.5 cm, solvent = 30.0 cm\nWhich two substances are identical?',
      options: [
        'P and R',
        'P and S',
        'Q and R',
        'Q and S'
      ],
      answer: 1,
      explanation: 'Rf(P) = 4.5/10 = 0.45. Rf(S) = 13.5/30 = 0.45. Since P and S have identical Rf values in the same solvent, they are identical substances.'
    },
    {
      id: 'lab_q27',
      source: '[2024 Winter Paper 23, Q39]',
      question: 'Silver chloride and sodium chloride do not dissolve in kerosene. Silver chloride is insoluble in water, but sodium chloride is soluble in water. Which processes are used to separate a mixture of solid silver chloride and solid sodium chloride?',
      options: [
        'add kerosene, stir and then filter',
        'add water, stir and then filter',
        'add water, stir and then leave to crystallise',
        'add water, stir and then perform fractional distillation'
      ],
      answer: 1,
      explanation: 'Adding water dissolves sodium chloride while leaving silver chloride solid. Filtering leaves insoluble silver chloride on the paper.'
    },
    {
      id: 'lab_q28',
      source: '[2025 Summer Paper 21, Q39]',
      question: 'Which process is used to obtain pure copper(II) sulfate from aqueous copper(II) sulfate?',
      options: [
        'chromatography',
        'condensation',
        'evaporation',
        'filtration'
      ],
      answer: 2,
      explanation: 'Evaporating water from aqueous copper(II) sulfate crystallises pure copper(II) sulfate.'
    },
    {
      id: 'lab_q29',
      source: '[2025 Summer Paper 21, Q40]',
      question: 'A mixture of four different colourless amino acids is analysed by paper chromatography. The final chromatogram shows only three spots. Why does the chromatogram only show three spots?',
      options: [
        'A locating agent is not used.',
        'One of the amino acids is insoluble in the solvent.',
        'The solvent front is too near the top of the paper.',
        'Two of the amino acids have the same Rf value.'
      ],
      answer: 3,
      explanation: 'If two components have identical solubilities in the solvent, they move at the same speed and overlap as a single spot.'
    },
    {
      id: 'lab_q30',
      source: '[2025 Summer Paper 22, Q38]',
      question: 'Which item of apparatus is used to measure exactly 26.3 cm³ of a liquid?',
      options: [
        'burette',
        'gas syringe',
        'volumetric pipette',
        'measuring cylinder'
      ],
      answer: 0,
      explanation: 'A burette is capable of measuring variable liquid volumes accurately to 0.05 cm³ (such as 26.3 cm³).'
    },
    {
      id: 'lab_q32',
      source: '[2025 Summer Paper 22, Q40]',
      question: 'Pure ethanol has a melting point of -114°C and a boiling point of 78°C. What are the melting and boiling points of a sample of ethanol with glucose dissolved in it?',
      options: [
        'melting point: -116°C | boiling point: 77°C',
        'melting point: -116°C | boiling point: 79°C',
        'melting point: -112°C | boiling point: 77°C',
        'melting point: -112°C | boiling point: 79°C'
      ],
      answer: 1,
      explanation: 'Dissolved impurities lower the melting point (below -114°C to -116°C) and raise the boiling point (above 78°C to 79°C).'
    },
    {
      id: 'lab_q33',
      source: '[2025 Summer Paper 23, Q38]',
      question: 'The steps used to separate a mixture of a soluble solid and an insoluble solid are listed:\n- A solution is made by adding the mixture to a suitable ......1......\n- The mixture is stirred and then poured through a filter funnel lined with filter paper.\n- The insoluble solid is collected on the filter paper as the ......2......\nWhich words complete gaps 1 and 2?',
      options: [
        '1: solute | 2: filtrate',
        '1: solute | 2: residue',
        '1: solvent | 2: filtrate',
        '1: solvent | 2: residue'
      ],
      answer: 3,
      explanation: 'The liquid added to dissolve a component is the solvent (1), and the solid remaining on the filter paper is the residue (2).'
    },
    {
      id: 'lab_q34',
      source: '[2025 Summer Paper 23, Q39]',
      question: 'Which items of apparatus are used to separate a mixture of liquids with different boiling points?',
      options: [
        'Fractional distillation apparatus (distillation flask with fractionating column, thermometer, Liebig condenser, receiver beaker)',
        'Titration apparatus (burette clamped over conical flask)',
        'Electrolysis cell (beaker with DC power supply and electrodes)',
        'Evaporating basin on tripod stand'
      ],
      answer: 0,
      explanation: 'Fractional distillation apparatus is specifically designed to separate miscible liquids based on differing boiling points.'
    },
    {
      id: 'lab_q35',
      source: '[2025 Summer Paper 23, Q40]',
      question: 'In paper chromatography, what is the equation for the Rf value?',
      options: [
        'Rf = distance travelled by substance / distance travelled by solvent',
        'Rf = distance travelled by substance / distance travelled by locating agent',
        'Rf = distance travelled by locating agent / distance travelled by substance',
        'Rf = distance travelled by solvent / distance travelled by substance'
      ],
      answer: 0,
      explanation: 'Rf = (distance travelled by substance) ÷ (distance travelled by solvent front).'
    }
  ]
},

'atomic_structure': {
    title: 'Atomic Structure and Isotopes',
    description: 'Practice questions on subatomic particles, atomic numbers, mass numbers, isotopes, and relative atomic mass.',
    questions: [
      {
        id: 't1_q1',
        source: '[2023 Summer Paper 21, Q4]',
        question: 'Which statement explains why isotopes of the same element have the same chemical properties?',
        options: [
          'They have the same number of outer shell electrons.',
          'They have the same number of neutrons.',
          'They have different numbers of protons.',
          'They have different mass numbers.'
        ],
        answer: 0,
        explanation: 'Chemical properties are determined by the electronic configuration, specifically the number of outer shell electrons.'
      },
      {
        id: 't1_q2',
        source: '[2023 Summer Paper 22, Q2]',
        question: 'An atom of element X contains:\n• 5 protons\n• 6 neutrons\n• 5 electrons\n\nWhich statements about element X are correct?\n1. X has an atomic number of 6.\n2. X has a nucleon number of 11.\n3. X is in Group II of the Periodic Table.\n4. X is in the second period of the Periodic Table.',
        options: [
          '1 and 3',
          '1 and 4',
          '2 and 3',
          '2 and 4'
        ],
        answer: 3,
        explanation: 'Nucleon number = protons + neutrons = 5 + 6 = 11 (Statement 2). Electron configuration is 2,3, placing it in Period 2 (2 shells) and Group III (Statement 4).'
      },
      {
        id: 't1_q3',
        source: '[2023 Summer Paper 23, Q3]',
        question: 'Two atoms, X and Y, have the same mass number but different atomic numbers. Which statement about X and Y is correct?',
        options: [
          'They have the same number of protons.',
          'They have the same number of electrons.',
          'They are in the same group of the Periodic Table.',
          'They have different numbers of neutrons.'
        ],
        answer: 3,
        explanation: 'Since mass number (protons + neutrons) is constant but proton numbers differ, their neutron numbers must also differ to maintain the same total mass number.'
      },
      {
        id: 't1_q4',
        source: '[2023 Summer Paper 23, Q4]',
        question: 'A sample of pure iron contains three isotopes only:\n• 6% ⁵⁴Fe\n• 92% ⁵⁶Fe\n• 2% ⁿFe\n\nThe iron in the sample has a relative atomic mass of 55.9. What is the value of n?',
        options: [
          '53',
          '55',
          '57',
          '58'
        ],
        answer: 2,
        explanation: 'Aᵣ = [(6 × 54) + (92 × 56) + (2 × n)] / 100 = 55.9. Solving 324 + 5152 + 2n = 5590 yields 2n = 114, so n = 57.'
      },
      {
        id: 't1_q5',
        source: '[2023 Winter Paper 21, Q4]',
        question: 'X and Y are atoms.\n• X and Y have the same number of electron shells.\n• X and Y have the same number of outer electrons.\n• X and Y have different mass numbers.\n\nWhich statements about X and Y are correct?\n1. X and Y are isotopes.\n2. X and Y have the same total number of electrons.',
        options: [
          '1 and 2',
          '1 only',
          '2 only',
          'neither 1 nor 2'
        ],
        answer: 0,
        explanation: 'Having the same electron configuration (same shells and valence electrons) means they are atoms of the same element with identical electron numbers. Different mass numbers make them isotopes.'
      },
      {
        id: 't1_q6',
        source: '[2023 Winter Paper 22, Q4]',
        question: 'The percentage abundances of three isotopes in a sample of neon are shown:\n• ²⁰Ne: 90.48%\n• ²¹Ne: 0.27%\n• ²²Ne: 9.25%\n\nWhat is the relative atomic mass, Aᵣ, of this sample of neon?',
        options: [
          '10.19',
          '20.19',
          '21.00',
          '30.19'
        ],
        answer: 1,
        explanation: 'Aᵣ = [(20 × 90.48) + (21 × 0.27) + (22 × 9.25)] / 100 = (1809.6 + 5.67 + 203.5) / 100 = 20.1877 ≈ 20.19.'
      },
      {
        id: 't1_q7',
        source: '[2023 Winter Paper 23, Q4]',
        question: 'Which statement explains why isotopes of an element have the same chemical reactions?',
        options: [
          'They have different numbers of neutrons.',
          'They have ions with different numbers of electrons.',
          'They have the same number of outer shell electrons.',
          'They have the same number of protons.'
        ],
        answer: 2,
        explanation: 'Chemical reactivity and properties are determined by having the same valence electron configuration.'
      },
      {
        id: 't1_q8',
        source: '[2024 Summer Paper 21, Q4]',
        question: 'Four statements about atoms are listed:\n1. The centre of an atom is positively charged.\n2. Protons and electrons are located in the nucleus.\n3. Protons and electrons have the same mass.\n4. Most of the mass of an atom is in the nucleus.\n\nWhich statements are correct?',
        options: [
          '1 and 2',
          '1 and 4',
          '2 and 3',
          '3 and 4'
        ],
        answer: 1,
        explanation: 'The nucleus contains positively charged protons and neutral neutrons (statements 1 and 4 are correct). Electrons orbit outside the nucleus and have negligible mass.'
      },
      {
        id: 't1_q9',
        source: '[2024 Summer Paper 21, Q6]',
        question: 'Which statement explains why isotopes of the same element have the same chemical properties?',
        options: [
          'They have different numbers of protons in their nucleus.',
          'They have different numbers of neutrons in their nucleus.',
          'They have the same electronic configuration.',
          'They have the same number of electrons as protons.'
        ],
        answer: 2,
        explanation: 'Isotopes have identical chemical properties because they possess the exact same electronic configuration.'
      },
      {
        id: 't1_q10',
        source: '[2024 Summer Paper 22, Q3]',
        question: 'Which statements about isotopes are correct?\n1. Isotopes are atoms of different elements with the same number of protons.\n2. Isotopes of the same element have the same chemical properties.\n3. Isotopes are atoms with the same relative atomic mass.\n4. Isotopes of the same element have the same electronic configuration.',
        options: [
          '1 and 2',
          '1 and 3',
          '2 and 4',
          '3 and 4'
        ],
        answer: 2,
        explanation: 'Isotopes belong to the same element (same proton number), so they share identical electronic configurations (4) and chemical properties (2).'
      },
      {
        id: 't1_q11',
        source: '[2024 Summer Paper 23, Q4]',
        question: 'An atom of element R contains 15 protons, 16 neutrons, and 15 electrons. What is element R?',
        options: [
          'Gallium',
          'Phosphorus',
          'Sulfur',
          'Zinc'
        ],
        answer: 1,
        explanation: 'Atomic number 15 corresponds to phosphorus (P) in the Periodic Table.'
      },
      {
        id: 't1_q12',
        source: '[2024 Winter Paper 22, Q3]',
        question: 'Rubidium has two isotopes, ⁸⁵₃₇Rb and ⁸⁷₃₇Rb. Which statement explains why both isotopes have the same chemical properties?',
        options: [
          'They have the same number of protons.',
          'They have the same electronic configuration.',
          'They have different numbers of neutrons.',
          'They have different mass numbers.'
        ],
        answer: 1,
        explanation: 'Chemical properties depend strictly on having the same electronic configuration.'
      },
      {
        id: 't1_q13',
        source: '[2024 Winter Paper 23, Q6]',
        question: 'A sample of iridium has a relative atomic mass of 192.29. The sample contains two isotopes only. 64.50% of the sample is ¹⁹³Ir. What is the other isotope in the sample?',
        options: [
          '¹⁸⁹Ir',
          '¹⁹⁰Ir',
          '¹⁹¹Ir',
          '¹⁹²Ir'
        ],
        answer: 2,
        explanation: 'Percentage of the second isotope = 100 - 64.50 = 35.50%. Solving 192.29 = [(193 × 64.50) + (x × 35.50)] / 100 gives x = 191.'
      },
      {
        id: 't1_q14',
        source: '[2025 Summer Paper 21, Q3]',
        question: 'Which atom has an equal number of protons, neutrons, and electrons?',
        options: [
          '⁴⁰Ar',
          '¹H',
          '²³Na',
          '¹⁴N'
        ],
        answer: 3,
        explanation: 'Nitrogen-14 (¹⁴N) has 7 protons, 7 electrons, and 14 - 7 = 7 neutrons.'
      },
      {
        id: 't1_q15',
        source: '[2025 Summer Paper 21, Q4]',
        question: 'The only naturally occurring isotopes in a sample of europium are ¹⁵¹Eu and ¹⁵³Eu. This sample of europium has a relative atomic mass, Aᵣ, of 152.0. What is the percentage of ¹⁵¹Eu present in this sample to three significant figures?',
        options: [
          '0.987%',
          '50.0%',
          '76.0%',
          '98.7%'
        ],
        answer: 1,
        explanation: 'Let x be the fraction of ¹⁵¹Eu. 151(x) + 153(1 - x) = 152.0, giving 2x = 1.0, so x = 0.50 (50.0%).'
      },
      {
        id: 't1_q16',
        source: '[2025 Summer Paper 22, Q3]',
        question: 'Which row gives the number of protons, electrons, and neutrons in an atom of zinc?',
        options: [
          'Protons: 30 | Electrons: 30 | Neutrons: 35',
          'Protons: 30 | Electrons: 35 | Neutrons: 35',
          'Protons: 35 | Electrons: 30 | Neutrons: 30',
          'Protons: 35 | Electrons: 35 | Neutrons: 30'
        ],
        answer: 0,
        explanation: 'Zinc (Zn) has atomic number 30 (30 protons and 30 electrons) and common mass number 65 (35 neutrons).'
      },
      {
        id: 't1_q17',
        source: '[2025 Summer Paper 22, Q5]',
        question: 'A sample of element Q has two isotopes. Their relative masses and abundances are shown:\n• Relative mass 238: 66%\n• Relative mass 244: 34%\n\nWhat is the relative atomic mass of this sample of Q to three significant figures?',
        options: [
          '240',
          '241',
          '242',
          '243'
        ],
        answer: 0,
        explanation: 'Aᵣ = [(238 × 66) + (244 × 34)] / 100 = (15708 + 8296) / 100 = 240.04 ≈ 240.'
      },
      {
        id: 't1_q18',
        source: '[2025 Summer Paper 23, Q3]',
        question: 'Which atom has twice as many neutrons as protons?',
        options: [
          '¹₁H',
          '²₁H',
          '³₁H',
          '⁴₂He'
        ],
        answer: 2,
        explanation: 'Tritium (³₁H) has 1 proton and 3 - 1 = 2 neutrons (twice as many neutrons as protons).'
      },
      {
        id: 't1_q19',
        source: '[2025 Summer Paper 23, Q4]',
        question: 'What is the nucleon number of an atom?',
        options: [
          'The number of electrons, neutrons, and protons in the nucleus',
          'The number of neutrons and protons in the nucleus',
          'The number of neutrons in the nucleus',
          'The number of protons in the nucleus'
        ],
        answer: 1,
        explanation: 'Nucleon number (mass number) is defined as the total number of protons and neutrons in the nucleus.'
      }
    ]
  }
