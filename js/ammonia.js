// Ensure window.topicData exists
window.topicData = window.topicData || {};

// Add Ammonia topic
window.topicData['ammonia'] = {
  title: 'Ammonia & The Haber Process',
  description: 'Questions covering the properties, displacement reactions, industrial production (Haber process), raw materials, energy profiles, and testing of ammonia gas.',
  questions: [
    {
      id: 'amm_q1',
      source: '[2014 Paper 1, Q27]',
      question: 'Which statement about ammonia is correct?',
      image: '',
      options: [
        'It decomposes on heating to a high temperature to form nitrogen and hydrogen.',
        'It dissolves in water to form an acidic solution.',
        'It is formed when ammonium salts are heated with sulfuric acid.',
        'It reacts with alkalis to form salts.'
      ],
      answer: 0,
      explanation: '• Option A is correct: Thermal decomposition of ammonia yields its constituent elements (2NH<sub>3</sub> ⇌ N<sub>2</sub> + 3H<sub>2</sub>).<br>• Option B is incorrect: Ammonia dissolves in water to form aqueous ammonia, an alkaline solution (pH > 7).<br>• Option C is incorrect: Ammonia is formed when ammonium salts are heated with bases/alkalis, not acids.<br>• Option D is incorrect: Ammonia acts as a base and reacts with acids (not alkalis) to form ammonium salts.'
    },
    {
      id: 'amm_q2',
      source: '[2015 Paper 1, Q22]',
      question: 'Ammonia can be displaced from its salts. Which equation is correct?',
      image: '',
      options: [
        'Ca(OH)₂(s) + NH₄Cl(s) → CaCl(s) + NH₃(g) + H₂O(g)',
        'Ca(OH)₂(s) + (NH₄)₂SO₄(s) → CaSO₄(s) + 2NH₃(g) + 2H₂O(g)',
        'NaOH(s) + 2NH₄NO₃(s) → NaNO₃(s) + 2NH₃(g) + H₂O(g)',
        'NaOH(s) + (NH₄)₂SO₄(s) → NaSO₄(s) + 2NH₃(g) + 2H₂O(g)'
      ],
      answer: 1,
      explanation: 'Checking chemical formulas and balancing:<br>• Option B is correct and balanced: Ca(OH)<sub>2</sub> + (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> → CaSO<sub>4</sub> + 2NH<sub>3</sub> + 2H<sub>2</sub>O.<br>• Option A gives incorrect formula CaCl (should be CaCl<sub>2</sub>).<br>• Option C is unbalanced (2NH<sub>4</sub>NO<sub>3</sub> requires 2NaOH).<br>• Option D gives incorrect formula NaSO<sub>4</sub> (should be Na<sub>2</sub>SO<sub>4</sub>).'
    },
    {
      id: 'amm_q3',
      source: '[2016 Paper 1, Q14]',
      question: 'The formation of ammonia is an exothermic reaction:<br>N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇌ 2NH<sub>3</sub>(g)&nbsp;&nbsp;&nbsp;&nbsp;ΔH = −92 kJ/mol (or −46 kJ/mol of NH<sub>3</sub> formed)<br><br>The activation energy for the forward reaction (N<sub>2</sub> + 3H<sub>2</sub> → 2NH<sub>3</sub>) is +73 kJ per mole of NH<sub>3</sub>.<br><br>What is the value of the activation energy for the reverse reaction (decomposition of ammonia into its elements per mole of NH<sub>3</sub>)?',
      image: 'https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/ammonia-03.png',
      options: [
        '46 kJ/mol',
        '73 kJ/mol',
        '119 kJ/mol',
        '165 kJ/mol'
      ],
      answer: 2,
      explanation: 'On an energy profile diagram per mole of NH<sub>3</sub>:<br>• The products (NH<sub>3</sub>) sit 46 kJ lower than the reactants (N<sub>2</sub> + 3/2 H<sub>2</sub>).<br>• The transition state (peak) is 73 kJ above the reactants.<br>• The activation energy for the reverse reaction (decomposition from products to transition state) is the sum of the enthalpy change magnitude and forward activation energy:<br>E<sub>a(reverse)</sub> = 46 kJ/mol + 73 kJ/mol = 119 kJ/mol.'
    },
    {
      id: 'amm_q4',
      source: '[2018 Paper 1, Q25 / 2021 Paper 1, Q23]',
      question: 'What is the source of hydrogen in the industrial production of ammonia (Haber process)?',
      image: '',
      options: [
        'cracking of hydrocarbons',
        'electrolysis of aqueous sodium hydroxide',
        'extraction from the air',
        'reaction of a Group I metal with water'
      ],
      answer: 0,
      explanation: 'In the Haber process, nitrogen is obtained from fractional distillation of liquid air, while hydrogen is obtained from methane (natural gas) via steam reforming and catalytic cracking of hydrocarbons.'
    }
  ]
};
