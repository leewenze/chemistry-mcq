window.topicData = window.topicData || {};

window.topicData["organic"] = {
  title: "Organic Chemistry",
  description: "Questions on Alkanes, Alkenes, Alcohols, Carboxylic Acids, Esters, Petroleum Fractions, Cracking, and Addition/Substitution Reactions.",
  questions: [
    {
      id: "organic_q1",
      source: "2014 P1 Q33",
      image: "https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/organic-01.png",
      question: "The structure of a chloroethene molecule is shown.<br>Which row correctly describes the properties of chloroethene?",
      options: [
        "hydrocarbon: no | reacts with aqueous bromine: no",
        "hydrocarbon: no | reacts with aqueous bromine: yes",
        "hydrocarbon: yes | reacts with aqueous bromine: no",
        "hydrocarbon: yes | reacts with aqueous bromine: yes"
      ],
      answer: 1,
      explanation: "Chloroethene contains chlorine in addition to carbon and hydrogen, so it is not a hydrocarbon. It contains a C=C double bond, so it undergoes addition with aqueous bromine (decolourising it)."
    },
    {
      id: "organic_q2",
      source: "2014 P1 Q34",
      question: "What is the minimum number of moles of oxygen molecules required for the complete combustion of one mole of propanol?",
      options: [
        "3.0",
        "4.5",
        "5.0",
        "8.0"
      ],
      answer: 1,
      explanation: "The balanced equation for complete combustion of propanol is:<br>C₃H₇OH + 4.5O₂ → 3CO₂ + 4H₂O.<br>Thus, 4.5 moles of O₂ are required for 1 mole of propanol."
    },
    {
      id: "organic_q3",
      source: "2014 P1 Q35",
      question: "When crude oil is fractionally distilled, which compounds leave from the top of the fractionating column?",
      options: [
        "the compounds that are the least flammable",
        "the compounds that are the most viscous",
        "the compounds with the highest relative molecular mass",
        "the compounds with the lowest boiling points"
      ],
      answer: 3,
      explanation: "The top of the fractionating column is coolest, so compounds with the lowest boiling points (smallest relative molecular mass, lowest viscosity, and highest flammability) exit from the top."
    },
    {
      id: "organic_q4",
      source: "2014 P1 Q36",
      image: "https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/organic-04.png",
      question: "Which of the compounds below are isomers of each other?<br>1 ethyl ethanoate<br>2 propyl methanoate<br>3 propanoic acid",
      options: [
        "1, 2 and 3",
        "1 and 2 only",
        "1 and 3 only",
        "2 and 3 only"
      ],
      answer: 1,
      explanation: "Ethyl ethanoate (CH₃COOCH₂CH₃) and propyl methanoate (HCOOCH₂CH₂CH₃) both have the molecular formula C₄H₈O₂. Propanoic acid has the formula C₃H₆O₂. Compounds 1 and 2 share the same molecular formula but have different structural arrangements, making them isomers."
    },
    {
      id: "organic_q5",
      source: "2014 P1 Q37",
      question: "A carboxylic acid has the formula C₂H₄O₂. What type of formula is this?",
      options: [
        "empirical formula",
        "general formula",
        "molecular formula",
        "structural formula"
      ],
      answer: 2,
      explanation: "C₂H₄O₂ shows the actual total number of atoms of each element in a single molecule of ethanoic acid, which defines its molecular formula."
    },
    {
      id: "organic_q6",
      source: "2014 P1 Q39",
      image: "https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/organic-06.png",
      question: "An organic compound Z has the empirical formula C₂H₄O and a relative molecular mass of 88. It reacts with ethanol in the presence of concentrated sulfuric acid to give a sweet-smelling liquid. Which structure is Z?",
      options: [
        "Structure A",
        "Structure B",
        "Structure C",
        "Structure D"
      ],
      answer: 3,
      explanation: "The empirical formula mass of C₂H₄O is 2(12) + 4(1) + 16 = 44. Since Mᵣ = 88, the molecular formula is (C₂H₄O)₂ = C₄H₈O₂. Reacting with ethanol to form a sweet-smelling ester identifies Z as a carboxylic acid, specifically butanoic acid (CH₃CH₂CH₂CO₂H)."
    },
    {
      id: "organic_q7",
      source: "2015 P1 Q33",
      image: "https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/organic-07.png",
      question: "Ethanol can be manufactured from ethene or from glucose. The table gives statements about the processes involved. In which row are both statements incorrect?",
      options: [
        "process using ethene: conversion to ethanol needs temperatures greater than 100 °C | process using glucose: conversion to ethanol also produces carbon dioxide",
        "process using ethene: conversion to ethanol uses yeast as catalyst | process using glucose: conversion to ethanol is carried out at 100 °C",
        "process using ethene: ethene is obtained by cracking | process using glucose: glucose is obtained from plants",
        "process using ethene: the conversion reaction is carried out with the reagents as gases | process using glucose: the conversion reaction is carried out in aqueous solution"
      ],
      answer: 1,
      explanation: "For the process using ethene, phosphoric(V) acid is used as catalyst (not yeast). For fermentation of glucose, yeast is used at around 37 °C (100 °C would denature the enzymes/kill yeast). Both statements in row B are incorrect."
    },
    {
      id: "organic_q8",
      source: "2015 P1 Q35",
      question: "Which property shows an increase in the alkane series from butane → propane → ethane → methane?",
      options: [
        "boiling point",
        "flammability",
        "melting point",
        "viscosity"
      ],
      answer: 1,
      explanation: "Moving from butane (C₄H₁₀) to methane (CH₄), the carbon chain length decreases. As chain length decreases, molecules become smaller and easier to ignite, so flammability increases."
    },
    {
      id: "organic_q9",
      source: "2015 P1 Q36",
      question: "An alcohol, X, was fully oxidised to a carboxylic acid. Neutralisation of the acid with calcium carbonate gave a salt of formula (C₂H₅CO₂)₂Ca. What was alcohol X?",
      options: [
        "C₂H₅OH",
        "C₂H₅CH₂OH",
        "C₂H₅CH₂CH₂OH",
        "C₂H₅CH₂CH₂CH₂OH"
      ],
      answer: 1,
      explanation: "The carboxylate anion C₂H₅CO₂⁻ corresponds to propanoic acid (C₂H₅COOH, containing 3 carbon atoms). Oxidation of an alcohol preserves the carbon chain length, so alcohol X must be propan-1-ol (C₂H₅CH₂OH)."
    },
    {
      id: "organic_q10",
      source: "2015 P1 Q37",
      question: "How many moles of oxygen would be used when 1 mole of propane, C₃H₈, is completely burnt in the air to form carbon dioxide and water?",
      options: [
        "3",
        "4",
        "5",
        "7"
      ],
      answer: 2,
      explanation: "The balanced combustion equation for propane is:<br>C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.<br>So 5 moles of oxygen are required."
    },
    {
      id: "organic_q11",
      source: "2015 P1 Q38",
      question: "Petroleum can be separated into fractions by fractional distillation. Which statement about this process is not correct?",
      options: [
        "In a fractionating column, the bitumen fraction is obtained below the kerosene fraction.",
        "The fraction obtained at the top of the fractionating column has the highest boiling point.",
        "The lubricating oil fraction is a source of polishes and waxes.",
        "The relative molecular masses of the compounds obtained near the bottom of the fractionating column are higher than those of the compounds obtained near the top of the column."
      ],
      answer: 1,
      explanation: "Fractions collected at the top of the fractionating column have the lowest boiling points, not the highest."
    },
    {
      id: "organic_q12",
      source: "2015 P1 Q39",
      question: "The cracking of one mole of X, a large alkane, produces two moles of ethene, two moles of propene and one mole of propane. How many carbon atoms does one molecule of X contain?",
      options: [
        "8",
        "10",
        "13",
        "16"
      ],
      answer: 2,
      explanation: "Calculate total carbon atoms from products:<br>2 ethene (2 × 2 = 4) + 2 propene (2 × 3 = 6) + 1 propane (1 × 3 = 3) = 4 + 6 + 3 = 13 carbon atoms."
    },
    {
      id: "organic_q13",
      source: "2016 P1 Q30 / 2020 P1 Q38",
      image: "https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/organic-13.png",
      question: "Compound Z has the empirical formula CH₂,<br>has an Mᵣ of 56,<br>reacts with steam to form two alcohols that have different structural formulae.<br>What is compound Z?",
      options: [
        "Structure A",
        "Structure B",
        "Structure C",
        "Structure D"
      ],
      answer: 1,
      explanation: "Empirical mass CH₂ = 14. Mᵣ = 56, so molecular formula is C₄H₈ (an alkene). Addition of steam (hydration) to asymmetrical but-1-ene (CH₃CH₂CH=CH₂) produces both butan-1-ol and butan-2-ol, which are two different structural alcohols."
    },
    {
      id: "organic_q14",
      source: "2016 P1 Q32",
      question: "Which two compounds are commonly used as fuels in engines?",
      options: [
        "diesel and paraffin",
        "methane and naphtha",
        "naphtha and bitumen",
        "paraffin and bitumen"
      ],
      answer: 0,
      explanation: "Diesel (diesel oil) is used as fuel for diesel engines in trucks/trains, and paraffin (kerosene) is used as jet fuel for aircraft engines."
    },
    {
      id: "organic_q15",
      source: "2016 P1 Q33",
      question: "X is a compound that fizzes when added to aqueous sodium carbonate. What could be true about X?",
      options: [
        "It could be formed by reducing an alcohol.",
        "It could form an ester with a carboxylic acid.",
        "It could have the empirical formula C₂H₄O.",
        "It could have the molecular formula C₂H₄O₂."
      ],
      answer: 3,
      explanation: "Effervescence with sodium carbonate indicates X is a carboxylic acid. Ethanoic acid has the molecular formula C₂H₄O₂ (CH₃COOH)."
    },
    {
      id: "organic_q16",
      source: "2016 P1 Q34",
      question: "Which statements are true about alkanes?<br>1 Their general formula is CₙH₂ₙ.<br>2 They are flammable.<br>3 They react with chlorine.",
      options: [
        "1 and 2 only",
        "2 and 3 only",
        "1 and 3 only",
        "1, 2 and 3"
      ],
      answer: 1,
      explanation: "Statement 1 is incorrect because the general formula of alkanes is CₙH₂ₙ₊₂ (CₙH₂ₙ is for alkenes). Statement 2 is true (alkanes burn in air). Statement 3 is true (substitution reaction with chlorine in UV light)."
    },
    {
      id: "organic_q17",
      source: "2016 P1 Q35",
      question: "Which compound is obtained by the oxidation of ethanol?",
      options: [
        "HCO₂CH₃",
        "C₂H₅CO₂H",
        "CH₃OH",
        "CH₃CO₂H"
      ],
      answer: 3,
      explanation: "Oxidising ethanol (CH₃CH₂OH) with acidified potassium manganate(VII) or atmospheric oxygen produces ethanoic acid (CH₃CO₂H)."
    },
    {
      id: "organic_q18",
      source: "2016 P1 Q36",
      question: "What is the structure of the product of the reaction between butene, CH₃–CH₂–CH=CH₂, and bromine, Br₂?",
      options: [
        "CH₂Br–CH₂–CH₂–CH₂Br",
        "CH₂Br–CH₂–CHBr–CH₃",
        "CH₃–CHBr–CH2–CH₂Br",
        "CH₃–CH₂–CHBr–CH₂Br"
      ],
      answer: 3,
      explanation: "Bromine adds across the C=C double bond at positions 1 and 2 of but-1-ene, producing 1,2-dibromobutane: CH₃–CH₂–CHBr–CH₂Br."
    },
    {
      id: "organic_q19",
      source: "2016 P1 Q38",
      question: "The boiling point of a covalent compound is determined by the strength of the intermolecular forces between its molecules. Which covalent compound has the strongest forces of attraction between its molecules?",
      options: [
        "butane",
        "ethane",
        "methane",
        "propane"
      ],
      answer: 0,
      explanation: "As the molecular size and relative molecular mass of alkanes increase (methane < ethane < propane < butane), the intermolecular forces of attraction (van der Waals' forces) become stronger."
    },
    {
      id: "organic_q20",
      source: "2017 P1 Q29",
      question: "Which process does not result in the formation of both carbon dioxide and water?",
      options: [
        "addition of a dilute acid to a carbonate",
        "complete combustion of ethanol",
        "complete combustion of methane",
        "gently heating crystals of hydrated sodium carbonate, Na₂CO₃.10H₂O"
      ],
      answer: 3,
      explanation: "Gently heating hydrated sodium carbonate crystals simply evaporates the water of crystallisation to release steam (water vapor), without producing carbon dioxide."
    },
    {
      id: "organic_q21",
      source: "2017 P1 Q35",
      question: "One mole of hydrocarbon X reacted completely with one mole of hydrogen gas in the presence of a heated catalyst. What could be the formula of X?",
      options: [
        "C₂H₆",
        "C₃H∯",
        "C₅H₁₀",
        "C₇H₁₆"
      ],
      answer: 2,
      explanation: "Addition of 1 mole of H₂ per mole of hydrocarbon indicates an alkene (general formula CₙH₂ₙ). C₅H₁₀ is pentene, an alkene with one C=C double bond."
    },
    {
      id: "organic_q22",
      source: "2017 P1 Q37",
      question: "When decane, C₁₀H₂₂, is cracked, only three compounds are formed. The compounds are ethane, ethene and propene. What is the ratio of the compounds formed?",
      options: [
        "ethane: 1 | ethene: 1 | propene: 1",
        "ethane: 1 | ethene: 1 | propene: 2",
        "ethane: 1 | ethene: 2 | propene: 1",
        "ethane: 2 | ethene: 1 | propene: 1"
      ],
      answer: 1,
      explanation: "Decane (C₁₀H₂₂) → 1 ethane (C₂H₆) + 1 ethene (C₂H₄) + 2 propene (2 × C₃H₆ = C₆H₁₂).<br>Checking total carbons: 2 + 2 + 6 = 10. Total hydrogens: 6 + 4 + 12 = 22. Ratio is ethane: 1 | ethene: 1 | propene: 2."
    },
    {
      id: "organic_q23",
      source: "2017 P1 Q38 / 2020 P1 Q37",
      image: "https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/organic-23.png",
      question: "Which row shows the products of the complete combustion of ethene and the products of the reaction of ethene with chlorine?",
      options: [
        "products of complete combustion: carbon dioxide and water | products of reaction with chlorine: a chlorine compound only",
        "products of complete combustion: carbon dioxide only | products of reaction with chlorine: a chlorine compound only",
        "products of complete combustion: carbon dioxide and water | products of reaction with chlorine: a chlorine compound and hydrogen chloride",
        "products of complete combustion: carbon dioxide only | products of reaction with chlorine: no reaction"
      ],
      answer: 0,
      explanation: "1) Complete combustion of ethene produces CO₂ and H₂O. 2) Addition reaction of ethene with chlorine yields 1,2-dichloroethane only (a single halogenated product, unlike substitution which also yields HCl)."
    },
    {
      id: "organic_q24",
      source: "2017 P1 Q39",
      question: "Which alcohol cannot be oxidised to produce a carboxylic acid containing a CH₃ group?",
      options: [
        "butanol",
        "ethanol",
        "methanol",
        "propanol"
      ],
      answer: 2,
      explanation: "Methanol (CH₃OH) oxidises to methanoic acid (HCOOH), which lacks a CH₃ methyl group."
    },
    {
      id: "organic_q25",
      source: "2017 P1 Q40",
      question: "The reaction between a carboxylic acid, CₓH_yCO₂H, and an alcohol, C_nH₂ₙ₊₁OH, produces an ester. How many hydrogen atoms does one molecule of the ester contain?",
      options: [
        "y + 2n",
        "y + 2n + 1",
        "y + 2n + 2",
        "y + 2n + 3"
      ],
      answer: 0,
      explanation: "Esterification equation:<br>CₓH_yCO₂H + C_nH₂ₙ₊₁OH → CₓH_yCO₂C_nH₂ₙ₊₁ + H₂O.<br>Total hydrogen atoms in the ester molecule = y + (2n + 1) - 1 (since H and OH are removed to form water) = y + 2n."
    },
    {
      id: "organic_q26",
      source: "2018 P1 Q33",
      question: "100 cm³ of methane is burned in 150 cm³ of oxygen. When cooled to room temperature, what could be the resulting mixture of gases?",
      options: [
        "CH₄, CO, CO₂",
        "CH₄, CO, H₂O",
        "CH₄, CO₂, O₂",
        "CO₂, H₂, O₂"
      ],
      answer: 0,
      explanation: "Complete combustion requires 200 cm³ O₂ for 100 cm³ CH₄ (1:2 ratio). With only 150 cm³ O₂, oxygen is insufficient (limiting), leading to incomplete combustion that yields carbon monoxide (CO), carbon dioxide (CO₂), and unreacted methane (CH₄). Water condenses to liquid at room temperature."
    },
    {
      id: "organic_q27",
      source: "2018 P1 Q34",
      question: "An equation for respiration is shown.<br>C₆H₁₂O₆ + 6O₂ → 6H₂O + 6CO₂ ΔH = -2830 kJ/mol<br>What can be deduced from the equation?",
      options: [
        "Energy from sunlight is needed for this reaction.",
        "Glucose is reduced.",
        "Larger molecules are made from smaller molecules.",
        "ΔH for photosynthesis is +2830 kJ/mol."
      ],
      answer: 3,
      explanation: "Photosynthesis is the reverse process of respiration. Reversing an exothermic reaction (ΔH = -2830 kJ/mol) gives an endothermic reaction with ΔH = +2830 kJ/mol."
    },
    {
      id: "organic_q28",
      source: "2018 P1 Q35",
      question: "What will propanol, C₃H₇OH, form on complete oxidation?",
      options: [
        "CH₃CO₂H",
        "C₂H₅CO₂H",
        "C₃H₇CO₂H",
        "C₄H₉CO₂H"
      ],
      answer: 1,
      explanation: "Propan-1-ol has 3 carbon atoms. Full oxidation converts it to propanoic acid, C₂H₅CO₂H (or CH₃CH₂COOH), which also contains 3 carbon atoms."
    },
    {
      id: "organic_q29",
      source: "2018 P1 Q36",
      question: "Which equation for the complete combustion of butane is correct?",
      options: [
        "2C₄H₁₀ + 8O₂ → 5C + 3CO₂ + 10H₂O",
        "2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O",
        "C₄H₁₀ + 4O₂ → 4CO₂ + 5H₂",
        "C₄H₁₀ + 5O₂ → 3CO + CO₂ + 5H₂O"
      ],
      answer: 1,
      explanation: "Complete combustion of an alkane yields CO₂ and H₂O. Balancing 2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O gives equal numbers of atoms on both sides."
    },
    {
      id: "organic_q30",
      source: "2018 P1 Q37",
      image: "https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/organic-30.png",
      question: "Which displayed formula represents the product of the reaction between propene and bromine?",
      options: [
        "Structure A",
        "Structure B",
        "Structure C",
        "Structure D"
      ],
      answer: 0,
      explanation: "Propene (CH₃–CH=CH₂) reacts with Br₂ in an addition reaction to form 1,2-dibromopropane (CH₃–CHBr–CH₂Br)."
    },
    {
      id: "organic_q31",
      source: "2018 P1 Q38",
      question: "The preparations of three substances are given.<br>1 an ester from an alcohol and a carboxylic acid<br>2 ethanol from ethene<br>3 margarine from a vegetable oil<br>In which preparations are one or more double bonds converted to single bonds?",
      options: [
        "1 and 2",
        "1 only",
        "2 and 3",
        "3 only"
      ],
      answer: 2,
      explanation: "In preparation 2 (hydration of ethene), the C=C double bond in ethene opens up to form C-C single bonds in ethanol. In preparation 3 (hydrogenation of vegetable oil), unsaturated C=C double bonds react with H₂ to form C-C single bonds in saturated margarine."
    },
    {
      id: "organic_q32",
      source: "2018 P1 Q39",
      question: "An alcohol and a carboxylic acid are reacted together to form an ester. Which statement is correct?",
      options: [
        "The ester molecule has fewer oxygen atoms than the carboxylic acid molecule.",
        "The ester molecule has the same number of oxygen atoms as the alcohol molecule.",
        "The ester molecule has more oxygen atoms than the alcohol molecule.",
        "The ester molecule has more oxygen atoms than the carboxylic acid molecule."
      ],
      answer: 2,
      explanation: "An ester molecule contains 2 oxygen atoms in its -COO- group. An alcohol molecule contains 1 oxygen atom in its -OH group. Therefore, the ester molecule has more oxygen atoms than the alcohol molecule."
    },
    {
      id: "organic_q33",
      source: "2019 P1 Q32",
      question: "Petroleum can be separated into fractions using fractional distillation. Which statements are correct?<br>1 Alkanes used in polishes and waxes have a higher boiling point than those used as diesel fuel.<br>2 Any of the fractions could be used as fuels because their enthalpy changes of combustion are negative.<br>3 The fraction used for petrol (gasoline) is extracted from higher up the fractionating column than the fraction used for paraffin (kerosene).<br>4 The fraction obtained at a particular point in the fractionating column always contains the same compounds in the same ratio.",
      options: [
        "1, 2 and 3",
        "1 and 4",
        "2 only",
        "3 and 4"
      ],
      answer: 0,
      explanation: "Statement 1 is correct (lubricating oil/wax fractions exit near the bottom, higher b.p. than diesel). Statement 2 is correct (combustion of hydrocarbons is exothermic, ΔH < 0). Statement 3 is correct (petrol has lower b.p. than kerosene and exits higher up). Statement 4 is incorrect (petroleum composition varies depending on the crude oil source)."
    },
   {
      id: "organic_q34",
      source: "2019 P1 Q33",
      image: "https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/organic-34.png",
      question: "Which diagrams represent the two isomers of butane, C₄H₁₀",
      options: [
        "1 and 2",
        "1 and 3",
        "2 only",
        "3 only"
      ],
      answer: 2,
      explanation: "Diagram 1 (butane) and 3 (2-methylpropoane) are the exact same compounds. Diagram 2 shows two different isomers of butane."
    }
  ]
};
