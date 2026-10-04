/* SKC Physics – knowledge base used by the "Ask AI" tab.
 *
 * KB_OUTLINE : short topic list for every chapter (written from the standard Class 11 syllabus,
 *              NOT copied from your PDFs). Helps the AI find the right chapter.
 * KB         : the real book text, split into chunks:  { ch: 4, title: "Kinematics", text: "..." }
 *              It is empty until the chapter text is added.
 */
window.KB_OUTLINE = [
 { n: 1,  title: "Vector", sub: "Vector Algebra & its Applications",
   topics: ["scalars and vectors","types of vectors: null, unit, equal, negative, collinear","triangle law and parallelogram law of addition","resolution of a vector into components","unit vectors i j k","dot product (scalar product): work, projection, angle between vectors","cross product (vector product): torque, area, direction by right hand rule","relative vectors and applications"] },
 { n: 2,  title: "Unit and Dimensions", sub: "Physical Quantities & Dimensional Analysis",
   topics: ["fundamental and derived quantities","SI units","dimensions and dimensional formula","principle of homogeneity","checking correctness of an equation","deriving relations using dimensions","conversion between unit systems","limitations of dimensional analysis","dimensionless quantities"] },
 { n: 3,  title: "Error and Measurement", sub: "Significant Figures & Error Analysis",
   topics: ["accuracy and precision","absolute error, relative error, percentage error","errors in sum, difference, product, quotient and powers","systematic and random errors","significant figures and their rules","rounding off","least count","vernier calliper","screw gauge"] },
 { n: 4,  title: "Kinematics", sub: "Motion in 1D, 2D & Relative Motion",
   topics: ["distance and displacement","speed, velocity, acceleration","equations of motion v = u + at, s = ut + 1/2 at^2, v^2 = u^2 + 2as","position-time, velocity-time and acceleration-time graphs","free fall","motion with variable acceleration using calculus","projectile motion: time of flight, maximum height, range","relative motion in 1D and 2D","river-boat problems","rain-man problems"] },
 { n: 5,  title: "NLM", sub: "Newton's Laws of Motion & Friction",
   topics: ["Newton's first, second and third laws","inertia, linear momentum, impulse","free body diagram","tension and pulley systems","constraint relations","pseudo force and non-inertial frames","lift problems","friction: static, kinetic, limiting friction","angle of friction and angle of repose","blocks on inclined plane","blocks in contact"] },
 { n: 6,  title: "Circular Motion", sub: "Uniform & Non-Uniform Circular Motion",
   topics: ["angular displacement, angular velocity, angular acceleration","relation v = r w","uniform circular motion and centripetal acceleration","centripetal force","non-uniform circular motion, tangential and radial acceleration","banking of roads","conical pendulum","motion in a vertical circle: minimum speed, tension","cyclist on a turn"] },
 { n: 7,  title: "Work Power Energy", sub: "Work-Energy Theorem & Conservation of Energy",
   topics: ["work done by constant and variable force","work-energy theorem","kinetic energy","potential energy","conservative and non-conservative forces","spring potential energy","conservation of mechanical energy","power: average and instantaneous","potential energy curve and equilibrium","vertical circle using energy"] },
 { n: 8,  title: "Center of Mass", sub: "COM, Momentum & Collisions",
   topics: ["centre of mass of discrete and continuous bodies","motion of centre of mass","conservation of linear momentum","impulse","elastic and inelastic collisions","perfectly inelastic collision","coefficient of restitution","collision in one and two dimensions","variable mass: rocket propulsion","reduced mass"] },
 { n: 9,  title: "Rotation Motion", sub: "Rotational Dynamics & Moment of Inertia",
   topics: ["rigid body rotation about a fixed axis","torque","moment of inertia of common bodies","parallel axis and perpendicular axis theorems","radius of gyration","angular momentum and its conservation","rotational kinetic energy","rolling without slipping","rolling on an inclined plane","rotational equilibrium"] },
 { n: 10, title: "Gravitation", sub: "Universal Law of Gravitation & Satellites",
   topics: ["Newton's law of gravitation","acceleration due to gravity and its variation with height, depth, latitude","gravitational field and potential","gravitational potential energy","escape velocity","orbital velocity and satellites","Kepler's laws of planetary motion","geostationary satellite","binding energy of a satellite"] },
 { n: 11, title: "Mechanical Property of Solid", sub: "Elasticity, Stress & Strain",
   topics: ["elasticity and plasticity","stress and strain","Hooke's law","Young's modulus, bulk modulus, shear modulus","stress-strain curve","Poisson's ratio","elastic potential energy stored in a wire","thermal stress"] },
 { n: 12, title: "Mechanical Property of Liquid", sub: "Fluid Mechanics, Viscosity & Surface Tension",
   topics: ["pressure in a fluid and Pascal's law","Archimedes principle, buoyancy, floatation","equation of continuity","Bernoulli's theorem and its applications","Torricelli's theorem","viscosity, Stokes' law, terminal velocity","surface tension","capillary rise","excess pressure in drops and bubbles","angle of contact"] },
 { n: 13, title: "Gas Law", sub: "Ideal Gas Equation & Kinetic Theory Basics",
   topics: ["Boyle's law, Charles' law, Gay-Lussac's law","ideal gas equation PV = nRT","Avogadro's law","Dalton's law of partial pressures","mixture of gases","P-V, P-T, V-T graphs","real gas versus ideal gas"] },
 { n: 14, title: "KTG Thermodynamics", sub: "Kinetic Theory of Gases & Laws of Thermodynamics",
   topics: ["assumptions of kinetic theory","pressure of an ideal gas","rms, average and most probable speed","degrees of freedom and equipartition of energy","Cp, Cv and gamma","mean free path","zeroth law and first law of thermodynamics","internal energy, work done by gas","isothermal, adiabatic, isobaric, isochoric processes","heat engine, Carnot engine, efficiency","second law, refrigerator"] },
 { n: 15, title: "Heat Transfer", sub: "Conduction, Convection & Radiation",
   topics: ["thermal expansion","specific heat, latent heat, calorimetry","conduction and thermal conductivity","rods in series and parallel","convection","radiation","black body, Stefan-Boltzmann law, Wien's displacement law","Kirchhoff's law","Newton's law of cooling"] },
 { n: 16, title: "Wave", sub: "Wave Motion, Sound & Doppler Effect",
   topics: ["transverse and longitudinal waves","wave equation y = A sin(kx - wt)","speed of a wave on a string","sound waves and speed of sound","superposition and interference","beats","standing waves","vibrations of strings and organ pipes (open and closed)","resonance","Doppler effect","intensity and decibel"] },
 { n: 17, title: "SHM", sub: "Simple Harmonic Motion & Oscillations",
   topics: ["definition of SHM and equation x = A sin(wt + phi)","velocity and acceleration in SHM","time period and frequency","energy in SHM","spring-mass system, springs in series and parallel","simple pendulum","physical pendulum and torsional pendulum","phase and phase difference","damped and forced oscillations, resonance","superposition of SHMs"] }
];
window.KB = [];
  
