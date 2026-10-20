window.topicData = window.topicData || {};

window.topicData["rate"] = {
  title: "Rate of Reactions",
  description: "Questions on Speed of Reaction, Factors Affecting Rate, Activation Energy, Catalysts, and Rate Graphs.",
  questions: [
    {
      id: "rate_q1",
      source: "2014 P1 Q17",
      question: "In the reaction between zinc and hydrochloric acid, the following changes could be made to the conditions.<br>1 increase in concentration of the acid<br>2 increase in particle size of the zinc<br>3 increase in pressure on the system<br>4 increase in temperature of the system<br>Which pair of changes will increase the rate of reaction?",
      options: [
        "1 and 2",
        "1 and 4",
        "2 and 3",
        "3 and 4"
      ],
      answer: 1,
      explanation: "Increasing the concentration of acid (1) increases collision frequency, and increasing temperature (4) increases both collision frequency and kinetic energy of particles. Increasing particle size (2) decreases surface area (slowing down reaction), and pressure changes (3) do not significantly affect reactions involving solids and liquids."
    },
    {
      id: "rate_q2",
      source: "2014 P1 Q25",
      question: "The oxide of an element J increases the rate of decomposition of hydrogen peroxide. At the end of the reaction the oxide of J is chemically unchanged.<br>Which details are those of J?",
      options: [
        "proton number: 18 | mass number: 40",
        "proton number: 20 | mass number: 40",
        "proton number: 25 | mass number: 55",
        "proton number: 53 | mass number: 127"
      ],
      answer: 2,
      explanation: "The substance acting as a catalyst for hydrogen peroxide decomposition is manganese(IV) oxide (MnO₂). Element J is Manganese (Mn), which is a transition element with proton number 25 and mass number 55."
    },
    {
      id: "rate_q3",
      source: "2016 P1 Q13 / 2019 P1 Q17",
      image: "https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/rate-03.png",
      question: "Dilute hydrochloric acid is reacted with 1.2 g of magnesium ribbon at room temperature in two experiments, experiment 1 and experiment 2.<br>In experiment 1, 100 cm³ of 1 mol/dm³ hydrochloric acid is used.<br>In experiment 2, 50 cm³ of 2 mol/dm³ hydrochloric acid is used.<br>The volume of hydrogen given off is plotted against time.<br>Which graph is correct?",
      options: [
        "Graph A",
        "Graph B",
        "Graph C",
        "Graph D"
      ],
      answer: 3,
      explanation: "In both experiments, moles of Mg = 1.2 / 24 = 0.05 mol. Moles of HCl = 0.1 mol in both cases. Since the amounts of reactants are equal, the total volume of H₂ produced is the same. However, Experiment 2 uses a higher acid concentration (2 mol/dm³ vs 1 mol/dm³), so its initial rate of reaction is faster (steeper initial gradient)."
    },
    {
      id: "rate_q4",
      source: "2017 P1 Q16",
      image: "https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/rate-04.png",
      question: "A student added excess hydrochloric acid to calcium carbonate. As the reaction proceeded he measured the volume of carbon dioxide released, at room temperature and pressure, and plotted a graph.<br>CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + CO₂(g) + H₂O(l)<br>What can the student conclude from the information?<br>1 The number of moles of calcium carbonate used was 1.67 × 10⁻².<br>2 During the reaction, the rate steadily increased.<br>3 After 15 minutes, the reaction has stopped.",
      options: [
        "1, 2 and 3",
        "1 and 2 only",
        "1 and 3 only",
        "3 only"
      ],
      answer: 2,
      explanation: "From the graph, total CO₂ volume = 400 cm³. Moles of CO₂ = 400 / 24000 = 0.0167 mol = 1.67 × 10⁻² mol, which equals moles of CaCO₃ used (Statement 1 is true). Rate decreases over time, not increases (Statement 2 is false). The curve flattens out around 12–15 minutes, showing the reaction has stopped by 15 minutes (Statement 3 is true)."
    },
    {
      id: "rate_q5",
      source: "2018 P1 Q4",
      question: "An experiment is done to determine the rate of reaction of an ester with sodium hydroxide.<br>CH₃CO₂C₂H₅ + NaOH → CH₃CO₂Na + C₂H₅OH<br>Samples are withdrawn at intervals and titrated against hydrochloric acid to find the amount of sodium hydroxide remaining.<br>As well as the conical flask, what other apparatus is needed for the titration?",
      options: [
        "balance, stop clock, gas syringe",
        "measuring cylinder, gas syringe, thermometer",
        "pipette, balance, thermometer",
        "pipette, burette"
      ],
      answer: 3,
      explanation: "In a standard titration, a pipette is required to measure fixed volumes of solution accurately into a conical flask, and a burette is required to deliver the titrant acid solution."
    },
    {
      id: "rate_q6",
      source: "2018 P1 Q19",
      images: [
        "https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/rate-06a.png",
        "https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/rate-06b.png",
      ],
      question: "1 mol of X reacts with 1 mol of Y to produce a gas.<br>A student investigates the rate of this reaction by measuring the volume of gas produced at timed intervals.<br>He plots his results on a graph.<br>The table gives the volumes and concentrations of X and Y that he uses to produce line R.<br>The student varies both volume and concentration of X and Y over a series of experiments. The results of one of these experiments is plotted on the same graph.<br>Which row shows the volumes and concentrations that the student used to obtain line U?",
      options: [
        "X: volume = 25 cm³, concentration = 2.0 mol/dm³ | Y: volume = 100 cm³, concentration = 1.0 mol/dm³",
        "X: volume = 100 cm³, concentration = 1.0 mol/dm³ | Y: volume = 50 cm³, concentration = 2.0 mol/dm³",
        "X: volume = 100 cm³, concentration = 1.0 mol/dm³ | Y: volume = 200 cm³, concentration = 0.5 mol/dm³",
        "X: volume = 400 cm³, concentration = 0.5 mol/dm³ | Y: volume = 400 cm³, concentration = 0.5 mol/dm³"
      ],
      answer: 1,
      explanation: "Line U reaches the same final volume of gas as Line R (same limiting moles) but has a steeper initial gradient, indicating a faster reaction rate due to a higher concentration of one or both reactants."
    },
    {
      id: "rate_q7",
      source: "2019 P1 Q18",
      question: "How is the activation energy for a reaction between two gases changed when it is carried out either in the presence of a catalyst or when the temperature is increased?",
      options: [
        "addition of catalyst: decreases | increase in temperature: decreases",
        "addition of catalyst: decreases | increase in temperature: stays the same",
        "addition of catalyst: increases | increase in temperature: decreases",
        "addition of catalyst: increases | increase in temperature: stays the same"
      ],
      answer: 1,
      explanation: "Adding a catalyst lowers the activation energy by providing an alternative reaction pathway. Increasing the temperature gives particles more kinetic energy, but does NOT alter the activation energy barrier itself."
    },
    {
      id: "rate_q8",
      source: "2020 P1 Q17",
      image: "https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/rate-08.png",
      question: "A sample of 0.5 g of magnesium ribbon is reacted with an excess of 1 mol/dm³ hydrochloric acid.<br>The volume of hydrogen produced over time is measured.<br>The results are plotted to give graph 1.<br>Which graph would be produced when 0.5 g of magnesium ribbon is reacted with an excess of 2.0 mol/dm³ hydrochloric acid under the same conditions?",
      options: [
        "Graph A",
        "Graph B",
        "Graph C",
        "Graph D"
      ],
      answer: 1,
      explanation: "Magnesium is the limiting reactant (0.5 g), so the total volume of H₂ gas produced remains identical (same height as graph 1). Using 2.0 mol/dm³ HCl instead of 1.0 mol/dm³ doubles the concentration, making the initial reaction faster (steeper initial gradient, Graph B)."
    },
    {
      id: "rate_q9",
      source: "2021 P1 Q15",
      question: "Iron reacts with dilute hydrochloric acid at a constant temperature of 25 °C.<br>Which statement about the rate of this reaction is correct?",
      options: [
        "It decreases as the reaction proceeds.",
        "It decreases then increases as the reaction proceeds.",
        "It increases as the reaction proceeds.",
        "It remains the same as the reaction proceeds."
      ],
      answer: 0,
      explanation: "As the reaction proceeds, the concentration of hydrochloric acid decreases and the surface area of iron decreases. Fewer reactant particles result in lower collision frequency, causing the rate of reaction to continuously decrease over time."
    },
    {
      id: "rate_q10",
      source: "2022 P1 Q17",
      question: "These statements are about the activation energy of a chemical reaction.<br>1 Chemical reactions in gases and liquids take place when molecules collide with sufficient energy to overcome the activation energy.<br>2 If the activation energy for a reaction is high, many of the collisions have enough energy to be successful and the reaction is fast.<br>3 A catalyst reduces the activation energy for a reaction and therefore the overall enthalpy change of the reaction is lower.<br>Which statements are correct?",
      options: [
        "1 only",
        "1 and 2",
        "2 and 3",
        "3 only"
      ],
      answer: 0,
      explanation: "Statement 1 is correct (Collision Theory). Statement 2 is incorrect because if activation energy is high, FEWER collisions have sufficient energy, making the reaction slow. Statement 3 is incorrect because a catalyst lowers activation energy but does NOT change the overall enthalpy change (ΔH)."
    },
    {
      id: "rate_q11",
      source: "2022 P1 Q18",
      image: "https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/rate-11.png",
      question: "In experiment 1, 1.0 g of zinc granules and 50 cm³ of 0.50 mol/dm³ sulfuric acid react to produce hydrogen gas. The volume of hydrogen produced is measured. The results for experiment 1 are plotted on the graph.<br>The experiment is repeated with one change. The results for experiment 2 are plotted on the graph.<br>Which change is made in experiment 2?",
      options: [
        "A catalyst is used.",
        "More zinc granules are used.",
        "The reaction is at a higher temperature.",
        "The sulfuric acid is more concentrated."
      ],
      answer: 3,
      explanation: "In Experiment 2, the total final volume of gas collected is greater than Experiment 1, and the initial gradient is steeper, showing a faster rate. using a more concentrated sulfuric acid increases the rate and increases the overall yield."
    }
  ]
};
