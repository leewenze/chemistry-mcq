// Ensure window.topicData exists
window.topicData = window.topicData || {};

// Add Chemical Bonding topic
window.topicData['chemical_bonding'] = {
  title: 'Chemical Bonding & Structure',
  description: 'Questions covering ionic, covalent, metallic bonding, giant lattices, simple molecules, and alloys.',
  questions: [
    {
      id: 'bond_q1',
      source: '[2014 Paper 1, Q5]',
      question: 'Solid copper metal, aqueous copper(II) sulfate, solid graphite and molten sodium chloride will all conduct electricity.<br><br>Which pair will conduct electricity because they both contain mobile ions?',
      image: '',
      options: [
        'aqueous copper(II) sulfate and molten sodium chloride',
        'solid copper metal and aqueous copper(II) sulfate',
        'solid copper metal and solid graphite',
        'solid graphite and molten sodium chloride'
      ],
      answer: 0,
      explanation: 'Ionic substances conduct electricity in aqueous or molten states due to free-moving (mobile) ions. Copper metal and graphite conduct via delocalised electrons.'
    },
    {
      id: 'bond_q2',
      source: '[2014 Paper 1, Q7]',
      question: 'The diagram shows the structure of a compound of carbon and silicon, (SiC)<sub>n</sub>.<br><br>Which statement would be true for (SiC)<sub>n</sub>?',
      image: 'https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/chemical-bonding-02.png',
      options: [
        'It acts as a lubricant.',
        'It conducts electricity.',
        'It is insoluble in water.',
        'It has a low melting point.'
      ],
      answer: 2,
      explanation: 'Silicon carbide (SiC) is a giant covalent structure (similar to diamond) held by strong covalent bonds, making it extremely hard, insoluble in water, and having a very high melting point.'
    },
    {
      id: 'bond_q3',
      source: '[2014 Paper 1, Q8]',
      question: 'In which molecule are all the outer electrons of the atoms involved in bonding?',
      image: '',
      options: [
        'HF',
        'H<sub>2</sub>O',
        'NH<sub>3</sub>',
        'CH<sub>4</sub>'
      ],
      answer: 3,
      explanation: 'In methane (CH<sub>4</sub>), Carbon shares all 4 of its outer valence electrons with 4 Hydrogen atoms, leaving no unbonded lone pairs.'
    },
    {
      id: 'bond_q4',
      source: '[2014 Paper 1, Q10 / 2018 Paper 1, Q7]',
      question: 'A compound contains two elements, metal Y and non-metal Z. The compound consists of a lattice of positive ions and negative ions. Each positive ion is surrounded by eight negative ions and each negative ion is surrounded by four positive ions.<br><br>Which ions are present in the compound, and what is its formula?',
      image: '',
      options: [
        'ions present: Y<sup>+</sup> Z<sup>2-</sup> | formula: Y<sub>2</sub>Z',
        'ions present: Y<sup>2+</sup> Z<sup>-</sup> | formula: YZ<sub>2</sub>',
        'ions present: Z<sup>+</sup> Y<sup>2-</sup> | formula: Z<sub>2</sub>Y',
        'ions present: Z<sup>2+</sup> Y<sup>-</sup> | formula: ZY<sub>2</sub>'
      ],
      answer: 0,
      explanation: 'To maintain electrical neutrality, if each Y<sup>n+</sup> ion coordinates with 8 Z<sup>m-</sup> ions while each Z<sup>m-</sup> coordinates with 4 Y<sup>n+</sup>, there must be twice as many Y ions as Z ions. Thus, Y has a 1+ charge (Y<sup>+</sup>), Z has a 2- charge (Z<sup>2-</sup>), yielding the empirical formula Y<sub>2</sub>Z.'
    },
    {
      id: 'bond_q5',
      source: '[2014 Paper 1, Q23]',
      question: 'A student thinks that element Q is a metal because it has a high melting point and a high boiling point. What other properties could element Q have if it is a metal?<br><br>1. Q conducts electricity when solid.<br>2. Q forms an acidic oxide QO<sub>2</sub>.<br>3. Q is malleable.',
      image: '',
      options: [
        '1, 2 and 3',
        '1 and 2 only',
        '1 and 3 only',
        '2 and 3 only'
      ],
      answer: 2,
      explanation: 'Metals conduct electricity in the solid state and are malleable. Basic oxides are characteristic of metals, whereas acidic oxides (QO<sub>2</sub>) are formed by non-metals.'
    },
    {
      id: 'bond_q6',
      source: '[2014 Paper 1, Q26]',
      question: 'Magnalium is an alloy of aluminium (85%) and magnesium (15%). Some properties of magnalium are listed below. Which property of magnalium is not a reason for its use in the construction of aircraft?',
      image: '',
      options: [
        'It conducts electricity.',
        'It is less dense than aluminium.',
        'It is stronger than aluminium or magnesium.',
        'The surface of the alloy is covered by a layer of aluminium oxide.'
      ],
      answer: 0,
      explanation: 'Electrical conductivity is not a primary structural property required for aircraft body design, unlike strength, low density, and corrosion resistance.'
    },
    {
      id: 'bond_q7',
      source: '[2014 Paper 1, Q31]',
      question: 'Which statement about the substance formed when a given mass of an element burns in excess oxygen is always correct?<br><br>The substance formed is:',
      image: '',
      options: [
        'denser than the element.',
        'greater in mass than the element.',
        'soluble in water.',
        'white in colour.'
      ],
      answer: 1,
      explanation: 'When an element reacts with oxygen, oxygen atoms combine with the element to form an oxide. Due to conservation of mass, the resulting oxide must have a greater mass than the original element.'
    },
    {
      id: 'bond_q8',
      source: '[2015 Paper 1, Q4]',
      question: 'Which row shows the substances in the order of their melting points?',
      image: '',
      options: [
        'lowest: bromine → chlorine → diamond → highest: sodium',
        'lowest: chlorine → bromine → sodium → highest: diamond',
        'lowest: diamond → bromine → sodium → highest: chlorine',
        'lowest: sodium → diamond → bromine → highest: chlorine'
      ],
      answer: 1,
      explanation: 'Chlorine is a gas at room temperature (lowest mp), Bromine is a liquid, Sodium is a metal (mp ~98 °C), and Diamond is a giant covalent structure with an extremely high melting point (~3500 °C).'
    },
    {
      id: 'bond_q9',
      source: '[2015 Paper 1, Q5]',
      question: 'The table shows some properties of four substances. Which substance has a structure held together by electrostatic forces of attraction between oppositely charged ions?',
      image: 'https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/chemical-bonding-09.png',
      options: [
        'melting point: -120 °C | boiling point: -60 °C | soluble in water: yes | conducts electricity solid: no | conducts electricity molten: no',
        'melting point: 546 °C | boiling point: 974 °C | soluble in water: no | conducts electricity solid: yes | conducts electricity molten: yes',
        'melting point: 875 °C | boiling point: 1242 °C | soluble in water: yes | conducts electricity solid: no | conducts electricity molten: yes',
        'melting point: 1623 °C | boiling point: 2475 °C | soluble in water: no | conducts electricity solid: no | conducts electricity molten: no'
      ],
      answer: 2,
      explanation: 'Ionic compounds have high melting points, do not conduct electricity as solids, but do conduct when molten due to mobile ions.'
    },
    {
      id: 'bond_q10',
      source: '[2015 Paper 1, Q7]',
      question: 'In which compound does one of the atoms not achieve the electronic configuration 2,8?',
      image: '',
      options: [
        'CCl<sub>4</sub>',
        'CO<sub>2</sub>',
        'MgO',
        'Na<sub>2</sub>O'
      ],
      answer: 0,
      explanation: 'In CCl<sub>4</sub>, Chlorine achieves the configuration 2,8,8 (3 full shells). In the other compounds, all constituent ions/atoms achieve 2,8 (Neon configuration).'
    },
    {
      id: 'bond_q11',
      source: '[2015 Paper 1, Q8]',
      question: 'Which particles are responsible for the conduction of electricity through metals?',
      image: '',
      options: [
        'electrons only',
        'electrons and positive ions',
        'negative ions only',
        'negative ions and positive ions'
      ],
      answer: 0,
      explanation: 'Metallic bonding consists of positive metal ions in a lattice with a delocalised "sea" of free-moving electrons that carry charge.'
    },
    {
      id: 'bond_q12',
      source: '[2015 Paper 1, Q9]',
      question: 'Which structure does not contain atoms bonded to other atoms by four covalent bonds?',
      image: '',
      options: [
        'diamond',
        'graphite',
        'poly(ethene)',
        'sand (silicon dioxide)'
      ],
      answer: 1,
      explanation: 'In graphite, each carbon atom forms only 3 covalent bonds to create hexagonal layers, leaving one delocalised electron per carbon.'
    },
    {
      id: 'bond_q13',
      source: '[2015 Paper 1, Q10]',
      question: 'Covalent bonds are formed when atoms share electrons. How many electrons are provided by each of the atoms oxygen, fluorine and carbon when they form covalent compounds?',
      image: '',
      options: [
        'oxygen: 1 | fluorine: 2 | carbon: 3',
        'oxygen: 1 | fluorine: 2 | carbon: 4',
        'oxygen: 2 | fluorine: 1 | carbon: 3',
        'oxygen: 2 | fluorine: 1 | carbon: 4'
      ],
      answer: 3,
      explanation: 'To complete their outer shells: Carbon (Group IV) provides 4 electrons, Oxygen (Group VI) provides 2 electrons, and Fluorine (Group VII) provides 1 electron.'
    },
    {
      id: 'bond_q14',
      source: '[2015 Paper 1, Q11]',
      question: 'Oxygen crystals are obtained by freezing oxygen at -223 °C. What will the oxygen crystals contain?',
      image: '',
      options: [
        'oxygen atoms and molecules',
        'oxygen ions and oxygen atoms',
        'oxygen molecules only',
        'oxygen atoms only'
      ],
      answer: 2,
      explanation: 'Oxygen is a simple molecular substance (O<sub>2</sub>). Freezing it creates a molecular crystal lattice held together by weak intermolecular forces between O<sub>2</sub> molecules.'
    },
    {
      id: 'bond_q15',
      source: '[2015 Paper 1, Q12]',
      question: 'Carbon disulfide, CS<sub>2</sub>, is a covalent liquid. Which is the dot-and-cross diagram for carbon disulfide?',
      image: 'https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/chemical-bonding-15.png',
      options: [
        'Diagram A',
        'Diagram B',
        'Diagram C',
        'Diagram D'
      ],
      answer: 0,
      explanation: 'Like CO<sub>2</sub>, CS<sub>2</sub> forms double covalent bonds between Carbon and each Sulfur atom (S=C=S), sharing 4 electrons per bond pair.'
    },
    {
      id: 'bond_q16',
      source: '[2016 Paper 1, Q5]',
      question: 'Which statements correctly describe the properties of mixtures of iron and sulfur, and the compound iron(II) sulfide, FeS?',
      image: 'https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/chemical-bonding-16.png',
      options: [
        '1 only',
        '1 and 2',
        '2 and 3',
        '3 only'
      ],
      answer: 1,
      explanation: 'In a mixture, iron retains its magnetic properties and sulfur can be dissolved away. In FeS (a chemical compound), the properties differ completely from the constituent elements.'
    },
    {
      id: 'bond_q17',
      source: '[2016 Paper 1, Q6]',
      question: 'Which substance could be graphite?',
      image: '',
      options: [
        'melting point: -52 °C | boiling point: -2 °C | electrical conductivity: poor',
        'melting point: 98 °C | boiling point: 883 °C | electrical conductivity: good',
        'melting point: 648 °C | boiling point: 1294 °C | electrical conductivity: poor',
        'melting point: 3652 °C | boiling point: 4827 °C | electrical conductivity: good'
      ],
      answer: 3,
      explanation: 'Graphite has an extremely high melting point (>3500 °C) due to giant covalent networks and conducts electricity in the solid state due to delocalised electrons.'
    },
    {
      id: 'bond_q18',
      source: '[2016 Paper 1, Q7]',
      question: 'Which salt contains covalent bonds?',
      image: '',
      options: [
        'ammonium chloride',
        'magnesium bromide',
        'potassium iodide',
        'sodium fluoride'
      ],
      answer: 0,
      explanation: 'Ammonium chloride (NH<sub>4</sub>Cl) is an ionic salt, but the polyatomic ammonium ion (NH<sub>4</sub><sup>+</sup>) contains nitrogen and hydrogen held together by covalent bonds.'
    },
    {
      id: 'bond_q19',
      source: '[2016 Paper 1, Q8]',
      question: 'Phosphorus trichloride, PCl<sub>3</sub>, is a molecule formed when the elements phosphorus (Group V) and chlorine (Group VII) react together. How many electrons in the outer shell of the phosphorus atom are not involved in bonding?',
      image: '',
      options: [
        '0',
        '1',
        '2',
        '3'
      ],
      answer: 2,
      explanation: 'Phosphorus has 5 valence electrons. It uses 3 electrons to form single covalent bonds with 3 chlorine atoms, leaving 1 non-bonding lone pair (2 electrons).'
    },
    {
      id: 'bond_q20',
      source: '[2016 Paper 1, Q16]',
      question: 'The formation of metallic oxides involves the transfer of electrons from metal atoms to oxygen atoms. In the formation of one mole of which metallic oxide do the metal atoms not transfer exactly two moles of electrons?',
      image: '',
      options: [
        'aluminium oxide',
        'iron(II) oxide',
        'magnesium oxide',
        'sodium oxide'
      ],
      answer: 0,
      explanation: 'In 1 mole of Al<sub>2</sub>O<sub>3</sub>, two moles of Al<sup>3+</sup> ions are formed, transferring a total of 6 moles of electrons. In MgO, FeO, and Na<sub>2</sub>O, exactly 2 moles of electrons are transferred per mole of oxide.'
    },
    {
      id: 'bond_q21',
      source: '[2016 Paper 1, Q29]',
      question: 'Steel is an alloy of iron with a very small percentage of carbon. Which statement is correct?',
      image: '',
      options: [
        'A decrease in the percentage of carbon makes the steel more brittle.',
        'An increase in the percentage of carbon makes the steel softer.',
        'Carbon disrupts the metallic structure of iron.',
        'Iron atoms are the same size as carbon atoms.'
      ],
      answer: 2,
      explanation: 'Carbon atoms fit into the interstitial spaces between iron atoms, disrupting the regular layer arrangement and preventing iron atoms from sliding over each other easily.'
    },
    {
      id: 'bond_q22',
      source: '[2017 Paper 1, Q6]',
      question: 'A metal X and a non-metal Y react together to form an ionic compound X<sub>2</sub>Y. Which statement is correct when this compound is being formed?',
      image: '',
      options: [
        'Each atom of X gives away one electron only.',
        'Each atom of X receives one electron only.',
        'Each atom of Y gives away one electron only.',
        'Each atom of Y receives one electron only.'
      ],
      answer: 0,
      explanation: 'The formula X<sub>2</sub>Y indicates two X<sup>+</sup> ions and one Y<sup>2-</sup> ion. Therefore, each metal atom X gives away 1 electron to achieve a 1+ charge.'
    },
    {
      id: 'bond_q23',
      source: '[2017 Paper 1, Q7]',
      question: 'Which pair of elements combine together to form a covalent molecule?',
      image: '',
      options: [
        'aluminium and oxygen',
        'carbon and sulfur',
        'lithium and nitrogen',
        'magnesium and sulfur'
      ],
      answer: 1,
      explanation: 'Covalent bonds form between non-metal elements. Carbon and sulfur are both non-metals, so they share electrons to form covalent molecules (e.g., CS<sub>2</sub>).'
    },
    {
      id: 'bond_q24',
      source: '[2017 Paper 1, Q8]',
      question: 'Which statements are correct for both metals and ionic compounds?<br><br>1. They conduct electricity because electrons flow through the solid material.<br>2. Most have high melting points.<br>3. They contain positive ions.',
      image: '',
      options: [
        '1, 2 and 3',
        '1 and 2 only',
        '1 and 3 only',
        '2 and 3 only'
      ],
      answer: 3,
      explanation: 'Both metals and ionic lattice structures contain positive ions and generally feature high melting points. However, ionic solids do not conduct electricity via flowing electrons.'
    },
    {
      id: 'bond_q25',
      source: '[2017 Paper 1, Q28]',
      question: 'Duralumin is an aluminium alloy that contains copper. Which statement about duralumin is correct?',
      image: '',
      options: [
        'It contains aluminium and copper that are chemically combined.',
        'It contains mobile electrons.',
        'It has a lattice of oppositely charged aluminium ions and copper ions.',
        'It has the same melting point as copper.'
      ],
      answer: 1,
      explanation: 'Alloys are metallic mixtures (not chemical compounds) held together by metallic bonding, meaning they feature a lattice of metal cations with mobile delocalised electrons.'
    },
    {
      id: 'bond_q26',
      source: '[2018 Paper 1, Q6]',
      question: 'A substance has a high melting point. When solid, it does not conduct electricity but when molten, it does conduct. Which type of structure does the substance have?',
      image: '',
      options: [
        'giant lattice',
        'metallic',
        'polymeric',
        'simple molecular'
      ],
      answer: 0,
      explanation: 'An ionic giant lattice has a high melting point due to strong ionic bonds, does not conduct as a solid (ions fixed), but conducts when molten due to mobile ions.'
    },
    {
      id: 'bond_q27',
      source: '[2018 Paper 1, Q8]',
      question: 'How many covalent bonds are there in the molecule with the formula CH<sub>2</sub>CHCH<sub>3</sub>?',
      image: '',
      options: [
        '7',
        '8',
        '9',
        '10'
      ],
      answer: 2,
      explanation: 'Propene (C<sub>3</sub>H<sub>6</sub>) contains: 6 C-H single bonds, 1 C-C single bond, and 1 C=C double bond (2 shared pairs), giving a total of 6 + 1 + 2 = 9 covalent bonds.'
    },
    {
      id: 'bond_q28',
      source: '[2018 Paper 1, Q9]',
      question: 'Copper is a metal. The structure of copper is described as a lattice of positive ions in a \'sea of electrons\'. Which statements about copper are correct?<br><br>1. Copper conducts heat because the positive ions are free to move.<br>2. Copper conducts electricity because the electrons are free to move.<br>3. Copper ions are held together because of their attraction for each other.<br>4. Copper has a high melting point due to the strong covalent bonds.',
      image: '',
      options: [
        '1, 2 and 3',
        '2, 3 and 4',
        '2 and 3 only',
        '2 only'
      ],
      answer: 3,
      explanation: 'Only statement 2 is correct. Free-moving delocalised electrons conduct electricity. Positive ions do not move freely, ions are held by attraction to delocalised electrons (not to each other), and bonding is metallic (not covalent).'
    },
    {
      id: 'bond_q29',
      source: '[2018 Paper 1, Q28]',
      question: 'Which statement about alloys is correct?',
      image: '',
      options: [
        'They are good conductors of electricity as they have mobile ions.',
        'They are formed by a chemical reaction between two metals.',
        'They can all be represented by a molecular formula.',
        'Their structures contain a \'sea of electrons\'.'
      ],
      answer: 3,
      explanation: 'Alloys retain metallic bonding characteristics, consisting of metal lattices surrounded by a delocalised "sea of electrons".'
    },
    {
      id: 'bond_q30',
      source: '[2019 Paper 1, Q6]',
      question: 'Which property is common to both diamond and graphite?',
      image: '',
      options: [
        'Each atom in the structure forms four covalent bonds.',
        'They act as a lubricant when finely divided.',
        'They are electrical insulators.',
        'They react with oxygen to produce carbon dioxide.'
      ],
      answer: 3,
      explanation: 'Diamond and graphite are allotropes of pure carbon. Complete combustion of either substance in oxygen yields carbon dioxide gas (C + O<sub>2</sub> → CO<sub>2</sub>).'
    },
    {
      id: 'bond_q31',
      source: '[2019 Paper 1, Q7]',
      question: 'Both calcium chloride and potassium chloride are ionic compounds. Which statements about these compounds are correct?<br><br>1. Potassium chloride has a higher melting point than calcium chloride because the potassium ion has a greater charge than the calcium ion.<br>2. In the calcium chloride lattice, the ratio of calcium ions to chloride ions is half that of the ratio of potassium ions to chloride ions in the potassium chloride lattice.<br>3. Molten calcium chloride has a greater electrical conductivity than molten potassium chloride because calcium contributes more electrons to the delocalised \'sea of electrons\' than does potassium.',
      image: '',
      options: [
        '1 and 2',
        '1 and 3',
        '2 only',
        '3 only'
      ],
      answer: 2,
      explanation: 'In CaCl<sub>2</sub>, the Ca<sup>2+</sup> : Cl<sup>-</sup> ratio is 1:2. In KCl, the K<sup>+</sup> : Cl<sup>-</sup> ratio is 1:1. Thus, 1/2 is half of 1/1. (Statements 1 and 3 contain incorrect statements regarding ionic charges and metallic electron seas).'
    },
    {
      id: 'bond_q32',
      source: '[2019 Paper 1, Q9]',
      question: 'For which does 1 mole of the metal have the most electrons in its \'sea of electrons\'?',
      image: '',
      options: [
        'aluminium',
        'barium',
        'caesium',
        'strontium'
      ],
      answer: 0,
      explanation: 'Aluminium is in Group III and releases 3 moles of valence electrons per mole of metal atoms into the delocalised sea (Group II elements release 2, Group I elements release 1).'
    },
    {
      id: 'bond_q33',
      source: '[2020 Paper 1, Q8]',
      question: 'Which two substances have similar three-dimensional arrangements of their atoms?',
      image: '',
      options: [
        'diamond and silicon dioxide',
        'graphite and diamond',
        'iodine and graphite',
        'silicon dioxide and iodine'
      ],
      answer: 0,
      explanation: 'Both diamond and silicon dioxide (SiO<sub>2</sub>) form giant 3D tetrahedral network lattices.'
    },
    {
      id: 'bond_q34',
      source: '[2021 Paper 1, Q7]',
      question: 'The following all contain covalent bonds:<br>1. ammonia<br>2. carbon dioxide<br>3. ethanol<br><br>Which contain only single covalent bonds?',
      image: '',
      options: [
        '1 and 2',
        '1 only',
        '1 and 3',
        '3 only'
      ],
      answer: 2,
      explanation: 'Ammonia (NH<sub>3</sub>) and ethanol (C<sub>2</sub>H<sub>5</sub>OH) contain only single covalent bonds. Carbon dioxide (CO<sub>2</sub>) contains double covalent bonds (O=C=O).'
    },
    {
      id: 'bond_q35',
      source: '[2021 Paper 1, Q8]',
      question: 'Which statements about metals are correct?<br><br>1. Metals are not malleable.<br>2. Metals conduct thermal energy.<br>3. Metals have a lattice of positive ions in a \'sea of electrons\'.',
      image: '',
      options: [
        '1 and 2 only',
        '1 and 3 only',
        '2 and 3 only',
        '1, 2 and 3'
      ],
      answer: 2,
      explanation: 'Metals are malleable (layers of ions slide over each other), conduct heat efficiently, and consist of positive ions in a sea of delocalised electrons.'
    },
    {
      id: 'bond_q36',
      source: '[2021 Paper 1, Q25]',
      question: 'The arrangement of atoms in pure iron is shown.<br><br>Steel can be made by adding carbon to pure iron. Which description of the arrangement of atoms in steel is correct?',
      image: 'https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/chemical-bonding-36.png',
      options: [
        'a regular pattern of carbon atoms with iron atoms fitting into the gaps between them',
        'a regular pattern of iron atoms with carbon atoms fitting into the gaps between them',
        'an irregular pattern of iron atoms with carbon atoms randomly spread throughout the structure',
        'rows of iron atoms alternating with rows of carbon atoms'
      ],
      answer: 1,
      explanation: 'Steel is an interstitial alloy where small carbon atoms fit into interstitial gaps within the metallic iron lattice.'
    },
    {
      id: 'bond_q37',
      source: '[2022 Paper 1, Q5]',
      question: 'Sand (silicon dioxide), diamond, graphite and iodine all contain covalent bonds. Which statement is correct?',
      image: '',
      options: [
        'Graphite is used as a lubricant because each layer in its structure is held to the next layer by strong covalent bonds.',
        'Diamond has atoms that are arranged in a tetrahedral structure.',
        'Silicon dioxide and graphite both have free electrons and therefore can conduct electricity.',
        'Upon gentle warming, iodine changes from solid to gas as its covalent bonds are weak.'
      ],
      answer: 1,
      explanation: 'In diamond, each carbon atom is covalently bonded to four others in a rigid 3D tetrahedral structure.'
    },
    {
      id: 'bond_q38',
      source: '[2022 Paper 1, Q6]',
      question: 'Part of the giant lattice structure of sodium chloride is shown.<br><br>The structure repeats to make a giant lattice. In the giant lattice, how many chloride ions directly surround each sodium ion?',
      image: 'https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/chemical-bonding-38.png',
      options: [
        '3',
        '4',
        '5',
        '6'
      ],
      answer: 3,
      explanation: 'In the face-centred cubic NaCl lattice structure, each Na<sup>+</sup> ion has a coordination number of 6 (surrounded by 6 Cl<sup>-</sup> ions).'
    },
    {
      id: 'bond_q39',
      source: '[2022 Paper 1, Q7]',
      question: 'In one molecule of carbon dioxide, CO<sub>2</sub>, what is the total number of electrons present and how many electrons are involved in bonding between the carbon and oxygen atoms?',
      image: '',
      options: [
        'total number of electrons: 16 | electrons involved in bonding: 4',
        'total number of electrons: 16 | electrons involved in bonding: 8',
        'total number of electrons: 22 | electrons involved in bonding: 4',
        'total number of electrons: 22 | electrons involved in bonding: 8'
      ],
      answer: 3,
      explanation: 'Total electrons = 6 (from Carbon) + 8x2 (from two Oxygens) = 22 electrons total. CO<sub>2</sub> has two double bonds (O=C=O), so 8 electrons are involved in bonding.'
    }
  ]
};
