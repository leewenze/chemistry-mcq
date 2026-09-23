// Ensure window.topicData exists
window.topicData = window.topicData || {};

// Add Laboratory Apparatus, Purity & Separation Techniques topic
window.topicData["separation_purity"] = {
    title: "Topic: Laboratory Apparatus, Purity & Separation Techniques",
    description: "Questions on measuring apparatus, criteria of purity, and separation methods (filtration, distillation, fractional distillation, chromatography, and $R_f$ values).",
    questions: [
        {
            id: "sep_2020_w21_q2",
            source: "2020 Winter Paper 21, Q2",
            question: "A mixture of colourless amino acids is separated using chromatography. The solvent used is propanol. The chromatogram is sprayed with a locating agent. Which row describes the purpose of the propanol and the locating agent?",
            options: [
                "purpose of propanol: to make the individual amino acids visible | purpose of locating agent: to prevent the amino acids moving any further",
                "purpose of propanol: to move the amino acids up the chromatography paper | purpose of locating agent: to make the individual amino acids visible",
                "purpose of propanol: to move the amino acids up the chromatography paper | purpose of locating agent: to prevent the amino acids moving any further",
                "purpose of propanol: to prevent the amino acids moving too far up the paper | purpose of locating agent: to make the individual amino acids visible"
            ],
            answer: 1,
            explanation: "The solvent (propanol) carries the dissolved amino acids up the paper by capillary action, while a locating agent reacts with colourless spots to render them visible."
        },
        {
            id: "sep_2020_w21_q3",
            source: "2020 Winter Paper 21, Q3",
            question: "Which piece of apparatus can only measure a single fixed volume?",
            options: [
                "250 cm³ beaker",
                "50 cm³ burette",
                "100 cm³ measuring cylinder",
                "25 cm³ pipette"
            ],
            answer: 3,
            explanation: "Volumetric pipettes are designed with a single graduation mark to measure one exact, fixed volume (e.g., exactly 25.0 cm³)."
        },
        {
            id: "sep_2020_w21_q4",
            source: "2020 Winter Paper 21, Q4",
            question: "In the chromatography experiment shown, which label represents the solvent front? [Paper dipping into solvent C, baseline D, spot B, solvent limit line A]",
            options: [
                "Label A",
                "Label B",
                "Label C",
                "Label D"
            ],
            answer: 0,
            explanation: "The solvent front is the maximum height reached by the solvent on the chromatography paper, represented by Label A."
        },
        {
            id: "sep_2020_w22_q4",
            source: "2020 Winter Paper 22, Q4",
            question: "In the chromatography experiment shown, which label represents the solvent front? [Label A marks top solvent line, B marks spot, C marks solvent level, D marks baseline]",
            options: [
                "Label A",
                "Label B",
                "Label C",
                "Label D"
            ],
            answer: 0,
            explanation: "Label A indicates the highest line reached by the solvent (the solvent front)."
        },
        {
            id: "sep_2020_w22_q5",
            source: "2020 Winter Paper 22, Q5",
            question: "Different methods of separation rely on substances having different properties. Which property does distillation make use of?",
            options: [
                "boiling point",
                "colour",
                "particle size",
                "solubility in different solvents"
            ],
            answer: 0,
            explanation: "Distillation separates components of a mixture based on differences in their boiling points."
        },
        {
            id: "sep_2020_w23_q4",
            source: "2020 Winter Paper 23, Q4",
            question: "In the chromatography experiment shown, which label represents the solvent front? [Solvent C, baseline D, spot B, top line A]",
            options: [
                "Label A",
                "Label B",
                "Label C",
                "Label D"
            ],
            answer: 0,
            explanation: "Label A indicates the furthest distance traveled by the solvent front."
        },
        {
            id: "sep_2021_w21_q2",
            source: "2021 Winter Paper 21, Q2",
            question: "A student put exactly 25.00 cm³ of dilute hydrochloric acid into a conical flask. The student added 2.5 g of solid sodium carbonate and measured the change in temperature of the mixture. Which apparatus does the student need to use?",
            options: [
                "balance, measuring cylinder, thermometer",
                "balance, pipette, stopwatch",
                "balance, pipette, thermometer",
                "burette, pipette, thermometer"
            ],
            answer: 2,
            explanation: "A balance measures the mass (2.5 g), a pipette measures exact fixed volume (25.00 cm³), and a thermometer measures temperature change."
        },
        {
            id: "sep_2021_w21_q3",
            source: "2021 Winter Paper 21, Q3",
            question: "A student separates sugar from pieces of broken glass by dissolving the sugar in water and filtering off the broken glass. What is the filtrate?",
            options: [
                "broken glass only",
                "broken glass and sugar solution",
                "pure water",
                "sugar solution"
            ],
            answer: 3,
            explanation: "The liquid that passes through the filter paper during filtration is called the filtrate, which in this case is the dissolved sugar solution."
        },
        {
            id: "sep_2021_w22_q2",
            source: "2021 Winter Paper 22, Q2",
            question: "A student put exactly 25.00 cm³ of dilute hydrochloric acid into a conical flask. The student added 2.5 g of solid sodium carbonate and measured the change in temperature of the mixture. Which apparatus does the student need to use?",
            options: [
                "balance, measuring cylinder, thermometer",
                "balance, pipette, stopwatch",
                "balance, pipette, thermometer",
                "burette, pipette, thermometer"
            ],
            answer: 2,
            explanation: "A balance measures mass, a pipette delivers exact 25.00 cm³ volume, and a thermometer measures temperature."
        },
        {
            id: "sep_2021_w22_q3",
            source: "2021 Winter Paper 22, Q3",
            question: "A student separates sugar from pieces of broken glass by dissolving the sugar in water and filtering off the broken glass. What is the filtrate?",
            options: [
                "broken glass only",
                "broken glass and sugar solution",
                "pure water",
                "sugar solution"
            ],
            answer: 3,
            explanation: "Glass is insoluble and stays as residue on the filter paper, whereas the liquid collecting below (filtrate) is the sugar solution."
        },
        {
            id: "sep_2021_w23_q3",
            source: "2021 Winter Paper 23, Q3",
            question: "A student separates sugar from pieces of broken glass by dissolving the sugar in water and filtering off the broken glass. What is the filtrate?",
            options: [
                "broken glass only",
                "broken glass and sugar solution",
                "pure water",
                "sugar solution"
            ],
            answer: 3,
            explanation: "The filtrate is the solution that passes through the filter paper (sugar solution)."
        },
        {
            id: "sep_2022_s21_q2",
            source: "2022 Summer Paper 21, Q2",
            question: "A student measures the time taken for 2.0 g of magnesium to dissolve in 50 cm³ of dilute sulfuric acid.\n1. stop-clock\n2. measuring cylinder\n3. thermometer\n4. balance\nWhich apparatus is essential to complete the experiment?",
            options: [
                "1, 2 and 4",
                "1 and 2 only",
                "1 and 4 only",
                "2, 3 and 4"
            ],
            answer: 0,
            explanation: "A stop-clock measures time (1), a measuring cylinder measures volume (2), and a balance measures mass (4)."
        },
        {
            id: "sep_2022_s22_q3",
            source: "2022 Summer Paper 22, Q3",
            question: "A chromatogram of a single substance T is shown. Measurement 1 is total height, 2 is solvent level to spot, 3 is baseline to spot, 4 is baseline to solvent front. Which measurements are used to find the $R_f$ value of T?",
            options: [
                "1 and 2",
                "1 and 4",
                "2 and 3",
                "3 and 4"
            ],
            answer: 3,
            explanation: "$R_f$ value is calculated as (distance moved by spot from baseline) / (distance moved by solvent front from baseline), which corresponds to measurements 3 and 4."
        },
        {
            id: "sep_2022_s23_q4",
            source: "2022 Summer Paper 23, Q4",
            question: "Paper chromatography is used to separate four different coloured inks, W, X, Y and Z, and an unknown ink T. Ink T contains spots aligned horizontally with spots from X and Z. Which inks are present in ink T?",
            options: [
                "W and X",
                "W and Y",
                "X and Z",
                "Y and Z"
            ],
            answer: 2,
            explanation: "Spots that travel the exact same vertical distance under identical conditions correspond to the same component dyes (X and Z)."
        },
        {
            id: "sep_2023_s21_q40",
            source: "2023 Summer Paper 21, Q40",
            question: "Which chromatogram shows how the $R_f$ value of a substance is calculated?",
            options: [
                "$R_f = \\frac{y}{x}$ where $y$ is spot distance from baseline, $x$ is solvent front distance from baseline",
                "$R_f = \\frac{y}{x}$ where $y$ is spot distance from paper bottom, $x$ is solvent front distance from paper bottom",
                "$R_f = \\frac{x}{y}$ where $y$ is spot distance from baseline, $x$ is solvent front distance from baseline",
                "$R_f = \\frac{x}{y}$ where $y$ is total paper height, $x$ is distance from solvent front to spot"
            ],
            answer: 0,
            explanation: "The $R_f$ value formula is always the distance moved by the substance divided by the distance moved by the solvent front, both measured from the baseline."
        },
        {
            id: "sep_2023_s22_q39",
            source: "2023 Summer Paper 22, Q39",
            question: "Two compounds, M and N, are dissolved in water and separated by chromatography. Solvent front is 10 cm above baseline. Spot M is 2 cm above baseline. Spot N is near top. What is the $R_f$ value of M and which compound is most soluble in water?",
            options: [
                "$R_f$ value of M: 0.2 | most soluble compound: M",
                "$R_f$ value of M: 0.2 | most soluble compound: N",
                "$R_f$ value of M: 5.0 | most soluble compound: M",
                "$R_f$ value of M: 5.0 | most soluble compound: N"
            ],
            answer: 1,
            explanation: "$R_f(\\text{M}) = 2 / 10 = 0.2$. Compound N moves further up the paper, meaning it spends more time in the mobile phase and is thus most soluble."
        },
        {
            id: "sep_2023_s23_q39",
            source: "2023 Summer Paper 23, Q39",
            question: "A chromatogram of substance S is shown. Distance from bottom of paper to baseline = 1.8 cm, distance from baseline to spot S = 6.0 cm, distance from spot S to solvent front = 4.7 cm. What is the $R_f$ value of S?",
            options: [
                "0.39",
                "0.46",
                "0.56",
                "0.62"
            ],
            answer: 2,
            explanation: "Total solvent front distance from baseline = $6.0 + 4.7 = 10.7\\text{ cm}$. $R_f = \\frac{6.0}{10.7} \\approx 0.56$."
        },
        {
            id: "sep_2023_w21_q29",
            source: "2023 Winter Paper 21, Q29",
            question: "Which test is used to show that a sample of water is pure?",
            options: [
                "Evaporate the water to see if any solids remain.",
                "Heat the water to check its boiling point.",
                "Test with anhydrous cobalt(II) chloride.",
                "Use universal indicator paper to check its pH."
            ],
            answer: 1,
            explanation: "Purity is tested by determining sharp physical constants like boiling point (exactly 100 °C for pure water). Cobalt chloride tests only for the presence of water, not purity."
        },
        {
            id: "sep_2023_w21_q38",
            source: "2023 Winter Paper 21, Q38",
            question: "A chromatogram of 4-aminophenol is obtained. Distance travelled by spot from baseline = 6.5 cm; distance travelled by solvent front from baseline = 10.0 cm. What is the $R_f$ value of 4-aminophenol?",
            options: [
                "0.49",
                "0.65",
                "0.74",
                "1.35"
            ],
            answer: 1,
            explanation: "$R_f = \\frac{\\text{distance by spot}}{\\text{distance by solvent}} = \\frac{6.5\\text{ cm}}{10.0\\text{ cm}} = 0.65$."
        },
        {
            id: "sep_2023_w21_q39",
            source: "2023 Winter Paper 21, Q39",
            question: "The equation for the reaction of aqueous calcium nitrate and aqueous sodium hydroxide is shown: Ca(NO₃)₂(aq) + 2NaOH(aq) → Ca(OH)₂(s) + 2NaNO₃(aq). Which process is used to remove calcium hydroxide from the mixture?",
            options: [
                "chromatography",
                "crystallisation",
                "distillation",
                "filtration"
            ],
            answer: 3,
            explanation: "Calcium hydroxide is produced as a solid precipitate (s) from an aqueous solution (aq), so it is separated by filtration."
        },
        {
            id: "sep_2023_w22_q40",
            source: "2023 Winter Paper 22, Q40",
            question: "Substance Q is investigated using chromatography. Baseline is 13 mm above bottom. Spot Q is 83 mm above bottom (70 mm above baseline). Solvent front is 114 mm above bottom (101 mm above baseline). What is the $R_f$ value of Q?",
            options: [
                "0.60",
                "0.64",
                "0.69",
                "0.72"
            ],
            answer: 2,
            explanation: "$R_f = \\frac{70\\text{ mm}}{101\\text{ mm}} \\approx 0.693$."
        },
        {
            id: "sep_2023_w23_q39",
            source: "2023 Winter Paper 23, Q39",
            question: "$R_f$ values are used to identify unknown substances using paper chromatography. Which statements about $R_f$ values are correct?\n1. $R_f$ values are always less than 1.0.\n2. $R_f\\text{ value} = \\text{distance travelled by solvent} \\div \\text{distance travelled by unknown substance}$.\n3. The higher the $R_f$ value, the further the unknown substance travels.\n4. $R_f$ values are not affected by the solubility of the unknown substance.",
            options: [
                "1 and 2",
                "1 and 3",
                "2 and 3",
                "3 and 4"
            ],
            answer: 1,
            explanation: "Statement 1 is correct because the solute spot never travels further than the solvent front. Statement 3 is correct because a larger $R_f$ value means greater distance relative to solvent movement."
        },
        {
            id: "sep_2024_s21_q40",
            source: "2024 Summer Paper 21, Q40",
            question: "Which statement about chromatography is correct?",
            options: [
                "$R_f\\text{ value} = \\frac{\\text{distance travelled by solvent}}{\\text{distance travelled by substance}}$",
                "The baseline on chromatography paper should be drawn in ink.",
                "It is possible to use chromatography on colourless substances using a locating agent.",
                "$R_f$ values are always greater than 1.0."
            ],
            answer: 2,
            explanation: "Colourless compounds (like amino acids) can be visualized on a chromatogram by spraying them with a locating agent."
        },
        {
            id: "sep_2024_s22_q40",
            source: "2024 Summer Paper 22, Q40",
            question: "Which piece of apparatus is used to measure 24.5 cm³ of gas produced during a reaction?",
            options: [
                "beaker",
                "conical flask",
                "measuring cylinder",
                "volumetric pipette"
            ],
            answer: 2,
            explanation: "Gases collected over water or via delivery tube are measured using an inverted measuring cylinder or gas syringe."
        },
        {
            id: "sep_2024_s23_q38",
            source: "2024 Summer Paper 23, Q38",
            question: "Four pure substances, P, Q, R and S, are tested using chromatography. The table shows the distance moved by substance and solvent:\nP: substance = 4.5 cm, solvent = 10.0 cm\nQ: substance = 3.0 cm, solvent = 20.0 cm\nR: substance = 4.5 cm, solvent = 20.0 cm\nS: substance = 13.5 cm, solvent = 30.0 cm\nWhich two substances are identical?",
            options: [
                "P and R",
                "P and S",
                "Q and R",
                "Q and S"
            ],
            answer: 1,
            explanation: "Calculate $R_f$: P = $4.5/10.0 = 0.45$; Q = $3.0/20.0 = 0.15$; R = $4.5/20.0 = 0.225$; S = $13.5/30.0 = 0.45$. P and S have the same $R_f$ value."
        },
        {
            id: "sep_2024_w23_q38",
            source: "2024 Winter Paper 23, Q38",
            question: "The chromatogram of substance S is shown. W is solvent level to solvent front, X is baseline to solvent front, Y is baseline to spot S, Z is solvent level to spot S. How is the $R_f$ value of substance S calculated?",
            options: [
                "Y / X",
                "Z / W",
                "X / Y",
                "W / Y"
            ],
            answer: 0,
            explanation: "$R_f$ is distance of spot from baseline (Y) divided by distance of solvent front from baseline (X)."
        },
        {
            id: "sep_2024_w23_q39",
            source: "2024 Winter Paper 23, Q39",
            question: "Silver chloride and sodium chloride do not dissolve in kerosene. Silver chloride is insoluble in water, but sodium chloride is soluble in water. Boiling points: AgCl = 1547 °C, NaCl = 1413 °C. Which processes are used to separate a mixture of solid silver chloride and solid sodium chloride?",
            options: [
                "add kerosene, stir and then filter",
                "add water, stir and then filter",
                "add water, stir and then leave to crystallise",
                "add water, stir and then perform fractional distillation"
            ],
            answer: 1,
            explanation: "Adding water dissolves the soluble NaCl while AgCl remains solid. Filtering then separates the insoluble AgCl residue from the NaCl solution filtrate."
        },
        {
            id: "sep_2025_s21_q39",
            source: "2025 Summer Paper 21, Q39",
            question: "Which process is used to obtain pure copper(II) sulfate from aqueous copper(II) sulfate?",
            options: [
                "chromatography",
                "condensation",
                "evaporation",
                "filtration"
            ],
            answer: 2,
            explanation: "Evaporating the water from an aqueous salt solution yields the solid copper(II) sulfate salt (crystallisation/evaporation)."
        },
        {
            id: "sep_2025_s21_q40",
            source: "2025 Summer Paper 21, Q40",
            question: "A mixture of four different colourless amino acids is analysed by paper chromatography. The final chromatogram shows 3 separated spots. Why does the chromatogram only show three spots?",
            options: [
                "A locating agent is not used.",
                "One of the amino acids is insoluble in the solvent.",
                "The solvent front is too near the top of the paper.",
                "Two of the amino acids have the same $R_f$ value."
            ],
            answer: 3,
            explanation: "If two components in a mixture have identical $R_f$ values under the chosen solvent/conditions, they will travel at the exact same rate and overlap as a single spot."
        },
        {
            id: "sep_2025_s22_q38",
            source: "2025 Summer Paper 22, Q38",
            question: "Which item of apparatus is used to measure exactly 26.3 cm³ of a liquid?",
            options: [
                "burette",
                "gas syringe",
                "volumetric pipette",
                "measuring cylinder"
            ],
            answer: 0,
            explanation: "A burette measures variable, precise volumes to 0.05 cm³ accuracy (such as 26.3 cm³). Pipettes only measure fixed volumes (e.g. 25.0 cm³)."
        },
        {
            id: "sep_2025_s22_q39",
            source: "2025 Summer Paper 22, Q39",
            question: "A mixture containing an aqueous salt and an insoluble salt is filtered. Solid X remains in filter paper and liquid Y collects in the flask. Which row describes X and Y?",
            options: [
                "X: solute | Y: pure water",
                "X: solute | Y: filtrate",
                "X: residue | Y: pure water",
                "X: residue | Y: filtrate"
            ],
            answer: 3,
            explanation: "The insoluble solid remaining on the filter paper is the residue (X), and the solution collected below is the filtrate (Y)."
        },
        {
            id: "sep_2025_s22_q40",
            source: "2025 Summer Paper 22, Q40",
            question: "Pure ethanol has a melting point of -114 °C and a boiling point of 78 °C. What are the melting and boiling points of a sample of ethanol with glucose dissolved in it?",
            options: [
                "melting point: -116 °C | boiling point: 77 °C",
                "melting point: -116 °C | boiling point: 79 °C",
                "melting point: -112 °C | boiling point: 77 °C",
                "melting point: -112 °C | boiling point: 79 °C"
            ],
            answer: 1,
            explanation: "Impurity (dissolved solute) lowers the melting point (below -114 °C → -116 °C) and elevates the boiling point (above 78 °C → 79 °C)."
        },
        {
            id: "sep_2025_s23_q38",
            source: "2025 Summer Paper 23, Q38",
            question: "The steps used to separate a mixture of a soluble solid and an insoluble solid: A solution is made by adding the mixture to a suitable ......1...... The mixture is stirred and then poured through a filter funnel lined with filter paper. The insoluble solid is collected on the filter paper as the ......2...... Which words complete gaps 1 and 2?",
            options: [
                "1: solute | 2: filtrate",
                "1: solute | 2: residue",
                "1: solvent | 2: filtrate",
                "1: solvent | 2: residue"
            ],
            answer: 3,
            explanation: "The liquid added to dissolve a substance is the solvent (1), and the solid collected on the filter paper is the residue (2)."
        },
        {
            id: "sep_2025_s23_q39",
            source: "2025 Summer Paper 23, Q39",
            question: "Which items of apparatus are used to separate a mixture of liquids with different boiling points?",
            options: [
                "Fractional distillation apparatus (distillation flask with fractionating column, thermometer, Liebig condenser, receiver beaker)",
                "Titration apparatus (burette clamped over conical flask)",
                "Electrolysis cell (beaker with DC power supply and electrodes)",
                "Evaporating basin on tripod stand"
            ],
            answer: 0,
            explanation: "Fractional distillation uses a fractionating column and condenser to separate miscible liquids based on differing boiling points."
        },
        {
            id: "sep_2025_s23_q40",
            source: "2025 Summer Paper 23, Q40",
            question: "In paper chromatography, what is the equation for the $R_f$ value?",
            options: [
                "R_f = (distance travelled by substance) / (distance travelled by solvent)",
                "R_f = (distance travelled by substance) / (distance travelled by locating agent)",
                "R_f = (distance travelled by locating agent) / (distance travelled by substance)",
                "R_f = (distance travelled by solvent) / (distance travelled by substance)"
            ],
            answer: 0,
            explanation: "$R_f = \\frac{\\text{distance travelled by substance}}{\\text{distance travelled by solvent}}$."
        }
    ]
};
