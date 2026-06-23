# Sustainability, Environmental Impact, and ESG in Semiconductor Manufacturing

Semiconductor manufacturing is one of the most resource-intensive industrial activities on Earth. A modern fab consumes electricity on the scale of a small city, millions of gallons of ultrapure water per day, vast quantities of specialty chemicals and gases — several of them potent greenhouse gases — and generates hazardous waste streams that demand sophisticated treatment. As the industry expands to meet AI-driven demand and as climate and environmental regulation tightens, sustainability has moved from a peripheral concern to a central strategic and operational priority. This file surveys the energy, water, emissions, waste, regulatory, and circular-economy dimensions of semiconductor environmental impact, and the role of equipment in addressing them.

The tension at the heart of the story: the industry's products **enable** enormous energy savings and decarbonization across the economy (efficient power electronics, AI-optimized systems, electrified transport), yet their **manufacture** is environmentally costly — making the net environmental ledger, and the drive to reduce manufacturing impact, a defining ESG issue for the sector.

---

## 1. Energy Intensity

Fabs are extraordinarily energy-hungry. A single leading-edge fab can consume **100–500 MW** of continuous power, and the largest manufacturers consume electricity at national scale: **TSMC alone uses on the order of ~20+ TWh per year**, a significant fraction of Taiwan's total electricity consumption. The energy goes to running thousands of process tools (EUV scanners are notably power-hungry — each can draw on the order of a megawatt), to the enormous HVAC and air-handling systems that maintain cleanroom conditions, to ultrapure-water generation, to vacuum and abatement systems, and to chillers.

Energy intensity is often measured in **kWh per wafer start** or per unit of silicon area, and it has risen at advanced nodes because each node adds process steps, more energy-intensive tools (EUV, more etch/deposition), and more stringent cleanroom requirements. This rising energy intensity per wafer, multiplied by growing wafer volumes, makes the industry's total energy footprint a growing concern and a major driver of its carbon emissions.

---

## 2. Water Consumption

Semiconductor manufacturing requires immense quantities of **ultrapure water (UPW)** — water purified far beyond drinking standards (resistivity >18.2 MΩ·cm, total organic carbon <0.5 ppb) — used for rinsing wafers hundreds of times during fabrication. A large fab can consume **tens of millions of liters of water per day**. UPW is generated on-site through multi-stage purification (reverse osmosis, electrodeionization, UV treatment, membrane degasification) that is itself energy- and resource-intensive (File 24).

Water is a particular vulnerability because fabs are often located in water-stressed regions. **TSMC's Taiwan operations faced a severe drought in 2021** that threatened production and required water to be trucked in, vividly illustrating the risk. In response, manufacturers pursue aggressive **water recycling and reclamation** — TSMC targets recycling rates exceeding **60%** and is building water-reclamation plants — and water sourcing has become a central siting consideration (e.g., **TSMC Arizona's** water strategy in the arid Southwest). Water stewardship is now a key ESG metric and operational priority.

---

## 3. PFC and Greenhouse-Gas Emissions

Several process gases are **potent greenhouse gases** with very high global-warming potential (GWP) and long atmospheric lifetimes: **perfluorocarbons (CF₄, C₂F₆), nitrogen trifluoride (NF₃), and sulfur hexafluoride (SF₆)** — used in etch and chamber-cleaning. CF₄, for example, has a GWP thousands of times that of CO₂; NF₃ and SF₆ are similarly potent. These **fluorinated greenhouse gases (F-GHGs)** are a major component of the industry's direct (Scope 1) emissions.

The industry addresses them on several fronts: **abatement** (point-of-use destruction of unreacted gases before release, File 20), **process optimization** to improve gas utilization (so less escapes unreacted — remote-plasma NF₃ chamber cleaning, for example, achieves high utilization), and **substitution** with lower-GWP alternatives (e.g., **C₄F₆ and other gases** with lower GWP replacing higher-GWP species where process-compatible). The **World Semiconductor Council (WSC)** has set industry-wide normalized emission-reduction targets for F-GHGs, and reducing these emissions is a continuing collaborative effort across manufacturers and gas suppliers.

---

## 4. GHG Reporting and Net-Zero Commitments

SemiCap manufacturers and OEMs increasingly report and target reductions across all three emission scopes:
- **Scope 1** — direct emissions (F-GHGs, on-site combustion).
- **Scope 2** — purchased electricity (the largest component for most fabs, given their enormous power consumption).
- **Scope 3** — value-chain emissions (suppliers, materials, product use).

Because Scope 2 dominates, **renewable-electricity procurement** is the most powerful lever. **TSMC has committed to RE100** (100% renewable electricity) with net-zero targets, and is one of the world's largest corporate renewable-energy purchasers; Intel, Samsung, and the major OEMs (ASML, Applied, Lam) have made similar net-zero and renewable commitments. The challenge is acute in regions (like Taiwan) where renewable supply is limited relative to the industry's massive demand, making renewable procurement both a sustainability and a supply-security issue.

---

## 5. Sustainable Chemistry

Beyond greenhouse gases, the industry pursues **greener chemistry** across its processes: **lower-GWP etch gases** (C₄F₆, CHF₃ where applicable), improved **remote-plasma clean** efficiency to minimize NF₃ release, reduction of hazardous solvents, and development of less-toxic alternatives where process performance allows. There is also growing scrutiny of **PFAS ("forever chemicals")**, which are used in various forms across semiconductor manufacturing (in certain photoresists, coatings, and fluids) and are the subject of tightening regulation — posing a real challenge, since some PFAS-based materials currently lack drop-in replacements for critical applications.

---

## 6. Chemical Waste Treatment

Fabs generate large volumes of hazardous **liquid and gaseous waste** requiring on-site and off-site treatment: **acid and base neutralization**, **hydrofluoric-acid (HF) waste treatment** (HF requires special handling and calcium-fluoride precipitation), **organic-solvent recovery**, **slurry recovery and treatment** (CMP slurries), and **heavy-metal removal**. Increasingly, manufacturers pursue **resource recovery** — reclaiming **sulfuric acid**, recovering copper and other metals, and recycling solvents and slurry components — both for environmental benefit and cost. Waste treatment is a substantial part of fab infrastructure (File 24) and operating cost.

---

## 7. Regulatory Landscape

The industry operates under a thickening web of environmental regulation:
- **EU REACH** — governing chemical registration, evaluation, and authorization, with growing **PFAS restrictions** that directly affect semiconductor materials.
- **PFAS regulation** in the U.S. (EPA) and elsewhere, an emerging and potentially disruptive constraint.
- **SEMI S2/S8 safety standards** — industry standards for equipment safety and ergonomics that intersect with environmental design.
- **Local air, water, and waste permits** governing each fab's emissions and discharges, increasingly stringent in many jurisdictions.

Regulation is a real factor in fab siting, process choice, and equipment design, and the tightening of PFAS and F-GHG rules is among the more challenging near-term pressures.

---

## 8. Circular Economy and Equipment Reuse

Sustainability extends to the equipment itself. A robust **refurbished-equipment market** extends the life of older tools — mature-node fabs (File 15) run extensively on refurbished immersion scanners and reconditioned CVD/etch tools, reducing the embodied-carbon and resource cost of new manufacturing. **Parts remanufacturing** (reconditioning process-kit ceramics, pumps, and components) similarly extends component life and reduces waste. This circular activity is both economically and environmentally beneficial, and it is a notable feature of the equipment ecosystem, supported by specialized refurbishers and the OEMs' own certified-refurbished programs.

---

## 9. The Strategic Significance of Sustainability

Environmental performance has become a genuine strategic factor for several reasons. **Customers** (especially the large technology companies buying chips) increasingly demand low-carbon supply chains and include semiconductor emissions in their own Scope 3 targets, pressuring manufacturers to decarbonize. **Investors** weigh ESG performance. **Regulators** constrain emissions, water use, and chemicals. And **operational resilience** — particularly water and energy security — directly affects production continuity, as the Taiwan drought showed.

The equipment industry has a central role to play: more energy-efficient tools, better abatement, higher gas utilization, lower-GWP process chemistries, water-reducing process designs, and longer-lived, refurbishable equipment all depend on equipment innovation. As the industry scales to meet AI-driven demand, reconciling that growth with environmental responsibility — closing the gap between the enormous societal benefit of semiconductors and the substantial environmental cost of making them — is one of the defining challenges of the sector's future, and one in which the choices of equipment makers, materials suppliers, and manufacturers will collectively determine the outcome.

---

## Extended Analysis: Quantifying and Decarbonizing the Footprint

### A. The Carbon Math of a Fab

To make the energy story concrete: a single large leading-edge fab drawing ~300MW continuously consumes on the order of **2.6 TWh per year** — comparable to a city of several hundred thousand people. If that electricity comes from a grid emitting ~400–500 gCO₂/kWh, the fab's Scope 2 emissions alone exceed a million tonnes of CO₂ per year. Multiply across a company's fleet (TSMC operates many fabs) and the totals reach tens of millions of tonnes. This is why **Scope 2 (purchased electricity) dominates** most manufacturers' footprints and why **renewable procurement** is the single most powerful decarbonization lever — and also why the geographic concentration of fabs in regions with carbon-intensive grids (parts of East Asia) is an environmental concern, while the move to build fabs in regions with cleaner or expandable renewable supply is, in part, an environmental opportunity.

### B. The F-GHG Challenge in Numbers

The fluorinated greenhouse gases used in etch and chamber cleaning have staggering global-warming potentials: **NF₃ has a GWP ~17,000×** CO₂ over 100 years, **SF₆ ~24,000×**, **CF₄ ~7,400×**, and **C₂F₆ ~12,000×**, with atmospheric lifetimes of thousands of years for some. Even small leaked quantities therefore carry large CO₂-equivalent weight. The industry attacks this on three fronts: **point-of-use abatement** (thermal/plasma/wet destruction achieving >90–99% removal of unreacted gas), **improved utilization** (remote-plasma NF₃ chamber clean converts most of the NF₃ to reactive fluorine in the chamber, leaving little to escape — a major improvement over older in-situ cleans), and **substitution** (e.g., replacing C₂F₆ with lower-GWP C₄F₆ or COF₂-generating chemistries where the process allows). The **World Semiconductor Council** has set successive normalized-emission-reduction goals, and F-GHG abatement is now standard practice at leading fabs, though complete elimination remains elusive because some high-GWP gases lack drop-in replacements for critical etch steps.

### C. Water — The Local Constraint

Unlike carbon (a global problem), water is intensely **local**: a fab's water use matters most in the watershed where it sits. A large fab consuming ~50–100 million liters per day in a water-stressed region competes directly with agriculture and municipal supply, creating both reputational and operational risk. The industry response combines **recycling** (TSMC and others target 60–90%+ reclaim rates, recovering and re-purifying water through multiple internal loops), **alternative sourcing** (reclaimed municipal wastewater, as in TSMC's Taiwan reclamation plants and Arizona's water strategy), and **conservation** in process design. Water reclamation is itself energy-intensive (purifying reclaimed water to UPW standards takes power), illustrating the interconnection of the resource challenges — saving water can cost energy, and vice versa.

### D. The PFAS Dilemma

**PFAS ("forever chemicals")** present a genuinely difficult challenge. Certain PFAS compounds are used across semiconductor manufacturing — in some photoresists and anti-reflective coatings, in fluoropolymer components (PTFE/PFA fluid-handling parts, File 20), in certain etch and cleaning chemistries, and in heat-transfer fluids. Tightening PFAS regulation (EU REACH restrictions, U.S. EPA action) could disrupt supply, and for some critical applications **there is currently no qualified non-PFAS substitute**. The industry is working to identify replacements and to argue for essential-use exemptions where alternatives do not exist, while regulators weigh environmental and health concerns against the strategic importance of semiconductor manufacturing. This tension — between environmental regulation and manufacturing necessity — is among the more challenging near-term sustainability issues and one without an easy resolution.

### E. The Net Ledger and the Equipment Role

The deepest point in the sustainability story is the **net ledger**: semiconductors are environmentally costly to make but enable enormous environmental *savings* downstream — efficient power electronics (SiC/GaN, File 12) that cut energy losses in EVs and the grid, AI and computing that optimize energy systems, sensors that enable efficiency everywhere. A rigorous accounting must weigh manufacturing impact against enabled savings, and by most analyses the enabled savings dominate — but this does not excuse the manufacturing impact, which is real, growing, and increasingly scrutinized. The equipment industry is central to improving the manufacturing side of the ledger: **more energy-efficient tools** (idle-state power reduction, efficient subsystems), **better abatement** (higher F-GHG destruction efficiency), **higher gas and chemical utilization** (less waste per wafer), **water-reducing process designs**, and **longer-lived, refurbishable equipment** (circular economy) all depend on equipment and process innovation. As the industry scales to meet AI demand, the choices of equipment makers, materials suppliers, and manufacturers will collectively determine whether semiconductor manufacturing's environmental footprint grows in proportion to its output or is progressively decoupled from it — making sustainability not a constraint external to the equipment industry but an integral dimension of its innovation agenda.
