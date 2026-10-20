window.topicData = window.topicData || {};

window.topicData["energetics"] = {
  title: "Energetics & Chemical Energy",
  description: "Questions on Exothermic and Endothermic Reactions, Energy Profile Diagrams, Activation Energy, Bond Breaking/Making, and Enthalpy Changes.",
  questions: [
    {
      id: "energetics_q1",
      source: "2015 P1 Q6",
      question: "In which process is energy released?",
      options: [
        "electrolysis of water to form hydrogen and oxygen",
        "forming a hydrogen molecule from two hydrogen atoms",
        "fractional distillation of crude oil",
        "photosynthesis"
      ],
      answer: 1,
      explanation: "Bond formation is an exothermic process (energy is released when bonds are formed). Combining two H atoms to form an H₂ molecule releases energy."
    },
    {
      id: "energetics_q2",
      source: "2015 P1 Q19",
      image: "https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/energetics-02.png",
      question: "The equation and the energy profile diagram for the reversible reaction in the Haber process are shown.<br>N₂ + 3H₂ ⇌ 2NH₃<br>Which statement about the reactions is correct?",
      options: [
        "The activation energy for the forward reaction is y - x.",
        "The activation energy for the reverse reaction is x.",
        "The enthalpy change for the reverse reaction is positive.",
        "The enthalpy change in the forward reaction is y."
      ],
      answer: 2,
      explanation: "Since the forward reaction is exothermic (products have lower energy than reactants), the reverse reaction must be endothermic, meaning its enthalpy change (ΔH) is positive."
    },
    {
      id: "energetics_q3",
      source: "2015 P1 Q34",
      question: "An equation for respiration is shown.<br>C₆H₁₂O₆(s) + 6O₂(g) → 6H₂O(g) + 6CO₂(g) ΔH = -2830 kJ/mol<br>What can be deduced from the equation?",
      options: [
        "ΔH for photosynthesis is +2830 kJ/mol.",
        "Energy from sunlight is needed for this reaction.",
        "Respiration is only carried out by animals.",
        "The equation shows the reaction between one volume of glucose and six volumes of oxygen to produce six volumes of carbon dioxide and six volumes of water."
      ],
      answer: 0,
      explanation: "Photosynthesis is the exact reverse reaction of respiration. Since respiration is exothermic (ΔH = -2830 kJ/mol), photosynthesis must be endothermic with ΔH = +2830 kJ/mol."
    },
    {
      id: "energetics_q4",
      source: "2016 P1 Q12",
      image: "https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/energetics-04.png",
      question: "The energy profile diagram shows the energy changes that occur as a reaction takes place.<br>From the diagram, which statement about this reaction is correct?",
      options: [
        "The energy change when breaking bonds is greater than the energy change when making bonds.",
        "The equation for this reaction could be CH₄ + 2O₂ → CO₂ + 2H₂O.",
        "The reaction has a negative ΔH value.",
        "X is the activation energy for the reaction."
      ],
      answer: 1,
      explanation: "The diagram depicts an exothermic reaction (products at a lower energy level than reactants). The complete combustion of methane (CH₄ + 2O₂ → CO₂ + 2H₂O) is an exothermic reaction."
    },
    {
      id: "energetics_q5",
      source: "2017 P1 Q14",
      image: "https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/energetics-05.png",
      question: "The equation for the combustion of hydrogen is shown.<br>2H₂(g) + O₂(g) → 2H₂O(g)<br>What is the enthalpy change of this reaction?",
      options: [
        "-482 kJ/mol",
        "-444 kJ/mol",
        "+444 kJ/mol",
        "+482 kJ/mol"
      ],
      answer: 0,
      explanation: "Combustion is an exothermic reaction, so ΔH must be negative. Calculating ΔH = (energy absorbed in bond breaking) - (energy released in bond making) gives -482 kJ/mol."
    },
    {
      id: "energetics_q6",
      source: "2017 P1 Q15",
      image: "https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/energetics-06.png",
      question: "The enthalpy change of combustion, ΔH, of an alcohol is the heat given out when one mole of the alcohol is completely burned in oxygen.<br>The enthalpy change of combustion for some alcohols is given.<br>How many carbon atoms and how many hydrogen atoms would there be in the formula of an alcohol that has an enthalpy change of combustion of -3900 kJ/mol?",
      options: [
        "number of carbon atoms: 5 | number of hydrogen atoms: 11",
        "number of carbon atoms: 5 | number of hydrogen atoms: 12",
        "number of carbon atoms: 6 | number of hydrogen atoms: 13",
        "number of carbon atoms: 6 | number of hydrogen atoms: 14"
      ],
      answer: 3,
      explanation: "Alcohols follow the general formula CₙH₂ₙ₊₁OH (or CₙH₂ₙ₊₂O). An enthalpy change of combustion around -3900 kJ/mol corresponds to hexanol (C₆H₁₃OH), which contains 6 carbon atoms and 14 hydrogen atoms in total."
    },
    {
      id: "energetics_q7",
      source: "2018 P1 Q16",
      question: "The complete combustion of ethane is an exothermic reaction. Which statement explains this?",
      options: [
        "More bonds are broken than are formed.",
        "More bonds are formed than are broken.",
        "The total enthalpy of the bonds broken is greater than the total enthalpy of the bonds formed.",
        "The total enthalpy of the bonds broken is less than the total enthalpy of the bonds formed."
      ],
      answer: 3,
      explanation: "In an exothermic reaction, the total energy absorbed to break bonds in the reactants is less than the total energy released when forming new bonds in the products."
    },
    {
      id: "energetics_q8",
      source: "2018 P1 Q17",
      image: "https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/energetics-08.png",
      question: "When steam is passed through excess hot coke a reaction occurs and the coke cools.<br>C(s) + H₂O(g) → CO(g) + H₂(g)<br>The activation energy for the reaction is X.<br>Which energy profile diagram for this reaction is correct?",
      options: [
        "Diagram A",
        "Diagram B",
        "Diagram C",
        "Diagram D"
      ],
      answer: 0,
      explanation: "Because the coke cools, heat is absorbed from the surroundings, meaning the reaction is endothermic (products have higher energy than reactants). The activation energy X is measured from the reactants to the peak of the curve."
    },
    {
      id: "energetics_q9",
      source: "2018 P1 Q18",
      images: [
        "https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/energetics-09a.png",
        "https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/energetics-09b.png"
        ],
      question: "The energy profile diagram for a given reaction without the use of a catalyst is shown below.<br>Which energy profile diagram is correct when a catalyst is used?",
      options: [
        "Diagram A",
        "Diagram B",
        "Diagram C",
        "Diagram D"
      ],
      answer: 0,
      explanation: "A catalyst provides an alternative reaction pathway with a lower activation energy (lowering the peak height), while leaving the energy levels of the reactants and products (and thus ΔH) unchanged."
    },
    {
      id: "energetics_q10",
      source: "2019 P1 Q15",
      image: "https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/energetics-10.png",
      question: "The energy profile diagram for the reversible reaction 2NH₃ ⇌ N₂ + 3H₂ is shown.<br>Which statements about this reaction are both correct?",
      options: [
        "statement 1: The forward reaction is endothermic. | statement 2: The activation energy is different for the forward and reverse reactions.",
        "statement 1: The forward reaction is endothermic. | statement 2: The activation energy is the same for the forward and reverse reactions.",
        "statement 1: The forward reaction is exothermic. | statement 2: The activation energy is different for the forward and reverse reactions.",
        "statement 1: The forward reaction is exothermic. | statement 2: The activation energy is the same for the forward and reverse reactions."
      ],
      answer: 0,
      explanation: "The products (N₂ + 3H₂) sit at a higher energy level than the reactant (2NH₃), so the forward reaction absorbs heat (endothermic). The activation energy measured from reactants to peak differs from the activation energy measured from products to peak."
    },
    {
      id: "energetics_q11",
      source: "2020 P1 Q14",
      question: "A reversible reaction is exothermic in the forward direction and the heat given out is 196 kJ/mol. The activation energy for the forward reaction is 75 kJ/mol.<br>What is the activation energy of the reverse reaction?",
      options: [
        "75 kJ/mol",
        "121 kJ/mol",
        "196 kJ/mol",
        "271 kJ/mol"
      ],
      answer: 3,
      explanation: "For an exothermic reaction, Eₐ(reverse) = Eₐ(forward) + |ΔH|. Therefore, Eₐ(reverse) = 75 kJ/mol + 196 kJ/mol = 271 kJ/mol."
    },
    {
      id: "energetics_q12",
      source: "2020 P1 Q15",
      image: "https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/energetics-12.png",
      question: "Hydrogen burns in the air to form water as shown.<br>2H₂(g) + O₂(g) → 2H₂O(l)<br>Which statement concerning the enthalpy change, ΔH, for the reaction is correct?",
      options: [
        "ΔH: negative | explanation: energy change in breaking bonds in hydrogen and oxygen is greater than the energy change in making the bonds in water",
        "ΔH: negative | explanation: energy change in breaking bonds in hydrogen and oxygen is less than the energy change in making the bonds in water",
        "ΔH: positive | explanation: energy change in breaking bonds in hydrogen and oxygen is greater than the energy change in making the bonds in water",
        "ΔH: positive | explanation: energy change in breaking bonds in hydrogen and oxygen is less than the energy change in making the bonds in water"
      ],
      answer: 1,
      explanation: "Combustion is exothermic, so ΔH is negative. A reaction is exothermic when the energy required to break bonds in the reactants is less than the energy released when making new bonds in the products."
    },
    {
      id: "energetics_q13",
      source: "2020 P1 Q16",
      images: [
        "https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/energetics-13a.png",
        "https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/energetics-13b.png"
        ],
      question: "The energy profile diagram for a reaction is shown.<br>A catalyst was added and no other reaction condition was changed.<br>Which energy profile diagram is correct for the catalysed reaction?",
      options: [
        "Diagram A",
        "Diagram B",
        "Diagram C",
        "Diagram D"
      ],
      answer: 0,
      explanation: "Adding a catalyst lowers the peak of the energy barrier (activation energy) while leaving the energy levels of the initial reactants and final products completely unchanged."
    },
    {
      id: "energetics_q14",
      source: "2021 P1 Q14",
      image: "https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/energetics-14.png",
      question: "Methane burns in oxygen to form carbon dioxide and water. The energy profile diagram is shown.<br>Which statement about bond breaking and forming is correct?",
      options: [
        "The energy released in forming bonds is labelled x.",
        "The energy released in breaking bonds is equal to z.",
        "The energy released in breaking bonds is less than the energy absorbed in forming bonds.",
        "The energy released in forming bonds is more than the energy absorbed in breaking bonds."
      ],
      answer: 3,
      explanation: "The reaction is exothermic (overall energy decreases). In any exothermic reaction, the energy released during bond formation is greater than the energy absorbed during bond breaking."
    },
    {
      id: "energetics_q15",
      source: "2022 P1 Q15",
      question: "The enthalpy change for the reaction shown in this equation is X kJ.<br>2C(s) + 2H₂(g) + 3O₂(g) → 2CO₂(g) + 2H₂O(l)<br>The enthalpy changes for two other reactions are shown.<br>C(s) + O₂(g) → CO₂(g) ΔH = -394 kJ<br>H₂(g) + ½O₂(g) → H₂O(l) ΔH = -286 kJ<br>What is the value of X?",
      options: [
        "-1360",
        "-1074",
        "-680",
        "-216"
      ],
      answer: 0,
      explanation: "X is formed by multiplying both given reactions by 2 and adding them together:<br>2 × (-394 kJ) + 2 × (-286 kJ) = -788 kJ + (-572 kJ) = -1360 kJ."
    },
    {
      id: "energetics_q16",
      source: "2022 P1 Q16",
      question: "Which statement about exothermic and endothermic reactions is correct?",
      options: [
        "In an endothermic reaction the activation energy is greater than the energy used when the bonds are formed.",
        "In an endothermic reaction the activation energy is less than the energy released when the bonds are formed.",
        "In an exothermic reaction the activation energy is greater than the energy used when the bonds are formed.",
        "In an exothermic reaction the activation energy is less than the energy released when the bonds are formed."
      ],
      answer: 3,
      explanation: "In an exothermic reaction, the activation energy (energy barrier to start bond breaking) is less than the total energy released when new bonds are formed in the products."
    }
  ]
};
