// Ensure window.topicData exists
window.topicData = window.topicData || {};

// Add Acids, Bases & Salts topic
window.topicData['acids_bases'] = {
  title: 'Acids, Bases & Salts',
  description: 'Questions covering acid-base theories, pH scale, reactions of acids/bases, preparation of salts, oxides, and indicators.',
  questions: [
    {
      id: 'ab_q1',
      source: '[2014 Paper 1, Q18]',
      question: 'The dissociation constant for an acid indicates the extent to which it dissociates into ions. The higher the dissociation constant, the stronger the acid.<br><br>The dissociation constants for some acids are given below along with two statements:<br>• Methanoic acid (HCOOH): 1.8 × 10<sup>−4</sup><br>• Ethanoic acid (CH<sub>3</sub>COOH): 1.7 × 10<sup>−5</sup><br>• Propanoic acid (C<sub>2</sub>H<sub>5</sub>COOH): 1.3 × 10<sup>−5</sup><br>• Chloroethanoic acid (CH<sub>2</sub>ClCOOH): 1.3 × 10<sup>−3</sup><br><br>Statement 1: Increasing the length of the carbon chain makes the acid stronger.<br>Statement 2: Replacing a hydrogen by a chlorine in ethanoic acid makes the acid stronger.<br><br>Based on the data above, which statements are correct?',
      image: '',
      options: [
        'both statements',
        'statement 1 only',
        'statement 2 only',
        'neither statement'
      ],
      answer: 2,
      explanation: '• Statement 1 is false: As the carbon chain lengthens (Methanoic → Ethanoic → Propanoic), the dissociation constant decreases (1.8×10<sup>−4</sup> → 1.7×10<sup>−5</sup> → 1.3×10<sup>−5</sup>), meaning the acid becomes weaker.<br>• Statement 2 is true: Replacing H with Cl in ethanoic acid increases the constant from 1.7×10<sup>−5</sup> to 1.3×10<sup>−3</sup>, making it stronger.'
    },
    {
      id: 'ab_q2',
      source: '[2015 Paper 1, Q17]',
      question: 'Which row about the oxides SO<sub>2</sub>, SiO<sub>2</sub>, CO<sub>2</sub> and NO<sub>2</sub> is correct?',
      image: '',
      options: [
        'are acidic',
        'are solids at room temperature',
        'may be present in air',
        'react with acidified potassium manganate(VII)'
      ],
      answer: 0,
      explanation: 'SO<sub>2</sub>, SiO<sub>2</sub>, CO<sub>2</sub>, and NO<sub>2</sub> are all non-metal oxides, which makes them acidic oxides.<br>• SiO<sub>2</sub> is a solid at room temperature, but SO<sub>2</sub>, CO<sub>2</sub>, and NO<sub>2</sub> are gases.<br>• SiO<sub>2</sub> (sand) is not present in air gas mixtures, and not all react with KMnO<sub>4</sub>.'
    },
    {
      id: 'ab_q3',
      source: '[2015 Paper 1, Q18 / 2021 Paper 1, Q14]',
      question: 'What does the term strong acid mean in relation to hydrochloric acid, HCl?',
      image: '',
      options: [
        'Each molecule can produce two hydrogen ions.',
        'It is fully ionised in aqueous solution.',
        'Its aqueous solution has a pH much greater than 7.',
        'Its salt, silver chloride, is insoluble in water.'
      ],
      answer: 1,
      explanation: 'By definition, a strong acid fully ionises/dissociates into hydrogen ions (H<sup>+</sup>) in aqueous solution.'
    },
    {
      id: 'ab_q4',
      source: '[2016 Paper 1, Q17]',
      question: 'Which particle is found in a solution of propanoic acid?',
      image: '',
      options: [
        'H',
        'H⁺',
        'H₂⁺',
        'C₃H₇CO₂⁻'
      ],
      answer: 1,
      explanation: 'Propanoic acid (C<sub>2</sub>H<sub>5</sub>COOH) is a weak acid that partially ionises in aqueous solution to produce hydrogen ions (H<sup>+</sup>) and propanoate ions (C<sub>2</sub>H<sub>5</sub>COO<sup>−</sup>).'
    },
    {
      id: 'ab_q5',
      source: '[2016 Paper 1, Q18]',
      question: 'A solution of a salt X gives an insoluble hydroxide Y on reacting with aqueous NaOH.<br>Y dissolves in excess aqueous NaOH to give solution Z. On adding aqueous HCl to Z, the precipitate Y reappears but dissolves in excess aqueous HCl.<br><br>What type of hydroxide is hydroxide Y?',
      image: '',
      options: [
        'acidic',
        'amphoteric',
        'basic',
        'neutral'
      ],
      answer: 1,
      explanation: 'Hydroxide Y reacts with both excess NaOH (a strong alkali) and excess HCl (a strong acid) to form soluble products. A substance that reacts with both acids and alkalis is amphoteric.'
    },
    {
      id: 'ab_q6',
      source: '[2017 Paper 1, Q14]',
      question: 'Some statements about acids are given:<br>1. A 1 mol/dm³ solution of a strong acid will have a higher pH than a 1 mol/dm³ solution of a weak acid.<br>2. pH gives a measure of the H⁺ concentration in a solution.<br>3. Universal Indicator turns blue when placed in a solution of pH 5.<br>4. When acids react with metals, hydrogen ions gain electrons.<br><br>Which statements about acids are correct?',
      image: '',
      options: [
        '1, 2 and 3',
        '1 and 2 only',
        '1 and 4 only',
        '2 and 4 only'
      ],
      answer: 3,
      explanation: '• Statement 1 is false: A strong acid fully ionises to produce a higher H<sup>+</sup> concentration, resulting in a LOWER pH.<br>• Statement 2 is true: pH measures H<sup>+</sup> ion concentration.<br>• Statement 3 is false: At pH 5, Universal Indicator turns yellow/orange, not blue.<br>• Statement 4 is true: Reaction 2H<sup>+</sup> + 2e<sup>−</sup> → H<sub>2</sub> shows H<sup>+</sup> ions being reduced by gaining electrons.'
    },
    {
      id: 'ab_q7',
      source: '[2017 Paper 1, Q15]',
      question: 'Which statement about oxides is correct?',
      image: '',
      options: [
        'A basic oxide is an oxide of a non-metal.',
        'Acidic oxides contain ionic bonds.',
        'Amphoteric oxides contain a metal.',
        'Basic oxides are always gases.'
      ],
      answer: 2,
      explanation: '• Basic oxides are metallic (e.g. CaO, MgO), not non-metallic.<br>• Acidic oxides are non-metal oxides and contain covalent bonds.<br>• Amphoteric oxides (e.g. Al<sub>2</sub>O<sub>3</sub>, ZnO, PbO) consist of metallic elements.<br>• Basic oxides are solids at room temperature.'
    },
    {
      id: 'ab_q8',
      source: '[2018 Paper 1, Q15]',
      question: 'The table gives some statements about acids and bases and explanations for these statements.<br><br>Which row shows both a correct statement and a correct explanation for the statement?',
      image: '',
      options: [
        'statement: ammonia can be made by heating ammonium sulfate with calcium hydroxide | explanation: the hydroxide ion acts as a base and removes H⁺ from the ammonium ion',
        'statement: the pH of a weak acid is higher than the pH of a strong acid of the same concentration | explanation: pH shows the extent of ionisation – the more ionised the acid is, the higher the pH',
        'statement: calcium hydroxide can be used to control pH in soils | explanation: metal hydroxides are acidic and can reduce excess alkalinity',
        'statement: when an acid reacts with a metal, the metal is reduced | explanation: reduction is gain of electrons'
      ],
      answer: 0,
      explanation: '• Option A is correct: Heating an ammonium salt with a strong base (OH<sup>−</sup>) releases NH<sub>3</sub> gas as OH<sup>−</sup> acts as a Bronsted-Lowry base accepting H<sup>+</sup> from NH<sub>4</sub><sup>+</sup>.<br>• Option B explanation is wrong: More ionised means lower pH.<br>• Option C explanation is wrong: Metal hydroxides are basic, not acidic.<br>• Option D is wrong: The metal loses electrons (oxidised).'
    },
    {
      id: 'ab_q9',
      source: '[2018 Paper 1, Q16]',
      question: 'Methylamine dissolves in water to give an alkaline solution.<br>A few drops of Universal Indicator are added to an aqueous solution of methylamine.<br><br>Which row shows the pH of the solution and the colour of the solution after the indicator has been added?',
      image: '',
      options: [
        'pH: greater than 7 | colour of solution: blue',
        'pH: greater than 7 | colour of solution: orange',
        'pH: less than 7 | colour of solution: blue',
        'pH: less than 7 | colour of solution: orange'
      ],
      answer: 0,
      explanation: 'An alkaline solution has a pH greater than 7 and turns Universal Indicator blue or violet.'
    },
    {
      id: 'ab_q10',
      source: '[2019 Paper 1, Q14]',
      question: 'An aqueous solution of sodium hydroxide has a pH of 10.<br>Which compounds could be added to the aqueous sodium hydroxide to decrease the pH?<br><br>1 sulfur dioxide<br>2 carbon dioxide<br>3 calcium oxide',
      image: '',
      options: [
        '1 and 2 only',
        '2 and 3 only',
        '1 only',
        '1, 2 and 3'
      ],
      answer: 0,
      explanation: 'To decrease the pH of an alkaline solution (pH 10), acidic substances must be added.<br>• SO<sub>2</sub> and CO<sub>2</sub> are acidic non-metal oxides that neutralise NaOH, reducing the pH.<br>• CaO is a basic metal oxide that forms Ca(OH)<sub>2</sub> (alkaline), which would not reduce pH.'
    },
    {
      id: 'ab_q11',
      source: '[2019 Paper 1, Q15]',
      question: 'The diagram shows two substances, R and S, being heated together.<br><br>Which row is correct?',
      image: '',
      options: [
        'substance R: ammonium chloride | substance S: aqueous sodium hydroxide | colour change of damp Universal Indicator paper: turns blue',
        'substance R: ammonium chloride | substance S: hydrochloric acid | colour change of damp Universal Indicator paper: turns red',
        'substance R: aluminium | substance S: aqueous sodium nitrate | colour change of damp Universal Indicator paper: turns blue',
        'substance R: aluminium | substance S: hydrochloric acid | colour change of damp Universal Indicator paper: turns red'
      ],
      answer: 0,
      explanation: 'Heating an ammonium salt (ammonium chloride) with an alkali (aqueous sodium hydroxide) liberates ammonia gas (NH<sub>3</sub>). Ammonia is an alkaline gas, which turns damp Universal Indicator paper blue.'
    },
    {
      id: 'ab_q12',
      source: '[2020 Paper 1, Q13]',
      question: 'Dilute sulfuric acid is added to separate samples of solid substances.<br>Which row shows which solid substances will react with dilute sulfuric acid to evolve gas?',
      image: '',
      options: [
        'copper: ✓ | magnesium: ✓ | zinc oxide: ✗ | sodium carbonate: ✗',
        'copper: ✓ | magnesium: ✗ | zinc oxide: ✓ | sodium carbonate: ✗',
        'copper: ✗ | magnesium: ✓ | zinc oxide: ✗ | sodium carbonate: ✓',
        'copper: ✗ | magnesium: ✗ | zinc oxide: ✓ | sodium carbonate: ✓'
      ],
      answer: 2,
      explanation: '• Copper is unreactive (below hydrogen in reactivity series) → No reaction (✗).<br>• Magnesium reacts with acid to release H<sub>2</sub> gas (✓).<br>• Zinc oxide reacts to form ZnSO<sub>4</sub> and water, but NO gas is evolved (✗).<br>• Sodium carbonate reacts to evolve CO<sub>2</sub> gas (✓).'
    },
    {
      id: 'ab_q13',
      source: '[2020 Paper 1, Q14]',
      question: 'Given a supply of lead carbonate, copper carbonate, dilute nitric acid and aqueous sodium hydroxide, how many different salts could be prepared?',
      image: '',
      options: [
        '1',
        '2',
        '3',
        '4'
      ],
      answer: 3,
      explanation: 'The reagents can prepare 4 salts via neutralization & precipitation reactions:<br>1. Lead(II) nitrate: PbCO<sub>3</sub> + 2HNO<sub>3</sub> → Pb(NO<sub>3</sub>)<sub>2</sub> + CO<sub>2</sub> + H<sub>2</sub>O<br>2. Copper(II) nitrate: CuCO<sub>3</sub> + 2HNO<sub>3</sub> → Cu(NO<sub>3</sub>)<sub>2</sub> + CO<sub>2</sub> + H<sub>2</sub>O<br>3. Sodium nitrate: NaOH + HNO<sub>3</sub> → NaNO<sub>3</sub> + H<sub>2</sub>O<br>4. Lead(II) hydroxide (or sodium plumbate precipitate via precipitation/double decomposition).'
    },
    {
      id: 'ab_q14',
      source: '[2021 Paper 1, Q15]',
      question: 'Beryllium hydroxide is an amphoteric white solid.<br>Which reagent can be used to distinguish beryllium hydroxide from solid calcium hydroxide?<br><br>1 HCl(aq)<br>2 HNO₃(aq)<br>3 KOH(aq)<br>4 NaOH(aq)',
      image: '',
      options: [
        '1 or 2',
        '1 or 3',
        '2 or 4',
        '3 or 4'
      ],
      answer: 3,
      explanation: 'Beryllium hydroxide is amphoteric (reacts with both acids and alkalis), while Calcium hydroxide is basic (reacts only with acids).<br>Both dissolve in acids (HCl, HNO<sub>3</sub>), so acids cannot distinguish them. However, beryllium hydroxide will dissolve in strong alkalis (KOH, NaOH) forming a soluble complex, while calcium hydroxide will not.'
    },
    {
      id: 'ab_q15',
      source: '[2022 Paper 1, Q13]',
      question: 'What is a characteristic property of all bases?',
      image: '',
      options: [
        'They are oxides of non-metals.',
        'They form alkaline solutions.',
        'They form salts with acids.',
        'They react with ammonia to form ammonium salts.'
      ],
      answer: 2,
      explanation: 'All bases (whether soluble or insoluble) react with acids to undergo neutralization and form a salt and water. Insoluble bases do not form alkaline solutions.'
    },
    {
      id: 'ab_q16',
      source: '[2022 Paper 1, Q14]',
      question: 'The table gives some statements about acids and bases and explanations for these statements.<br><br>Which row shows both a correct statement and a correct explanation for the statement?',
      image: '',
      options: [
        'statement: ammonia can be made by heating ammonium carbonate with calcium hydroxide | explanation: the hydroxide ion removes H⁺ from the ammonium ion',
        'statement: the pH of a weak acid is higher than the pH of a strong acid of the same concentration | explanation: pH shows the extent of ionisation – the more ionised the acid is, the higher the pH',
        'statement: calcium hydroxide can be used to control pH in soils | explanation: metal hydroxides are acidic and can reduce excess alkalinity',
        'statement: when an acid reacts with a metal, the metal is reduced | explanation: reduction is gain of electrons'
      ],
      answer: 0,
      explanation: 'Ammonium salts (like ammonium carbonate) react with bases (calcium hydroxide) when heated to produce ammonia. Hydroxide ions (OH<sup>−</sup>) accept H<sup>+</sup> from NH<sub>4</sub><sup>+</sup> ions to form water and NH<sub>3</sub>.'
    }
  ]
};
