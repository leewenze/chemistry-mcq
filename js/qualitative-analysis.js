// Ensure window.topicData exists
window.topicData = window.topicData || {};

// Add Qualitative Analysis topic
window.topicData['qualitative_analysis'] = {
  title: 'Qualitative Analysis',
  description: 'Questions covering tests for cations, anions, and gases, as well as observation-based identification of unknown inorganic compounds.',
  questions: [
    {
      id: 'qa_q1',
      source: '[2014 Paper 1, Q3]',
      question: 'Which pair of reagents could be used in a test for sulfate ions in aqueous solution?',
      image: '',
      options: [
        'aqueous barium nitrate and nitric acid',
        'aqueous barium nitrate and sulfuric acid',
        'aqueous silver nitrate and hydrochloric acid',
        'aqueous silver nitrate and nitric acid'
      ],
      answer: 0,
      explanation: 'Sulfate ions (SO<sub>4</sub><sup>2−</sup>) are tested by adding dilute nitric acid (HNO<sub>3</sub>) followed by aqueous barium nitrate (Ba(NO<sub>3</sub>)<sub>2</sub>) to give an insoluble white precipitate of barium sulfate (BaSO<sub>4</sub>).<br>• Sulfuric acid cannot be used as a reagent because it introduces sulfate ions into the sample.'
    },
    {
      id: 'qa_q2',
      source: '[2015 Paper 1, Q3]',
      question: 'The following reactions are carried out:<br>• Ammonium carbonate + excess dilute nitric acid → Gas E + Solution<br>• Solid heating / reaction → Gas F<br>• Gas E + Gas F → Compound G<br><br>What are E, F and G?',
      image: '',
      options: [
        'gas E: ammonia | gas F: carbon dioxide | compound G: ammonium carbonate',
        'gas E: ammonia | gas F: carbon dioxide | compound G: ammonium ethanoate',
        'gas E: carbon dioxide | gas F: ammonia | compound G: ammonium carbonate',
        'gas E: carbon dioxide | gas F: ammonia | compound G: ammonium ethanoate'
      ],
      answer: 2,
      explanation: '1. Carbonate + nitric acid produces carbon dioxide gas (Gas E = CO<sub>2</sub>).<br>2. Heating an ammonium salt with an alkali or thermal decomposition releases ammonia gas (Gas F = NH<sub>3</sub>).<br>3. Reacting CO<sub>2</sub> and NH<sub>3</sub> together forms ammonium carbonate, (NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub> (Compound G).'
    },
    {
      id: 'qa_q3',
      source: '[2015 Paper 1, Q24]',
      question: 'The following observations were made by separately reacting three solutions containing metal ions with an excess of aqueous sodium hydroxide and an excess of aqueous ammonia:<br><br>• Solution 1: White precipitate insoluble in excess NaOH(aq); No precipitate in NH<sub>3</sub>(aq).<br>• Solution 2: White precipitate soluble in excess NaOH(aq) giving a colourless solution; White precipitate insoluble in excess NH<sub>3</sub>(aq).<br>• Solution 3: White precipitate soluble in excess NaOH(aq); White precipitate soluble in excess NH<sub>3</sub>(aq).<br><br>Which metal ions are present in each solution?',
      image: '',
      options: [
        '1: Al³⁺ | 2: Ca²⁺ | 3: Zn²⁺',
        '1: Al³⁺ | 2: Zn²⁺ | 3: Ca²⁺',
        '1: Ca²⁺ | 2: Zn²⁺ | 3: Al³⁺',
        '1: Zn²⁺ | 2: Al³⁺ | 3: Ca²⁺'
      ],
      answer: 1,
      explanation: '• Solution 1: Forms no precipitate with aqueous ammonia, which is characteristic of Calcium (Ca<sup>2+</sup>).<br>• Solution 2: White ppt soluble in excess NaOH but insoluble in excess NH<sub>3</sub> is Aluminium (Al<sup>3+</sup>).<br>• Solution 3: White ppt soluble in excess of BOTH NaOH and NH<sub>3</sub> is Zinc (Zn<sup>2+</sup>).'
    },
    {
      id: 'qa_q4',
      source: '[2016 Paper 1, Q1]',
      question: 'A gas, R, has the following properties:<br>1. A choking smell<br>2. Turns damp blue litmus paper red, then white (bleaches it)<br>3. Does not react with acidified potassium manganate(VII)<br><br>What is R?',
      image: '',
      options: [
        'ammonia',
        'carbon dioxide',
        'chlorine',
        'sulfur dioxide'
      ],
      answer: 2,
      explanation: 'Chlorine (Cl<sub>2</sub>) is a greenish-yellow gas with a choking smell that acts as an acidic bleaching agent (turns damp blue litmus paper red, then bleaches it white).'
    },
    {
      id: 'qa_q5',
      source: '[2016 Paper 1, Q2]',
      question: 'A salt, Q, on warming with excess aqueous sodium hydroxide, evolved a gas that turned damp red litmus paper blue. When no more gas was evolved, aluminium powder was added and a further evolution of the same gas occurred.<br><br>What was salt Q?',
      image: '',
      options: [
        '(NH₄)₂CO₃',
        'NH₄Cl',
        '(NH₄)₂SO₄',
        'NH₄NO₃'
      ],
      answer: 3,
      explanation: '• The first reaction (warming with NaOH) produced ammonia gas (turns red litmus blue), confirming the presence of ammonium ions (NH<sub>4</sub><sup>+</sup>).<br>• Adding aluminium foil/powder and warming with NaOH tests for nitrate ions (NO<sub>3</sub><sup>−</sup>), which reduces NO<sub>3</sub><sup>−</sup> to NH<sub>3</sub> gas.<br>• Therefore, salt Q contains both NH<sub>4</sub><sup>+</sup> and NO<sub>3</sub><sup>−</sup>, making it ammonium nitrate (NH<sub>4</sub>NO<sub>3</sub>).'
    },
    {
      id: 'qa_q6',
      source: '[2016 Paper 1, Q21]',
      question: 'An aqueous solution of a compound, T, undergoes the following reactions:<br>• T + NaOH(aq) → Green precipitate<br>• T + AgNO₃(aq) + HNO₃(aq) → Yellow precipitate<br><br>What is T?',
      image: '',
      options: [
        'iron(II) carbonate',
        'iron(III) chloride',
        'iron(II) iodide',
        'iron(III) nitrate'
      ],
      answer: 2,
      explanation: '• Green precipitate with NaOH(aq) indicates the presence of Iron(II) ions (Fe<sup>2+</sup>).<br>• Yellow precipitate with aqueous silver nitrate and nitric acid indicates the presence of Iodide ions (I<sup>−</sup>).<br>• Thus, compound T is iron(II) iodide (FeI<sub>2</sub>).'
    },
    {
      id: 'qa_q7',
      source: '[2017 Paper 1, Q2]',
      question: 'In which reaction is a white precipitate formed?',
      image: '',
      options: [
        'acidified potassium manganate(VII) + sulfur dioxide',
        'aqueous barium nitrate + aqueous potassium chloride',
        'aqueous calcium hydroxide + carbon dioxide',
        'aqueous copper(II) sulfate + aqueous sodium hydroxide'
      ],
      answer: 2,
      explanation: '• Option C: Passing carbon dioxide into aqueous calcium hydroxide (limewater) forms an insoluble white precipitate of calcium carbonate (CaCO<sub>3</sub>).<br>• Option A gives a colourless solution.<br>• Option B gives no reaction (all salts remain soluble).<br>• Option D forms a blue precipitate of Cu(OH)<sub>2</sub>.'
    },
    {
      id: 'qa_q8',
      source: '[2017 Paper 1, Q26]',
      question: 'A salt, G, dissolved in water to give a green solution. On adding chlorine, the green solution turned yellow. On addition of aqueous ammonia, the green solution gave a green precipitate and the yellow solution gave a red-brown precipitate. On addition of dilute nitric acid followed by aqueous barium nitrate, the green solution gave a white precipitate.<br><br>What is the formula of G?',
      image: '',
      options: [
        'CuCl₂',
        'CuSO₄',
        'FeCl₂',
        'FeSO₄'
      ],
      answer: 3,
      explanation: '• Green solution turning yellow on adding chlorine shows Fe<sup>2+</sup> (green) oxidised to Fe<sup>3+</sup> (yellow).<br>• Fe<sup>2+</sup> gives a green precipitate with NH<sub>3</sub>(aq), while Fe<sup>3+</sup> gives a red-brown precipitate.<br>• White precipitate with HNO<sub>3</sub> + Ba(NO<sub>3</sub>)<sub>2</sub> confirms the presence of sulfate ions (SO<sub>4</sub><sup>2−</sup>).<br>• Salt G is iron(II) sulfate (FeSO<sub>4</sub>).'
    },
    {
      id: 'qa_q9',
      source: '[2018 Paper 1, Q3]',
      question: 'Two solutions, W and X, were tested as shown:<br>• Solution W + dilute KI(aq) → Yellow precipitate<br>• Solution X + excess NaOH(aq) → White precipitate soluble in excess giving a colourless solution<br>• Solution X + excess NH₃(aq) → White precipitate soluble in excess giving a colourless solution<br><br>What are solutions W and X?',
      image: '',
      options: [
        'W: ammonium sulfate | X: zinc sulfate',
        'W: lead(II) nitrate | X: aluminium sulfate',
        'W: lead(II) nitrate | X: zinc sulfate',
        'W: zinc nitrate | X: aluminium sulfate'
      ],
      answer: 2,
      explanation: '• W forms a yellow precipitate (PbI<sub>2</sub>) with potassium iodide, confirming W contains Lead(II) ions (Pb<sup>2+</sup>).<br>• X forms a white precipitate that dissolves in excess of BOTH NaOH and NH<sub>3</sub>, confirming X contains Zinc ions (Zn<sup>2+</sup>).'
    },
    {
      id: 'qa_q10',
      source: '[2019 Paper 1, Q2]',
      question: 'In addition to sodium ions and chloride ions, sea water contains calcium ions and sulfate ions. Which method could be used to measure the amount of sulfate ions present in a sample of sea water?',
      image: '',
      options: [
        'add excess aqueous lead(II) nitrate, dry and weigh the precipitate formed',
        'add excess aqueous barium nitrate, dry and weigh the precipitate formed',
        'evaporate off all the water and weigh the remaining solid',
        'measure the electrical conductivity of the sample'
      ],
      answer: 1,
      explanation: 'Adding excess aqueous barium nitrate selectively precipitates all sulfate ions as insoluble barium sulfate (BaSO<sub>4</sub>) without precipitating chloride ions.<br>• Lead(II) nitrate would also precipitate chloride ions as insoluble lead(II) chloride (PbCl<sub>2</sub>).'
    },
    {
      id: 'qa_q11',
      source: '[2019 Paper 1, Q4]',
      question: 'Three different experiments with colour changes are carried out:<br>1. Sulfur dioxide is tested with acidified potassium manganate(VII) solution.<br>2. Universal Indicator solution is added to a solution of a weak acid.<br>3. Aqueous potassium iodide and dilute nitric acid are mixed. Then aqueous silver nitrate is added.<br><br>Which row correctly identifies the experiments that correspond to the colour changes?<br>• Colourless solution to a yellow precipitate<br>• Purple to colourless<br>• Green to orange',
      image: '',
      options: [
        'colourless to yellow ppt: 1 | purple to colourless: 2 | green to orange: 3',
        'colourless to yellow ppt: 2 | purple to colourless: 1 | green to orange: 3',
        'colourless to yellow ppt: 3 | purple to colourless: 2 | green to orange: 1',
        'colourless to yellow ppt: 3 | purple to colourless: 1 | green to orange: 2'
      ],
      answer: 3,
      explanation: '• Experiment 3: Reaction between KI and AgNO<sub>3</sub> yields silver iodide (AgI), a yellow precipitate.<br>• Experiment 1: SO<sub>2</sub> reduces purple KMnO<sub>4</sub> to colorless Mn<sup>2+</sup>.<br>• Experiment 2: Universal Indicator turns from green (neutral) to orange in weak acid.'
    },
    {
      id: 'qa_q12',
      source: '[2020 Paper 1, Q3]',
      question: 'The following laboratory items are available: red litmus paper, blue litmus paper, wooden splint.<br><br>When testing for ammonia, chlorine, hydrogen and oxygen, what is the minimum number of items needed to identify these four gases?',
      image: '',
      options: [
        '2',
        '3',
        '4',
        '5'
      ],
      answer: 1,
      explanation: '3 items are required:<br>1. Red litmus paper (damp): turns blue for Ammonia.<br>2. Blue litmus paper (damp): bleaches white for Chlorine.<br>3. Wooden splint: lighted to give a "pop" sound for Hydrogen, and glowing to relight for Oxygen (the same splint can be used).'
    },
    {
      id: 'qa_q13',
      source: '[2021 Paper 1, Q3]',
      question: 'An aqueous solution of a salt is tested and the following results are obtained:<br>• Excess NaOH(aq): White precipitate formed, dissolves in excess to give a colourless solution.<br>• Excess NH₃(aq): White precipitate formed, insoluble in excess.<br><br>What is the cation in the salt?',
      image: '',
      options: [
        'Al³⁺',
        'Ca²⁺',
        'NH₄⁺',
        'Zn²⁺'
      ],
      answer: 0,
      explanation: 'A white precipitate that dissolves in excess aqueous NaOH but remains insoluble in excess aqueous NH<sub>3</sub> is the definitive cation test result for Aluminium ions (Al<sup>3+</sup>).'
    },
    {
      id: 'qa_q14',
      source: '[2022 Paper 1, Q3]',
      question: 'A crystalline product contains a mixture of two salts. One of the ions present is sodium. A student tests the mixture to determine which other ions are present:<br>• Test 1: Addition of dilute HCl → Effervescence observed, gas turns limewater cloudy.<br>• Test 2: Addition of NaOH(aq) → Green precipitate insoluble in excess.<br>• Test 3: Addition of HNO₃(aq) + Ba(NO₃)₂(aq) → White precipitate.<br><br>What is present in the mixture?',
      image: '',
      options: [
        'copper(II) carbonate and sodium sulfate',
        'iron(II) sulfate and sodium sulfate',
        'sodium carbonate and copper(II) sulfate',
        'sodium carbonate and iron(II) sulfate'
      ],
      answer: 3,
      explanation: '• Test 1 confirms Carbonate ions (CO<sub>3</sub><sup>2−</sup>).<br>• Test 2 confirms Iron(II) ions (Fe<sup>2+</sup>).<br>• Test 3 confirms Sulfate ions (SO<sub>4</sub><sup>2−</sup>).<br>• Given that sodium (Na<sup>+</sup>) is present, the two salts in the mixture are sodium carbonate and iron(II) sulfate.'
    }
  ]
};
