# Compound Semiconductor Manufacturing Equipment — GaN, SiC, III-V

Not all semiconductors are silicon. A family of **compound semiconductors** — made by combining elements from different groups of the periodic table — offers electrical and optical properties that silicon cannot match, and they have become indispensable in power electronics, radio frequency (RF), optoelectronics, and photonics. Silicon carbide (SiC) and gallium nitride (GaN) are revolutionizing power conversion for electric vehicles, fast chargers, and the grid; III-V materials such as gallium arsenide (GaAs) and indium phosphide (InP) dominate RF front-ends and data-center optics. These materials require a distinct manufacturing ecosystem — different crystal-growth methods, different epitaxy, different thermal processing, and often smaller wafers — supplied by a largely separate set of equipment vendors. This file covers SiC, GaN, and III-V manufacturing and their equipment, the markets driving them, and the vendor landscape.

The fundamental reason these materials matter is the **bandgap** and related properties. A wide bandgap (SiC ~3.3eV, GaN ~3.4eV versus silicon's 1.1eV) allows devices to withstand much higher voltages and temperatures and to switch faster with lower losses — ideal for power. High electron mobility and direct bandgaps make III-V materials superior for high-frequency amplification and for emitting and detecting light.

---

## 1. Silicon Carbide (SiC)

Silicon carbide is the leading wide-bandgap material for **high-voltage power electronics** (typically 650V–1700V and above), where its low conduction and switching losses dramatically improve the efficiency of EV traction inverters, on-board chargers, solar inverters, and industrial drives. SiC's manufacturing challenges begin at the very first step: the crystal.

**Boule growth.** Unlike silicon, SiC cannot be pulled from a melt by the Czochralski method (it sublimes rather than melts at practical pressures). Instead, SiC boules are grown by **PVT (Physical Vapor Transport / seeded sublimation)**, in which SiC source powder is sublimed at ~2,200–2,400°C and re-condenses on a seed crystal — an extremely slow process (millimeters per hour) that produces short boules and is prone to defects (micropipes, dislocations). **HTCVD (High-Temperature CVD)** is an alternative growth method. The slow, defect-prone growth is the primary reason SiC wafers are expensive and supply-constrained.

**Wafer-size transition.** The SiC industry is undergoing a pivotal transition from **150mm to 200mm** wafers, which roughly doubles the die per wafer and lowers cost — a key competitive battleground, with Wolfspeed, Coherent (formerly II-VI), and others racing to ramp 200mm.

**Epitaxy.** A SiC CVD epitaxial layer is grown on the substrate to form the device's active region, with **n-type doping (nitrogen)** and **p-type doping (aluminum)** introduced in situ. SiC epitaxy occurs at high temperature in specialized CVD reactors.

**Device processing.** SiC device fabrication requires extraordinarily high-temperature **dopant-activation anneals (1,600–1,800°C)**, often with a carbon cap, far beyond anything in silicon processing. Devices include **trench and planar MOSFETs** and **Schottky barrier diodes (SBDs)**. The gate-oxide interface quality (SiC/SiO₂) is a persistent reliability challenge requiring specialized oxidation and passivation.

**Wafer vendors:** Wolfspeed (the long-time leader), Coherent/II-VI, SiCrystal (ROHM), SICC and TankeBlue (China), Resonac, STMicroelectronics (which acquired Norstel). **Equipment:** Aixtron and others for SiC CVD epitaxy; specialized high-temperature furnaces and implanters; PVT growth furnaces from a small set of suppliers.

---

## 2. Gallium Nitride (GaN)

Gallium nitride serves two distinct markets with two distinct substrate strategies:

- **GaN-on-Si (power):** GaN grown on inexpensive silicon substrates enables cost-effective **power devices** for the lower-voltage range (typically 100V–650V) — fast chargers, data-center power supplies, consumer electronics, and increasingly automotive. The lattice and thermal mismatch between GaN and silicon requires sophisticated buffer/transition layers grown by MOCVD.
- **GaN-on-SiC (RF):** GaN grown on SiC substrates (which provide excellent thermal conductivity) delivers high-power **RF amplifiers** for 5G base stations, radar, and defense, where GaN HEMTs (High-Electron-Mobility Transistors) far outperform older GaAs and LDMOS technologies.

**Epitaxy.** GaN device layers are grown by **MOCVD (Metal-Organic CVD)**, using precursors such as trimethylgallium and ammonia. The leading MOCVD tool suppliers are **Aixtron (G5+ C platform)** and **Veeco (Propel platform)**, which dominate compound-semiconductor and LED epitaxy. Precise control of the AlGaN/GaN heterostructure that forms the conductive **two-dimensional electron gas (2DEG)** channel is the heart of GaN HEMT performance.

**Device processing.** GaN HEMT/HBT fabrication involves **mesa etch** (isolating devices), **SiN passivation** (critical for surface-trap control and reliability), **ohmic and Schottky contact** formation, and gate processing. **Vertical GaN** — using true GaN-on-GaN substrates for higher-voltage vertical devices — is an emerging frontier promising better performance than lateral GaN-on-Si, but bulk GaN substrates remain expensive and small.

---

## 3. III-V Materials (InP, GaAs, InGaAs)

The III-V family — compounds of group-III (Ga, In, Al) and group-V (As, P, N) elements — dominates high-frequency and optoelectronic applications:

- **GaAs** is used for RF power amplifiers and switches in mobile handsets (pHEMT, HBT), and for some photonics and solar.
- **InP** is the workhorse of **data-center optics** and long-haul telecom, providing the lasers, modulators, and photodetectors for high-speed optical transceivers; it also serves the highest-frequency RF (mmWave, terahertz) applications.
- **InGaAs** (and related alloys) provides very high electron mobility for RF HEMTs and for photodetectors.

**Epitaxy.** III-V devices are built on epitaxial layers grown by **MOCVD** (for high-volume production) and **MBE (Molecular Beam Epitaxy)** (for the most precise, abrupt structures and research). The ability to grow lattice-matched and strained heterostructures with atomic precision underpins III-V device performance.

**Device processing.** III-V fabrication uses specialized **wet-etch chemistries** (the materials are sensitive to many of the chemistries used in silicon), along with dry etch, contact metallization, and passivation tailored to each material. Wafers are typically smaller (100–150mm) than silicon, and the fabs are correspondingly specialized.

**Applications** include **data-center optics** (the explosive growth in AI-driven optical interconnect is a major InP driver), **5G mmWave** front-ends, **satellite and defense** electronics, and **photonics** generally.

---

## 4. Markets

The compound-semiconductor markets are driven by powerful secular trends:

- **Power electronics (SiC and GaN):** the electrification of transportation (EVs), the buildout of fast-charging infrastructure, renewable-energy inverters, and grid modernization are driving rapid growth in SiC and GaN power devices. SiC dominates the high-voltage EV traction market; GaN is expanding in chargers, data-center power, and increasingly automotive.
- **RF (GaN and III-V):** 5G infrastructure (GaN-on-SiC base-station amplifiers), defense radar and electronic warfare, and satellite communications drive RF compound-semiconductor demand.
- **Optics and photonics (InP, GaAs):** the AI-driven explosion in data-center bandwidth is a massive tailwind for InP-based optical transceivers, and silicon photonics (File 23) increasingly integrates III-V lasers.

---

## 5. Key Vendors and Fab Landscape

| Category | Key players |
|---|---|
| **SiC substrates** | Wolfspeed, Coherent/II-VI, SiCrystal (ROHM), STMicroelectronics, SICC, TankeBlue, Resonac |
| **SiC/GaN power devices** | Infineon, STMicroelectronics, onsemi, ROHM, Wolfspeed, Mitsubishi, Toshiba, Navitas, Power Integrations, GaN Systems (Infineon), EPC |
| **RF GaN/III-V** | Qorvo, Broadcom, MACOM, Wolfspeed (former RF business to MACOM), NXP, Sumitomo |
| **MOCVD epitaxy equipment** | Aixtron, Veeco |
| **MBE equipment** | Riber, Veeco |
| **Compound-semi foundries** | Tower Semiconductor, WIN Semiconductors (GaAs/GaN foundry), GlobalFoundries (specialty), VPEC, IQE and others (epi-wafer supply) |

The compound-semiconductor equipment market is notably distinct from mainstream silicon WFE: it is led by epitaxy specialists (Aixtron, Veeco) and a constellation of materials and device companies, rather than by the silicon-CMOS giants (though Applied Materials and others supply some implant, etch, and deposition tools adapted for these materials). Crystal growth — PVT furnaces for SiC, bulk GaN and InP growth — is served by a small, specialized supplier base, and substrate supply remains the key bottleneck and value driver across the compound-semiconductor world.

As electrification and optical interconnect accelerate, compound semiconductors represent one of the most attractive growth areas adjacent to mainstream silicon — with their own equipment ecosystem, their own roadmaps (SiC's 150-to-200mm transition, vertical GaN, InP photonics integration), and their own strategic significance in the energy transition and the AI-driven bandwidth explosion.
