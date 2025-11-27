// data.js

const simulations = [
    // =========================================
    // SECTION: FREE DEMOS (Green Badge)
    // =========================================
    {
        id: 'demo_1',
        title: "Gravity & Orbits",
        topic: "Astrophysics",
        grade: "FREE • Grade 9-10", 
        desc: "Visualize how mass affects gravitational pull and planetary orbits in a 3D space.",
        image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=600&auto=format&fit=crop", 
        file: "sims/gravity.html"
    },
    {
        id: 'demo_2',
        title: "Projectile Motion",
        topic: "Kinematics",
        grade: "FREE • Grade 11",
        desc: "Launch objects at different angles and velocities to understand parabolic trajectories.",
        image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=600&auto=format&fit=crop", 
        file: "sims/projectile.html" 
    },

    // =========================================
    // SECTION: PREMIUM CONTENT (Paid/Locked)
    // =========================================

    // 1. ROTATIONAL DYNAMICS
    {
        id: 101,
        title: "Moment of Inertia",
        topic: "Rotational Dynamics",
        grade: "Grade 11",
        desc: "Compare how mass distribution affects rotation for rings, discs, and spheres.",
        image: "https://images.unsplash.com/photo-1537884944318-390069bb8665?q=80&w=600&auto=format&fit=crop", 
        file: "sims/moment-inertia.html"
    },
    {
        id: 102,
        title: "Torque Visualizer",
        topic: "Rotational Dynamics",
        grade: "Grade 11",
        desc: "Apply forces at different distances from a pivot point to understand rotational force.",
        image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=600&auto=format&fit=crop", 
        file: "sims/torque.html"
    },
    {
        id: 103,
        title: "Angular Momentum",
        topic: "Rotational Dynamics",
        grade: "Grade 11",
        desc: "Experiment with the conservation of angular momentum (The Ice Skater Effect).",
        image: "https://images.unsplash.com/photo-1563461660947-507ef49e9c47?q=80&w=600&auto=format&fit=crop", 
        file: "sims/angular-momentum.html"
    },
    {
        id: 104,
        title: "Rolling Motion",
        topic: "Rotational Dynamics",
        grade: "Grade 11",
        desc: "Analyze the combination of translational and rotational motion on inclined planes.",
        image: "https://images.unsplash.com/photo-1599352723610-85c18dc9052b?q=80&w=600&auto=format&fit=crop", 
        file: "sims/rolling.html"
    },

    // 2. WAVES AND SOUND
    {
        id: 201,
        title: "Doppler Effect",
        topic: "Waves & Sound",
        grade: "Grade 11",
        desc: "Hear and see how frequency changes as a sound source moves past an observer.",
        image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=600&auto=format&fit=crop", 
        file: "sims/doppler.html"
    },
    {
        id: 202,
        title: "Standing Waves",
        topic: "Waves & Sound",
        grade: "Grade 11",
        desc: "Adjust frequency to find nodes and antinodes in a vibrating string.",
        image: "https://images.unsplash.com/photo-1505672675380-5a2298613328?q=80&w=600&auto=format&fit=crop", 
        file: "sims/standing-waves.html"
    },
    {
        id: 203,
        title: "Beats Simulation",
        topic: "Waves & Sound",
        grade: "Grade 11",
        desc: "Superimpose two sound waves of slightly different frequencies to create beats.",
        image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=600&auto=format&fit=crop", 
        file: "sims/beats.html"
    },
    {
        id: 204,
        title: "Organ Pipes",
        topic: "Waves & Sound",
        grade: "Grade 11",
        desc: "Explore harmonics in open and closed organ pipes.",
        image: "https://images.unsplash.com/photo-1569420959074-d4b99839446d?q=80&w=600&auto=format&fit=crop", 
        file: "sims/organ-pipe.html"
    },

    // 3. ELECTRONICS
    {
        id: 301,
        title: "Logic Gates",
        topic: "Electronics",
        grade: "Grade 12",
        desc: "Interactive truth tables for AND, OR, NOT, NAND, and NOR gates.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop", 
        file: "sims/logic-gates.html"
    },
    {
        id: 302,
        title: "Transistors (NPN/PNP)",
        topic: "Electronics",
        grade: "Grade 12",
        desc: "Control current flow using transistors as switches and amplifiers.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop", 
        file: "sims/transistors.html"
    },
    {
        id: 303,
        title: "Modulation",
        topic: "Electronics",
        grade: "Grade 12",
        desc: "Visualize Amplitude Modulation (AM) and Frequency Modulation (FM).",
        image: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=600&auto=format&fit=crop", 
        file: "sims/modulation.html"
    },
    {
        id: 304,
        title: "Semiconductors",
        topic: "Electronics",
        grade: "Grade 12",
        desc: "Dive into the P-N junction diode and depletion layers.",
        image: "https://images.unsplash.com/photo-1622674987085-3b7c02c61026?q=80&w=600&auto=format&fit=crop", 
        file: "sims/semiconductors.html"
    },

    // 4. MODERN PHYSICS
    {
        id: 401,
        title: "Photoelectric Effect",
        topic: "Modern Physics",
        grade: "Grade 12",
        desc: "Shine light on metals to eject electrons and study threshold frequency.",
        image: "https://images.unsplash.com/photo-1616167822923-2396e95c479e?q=80&w=600&auto=format&fit=crop", 
        file: "sims/photoelectric.html"
    },
    {
        id: 402,
        title: "Bohr Model",
        topic: "Modern Physics",
        grade: "Grade 12",
        desc: "Visualize electron energy levels and spectral lines of Hydrogen.",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop", 
        file: "sims/bohr.html"
    },
    {
        id: 403,
        title: "Fission & Fusion",
        topic: "Modern Physics",
        grade: "Grade 12",
        desc: "Split uranium atoms or fuse hydrogen isotopes in a reaction chamber.",
        image: "https://images.unsplash.com/photo-1576449909249-14a0d9b43d35?q=80&w=600&auto=format&fit=crop", 
        file: "sims/nuclear.html"
    },
    {
        id: 404,
        title: "Radioactivity",
        topic: "Modern Physics",
        grade: "Grade 12",
        desc: "Observe Alpha, Beta, and Gamma decay and half-life statistics.",
        image: "https://images.unsplash.com/photo-1598556776374-2c6e594d6738?q=80&w=600&auto=format&fit=crop", 
        file: "sims/radioactivity.html"
    },

    // 5. EMI & AC
    {
        id: 501,
        title: "LCR Circuit",
        topic: "EMI & AC",
        grade: "Grade 12",
        desc: "Adjust Inductance, Capacitance, and Resistance to see voltage lag/lead.",
        image: "https://images.unsplash.com/photo-1456428746267-325d2772024e?q=80&w=600&auto=format&fit=crop", 
        file: "sims/lcr.html"
    },
    {
        id: 502,
        title: "LC Resonance",
        topic: "EMI & AC",
        grade: "Grade 12",
        desc: "Find the resonant frequency where impedance is minimum.",
        image: "https://images.unsplash.com/photo-1621360841012-3f81e3309e3e?q=80&w=600&auto=format&fit=crop", 
        file: "sims/lc-resonance.html"
    },
    {
        id: 503,
        title: "Transformer",
        topic: "EMI & AC",
        grade: "Grade 12",
        desc: "Step-up and Step-down voltage using primary and secondary coils.",
        image: "https://images.unsplash.com/photo-1628122365288-0f1107297e56?q=80&w=600&auto=format&fit=crop", 
        file: "sims/transformer.html"
    },
    {
        id: 504,
        title: "Phasor Diagram",
        topic: "EMI & AC",
        grade: "Grade 12",
        desc: "Visualise rotating vectors to understand phase relationships in AC.",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=600&auto=format&fit=crop", 
        file: "sims/phasor.html"
    },

    // 6. ELECTROSTATICS
    {
        id: 601,
        title: "Electric Fields",
        topic: "Electrostatics",
        grade: "Grade 12",
        desc: "Place charges in space and visualize the electric field lines.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop", 
        file: "sims/electric-field.html"
    },
    {
        id: 602,
        title: "Gauss's Law",
        topic: "Electrostatics",
        grade: "Grade 12",
        desc: "Calculate flux through various 3D closed surfaces.",
        image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=600&auto=format&fit=crop", 
        file: "sims/gauss.html"
    },
    {
        id: 603,
        title: "Capacitors",
        topic: "Electrostatics",
        grade: "Grade 12",
        desc: "Series and Parallel combinations of capacitors and dielectric effects.",
        image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=600&auto=format&fit=crop", 
        file: "sims/capacitors.html"
    },

    // 7. CURRENT ELECTRICITY
    {
        id: 701,
        title: "Kirchhoff's Laws",
        topic: "Electricity",
        grade: "Grade 12",
        desc: "Build complex circuits and verify Junction and Loop rules.",
        image: "https://images.unsplash.com/photo-1619409831956-626a57e3f815?q=80&w=600&auto=format&fit=crop", 
        file: "sims/kirchhoff.html"
    },
    {
        id: 702,
        title: "Wheatstone Bridge",
        topic: "Electricity",
        grade: "Grade 12",
        desc: "Balance the bridge to measure unknown resistance accurately.",
        image: "https://images.unsplash.com/photo-1555616635-64096c3d4d96?q=80&w=600&auto=format&fit=crop", 
        file: "sims/wheatstone.html"
    },
    {
        id: 703,
        title: "Potentiometer",
        topic: "Electricity",
        grade: "Grade 12",
        desc: "Compare EMF of two cells using the potential gradient method.",
        image: "https://images.unsplash.com/photo-1580974511812-4b7197847546?q=80&w=600&auto=format&fit=crop", 
        file: "sims/potentiometer.html"
    },

    // 8. PROPERTIES OF MATTER
    {
        id: 801,
        title: "Young's Modulus",
        topic: "Properties of Matter",
        grade: "Grade 11",
        desc: "Stretch a wire and measure stress vs strain to find Elasticity.",
        image: "https://images.unsplash.com/photo-1581090122319-898035fe29fc?q=80&w=600&auto=format&fit=crop", 
        file: "sims/youngs-modulus.html"
    },
    {
        id: 802,
        title: "Surface Tension",
        topic: "Properties of Matter",
        grade: "Grade 11",
        desc: "Experiment with capillary rise and drop formation.",
        image: "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?q=80&w=600&auto=format&fit=crop", 
        file: "sims/surface-tension.html"
    },

    // 9. THERMODYNAMICS
    {
        id: 901,
        title: "Heat Engines",
        topic: "Thermodynamics",
        grade: "Grade 11",
        desc: "Visualize the PV diagram and work done in cyclic processes.",
        image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=600&auto=format&fit=crop", 
        file: "sims/heat-engine.html"
    },
    {
        id: 902,
        title: "Carnot Cycle",
        topic: "Thermodynamics",
        grade: "Grade 11",
        desc: "Explore Isothermal and Adiabatic expansions in an ideal engine.",
        image: "https://images.unsplash.com/photo-1623841103099-0e78c8c73245?q=80&w=600&auto=format&fit=crop", 
        file: "sims/carnot.html"
    },
    {
        id: 903,
        title: "Entropy",
        topic: "Thermodynamics",
        grade: "Grade 11",
        desc: "Understand disorder and the Second Law of Thermodynamics.",
        image: "https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=600&auto=format&fit=crop", 
        file: "sims/entropy.html"
    },

    // 10. GEOMETRICAL OPTICS
    {
        id: 1001,
        title: "Lens & Mirrors",
        topic: "Optics",
        grade: "Grade 12",
        desc: "Interactive Ray diagram generator for Convex/Concave systems.",
        image: "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?q=80&w=600&auto=format&fit=crop", 
        file: "sims/lens-mirror.html"
    },
    {
        id: 1002,
        title: "Microscope",
        topic: "Optics",
        grade: "Grade 12",
        desc: "Adjust objective and eyepiece lenses to calculate magnification.",
        image: "https://images.unsplash.com/photo-1518331397033-c244b7f8e874?q=80&w=600&auto=format&fit=crop", 
        file: "sims/microscope.html"
    },
    {
        id: 1003,
        title: "Telescope",
        topic: "Optics",
        grade: "Grade 12",
        desc: "Refracting and Reflecting telescope configurations in 3D.",
        image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=600&auto=format&fit=crop", 
        file: "sims/telescope.html"
    }
];
