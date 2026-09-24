// Ensure window.topicData exists
window.topicData = window.topicData || {};

// Add Atomic Structure topic
window.topicData['atomic_structure'] = {
  title: 'Atomic Structure & Periodic Table Trends',
  description: 'Questions covering subatomic particles, isotopes, electronic configurations, and periodic trends.',
  questions: [
    {
      id: 'atom_q1',
      source: '[2014 Paper 1, Q6]',
      question: 'An element, R, has p protons and n neutrons in its nucleus.<br><br>Which row gives a possible correct number of protons, neutrons and electrons in a negative ion of an isotope of R?',
      image: 'PASTE_YOUR_RAW_IMAGE_URL_HERE',
      options: [
        'protons: p | neutrons: n + 1 | electrons: p + 1',
        'protons: p | neutrons: n + 1 | electrons: p - 1',
        'protons: p + 1 | neutrons: n | electrons: p + 1',
        'protons: p + 1 | neutrons: n | electrons: p - 1'
      ],
      answer: 0,
      explanation: 'An isotope of R must retain the same proton number (p). An isotope can have a different neutron count (e.g., n + 1). A negative ion (1- charge) gains one extra electron relative to its protons (p + 1).'
    },
    {
      id: 'atom_q2',
      source: '[2014 Paper 1, Q9]',
      question: 'Some properties of elements in the same group of the Periodic Table are listed:<br>1. charge on the ion<br>2. number of outer shell electrons<br>3. number of protons<br>4. total number of inner shell electrons<br><br>Which properties show an increase as the group is descended?',
      image: '',
      options: [
        '1 and 2',
        '1 and 3',
        '2 and 4',
        '3 and 4'
      ],
      answer: 3,
      explanation: 'As you descend a group, the atomic number (number of protons) increases, and extra electron shells are added, increasing the total number of inner shell electrons. Ionic charge and valence electrons remain constant down a group.'
    },
    {
      id: 'atom_q3',
      source: '[2016 Paper 1, Q4]',
      question: 'The table shows details of the particles present in an atom of potassium and in ions of potassium and sulfur.<br><br>What are the values of W, X, Y and Z?',
      image: 'PASTE_YOUR_RAW_IMAGE_URL_HERE',
      options: [
        'W: 19 | X: 18 | Y: 32 | Z: 18',
        'W: 19 | X: 19 | Y: 34 | Z: 16',
        'W: 20 | X: 18 | Y: 32 | Z: 18',
        'W: 20 | X: 19 | Y: 34 | Z: 16'
      ],
      answer: 0,
      explanation: 'Potassium has atomic number 19, so K<sup>+</sup> has W = 19 protons and X = 18 electrons (19 - 1). Sulfur has atomic number 16. With 16 neutrons, mass number Y = 32. A S<sup>2-</sup> ion gains 2 electrons, giving Z = 18 electrons.'
    },
    {
      id: 'atom_q4',
      source: '[2017 Paper 1, Q4]',
      question: 'Four atoms are shown:<br><sup>14</sup><sub>6</sub>C &nbsp;&nbsp; <sup>15</sup><sub>7</sub>N &nbsp;&nbsp; <sup>16</sup><sub>8</sub>O &nbsp;&nbsp; <sup>17</sup><sub>9</sub>F<br><br>Which statement about all four atoms is correct?',
      image: '',
      options: [
        'They have the same number of electrons.',
        'They have the same number of neutrons.',
        'They have the same number of nucleons.',
        'They have the same number of protons.'
      ],
      answer: 1,
      explanation: 'Neutron number = Nucleon number - Proton number.<br>• C: 14 - 6 = 8<br>• N: 15 - 7 = 8<br>• O: 16 - 8 = 8<br>• F: 17 - 9 = 8<br>All four atoms contain 8 neutrons.'
    },
    {
      id: 'atom_q5',
      source: '[2017 Paper 1, Q5]',
      question: 'The diagram shows the structure of an ion.<br><br>What is the correct position in the Periodic Table of the element from which this ion was formed?',
      image: 'PASTE_YOUR_RAW_IMAGE_URL_HERE',
      options: [
        'period: 2 | group: III',
        'period: 2 | group: 0',
        'period: 3 | group: III',
        'period: 3 | group: 0'
      ],
      answer: 2,
      explanation: 'The Al<sup>3+</sup> ion has lost 3 valence electrons to achieve a 2,8 configuration. The neutral aluminum atom has configuration 2,8,3 (3 electron shells = Period 3; 3 valence electrons = Group III).'
    },
    {
      id: 'atom_q6',
      source: '[2018 Paper 1, Q5]',
      question: 'Which statement about atoms is correct?',
      image: '',
      options: [
        'The mass of an atom is almost entirely due to its nucleus.',
        'The nucleus and the electrons repel each other.',
        'The protons and neutrons have opposite charges.',
        'The shell nearest the nucleus always contains the most electrons.'
      ],
      answer: 0,
      explanation: 'Protons and neutrons reside in the nucleus and each have a relative mass of 1, whereas electrons have negligible mass (1/1840). Thus, virtually all atomic mass resides in the nucleus.'
    },
    {
      id: 'atom_q7',
      source: '[2019 Paper 1, Q5]',
      question: 'An isotope of element Q can be written as <sup>32</sup><sub>16</sub>Q.<br>Particle R has four more neutrons, one more proton and one more electron than this isotope of Q.<br><br>What represents R?',
      image: '',
      options: [
        '<sup>36</sup><sub>17</sub>R⁻',
        '<sup>36</sup><sub>17</sub>R',
        '<sup>37</sup><sub>17</sub>R⁻',
        '<sup>37</sup><sub>17</sub>R'
      ],
      answer: 3,
      explanation: 'Protons for R = 16 + 1 = 17. Neutrons for R = (32 - 16) + 4 = 20. Nucleon number = 17 + 20 = 37 (<sup>37</sup><sub>17</sub>R). Since protons (17) equal electrons (16 + 1 = 17), R is a neutral atom with no charge.'
    },
    {
      id: 'atom_q8',
      source: '[2020 Paper 1, Q6]',
      question: 'A new element was first synthesised in 2006.<br>It has been given the name oganesson and is represented by <sup>294</sup><sub>118</sub>Og.<br><br>Which statement about an atom of oganesson is correct?',
      image: '',
      options: [
        'It contains 118 electrons and 176 nucleons.',
        'It contains 118 electrons and 176 protons.',
        'It contains 118 protons and 176 neutrons.',
        'It contains 118 protons and 176 nucleons.'
      ],
      answer: 2,
      explanation: 'Atomic number = 118 protons (and 118 electrons). Neutrons = Nucleon number - Proton number = 294 - 118 = 176 neutrons.'
    },
    {
      id: 'atom_q9',
      source: '[2020 Paper 1, Q7]',
      question: 'Four elements are shown as P, Q, R and S. The letters do not represent the chemical symbols of the elements.<br><br>Which atom forms an ion with a 2– charge that has the electronic structure 2,8,8?',
      image: '',
      options: [
        '<sup>16</sup><sub>8</sub>P',
        '<sup>32</sup><sub>16</sub>Q',
        '<sup>40</sup><sub>18</sub>R',
        '<sup>40</sup><sub>20</sub>S'
      ],
      answer: 1,
      explanation: 'An ion with a 2- charge and 2,8,8 structure has 18 electrons. Since it gained 2 electrons, the neutral atom must have 18 - 2 = 16 protons (atomic number 16). This corresponds to <sup>32</sup><sub>16</sub>Q (Sulfur).'
    },
    {
      id: 'atom_q10',
      source: '[2021 Paper 1, Q5]',
      question: 'An atom of one isotope of bromine is represented by the symbol <sup>81</sup><sub>35</sub>Br.<br><br>Which row is correct for an atom of a different isotope of bromine?',
      image: 'PASTE_YOUR_RAW_IMAGE_URL_HERE',
      options: [
        'number of neutrons: 44 | number of protons: 35 | nucleon number: 44',
        'number of neutrons: 44 | number of protons: 35 | nucleon number: 79',
        'number of neutrons: 46 | number of protons: 35 | nucleon number: 81',
        'number of neutrons: 79 | number of protons: 44 | nucleon number: 79'
      ],
      answer: 1,
      explanation: 'Isotopes must have the same proton number (35 for Bromine). A different isotope will have a different nucleon number (e.g., 79 instead of 81). Neutrons = 79 - 35 = 44.'
    },
    {
      id: 'atom_q11',
      source: '[2022 Paper 1, Q4]',
      question: 'The nucleus of M<sup>3+</sup> contains a total of 27 particles. 13 of the particles have a charge.<br><br>Which statement about the ion is correct?',
      image: '',
      options: [
        'It contains 13 neutrons and 10 electrons.',
        'It contains 13 protons and 10 electrons.',
        'It contains 13 protons and 13 electrons.',
        'It contains 14 neutrons and 13 electrons.'
      ],
      answer: 1,
      explanation: 'Charged nuclear particles are protons, so M<sup>3+</sup> has 13 protons. With a 3+ charge, it has lost 3 electrons, leaving 13 - 3 = 10 electrons. Neutrons = 27 - 13 = 14.'
    }
  ]
};
