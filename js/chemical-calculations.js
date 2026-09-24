// Ensure window.topicData exists
window.topicData = window.topicData || {};

// Add Chemical Calculations topic
window.topicData['chemical_calculations'] = {
  title: 'Chemical Calculations & Stoichiometry',
  description: 'Questions covering mole concept, empirical/molecular formulas, reacting masses, gas volumes, percentage yield, and concentration calculations.',
  questions: [
    {
      id: 'calc_q1',
      source: '[2014 Paper 1, Q11 / 2019 Paper 1, Q10]',
      question: 'A carbohydrate has the formula (CH<sub>2</sub>O)<sub>6</sub>.<br>One mole of this carbohydrate is burned in excess oxygen and the gas formed is collected.<br><br>What volume of gas, measured at room temperature and pressure, is collected?',
      image: '',
      options: [
        '24 dm³',
        '48 dm³',
        '144 dm³',
        '288 dm³'
      ],
      answer: 2,
      explanation: 'The formula is C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>. Combustion equation: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> → 6CO<sub>2</sub> + 6H<sub>2</sub>O.<br>1 mole of carbohydrate produces 6 moles of CO<sub>2</sub> gas.<br>Volume of CO<sub>2</sub> = 6 mol × 24 dm³/mol = 144 dm³.'
    },
    {
      id: 'calc_q2',
      source: '[2014 Paper 1, Q13]',
      question: 'On adding 50 g of impure limestone, CaCO<sub>3</sub> (M<sub>r</sub> = 100), to excess hydrochloric acid, 6.0 dm³ of CO<sub>2</sub> was evolved at room temperature and pressure.<br><br>What is the purity of the limestone?',
      image: '',
      options: [
        '25%',
        '50%',
        '75%',
        '100%'
      ],
      answer: 1,
      explanation: 'Moles of CO<sub>2</sub> = 6.0 / 24 = 0.25 mol.<br>From equation CaCO<sub>3</sub> + 2HCl → CaCl<sub>2</sub> + H<sub>2</sub>O + CO<sub>2</sub>, 1 mol CO<sub>2</sub> comes from 1 mol CaCO<sub>3</sub>.<br>Mass of pure CaCO<sub>3</sub> = 0.25 mol × 100 g/mol = 25 g.<br>Percentage purity = (25 g / 50 g) × 100 = 50%.'
    },
    {
      id: 'calc_q3',
      source: '[2014 Paper 1, Q21]',
      question: 'In an experiment, 4.0 cm³ of 1.0 mol/dm³ aqueous copper(II) sulfate and 8.0 cm³ of 1.0 mol/dm³ aqueous sodium carbonate are mixed.<br><br>What does the reaction vessel contain once the reaction is complete?',
      image: '',
      options: [
        'a colourless solution only',
        'a green precipitate and a blue solution',
        'a green precipitate and a colourless solution',
        'a white precipitate and a colourless solution'
      ],
      answer: 2,
      explanation: 'Moles CuSO<sub>4</sub> = 0.004 mol (blue solution). Moles Na<sub>2</sub>CO<sub>3</sub> = 0.008 mol.<br>Reaction: CuSO<sub>4</sub> + Na<sub>2</sub>CO<sub>3</sub> → CuCO<sub>3</sub> (green ppt) + Na<sub>2</sub>SO<sub>4</sub> (colourless solution).<br>CuSO<sub>4</sub> is the limiting reactant and is completely used up, leaving no blue Cu<sup>2+</sup> ions in solution. The excess Na<sub>2</sub>CO<sub>3</sub> and product Na<sub>2</sub>SO<sub>4</sub> form a colourless solution containing the green CuCO<sub>3</sub> precipitate.'
    },
    {
      id: 'calc_q4',
      source: '[2015 Paper 1, Q13 / 2021 Paper 1, Q11]',
      question: 'An excess of dilute sulfuric acid is added separately to the following reagents.<br><br>reaction 1: 1.2 g of magnesium<br>reaction 2: 2.0 g of magnesium oxide, then warmed<br>reaction 3: 4.2 g of magnesium carbonate<br><br>Each reaction produces 100% yield of the products. Which statement is correct?',
      image: '',
      options: [
        'The number of moles of magnesium sulfate formed is greatest in reaction 1.',
        'The number of moles of magnesium sulfate formed is greatest in reaction 2.',
        'The number of moles of magnesium sulfate formed is greatest in reaction 3.',
        'The number of moles of magnesium sulfate formed is the same in all three reactions.'
      ],
      answer: 3,
      explanation: 'Moles of Mg = 1.2 / 24 = 0.05 mol → 0.05 mol MgSO<sub>4</sub>.<br>Moles of MgO = 2.0 / 40 = 0.05 mol → 0.05 mol MgSO<sub>4</sub>.<br>Moles of MgCO<sub>3</sub> = 4.2 / 84 = 0.05 mol → 0.05 mol MgSO<sub>4</sub>.<br>The number of moles of MgSO<sub>4</sub> produced is identical (0.05 mol) in all three reactions.'
    },
    {
      id: 'calc_q5',
      source: '[2015 Paper 1, Q15 / 2020 Paper 1, Q11]',
      question: 'The formula of an oxide of element Y is Y<sub>2</sub>O<sub>3</sub>.<br>8.0 g of Y<sub>2</sub>O<sub>3</sub> contains 5.6 g of Y.<br><br>How many moles of Y does 5.6 g of the element contain?',
      image: '',
      options: [
        '(2.4 / 16) × (2 / 3)',
        '(2.4 / 16) × (3 / 2)',
        '(8 / 16) × (2 / 3)',
        '(8 / 16) × (3 / 2)'
      ],
      answer: 0,
      explanation: 'Mass of oxygen in 8.0 g Y<sub>2</sub>O<sub>3</sub> = 8.0 - 5.6 = 2.4 g.<br>Moles of oxygen atoms (O) = 2.4 / 16.<br>In Y<sub>2</sub>O<sub>3</sub>, mole ratio of Y : O = 2 : 3, so moles of Y = (moles of O) × (2 / 3) = (2.4 / 16) × (2 / 3).'
    },
    {
      id: 'calc_q6',
      source: '[2015 Paper 1, Q16]',
      question: 'In the reaction between 23 g of ethanol and excess hydrogen bromide, the mass of bromoethane obtained is 27 g.<br><br>C<sub>2</sub>H<sub>5</sub>OH + HBr → C<sub>2</sub>H<sub>5</sub>Br + H<sub>2</sub>O<br><br>What is the percentage yield of bromoethane?<br>[M<sub>r</sub>: C<sub>2</sub>H<sub>5</sub>OH = 46, C<sub>2</sub>H<sub>5</sub>Br = 109]',
      image: '',
      options: [
        '25%',
        '50%',
        '60%',
        '75%'
      ],
      answer: 1,
      explanation: 'Moles of C<sub>2</sub>H<sub>5</sub>OH = 23 / 46 = 0.50 mol.<br>Theoretical yield of C<sub>2</sub>H<sub>5</sub>Br = 0.50 mol × 109 g/mol = 54.5 g.<br>Percentage yield = (27 g / 54.5 g) × 100 ≈ 50%.'
    },
    {
      id: 'calc_q7',
      source: '[2016 Paper 1, Q9]',
      question: 'When 42.0 g of sodium hydrogen carbonate, NaHCO<sub>3</sub> (M<sub>r</sub> = 84), was strongly heated, 3.00 dm³ of carbon dioxide gas, measured at room temperature and pressure, was released.<br><br>2NaHCO<sub>3</sub> → Na<sub>2</sub>CO<sub>3</sub> + H<sub>2</sub>O + CO<sub>2</sub><br><br>What was the percentage yield of carbon dioxide?',
      image: '',
      options: [
        '25%',
        '50%',
        '75%',
        '100%'
      ],
      answer: 1,
      explanation: 'Moles of NaHCO<sub>3</sub> = 42.0 / 84 = 0.50 mol.<br>Theoretical moles of CO<sub>2</sub> = 0.50 / 2 = 0.25 mol.<br>Theoretical volume of CO<sub>2</sub> = 0.25 × 24 dm³ = 6.00 dm³.<br>Percentage yield = (3.00 dm³ / 6.00 dm³) × 100 = 50%.'
    },
    {
      id: 'calc_q8',
      source: '[2016 Paper 1, Q40]',
      question: 'The equations for the action of heat on four nitrates are given below.<br>2Pb(NO<sub>3</sub>)<sub>2</sub>(s) → 2PbO(s) + 4NO<sub>2</sub>(g) + O<sub>2</sub>(g)<br>2Cu(NO<sub>3</sub>)<sub>2</sub>(s) → 2CuO(s) + 4NO<sub>2</sub>(g) + O<sub>2</sub>(g)<br>2Mg(NO<sub>3</sub>)<sub>2</sub>(s) → 2MgO(s) + 4NO<sub>2</sub>(g) + O<sub>2</sub>(g)<br>2Ca(NO<sub>3</sub>)<sub>2</sub>(s) → 2CaO(s) + 4NO<sub>2</sub>(g) + O<sub>2</sub>(g)<br><br>A 10 g sample of each nitrate was heated until there was no further change. Which nitrate produced the greatest mass of nitrogen dioxide, NO<sub>2</sub>?',
      image: '',
      options: [
        'Ca(NO<sub>3</sub>)<sub>2</sub>',
        'Cu(NO<sub>3</sub>)<sub>2</sub>',
        'Mg(NO<sub>3</sub>)<sub>2</sub>',
        'Pb(NO<sub>3</sub>)<sub>2</sub>'
      ],
      answer: 2,
      explanation: 'All reactions have the same stoichiometry (1 mol nitrate produces 2 mol NO<sub>2</sub>). Therefore, the sample with the smallest formula mass (M<sub>r</sub>) will yield the largest number of moles of nitrate in a 10 g sample, producing the greatest mass of NO<sub>2</sub>. Mg(NO<sub>3</sub>)<sub>2</sub> has the lowest M<sub>r</sub>.'
    },
    {
      id: 'calc_q9',
      source: '[2017 Paper 1, Q9]',
      question: '28 g of gaseous hydrocarbon X has a volume of 12 dm³ at room temperature and pressure.<br><br>What is the molecular formula of X?',
      image: '',
      options: [
        'C<sub>2</sub>H<sub>4</sub>',
        'C<sub>3</sub>H<sub>6</sub>',
        'C<sub>4</sub>H<sub>8</sub>',
        'C<sub>5</sub>H<sub>10</sub>'
      ],
      answer: 2,
      explanation: 'Moles of gas X = 12 / 24 = 0.50 mol.<br>M<sub>r</sub> of hydrocarbon X = mass / moles = 28 g / 0.50 mol = 56 g/mol.<br>Calculating M<sub>r</sub> for options: C<sub>4</sub>H<sub>8</sub> = (4 × 12) + (8 × 1) = 56.'
    },
    {
      id: 'calc_q10',
      source: '[2017 Paper 1, Q10]',
      question: 'The equations show the reactions involved in the formation of nitric acid, HNO<sub>3</sub>, from nitrogen.<br>N<sub>2</sub> + O<sub>2</sub> → 2NO<br>2NO + O<sub>2</sub> → 2NO<sub>2</sub><br>4NO<sub>2</sub> + 2H<sub>2</sub>O + O<sub>2</sub> → 4HNO<sub>3</sub><br><br>How many moles of nitric acid are formed from 0.50 moles of nitrogen?',
      image: '',
      options: [
        '0.25',
        '0.50',
        '1.00',
        '4.00'
      ],
      answer: 2,
      explanation: 'Overall mole ratio: 1 mol N<sub>2</sub> → 2 mol NO → 2 mol NO<sub>2</sub> → 2 mol HNO<sub>3</sub>.<br>So, 1 mol N<sub>2</sub> produces 2 mol HNO<sub>3</sub>.<br>Therefore, 0.50 mol N<sub>2</sub> produces 0.50 × 2 = 1.00 mol HNO<sub>3</sub>.'
    },
    {
      id: 'calc_q11',
      source: '[2017 Paper 1, Q32]',
      question: '1.0 g of each of the metals calcium, iron, magnesium and zinc was placed in separate test-tubes, each containing excess dilute hydrochloric acid.<br>The gas evolved from each test-tube was collected and its volume was measured.<br><br>Which metal produced the greatest volume of gas on completion of the reaction?',
      image: '',
      options: [
        'calcium',
        'iron',
        'magnesium',
        'zinc'
      ],
      answer: 2,
      explanation: 'All four metals react with HCl to form M<sup>2+</sup> ions (M + 2HCl → MCl<sub>2</sub> + H<sub>2</sub>), giving a 1:1 mole ratio between metal and H<sub>2</sub> gas. The metal with the smallest atomic mass (A<sub>r</sub>) yields the most moles from a 1.0 g sample. Magnesium (A<sub>r</sub> = 24) is the lightest among Ca (40), Fe (56), and Zn (65).'
    },
    {
      id: 'calc_q12',
      source: '[2018 Paper 1, Q11]',
      question: 'Sodium hydroxide reacts with sulfuric acid according to the equation:<br>2NaOH + H<sub>2</sub>SO<sub>4</sub> → Na<sub>2</sub>SO<sub>4</sub> + 2H<sub>2</sub>O<br><br>Which volume of 0.20 mol/dm³ sodium hydroxide reacts completely with a solution containing 0.49 g of sulfuric acid? [M<sub>r</sub>: H<sub>2</sub>SO<sub>4</sub> = 98]',
      image: '',
      options: [
        '12.5 cm³',
        '25.0 cm³',
        '50.0 cm³',
        '100.0 cm³'
      ],
      answer: 2,
      explanation: 'Moles H<sub>2</sub>SO<sub>4</sub> = 0.49 / 98 = 0.0050 mol.<br>Moles NaOH needed = 2 × 0.0050 = 0.010 mol.<br>Volume NaOH = moles / concentration = 0.010 mol / 0.20 mol/dm³ = 0.050 dm³ = 50.0 cm³.'
    },
    {
      id: 'calc_q13',
      source: '[2018 Paper 1, Q12]',
      question: 'Bromobutane, C<sub>4</sub>H<sub>9</sub>Br, can be made from butanol using the reaction:<br>C<sub>4</sub>H<sub>9</sub>OH + HBr → C<sub>4</sub>H<sub>9</sub>Br + H<sub>2</sub>O<br><br>In an experiment, 10 g of butanol produced 12 g of bromobutane.<br>What is the percentage yield of bromobutane?<br>[M<sub>r</sub>: C<sub>4</sub>H<sub>9</sub>OH = 74, C<sub>4</sub>H<sub>9</sub>Br = 137]',
      image: '',
      options: [
        '45%',
        '54%',
        '65%',
        '83%'
      ],
      answer: 2,
      explanation: 'Moles of C<sub>4</sub>H<sub>9</sub>OH = 10 / 74 = 0.1351 mol.<br>Theoretical yield of C<sub>4</sub>H<sub>9</sub>Br = 0.1351 mol × 137 g/mol = 18.51 g.<br>Percentage yield = (12 g / 18.51 g) × 100 ≈ 65%.'
    },
    {
      id: 'calc_q14',
      source: '[2019 Paper 1, Q11]',
      question: 'Magnesium reacts with dilute sulfuric acid to form magnesium sulfate and hydrogen:<br>Mg + H<sub>2</sub>SO<sub>4</sub> → MgSO<sub>4</sub> + H<sub>2</sub><br><br>2.4 g of magnesium react with exactly 100 cm³ of 1 mol/dm³ sulfuric acid to give 2.4 dm³ of hydrogen at r.t.p.<br>Which row would give 4.8 dm³ of hydrogen at room temperature and pressure?',
      image: 'PASTE_YOUR_RAW_IMAGE_URL_HERE',
      options: [
        'mass of Mg: 2.4 g | H<sub>2</sub>SO<sub>4</sub> volume: 100 cm³ | H<sub>2</sub>SO<sub>4</sub> concentration: 2 mol/dm³',
        'mass of Mg: 2.4 g | H<sub>2</sub>SO<sub>4</sub> volume: 200 cm³ | H<sub>2</sub>SO<sub>4</sub> concentration: 1 mol/dm³',
        'mass of Mg: 4.8 g | H<sub>2</sub>SO<sub>4</sub> volume: 100 cm³ | H<sub>2</sub>SO<sub>4</sub> concentration: 1 mol/dm³',
        'mass of Mg: 4.8 g | H<sub>2</sub>SO<sub>4</sub> volume: 100 cm³ | H<sub>2</sub>SO<sub>4</sub> concentration: 2 mol/dm³'
      ],
      answer: 3,
      explanation: 'To double the hydrogen gas volume to 4.8 dm³ (0.20 mol H<sub>2</sub>), both reactants must be increased to at least 0.20 mol so neither limits the yield.<br>4.8 g Mg = 0.20 mol Mg.<br>100 cm³ of 2 mol/dm³ H<sub>2</sub>SO<sub>4</sub> = 0.100 dm³ × 2 mol/dm³ = 0.20 mol H<sub>2</sub>SO<sub>4</sub>.'
    },
    {
      id: 'calc_q15',
      source: '[2019 Paper 1, Q12]',
      question: '4.00 g of a metal oxide, XO<sub>2</sub>, is reduced to form 3.15 g of metal X.<br><br>What is the identity of X?',
      image: '',
      options: [
        ' titanium (Ti)',
        ' manganese (Mn)',
        ' tin (Sn)',
        ' lead (Pb)'
      ],
      answer: 2,
      explanation: 'Mass of oxygen = 4.00 - 3.15 = 0.85 g.<br>Moles of O atoms = 0.85 / 16 = 0.053125 mol.<br>From formula XO<sub>2</sub>, moles of X = 0.053125 / 2 = 0.02656 mol.<br>Relative atomic mass A<sub>r</sub> of X = 3.15 g / 0.02656 mol ≈ 118.6, which corresponds to Tin (Sn, A<sub>r</sub> ≈ 119).'
    },
    {
      id: 'calc_q16',
      source: '[2019 Paper 1, Q16]',
      question: 'The table shows information about some fuels.<br><br>Which statements are correct?<br>1. Octane produces more heat than hydrogen or methane for each gram of fuel burned.<br>2. On complete combustion, 1 g of hydrogen produces 286 kJ of energy.<br>3. When methane is completely combusted, the energy required for bond breaking is less than the energy released in bond forming.',
      image: 'PASTE_YOUR_RAW_IMAGE_URL_HERE',
      options: [
        '1, 2 and 3',
        '2 and 3 only',
        '2 only',
        '3 only'
      ],
      answer: 3,
      explanation: 'Combustion is exothermic, meaning bond breaking absorbs less energy than bond forming releases (Statement 3 is correct). Hydrogen yields ~143 kJ/g (not 286 kJ/g, as 286 kJ is per mole / 2g). Hydrogen has the highest energy density per gram among these fuels.'
    },
    {
      id: 'calc_q17',
      source: '[2020 Paper 1, Q9]',
      question: 'Which compound contains the highest percentage of sulfur by mass?',
      image: '',
      options: [
        'SO<sub>2</sub>',
        'H<sub>2</sub>SO<sub>4</sub>',
        'Na<sub>2</sub>S',
        'PbS<sub>2</sub>'
      ],
      answer: 0,
      explanation: 'Percentage of S by mass:<br>• SO<sub>2</sub>: 32 / 64 = 50.0%<br>• H<sub>2</sub>SO<sub>4</sub>: 32 / 98 = 32.7%<br>• Na<sub>2</sub>S: 32 / 78 = 41.0%<br>• PbS<sub>2</sub>: 64 / 271 = 23.6%'
    },
    {
      id: 'calc_q18',
      source: '[2020 Paper 1, Q10]',
      question: 'On heating, the carbonate of element X decomposes:<br>XCO<sub>3</sub>(s) → XO(s) + CO<sub>2</sub>(g)<br><br>6.25 g of XCO<sub>3</sub> is heated and 1.2 dm³ of carbon dioxide, measured at r.t.p., is produced.<br>What is the relative atomic mass, A<sub>r</sub>, of X?',
      image: '',
      options: [
        '57',
        '65',
        '125',
        '150'
      ],
      answer: 1,
      explanation: 'Moles of CO<sub>2</sub> = 1.2 / 24 = 0.050 mol.<br>Moles of XCO<sub>3</sub> = 0.050 mol.<br>M<sub>r</sub> of XCO<sub>3</sub> = 6.25 g / 0.050 mol = 125.<br>M<sub>r</sub>(XCO<sub>3</sub>) = A<sub>r</sub>(X) + 12 + (3 × 16) = A<sub>r</sub>(X) + 60 = 125.<br>A<sub>r</sub>(X) = 125 - 60 = 65.'
    },
    {
      id: 'calc_q19',
      source: '[2021 Paper 1, Q9]',
      question: 'Basic copper carbonate, Cu<sub>2</sub>CO<sub>3</sub>(OH)<sub>2</sub>, is used as a pigment in paint.<br><br>What is the percentage by mass of copper in basic copper carbonate?',
      image: '',
      options: [
        '28.8%',
        '31.2%',
        '57.7%',
        '62.4%'
      ],
      answer: 2,
      explanation: 'M<sub>r</sub> of Cu<sub>2</sub>CO<sub>3</sub>(OH)<sub>2</sub> = (2 × 64) + 12 + (3 × 16) + 2 × (16 + 1) = 128 + 12 + 48 + 34 = 222.<br>Percentage of Cu = (128 / 222) × 100 ≈ 57.7%.'
    },
    {
      id: 'calc_q20',
      source: '[2021 Paper 1, Q10]',
      question: 'Analysis of molecule X shows that it contains, by mass, 52% carbon, 13% hydrogen and 35% oxygen.<br><br>Which other information is needed to determine the molecular formula?',
      image: '',
      options: [
        'atomic numbers of carbon, hydrogen and oxygen and relative molecular mass of X',
        'atomic numbers of carbon, hydrogen and oxygen only',
        'relative atomic masses of carbon, hydrogen and oxygen and relative molecular mass of X',
        'relative atomic masses of carbon, hydrogen and oxygen only'
      ],
      answer: 2,
      explanation: 'Percentage compositions require Relative Atomic Masses (A<sub>r</sub>) to calculate the Empirical Formula. Converting the empirical formula to a Molecular Formula requires the Relative Molecular Mass (M<sub>r</sub>) of X.'
    },
    {
      id: 'calc_q21',
      source: '[2021 Paper 1, Q12]',
      question: 'Which volume of carbon dioxide gas, at room temperature and pressure, is produced when 2.65 g of sodium carbonate reacts with 100 cm³ of 0.10 mol/dm³ hydrochloric acid?',
      image: '',
      options: [
        '120 cm³',
        '240 cm³',
        '600 cm³',
        '1200 cm³'
      ],
      answer: 0,
      explanation: 'Equation: Na<sub>2</sub>CO<sub>3</sub> + 2HCl → 2NaCl + H<sub>2</sub>O + CO<sub>2</sub>.<br>Moles Na<sub>2</sub>CO<sub>3</sub> = 2.65 / 106 = 0.025 mol.<br>Moles HCl = 0.100 dm³ × 0.10 mol/dm³ = 0.010 mol.<br>HCl is the limiting reactant (requires 0.0050 mol Na<sub>2</sub>CO<sub>3</sub>).<br>Moles CO<sub>2</sub> produced = 0.010 / 2 = 0.0050 mol.<br>Volume CO<sub>2</sub> = 0.0050 mol × 24,000 cm³/mol = 120 cm³.'
    },
    {
      id: 'calc_q22',
      source: '[2022 Paper 1, Q8]',
      question: 'Hydrated copper(II) sulfate crystals have the formula CuSO<sub>4</sub>·5H<sub>2</sub>O in which one mole of copper(II) sulfate is combined with five moles of water.<br><br>What is the percentage by mass of oxygen in hydrated copper(II) sulfate crystals?<br>[A<sub>r</sub>: Cu = 64, S = 32, O = 16, H = 1]',
      image: '',
      options: [
        '(5 × 16 / 178) × 100',
        '(5 × 16 / 250) × 100',
        '(9 × 16 / 178) × 100',
        '(9 × 16 / 250) × 100'
      ],
      answer: 3,
      explanation: 'Total O atoms = 4 (from CuSO<sub>4</sub>) + 5 (from 5H<sub>2</sub>O) = 9 oxygen atoms.<br>Total M<sub>r</sub> = 64 + 32 + (4 × 16) + 5 × 18 = 250.<br>Percentage by mass of O = (9 × 16 / 250) × 100.'
    },
    {
      id: 'calc_q23',
      source: '[2022 Paper 1, Q9]',
      question: 'The structure of an organic compound is shown.<br><br>What is the empirical formula of the compound?',
      image: 'PASTE_YOUR_RAW_IMAGE_URL_HERE',
      options: [
        'HC(C<sub>3</sub>H<sub>5</sub>O<sub>2</sub>)<sub>3</sub>',
        'C<sub>3</sub>H<sub>5</sub>O<sub>2</sub>',
        'C<sub>5</sub>H<sub>8</sub>O<sub>3</sub>',
        'C<sub>10</sub>H<sub>16</sub>O<sub>6</sub>'
      ],
      answer: 2,
      explanation: 'Molecular formula from counting atoms: C<sub>10</sub>H<sub>16</sub>O<sub>6</sub>.<br>Simplest whole number ratio (divide by 2): C<sub>5</sub>H<sub>8</sub>O<sub>3</sub>.'
    },
    {
      id: 'calc_q24',
      source: '[2022 Paper 1, Q10]',
      question: 'Which sample of gas occupies the smallest volume? (All gases are at the same temperature and pressure.)',
      image: '',
      options: [
        '4 g of hydrogen',
        '34 g of ammonia',
        '44 g of carbon dioxide',
        '48 g of oxygen'
      ],
      answer: 2,
      explanation: 'Gas volume is directly proportional to moles of gas:<br>• 4 g H<sub>2</sub> = 4 / 2 = 2.0 mol<br>• 34 g NH<sub>3</sub> = 34 / 17 = 2.0 mol<br>• 44 g CO<sub>2</sub> = 44 / 44 = 1.0 mol (Smallest volume)<br>• 48 g O<sub>2</sub> = 48 / 32 = 1.5 mol'
    },
    {
      id: 'calc_q25',
      source: '[2022 Paper 1, Q11]',
      question: 'A solution containing 0.016 mol of barium hydroxide is added to a conical flask. The aqueous barium hydroxide is titrated with 1.25 mol/dm³ nitric acid.<br><br>Which volume of nitric acid is needed to give a neutral solution?',
      image: 'PASTE_YOUR_RAW_IMAGE_URL_HERE',
      options: [
        '6.4 cm³',
        '12.8 cm³',
        '25.6 cm³',
        '39.1 cm³'
      ],
      answer: 2,
      explanation: 'Reaction: Ba(OH)<sub>2</sub> + 2HNO<sub>3</sub> → Ba(NO<sub>3</sub>)<sub>2</sub> + 2H<sub>2</sub>O.<br>Moles HNO<sub>3</sub> needed = 2 × 0.016 = 0.032 mol.<br>Volume HNO<sub>3</sub> = 0.032 mol / 1.25 mol/dm³ = 0.0256 dm³ = 25.6 cm³.'
    },
    {
      id: 'calc_q26',
      source: '[2022 Paper 1, Q12]',
      question: 'Aqueous sodium chloride and aqueous silver nitrate react according to:<br>NaCl(aq) + AgNO<sub>3</sub>(aq) → AgCl(s) + NaNO<sub>3</sub>(aq)<br><br>A mixture of solid NaCl and NaNO<sub>3</sub> is analysed. 0.060 g of this mixture is reacted with 0.02 mol/dm³ aqueous AgNO<sub>3</sub>. The volume required is 29.4 cm³.<br><br>What is the percentage by mass of sodium chloride in the mixture?',
      image: '',
      options: [
        '42.7%',
        '57.3%',
        '58.8%',
        '83.3%'
      ],
      answer: 1,
      explanation: 'Moles AgNO<sub>3</sub> = 0.02 mol/dm³ × (29.4 / 1000) dm³ = 0.000588 mol.<br>Since mole ratio NaCl : AgNO<sub>3</sub> = 1 : 1, moles NaCl = 0.000588 mol.<br>Mass NaCl = 0.000588 mol × 58.5 g/mol = 0.0344 g.<br>Percentage by mass = (0.0344 g / 0.060 g) × 100 ≈ 57.3%.'
    }
  ]
};
