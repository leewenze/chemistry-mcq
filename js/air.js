window.topicData = window.topicData || {};

window.topicData["air"] = {
  title: "Air & Atmosphere",
  description: "Questions on Air Composition, Atmospheric Pollutants, Catalytic Converters, Acid Rain, Global Warming, Ozone Depletion, and Fractional Distillation of Air.",
  questions: [
    {
      id: "air_q1",
      source: "2014 P1 Q28",
      question: "Which pair of car exhaust gases can both be oxidised?",
      options: [
        "carbon dioxide and carbon monoxide",
        "carbon dioxide and nitrogen dioxide",
        "carbon monoxide and unburnt petrol gases",
        "steam and unburnt petrol gases"
      ],
      answer: 2,
      explanation: "Carbon monoxide (CO) can be oxidised to carbon dioxide (CO₂), and unburnt petrol hydrocarbons (e.g. C₈H₁₈) can undergo oxidation to produce carbon dioxide and water. Carbon dioxide and steam are already in their highest oxidation states and cannot be further oxidised."
    },
    {
      id: "air_q2",
      source: "2014 P1 Q30",
      question: "An atmospheric pollutant can be removed by the process of reduction.<br>Which pollutant is removed by this process?",
      options: [
        "carbon monoxide in a catalytic convertor",
        "nitrogen dioxide in acid rain by reaction with calcium carbonate",
        "nitrogen oxide in a catalytic convertor",
        "sulfur dioxide from flue gases by reaction with calcium carbonate"
      ],
      answer: 2,
      explanation: "In a catalytic converter, nitrogen oxides (NO/NO₂) lose oxygen to form unreactive nitrogen gas (N₂). Loss of oxygen is reduction (e.g., 2NO + 2CO → N₂ + 2CO₂)."
    },
    {
      id: "air_q3",
      source: "2015 P1 Q32 / 2020 P1 Q2",
      image: "https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/air-03.png",
      question: "Oxygen is prepared by the decomposition of hydrogen peroxide, in the presence of manganese(IV) oxide. The oxygen is collected as shown in the diagram.<br>2H₂O₂ → 2H₂O + O₂<br>Which substance contaminates the first few tubes of oxygen collected?",
      options: [
        "hydrogen",
        "hydrogen peroxide",
        "manganese(IV) oxide",
        "nitrogen"
      ],
      answer: 3,
      explanation: "Before the reaction begins, the conical flask and delivery tubing are filled with atmospheric air (which is approximately 78% nitrogen). The first gas collected over water is a mixture of oxygen and displaced air containing nitrogen."
    },
    {
      id: "air_q4",
      source: "2016 P1 Q31",
      question: "Which pollutant, from the combustion of petrol in an internal combustion engine, can cause limestone buildings to corrode?",
      options: [
        "carbon",
        "carbon monoxide",
        "nitrogen dioxide",
        "unburnt hydrocarbons"
      ],
      answer: 2,
      explanation: "High temperatures in internal combustion engines cause atmospheric nitrogen and oxygen to react, forming nitrogen oxides (NO₂). Nitrogen dioxide dissolves in rainwater to form acid rain (nitric acid), which corrodes limestone (CaCO₃) structures."
    },
    {
      id: "air_q5",
      source: "2017 P1 Q33",
      question: "Catalytic converters are used in the removal of harmful pollutants from exhaust gases.<br>Which equations show reactions that are useful in removing such pollutants?<br>1 N₂(g) + O₂(g) → 2NO(g)<br>2 NO(g) + CO(g) → ½N₂(g) + CO₂(g)<br>3 NO(g) + ½O₂(g) → NO₂(g)<br>4 NO₂(g) + 2CO(g) → ½N₂(g) + 2CO₂(g)",
      options: [
        "1 and 2 only",
        "1 and 3 only",
        "2 and 4 only",
        "3 and 4 only"
      ],
      answer: 2,
      explanation: "Equations 2 and 4 convert harmful pollutants (NO, NO₂, and CO) into harmless products (N₂ and CO₂). Reaction 1 occurs inside the engine cylinders to produce pollutant NO, and Reaction 3 forms NO₂ pollutant."
    },
    {
      id: "air_q6",
      source: "2018 P1 Q10",
      question: "Which reaction takes place when combustion pollutants are removed in a catalytic converter?",
      options: [
        "C + NO → ½N₂ + CO",
        "CO + NO → CO₂ + ½N₂",
        "CO + NO₂ → NO + CO₂",
        "CO₂ + NO → CO + NO₂"
      ],
      answer: 1,
      explanation: "The key catalytic converter reaction is 2CO + 2NO → 2CO₂ + N₂ (or written as CO + NO → CO₂ + ½N₂), converting toxic carbon monoxide and nitrogen monoxide into less harmful carbon dioxide and nitrogen."
    },
    {
      id: "air_q7",
      source: "2019 P1 Q23",
      image: "https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/air-07.png",
      question: "The oxygen in air can be removed by passing air over heated copper using the apparatus in the diagram.<br>50 cm³ of air is collected in gas syringe 1. Each syringe, 1 and 2, is pushed alternately so that the air passes repeatedly over the heated copper.<br>When the volume of gas no longer changes, and the gas has cooled to room temperature, what volume of gas will remain?",
      options: [
        "10 cm³",
        "20 cm³",
        "40 cm³",
        "80 cm³"
      ],
      answer: 2,
      explanation: "Air consists of approximately 21% (or ~20%) oxygen by volume. When 50 cm³ of air passes over heated copper, the oxygen reacts (2Cu + O₂ → 2CuO) and is removed.<br>Volume of O₂ removed = 20% of 50 cm³ = 10 cm³.<br>Remaining volume of unreactive gas = 50 cm³ - 10 cm³ = 40 cm³."
    },
    {
      id: "air_q8",
      source: "2019 P1 Q31",
      question: "Which pair of gases are involved in the formation of acid rain?",
      options: [
        "CO and CO₂",
        "CH₄ and NO₂",
        "NO₂ and CO",
        "SO₂ and NO₂"
      ],
      answer: 3,
      explanation: "Acid rain is caused by sulfur dioxide (SO₂), which dissolves in water to form sulfurous/sulfuric acid, and nitrogen dioxide (NO₂), which dissolves in water to form nitric acid."
    },
    {
      id: "air_q9",
      source: "2020 P1 Q29",
      question: "In the catalytic converter of a car, what type of chemical reaction takes place to change the harmful exhaust gases, carbon monoxide and nitrogen monoxide, into less harmful gases?",
      options: [
        "combustion",
        "evaporation",
        "precipitation",
        "redox"
      ],
      answer: 3,
      explanation: "In the reaction 2CO + 2NO → 2CO₂ + N₂, carbon monoxide is oxidised (gains oxygen) to CO₂, and nitrogen monoxide is reduced (loses oxygen) to N₂. Simultaneous oxidation and reduction make this a redox reaction."
    },
    {
      id: "air_q10",
      source: "2020 P1 Q30",
      question: "Which process removes carbon dioxide from the atmosphere?",
      options: [
        "combustion of fuels",
        "photosynthesis",
        "respiration",
        "volcanic activity"
      ],
      answer: 1,
      explanation: "Photosynthesis by green plants and algae absorbs atmospheric carbon dioxide and converts it into glucose and oxygen (6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂). Combustion, respiration, and volcanic eruptions all release CO₂ into the air."
    },
    {
      id: "air_q11",
      source: "2021 P1 Q29",
      question: "The depletion of the ozone layer can result in an increase in cases of skin cancer.<br>What is the reason for this?",
      options: [
        "Less infrared radiation reaches the Earth.",
        "Less ultraviolet radiation reaches the Earth.",
        "More infrared radiation reaches the Earth.",
        "More ultraviolet radiation reaches the Earth."
      ],
      answer: 3,
      explanation: "The stratospheric ozone layer filters and absorbs harmful ultraviolet (UV) radiation from the Sun. Depletion of ozone allows more harmful UV radiation to reach Earth's surface, increasing risks of skin cancer and cataracts."
    },
    {
      id: "air_q12",
      source: "2021 P1 Q30",
      image: "https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/air-12.png",
      question: "Which row shows air pollutants and their sources?",
      options: [
        "pollutant: carbon dioxide, source: photosynthesis | pollutant: nitrogen dioxide, source: lightning flashes",
        "pollutant: carbon monoxide, source: incomplete combustion of petrol | pollutant: nitrogen dioxide, source: oxygen and nitrogen from air combining in an internal combustion engine",
        "pollutant: sulfur dioxide, source: burning fossil fuels | pollutant: methane, source: incomplete combustion of petrol",
        "pollutant: sulfur dioxide, source: lightning flashes | pollutant: carbon dioxide, source: burning fossil fuels"
      ],
      answer: 1,
      explanation: "Carbon monoxide (CO) is produced by the incomplete combustion of carbon-containing fuels due to limited oxygen. Nitrogen dioxide (NO₂) is formed when N₂ and O₂ from the air react under the high temperatures inside internal combustion engines."
    },
    {
      id: "air_q13",
      source: "2022 P1 Q31",
      image: "https://raw.githubusercontent.com/leewenze/chemistry-mcq/main/js/images/air-13.png",
      question: "A sample of clean, dry air is cooled to -190 °C. The carbon dioxide forms a solid at -79 °C.<br>What is the state of argon, oxygen and nitrogen at -190 °C?",
      options: [
        "argon: gas | oxygen: gas | nitrogen: gas",
        "argon: gas | oxygen: solid | nitrogen: liquid",
        "argon: solid | oxygen: liquid | nitrogen: gas",
        "argon: solid | oxygen: liquid | nitrogen: liquid"
      ],
      answer: 2,
      explanation: "At -190 °C:<br>• Argon (m.p. -189 °C, b.p. -186 °C) is below its melting point, so it is a solid.<br>• Oxygen (m.p. -219 °C, b.p. -183 °C) is between its m.p. and b.p., so it is a liquid.<br>• Nitrogen (m.p. -210 °C, b.p. -196 °C) is above the b.p., so it is a gas."
    },
    {
      id: "air_q14",
      source: "2022 P1 Q39",
      question: "Which noble gas has the highest concentration in dry air?",
      options: [
        "argon",
        "helium",
        "krypton",
        "neon"
      ],
      answer: 0,
      explanation: "Argon is the third most abundant gas in dry atmospheric air overall (and the most abundant noble gas), making up approximately 0.93% of air by volume."
    }
  ]
};
