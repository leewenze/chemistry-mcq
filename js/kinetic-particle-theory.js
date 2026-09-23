// Ensure window.topicData exists
window.topicData = window.topicData || {};

// Add Kinetic Particle Theory topic
window.topicData["kinetic_particle_theory"] = {
    title: "Topic: Kinetic Particle Theory, State Changes & Diffusion",
    description: "Questions on state changes, particle motion/arrangements, pressure-temperature relationships, and gas diffusion rates from IGCSE Chemistry papers.",
    questions: [
        {
            id: "kpt_2020_w21_q1",
            source: "2020 Winter Paper 21, Q1",
            question: "Which gas has the slowest rate of diffusion?",
            options: [
                "H₂",
                "NH₃",
                "CH₄",
                "CO₂"
            ],
            answer: 3,
            explanation: "Diffusion rate depends on relative molecular mass ($M_r$). CO₂ has the highest $M_r$ (44), so it diffuses the slowest."
        },
        {
            id: "kpt_2020_w22_q1",
            source: "2020 Winter Paper 22, Q1",
            question: "Which gas has the slowest rate of diffusion?",
            options: [
                "H₂",
                "NH₃",
                "CH₄",
                "CO₂"
            ],
            answer: 3,
            explanation: "CO₂ has the largest relative molecular mass ($M_r = 44$) among the options, giving it the slowest diffusion rate."
        },
        {
            id: "kpt_2020_w23_q1",
            source: "2020 Winter Paper 23, Q1",
            question: "Which gas has the slowest rate of diffusion?",
            options: [
                "H₂",
                "NH₃",
                "CH₄",
                "CO₂"
            ],
            answer: 3,
            explanation: "Heavier gas molecules move more slowly at the same temperature. CO₂ ($M_r = 44$) is the heaviest gas listed."
        },
        {
            id: "kpt_2020_w23_q2",
            source: "2020 Winter Paper 23, Q2",
            question: "When a dark grey solid element is heated, it changes directly into a purple gas. Which word describes this change?",
            options: [
                "boiling",
                "evaporation",
                "melting",
                "sublimation"
            ],
            answer: 3,
            explanation: "Sublimation is the direct transition of a substance from the solid state to the gas state without passing through the liquid state."
        },
        {
            id: "kpt_2021_w21_q1",
            source: "2021 Winter Paper 21, Q1",
            question: "Brownian motion and the diffusion of gases provide evidence for the particulate nature of matter. Which row identifies an example of Brownian motion and how molecular mass determines the rate of diffusion of gas molecules?",
            options: [
                "Brownian motion: pollen grains in water are seen to move randomly | diffusion: heavier gas molecules diffuse more quickly",
                "Brownian motion: pollen grains in water are seen to move randomly | diffusion: lighter gas molecules diffuse more quickly",
                "Brownian motion: salt dissolves faster in hot water than in cold water | diffusion: heavier gas molecules diffuse more quickly",
                "Brownian motion: salt dissolves faster in hot water than in cold water | diffusion: lighter gas molecules diffuse more quickly"
            ],
            answer: 1,
            explanation: "Brownian motion is observed as the random movement of microscopic particles (like pollen grains) suspended in a fluid. Lighter molecules diffuse faster than heavier ones."
        },
        {
            id: "kpt_2021_w22_q1",
            source: "2021 Winter Paper 22, Q1",
            question: "An experiment is set up with cotton wool soaked in aqueous ammonia at the left end of a tube and hydrochloric acid at the right end. After several minutes, a white ring of ammonium chloride appears near the right end. Which statement explains the observation?",
            options: [
                "Ammonia gas diffuses faster than hydrogen chloride gas because its molecules have a lower molecular mass.",
                "Ammonia gas diffuses faster than hydrogen chloride gas because its molecules have a higher molecular mass.",
                "Ammonia gas diffuses slower than hydrogen chloride gas because its molecules have a lower molecular mass.",
                "Ammonia gas diffuses slower than hydrogen chloride gas because its molecules have a higher molecular mass."
            ],
            answer: 0,
            explanation: "NH₃ ($M_r = 17$) is lighter than HCl ($M_r = 36.5$), so NH₃ diffuses faster and travels further along the tube before reacting."
        },
        {
            id: "kpt_2021_w23_q1",
            source: "2021 Winter Paper 23, Q1",
            question: "Brownian motion and the diffusion of gases provide evidence for the particulate nature of matter. Which row identifies an example of Brownian motion and how molecular mass determines the rate of diffusion of gas molecules?",
            options: [
                "Brownian motion: pollen grains in water are seen to move randomly | diffusion: heavier gas molecules diffuse more quickly",
                "Brownian motion: pollen grains in water are seen to move randomly | diffusion: lighter gas molecules diffuse more quickly",
                "Brownian motion: salt dissolves faster in hot water than in cold water | diffusion: heavier gas molecules diffuse more quickly",
                "Brownian motion: salt dissolves faster in hot water than in cold water | diffusion: lighter gas molecules diffuse more quickly"
            ],
            answer: 1,
            explanation: "Pollen grains moving randomly in water demonstrates Brownian motion, and lighter molecules have a higher average velocity, diffusing faster."
        },
        {
            id: "kpt_2022_s21_q1",
            source: "2022 Summer Paper 21, Q1",
            question: "Which two gases will diffuse at the same rate, at the same temperature?",
            options: [
                "carbon monoxide and carbon dioxide",
                "carbon monoxide and nitrogen",
                "chlorine and fluorine",
                "nitrogen and oxygen"
            ],
            answer: 1,
            explanation: "Gases with equal relative molecular masses ($M_r$) diffuse at the same rate. Both CO ($12+16=28$) and N₂ ($14×2=28$) have an $M_r$ of 28."
        },
        {
            id: "kpt_2022_s22_q1",
            source: "2022 Summer Paper 22, Q1",
            question: "Which two gases will diffuse at the same rate, at the same temperature?",
            options: [
                "carbon monoxide and carbon dioxide",
                "carbon monoxide and nitrogen",
                "chlorine and fluorine",
                "nitrogen and oxygen"
            ],
            answer: 1,
            explanation: "Both CO and N₂ have a relative molecular mass ($M_r$) of 28, meaning their molecules diffuse at the same speed."
        },
        {
            id: "kpt_2022_s23_q1",
            source: "2022 Summer Paper 23, Q1",
            question: "Which two gases will diffuse at the same rate, at the same temperature?",
            options: [
                "carbon monoxide and carbon dioxide",
                "carbon monoxide and nitrogen",
                "chlorine and fluorine",
                "nitrogen and oxygen"
            ],
            answer: 1,
            explanation: "CO ($M_r = 28$) and N₂ ($M_r = 28$) have identical molecular masses, so they diffuse at the exact same rate."
        },
        {
            id: "kpt_2023_s21_q1",
            source: "2023 Summer Paper 21, Q1",
            question: "A purple crystal is dropped into water. After five hours, the solution turns uniformly purple. Which processes take place in this experiment?",
            options: [
                "chemical reaction: No | diffusing: Yes | dissolving: Yes",
                "chemical reaction: No | diffusing: Yes | dissolving: No",
                "chemical reaction: Yes | diffusing: No | dissolving: Yes",
                "chemical reaction: Yes | diffusing: Yes | dissolving: No"
            ],
            answer: 0,
            explanation: "The crystal first dissolves into individual particles, which then diffuse throughout the solution. No new chemical substance is formed."
        },
        {
            id: "kpt_2023_s22_q1",
            source: "2023 Summer Paper 22, Q1",
            question: "Four physical changes of ethanol are listed:\n1. condensation\n2. evaporation\n3. freezing\n4. boiling\nIn which changes do the particles move further apart?",
            options: [
                "1 and 2",
                "1 and 3",
                "2 and 4",
                "3 and 4"
            ],
            answer: 2,
            explanation: "Evaporation and boiling convert liquid to gas, causing the particles to move significantly further apart."
        },
        {
            id: "kpt_2023_s23_q1",
            source: "2023 Summer Paper 23, Q1",
            question: "Nitrogen is heated in a balloon, which expands slightly. Which statements about the molecules of nitrogen are correct?\n1. They move further apart.\n2. They move more quickly.\n3. They remain the same distance apart.\n4. Their speed remains unchanged.",
            options: [
                "1 and 2",
                "1 and 4",
                "2 and 3",
                "3 and 4"
            ],
            answer: 0,
            explanation: "Heating increases kinetic energy so molecules move faster (2). As the gas expands, the average distance between molecules increases (1)."
        },
        {
            id: "kpt_2023_w21_q1",
            source: "2023 Winter Paper 21, Q1",
            question: "A gas in a sealed container is heated from 50 °C to 100 °C. Which row describes the cause of the pressure of the gas and the effect of increasing the temperature?",
            options: [
                "cause of gas pressure: collisions between gas particles | effect of increased temperature: collisions become less frequent",
                "cause of gas pressure: collisions between gas particles | effect of increased temperature: the average speed of the gas particles increases",
                "cause of gas pressure: collisions between gas particles and the container | effect of increased temperature: collisions become less frequent",
                "cause of gas pressure: collisions between gas particles and the container | effect of increased temperature: the average speed of the gas particles increases"
            ],
            answer: 3,
            explanation: "Gas pressure is caused by gas particles colliding with the container walls. Increasing temperature provides kinetic energy, increasing particle speed."
        },
        {
            id: "kpt_2023_w21_q2",
            source: "2023 Winter Paper 21, Q2",
            question: "Gas jars containing damp blue litmus paper are placed above jars containing CO₂, HCl, HBr, and SO₂. In which set of apparatus does the litmus turn red first?",
            options: [
                "carbon dioxide, CO₂",
                "hydrogen chloride, HCl",
                "hydrogen bromide, HBr",
                "sulfur dioxide, SO₂"
            ],
            answer: 1,
            explanation: "The gas with the lowest molecular mass diffuses fastest. HCl ($M_r = 36.5$) is lighter than CO₂ (44), SO₂ (64), and HBr (81)."
        },
        {
            id: "kpt_2023_w22_q1",
            source: "2023 Winter Paper 22, Q1",
            question: "Part of a cooling curve for water is shown, featuring a horizontal plateau at 0 °C between points X and Y. What is occurring between points X and Y?",
            options: [
                "Steam is condensing into water.",
                "The temperature of the water is decreasing.",
                "Ice is melting.",
                "Particles are losing heat to the surroundings."
            ],
            answer: 3,
            explanation: "During a phase change (freezing at 0 °C), temperature stays constant while latent heat is released to the surroundings as liquid turns to solid."
        },
        {
            id: "kpt_2023_w23_q1",
            source: "2023 Winter Paper 23, Q1",
            question: "A gas sample has its temperature and pressure both increased, but its volume remains unchanged. What happens to the particle speed and the average distance between the particles?",
            options: [
                "particle speed: unchanged | average distance between particles: unchanged",
                "particle speed: unchanged | average distance between particles: increased",
                "particle speed: increased | average distance between particles: unchanged",
                "particle speed: increased | average distance between particles: increased"
            ],
            answer: 2,
            explanation: "Higher temperature increases kinetic energy and speed. Because the overall volume is fixed, the average spacing between particles stays constant."
        },
        {
            id: "kpt_2023_w23_q2",
            source: "2023 Winter Paper 23, Q2",
            question: "Which statements about the rate of diffusion of ammonia, carbon monoxide, nitrogen, and oxygen are correct?\n1. Nitrogen and carbon monoxide will diffuse at the same rate.\n2. Oxygen will diffuse slowest because it is an element, whereas the others are compounds.\n3. Ammonia will diffuse fastest.",
            options: [
                "1 and 2",
                "1 and 3",
                "1 only",
                "2 and 3"
            ],
            answer: 1,
            explanation: "Statement 1 is correct ($M_r$ of N₂ and CO is 28). Statement 3 is correct (NH₃ has the lowest $M_r$ of 17). Statement 2 is false because rate depends on mass, not element vs compound."
        },
        {
            id: "kpt_2024_s21_q1",
            source: "2024 Summer Paper 21, Q1",
            question: "A gas is heated while pressure is kept constant. Which statement describes the behaviour of the particles in the gas?",
            options: [
                "The particles move faster and become closer together.",
                "The particles move faster and become further apart.",
                "The particles move more slowly and become closer together.",
                "The particles move more slowly and become further apart."
            ],
            answer: 1,
            explanation: "Heating increases kinetic energy (particles move faster). To maintain constant pressure, the gas must expand, pushing particles further apart."
        },
        {
            id: "kpt_2024_s21_q2",
            source: "2024 Summer Paper 21, Q2",
            question: "A mixture of ice and water is left to stand and the ice melts. Which row describes what happens as the ice is melting?",
            options: [
                "energy change: average kinetic energy of particles decreases | temperature of mixture: increases",
                "energy change: energy is used to overcome attractive forces | temperature of mixture: increases",
                "energy change: average kinetic energy of particles decreases | temperature of mixture: stays the same",
                "energy change: energy is used to overcome attractive forces | temperature of mixture: stays the same"
            ],
            answer: 3,
            explanation: "During melting, temperature remains constant because thermal energy absorbed is used to overcome intermolecular forces rather than increase kinetic energy."
        },
        {
            id: "kpt_2024_s21_q3",
            source: "2024 Summer Paper 21, Q3",
            question: "Hydrogen chloride gas ($M_r = 36.5$) turns indicator paper red in 38 s. The experiment is repeated using sulfur dioxide gas ($M_r = 64$). What is the result for sulfur dioxide gas?",
            options: [
                "time for universal indicator paper to change colour: 26 s | universal indicator paper turns: blue",
                "time for universal indicator paper to change colour: 51 s | universal indicator paper turns: blue",
                "time for universal indicator paper to change colour: 26 s | universal indicator paper turns: red",
                "time for universal indicator paper to change colour: 51 s | universal indicator paper turns: red"
            ],
            answer: 3,
            explanation: "SO₂ is acidic, turning indicator paper red. Because SO₂ ($M_r = 64$) is heavier than HCl ($M_r = 36.5$), it diffuses slower and takes longer (>38 s)."
        },
        {
            id: "kpt_2024_s22_q1",
            source: "2024 Summer Paper 22, Q1",
            question: "Which gas has the slowest rate of diffusion?",
            options: [
                "H₂",
                "NH₃",
                "CH₄",
                "CO₂"
            ],
            answer: 3,
            explanation: "CO₂ ($M_r = 44$) has the highest molecular mass among the choices, giving it the slowest diffusion rate."
        },
        {
            id: "kpt_2024_s23_q1",
            source: "2024 Summer Paper 23, Q1",
            question: "Sodium chloride is a liquid at 900 °C. Which row describes the arrangement and the motion of the particles in sodium chloride at 900 °C?",
            options: [
                "motion of particles: vibrate about a fixed point | arrangement of particles: regular",
                "motion of particles: move randomly | arrangement of particles: regular",
                "motion of particles: vibrate about a fixed point | arrangement of particles: random",
                "motion of particles: move randomly | arrangement of particles: random"
            ],
            answer: 3,
            explanation: "In a liquid state, particles have a random arrangement and move past each other randomly."
        },
        {
            id: "kpt_2024_s23_q2",
            source: "2024 Summer Paper 23, Q2",
            question: "HCl ($M_r = 36.5$) and NH₃ ($M_r = 17$) form ammonium chloride near the HCl end. If HBr ($M_r = 81$) is used instead of HCl, where does the solid form relative to the tube positions A, B, C, D (left to right)?",
            options: [
                "Position A",
                "Position B",
                "Position C",
                "Position D"
            ],
            answer: 0,
            explanation: "HBr ($M_r = 81$) is heavier than HCl ($M_r = 36.5$). It diffuses even slower, so NH₃ travels even further left toward Position A before meeting HBr."
        },
        {
            id: "kpt_2024_w21_q1",
            source: "2024 Winter Paper 21, Q1",
            question: "Which row describes the arrangement and motion of the particles in a liquid?",
            options: [
                "arrangement: random and particles are touching | motion: moving slowly",
                "arrangement: random with space between all particles | motion: moving slowly",
                "arrangement: an ordered lattice with all particles touching | motion: moving slowly",
                "arrangement: an ordered lattice with space between all particles | motion: moving quickly"
            ],
            answer: 0,
            explanation: "In liquids, particles are close together (touching) in a random arrangement and can move/slide slowly past one another."
        },
        {
            id: "kpt_2024_w21_q2",
            source: "2024 Winter Paper 21, Q2",
            question: "Which gas has the lowest rate of diffusion at room temperature and pressure?",
            options: [
                "the gas produced when ammonium chloride is heated with aqueous sodium hydroxide",
                "the gas which makes up approximately 78% of clean, dry air",
                "the gas produced when sodium carbonate is added to dilute hydrochloric acid",
                "the gas produced when zinc is added to dilute sulfuric acid"
            ],
            answer: 2,
            explanation: "Option A produces NH₃ ($M_r = 17$). Option B is N₂ ($M_r = 28$). Option C produces CO₂ ($M_r = 44$). Option D produces H₂ ($M_r = 2$). CO₂ is the heaviest and diffuses slowest."
        },
        {
            id: "kpt_2024_w22_q1",
            source: "2024 Winter Paper 22, Q1",
            question: "Oxygen melts at –219 °C and boils at –183 °C. At which temperature is oxygen a liquid?",
            options: [
                "–225 °C",
                "–189 °C",
                "–175 °C",
                "25 °C"
            ],
            answer: 1,
            explanation: "Oxygen is liquid between its melting point (–219 °C) and boiling point (–183 °C). –189 °C falls within this range."
        },
        {
            id: "kpt_2024_w22_q2",
            source: "2024 Winter Paper 22, Q2",
            question: "The pressure of a sample of gas is decreased while temperature is kept constant. Which row describes the effects on the particles?",
            options: [
                "movement of particles: slower | collisions between particles: occur less often",
                "movement of particles: slower | collisions between particles: occur with more force",
                "movement of particles: no change in speed | collisions between particles: occur less often",
                "movement of particles: no change in speed | collisions between particles: occur with more force"
            ],
            answer: 2,
            explanation: "Temperature determines speed, so speed stays constant. Decreasing pressure means volume expands, reducing collision frequency."
        },
        {
            id: "kpt_2024_w23_q1",
            source: "2024 Winter Paper 23, Q1",
            question: "A sample of ethanol is left in an open beaker at room temperature. After 24 hours, no ethanol remains in the beaker. What has happened to the ethanol?",
            options: [
                "It has boiled.",
                "It has condensed.",
                "It has evaporated.",
                "It has frozen."
            ],
            answer: 2,
            explanation: "Evaporation occurs at the surface of a liquid at temperatures below its boiling point."
        },
        {
            id: "kpt_2024_w23_q2",
            source: "2024 Winter Paper 23, Q2",
            question: "A gas is in a sealed container with a fixed volume. Which statements describe what happens to the molecules in the gas when the temperature is increased?\n1. They move more slowly.\n2. They collide with the walls of the container more frequently.\n3. They collide with the walls of the container with less force.\n4. They have greater kinetic energy.",
            options: [
                "1 and 3",
                "1 and 4",
                "2 and 3",
                "2 and 4"
            ],
            answer: 3,
            explanation: "Increasing temperature increases kinetic energy (4) and particle speed, leading to more frequent collisions with the walls (2)."
        },
        {
            id: "kpt_2025_s21_q1",
            source: "2025 Summer Paper 21, Q1",
            question: "A gas is placed in a sealed container with a fixed volume and heated. Which statements are correct?\n1. The gas molecules move around faster.\n2. The gas particles collide with the walls of the container more frequently.\n3. The pressure in the container decreases.",
            options: [
                "1 and 2",
                "1 only",
                "2 and 3",
                "2 only"
            ],
            answer: 0,
            explanation: "Heating gives gas particles more kinetic energy, making them move faster (1) and hit container walls more often (2), which increases pressure."
        },
        {
            id: "kpt_2025_s21_q2",
            source: "2025 Summer Paper 21, Q2",
            question: "A sample of ethanol is heated at a constant rate. The heating curve shows plateaus at 2–3 (melting) and 4–5 (boiling). Which statement about the heating curve is correct?",
            options: [
                "Ethanol changes its physical state between 3 and 4.",
                "Ethanol condenses between 2 and 3.",
                "Energy is absorbed between 3 and 4 but not absorbed between 4 and 5.",
                "More energy is absorbed between 4 and 5 than between 2 and 3."
            ],
            answer: 3,
            explanation: "The plateau for boiling (4–5) is longer than for melting (2–3) because latent heat of vaporisation requires more energy than latent heat of fusion."
        },
        {
            id: "kpt_2025_s22_q1",
            source: "2025 Summer Paper 22, Q1",
            question: "An ice cube melts. What happens to the molecules of water in the ice cube?",
            options: [
                "They evaporate.",
                "They dissolve.",
                "They gain energy.",
                "They lose energy."
            ],
            answer: 2,
            explanation: "Melting requires the absorption of heat energy from the surroundings, so the water molecules gain energy."
        },
        {
            id: "kpt_2025_s22_q2",
            source: "2025 Summer Paper 22, Q2",
            question: "A liquid X above its boiling point is cooled so that it condenses and then freezes. Which graph describes the change in temperature over time?",
            options: [
                "Graph A (temperature rises then falls continuously)",
                "Graph B (cooling curve starting from gas, showing horizontal plateaus during condensation and freezing)",
                "Graph C (temperature fluctuates up and down)",
                "Graph D (temperature rises with a plateau then falls)"
            ],
            answer: 1,
            explanation: "A standard cooling curve starting from a gas drops in temperature and shows two flat plateaus corresponding to condensation and freezing."
        },
        {
            id: "kpt_2025_s23_q1",
            source: "2025 Summer Paper 23, Q1",
            question: "Which two changes, when applied at the same time to a fixed amount of gas, cause the greatest increase in volume of the gas?",
            options: [
                "change in pressure: decrease by 10% | change in temperature: decrease by 10%",
                "change in pressure: increase by 10% | change in temperature: decrease by 10%",
                "change in pressure: decrease by 20% | change in temperature: increase by 10%",
                "change in pressure: increase by 20% | change in temperature: increase by 10%"
            ],
            answer: 2,
            explanation: "According to gas laws ($V \\propto T/P$), gas volume expands the most when pressure is decreased and temperature is increased."
        },
        {
            id: "kpt_2025_s23_q2",
            source: "2025 Summer Paper 23, Q2",
            question: "Solid G is cooled from liquid to room temperature. Four statements about the plateau X–Y are listed:\n1. The speed of the molecules of G decreases.\n2. The molecules of G become less closely packed.\n3. Thermal energy is released by the molecules of G to the surroundings.\n4. G changes from solid to liquid.\nWhich statements are correct?",
            options: [
                "1 and 2",
                "1 and 3",
                "2 and 4",
                "3 and 4"
            ],
            answer: 1,
            explanation: "During cooling and solidifying at a plateau, kinetic energy decreases (1) and latent heat is released to the surroundings (3)."
        }
    ]
};
