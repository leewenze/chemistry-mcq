// Ensure window.topicData exists
window.topicData = window.topicData || {};

// Add Salts topic
window.topicData['salts'] = {
  title: 'Salts & Preparation of Salts',
  description: 'Questions covering solubility rules, methods of salt preparation (precipitation, titration, excess insoluble base/metal/carbonate), properties, and qualitative testing.',
  questions: [
    {
      id: 'salts_q1',
      source: '[2014 Paper 1, Q19]',
      question: 'Which three salts are all prepared by precipitation?',
      image: '',
      options: [
        'barium sulfate, calcium nitrate, lead(II) sulfate',
        'barium sulfate, calcium nitrate, silver chloride',
        'barium sulfate, lead(II) sulfate, silver chloride',
        'calcium nitrate, lead(II) sulfate, silver chloride'
      ],
      answer: 2,
      explanation: 'Precipitation is used to prepare insoluble salts from two soluble salt solutions.<br>• Insoluble salts: Barium sulfate (BaSO<sub>4</sub>), Lead(II) sulfate (PbSO<sub>4</sub>), and Silver chloride (AgCl).<br>• Calcium nitrate is soluble, so it is prepared by titration or reacting carbonate with acid, not by precipitation.'
    },
    {
      id: 'salts_q2',
      source: '[2017 Paper 1, Q34]',
      question: 'Acid rain contains sulfuric acid and can cause lakes to become acidic. Acidic lakes may be treated with powdered limestone (impure calcium carbonate) to neutralise the acidity. Calcium sulfate is formed. If large lumps of limestone are used, instead of powdered limestone, the reaction starts but soon stops, leaving most of the limestone unreacted.<br><br>Which statement explains why the reaction starts but soon stops?',
      image: '',
      options: [
        'A layer of insoluble calcium sulfate forms on the surface of the lumps.',
        'Limestone only contains small amounts of calcium carbonate.',
        'Powdered limestone is more reactive than lumps of limestone.',
        'The acid reacts with the calcium sulfate instead of the calcium carbonate.'
      ],
      answer: 0,
      explanation: 'Calcium sulfate (CaSO<sub>4</sub>) formed during the reaction is an insoluble salt. When large lumps of limestone are used, a layer of insoluble CaSO<sub>4</sub> precipitates onto the surface of the lumps, creating a physical barrier that prevents further contact between the sulfuric acid and the inner calcium carbonate.'
    },
    {
      id: 'salts_q3',
      source: '[2018 Paper 1, Q17]',
      question: 'When dilute sulfuric acid and sodium hydroxide react, sodium hydrogen sulfate, NaHSO<sub>4</sub>, is first formed:<br>H<sub>2</sub>SO<sub>4</sub>(aq) + NaOH(aq) → NaHSO<sub>4</sub>(aq) + H<sub>2</sub>O(l)<br><br>Aqueous sodium hydrogen sulfate dissociates into ions:<br>NaHSO<sub>4</sub>(aq) → Na<sup>+</sup>(aq) + H<sup>+</sup>(aq) + SO<sub>4</sub><sup>2−</sup>(aq)<br><br>If more sodium hydroxide is added, sodium sulfate, Na<sub>2</sub>SO<sub>4</sub>, can be formed:<br>H<sub>2</sub>SO<sub>4</sub>(aq) + 2NaOH(aq) → Na<sub>2</sub>SO<sub>4</sub>(aq) + 2H<sub>2</sub>O(l)<br><br>Which results for these two salts, when tested with Universal Indicator and barium nitrate solution, are correct?',
      image: 'https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/salts-03.png',
      options: [
        'NaHSO₄: pH > 7, addition of barium nitrate: no reaction | Na₂SO₄: pH 7, addition of barium nitrate: no reaction',
        'NaHSO₄: pH > 7, addition of barium nitrate: white precipitate | Na₂SO₄: pH 7, addition of barium nitrate: white precipitate',
        'NaHSO₄: pH < 7, addition of barium nitrate: no reaction | Na₂SO₄: pH 7, addition of barium nitrate: no reaction',
        'NaHSO₄: pH < 7, addition of barium nitrate: white precipitate | Na₂SO₄: pH 7, addition of barium nitrate: white precipitate'
      ],
      answer: 3,
      explanation: '• NaHSO<sub>4</sub> dissociates to yield H<sup>+</sup> ions, so its solution is acidic (pH < 7).<br>• Na<sub>2</sub>SO<sub>4</sub> is a neutral salt (pH = 7).<br>• Both solutions contain SO<sub>4</sub><sup>2−</sup> ions, so both react with aqueous barium nitrate, Ba(NO<sub>3</sub>)<sub>2</sub>, to form an insoluble white precipitate of barium sulfate, BaSO<sub>4</sub>.'
    },
    {
      id: 'salts_q4',
      source: '[2019 Paper 1, Q13]',
      question: 'When sodium sulfate solution is added to a solution containing a mixture of the nitrates of lead, potassium and zinc, a white precipitate forms.<br><br>What is the precipitate?',
      image: '',
      options: [
        'lead sulfate',
        'potassium sulfate',
        'sodium nitrate',
        'zinc sulfate'
      ],
      answer: 0,
      explanation: 'According to solubility rules:<br>• Sodium, potassium, and nitrate compounds are all soluble.<br>• Zinc sulfate is soluble.<br>• Lead(II) sulfate (PbSO<sub>4</sub>) is insoluble and forms a white precipitate.'
    },
    {
      id: 'salts_q5',
      source: '[2020 Paper 1, Q20]',
      question: 'Which solutions, when mixed together, form an insoluble salt?',
      image: '',
      options: [
        'dilute hydrochloric acid and lead(II) nitrate',
        'dilute hydrochloric acid and magnesium nitrate',
        'dilute sulfuric acid and sodium hydroxide',
        'dilute sulfuric acid and zinc chloride'
      ],
      answer: 0,
      explanation: 'Mixing dilute HCl and Pb(NO<sub>3</sub>)<sub>2</sub> produces lead(II) chloride, PbCl<sub>2</sub>, which is an insoluble salt that forms a white precipitate.'
    },
    {
      id: 'salts_q6',
      source: '[2020 Paper 1, Q22]',
      question: 'Which pair of reagents would be most suitable to safely prepare a pure sample of potassium chloride in the laboratory?',
      image: '',
      options: [
        'aqueous potassium hydroxide and dilute hydrochloric acid',
        'aqueous potassium nitrate and aqueous sodium chloride',
        'potassium and chlorine',
        'potassium and dilute hydrochloric acid'
      ],
      answer: 0,
      explanation: '• Potassium chloride (KCl) is a soluble Group 1 salt, prepared via titration using aqueous alkali (KOH) and dilute acid (HCl).<br>• Options C and D involve metallic potassium, which reacts violently/explosively with water/acids and cannot be used safely.'
    },
    {
      id: 'salts_q7',
      source: '[2020 Paper 1, Q21]',
      question: 'A salt can be prepared by adding an excess of solid X to an aqueous solution of Y. A solution and some solid X remain.<br>The mixture is filtered. The filtrate is evaporated to form a concentrated solution, which is left to crystallise. Excess solution is poured off, leaving salt Z.<br><br>Which salt can be safely prepared using this method?',
      image: '',
      options: [
        'ammonium chloride',
        'barium sulfate',
        'copper(II) sulfate',
        'potassium chloride'
      ],
      answer: 2,
      explanation: 'This "excess insoluble solid" method is used for soluble salts where the metal oxide/carbonate is insoluble.<br>• Copper(II) sulfate (CuSO<sub>4</sub>) is prepared by adding excess insoluble copper(II) oxide/carbonate to dilute sulfuric acid, filtering out excess solid, and crystallising.<br>• Ammonium chloride and potassium chloride require titration.<br>• Barium sulfate is insoluble and prepared by precipitation.'
    },
    {
      id: 'salts_q8',
      source: '[2021 Paper 1, Q13]',
      question: 'Some properties of four substances are shown in the table.<br><br>Which substance is silver chloride?',
      image: 'https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/salts-08.png',
      options: [
        'state at room temp: liquid | conducts at room temp: ✗ | conducts molten: ✗ | conducts in water: ✓',
        'state at room temp: solid | conducts at room temp: ✓ | conducts molten: ✓ | conducts in water: insoluble',
        'state at room temp: solid | conducts at room temp: ✗ | conducts molten: ✓ | conducts in water: ✓',
        'state at room temp: solid | conducts at room temp: ✗ | conducts molten: ✓ | conducts in water: insoluble'
      ],
      answer: 3,
      explanation: 'Silver chloride (AgCl) is an ionic solid at room temperature.<br>• As a solid, it does not conduct electricity due to fixed ions.<br>• When molten, its ions become free to move and it conducts electricity.<br>• It is insoluble in water, so it does not dissolve to form an aqueous solution.'
    },
    {
      id: 'salts_q9',
      source: '[2021 Paper 1, Q18]',
      question: 'Salt P can be prepared by reacting together:<br>• a dilute acid and a metal OR<br>• an acid and an insoluble carbonate.<br><br>A pure sample of salt P is then obtained by filtration, followed by crystallisation of the filtrate.<br><br>Which salt is P?',
      image: '',
      options: [
        'copper(II) sulfate',
        'lead(II) sulfate',
        'magnesium chloride',
        'sodium chloride'
      ],
      answer: 2,
      explanation: '• Copper does not react with dilute acids, so copper(II) sulfate cannot be made from metal + acid.<br>• Lead(II) sulfate is insoluble (prepared by precipitation).<br>• Sodium carbonate is soluble, not insoluble.<br>• Magnesium metal reacts with HCl(aq), and insoluble magnesium carbonate also reacts with HCl(aq) to give soluble magnesium chloride, MgCl<sub>2</sub>.'
    },
    {
      id: 'salts_q10',
      source: '[2022 Paper 1, Q22]',
      question: 'Aqueous ammonium sulfate is warmed with an excess of aqueous sodium hydroxide. The resulting mixture is neutralised with dilute hydrochloric acid.<br>This mixture is then mixed with aqueous barium chloride.<br>The precipitate is filtered off and the filtrate is evaporated to leave a white solid.<br><br>What is the white solid?',
      image: '',
      options: [
        'ammonium chloride',
        'ammonium hydroxide',
        'barium sulfate',
        'sodium chloride'
      ],
      answer: 3,
      explanation: 'Step 1: Warming (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> with excess NaOH drives off NH<sub>3</sub> gas. Solution contains Na<sup>+</sup>, excess OH<sup>−</sup>, and SO<sub>4</sub><sup>2−</sup>.<br>Step 2: Neutralising excess NaOH with HCl gives NaCl and H<sub>2</sub>O. Solution contains Na<sup>+</sup>, Cl<sup>−</sup>, and SO<sub>4</sub><sup>2−</sup>.<br>Step 3: Adding BaCl<sub>2</sub> precipitates out all SO<sub>4</sub><sup>2−</sup> as BaSO<sub>4</sub>(s) (filtered off).<br>Step 4: The filtrate contains remaining Na<sup>+</sup> and Cl<sup>−</sup> ions. Evaporating to dryness leaves solid sodium chloride (NaCl).'
    },
    {
      id: 'salts_q11',
      source: '[2022 Paper 1, Q23]',
      question: 'Copper(II) nitrate is made by reacting an excess of a powdered solid with an aqueous solution. The mixture is filtered and the filtrate crystallised.<br><br>Which row identifies a solid and an aqueous solution that can be used to make a pure sample of copper(II) nitrate?',
      image: '',
      options: [
        'solid in excess: copper | aqueous solution: zinc nitrate',
        'solid in excess: copper | aqueous solution: silver nitrate',
        'solid in excess: copper(II) hydroxide | aqueous solution: sodium nitrate',
        'solid in excess: copper(II) hydroxide | aqueous solution: dilute nitric acid'
      ],
      answer: 3,
      explanation: '• Option D: Insoluble copper(II) hydroxide, Cu(OH)<sub>2</sub>, reacts with dilute nitric acid, HNO<sub>3</sub>, in an acid-base neutralisation to form soluble copper(II) nitrate and water. Excess solid Cu(OH)<sub>2</sub> can easily be filtered off.<br>• Option A: Copper is less reactive than zinc, so no displacement occurs.<br>• Option B: Copper displaces silver, but excess solid copper and produced silver solid would contaminate the solution.'
    }
  ]
};
