# Advanced Packaging Equipment — 2.5D, 3D, Hybrid Bonding, and FOWLP

For most of the industry's history, packaging was an afterthought — a low-value "back-end" step that simply protected the die and connected it to the board. That era is over. Advanced packaging has become one of the primary levers of system performance, the foundation of the chiplet revolution, and the single fastest-growing segment of semiconductor capital equipment. The reason is simple: as transistor scaling slows and grows more expensive, integrating multiple specialized dies into a single tightly coupled package — heterogeneous integration — has become the most cost-effective way to keep improving performance, bandwidth, and power efficiency. The generative-AI boom has supercharged this trend, with advanced-packaging capacity (above all TSMC's CoWoS) becoming a gating constraint on the supply of AI accelerators. This file covers why advanced packaging matters, the major package types and their required equipment, the technology platforms (SoIC, Foveros, X-Cube), the full equipment categories, the key foundries and OSATs, the patent landscape, and the roadmap.

---

## 1. Why Advanced Packaging Matters

Three forces have elevated packaging from afterthought to centerpiece:

- **Chiplet architecture.** Rather than building one enormous monolithic die (expensive, yield-limited, and reticle-size-limited), designers partition a system into multiple smaller **chiplets** — for example, separate compute, I/O, and cache dies, possibly on different process nodes — and integrate them in a single package. This improves yield (smaller dies have higher yield), allows mixing of optimal nodes for each function, and breaks the reticle-size limit. AMD's chiplet-based CPUs and GPUs and Intel's tiled processors exemplify the approach.
- **Heterogeneous integration.** Packaging allows combining fundamentally different technologies — logic, memory (HBM), analog, RF, silicon photonics — in one package, each made on its ideal process.
- **Bandwidth density.** The defining requirement of AI accelerators is enormous memory bandwidth. Placing high-bandwidth memory (HBM) immediately adjacent to logic on a silicon interposer, connected by tens of thousands of fine-pitch wires, delivers bandwidth impossible to achieve through a conventional package and PCB. Advanced packaging is, in essence, how the "memory wall" is being pushed back.

---

## 2. Package Types and Required Equipment

### 2.1 Flip-Chip

The foundation of modern packaging. Instead of wire-bonding the die face-up, the die is flipped face-down and connected to the substrate through an array of solder **bumps (C4 — Controlled Collapse Chip Connection)**. Required equipment: **bumping** (under-bump metallization deposition, solder plating or paste), **reflow** (melting the solder to form joints), and **underfill** dispense (filling the gap with epoxy for mechanical reliability).

### 2.2 2.5D — CoWoS and Silicon Interposers

In 2.5D integration, multiple dies (logic plus HBM stacks) are mounted side-by-side on a **silicon interposer** — a passive silicon substrate containing fine-pitch redistribution wiring and **through-silicon vias (TSVs)** that route signals down to the package substrate. TSMC's **CoWoS (Chip-on-Wafer-on-Substrate)** is the dominant platform and the backbone of essentially every high-end AI accelerator. Required equipment: **TSV formation** (deep silicon etch, ALD barrier/seed, copper electroplating fill), **RDL lithography** (fine-line redistribution patterning on the interposer), die-to-wafer or die-to-interposer **bonding/placement**, and **wafer thinning** to expose the TSVs.

### 2.3 Fan-Out Wafer-Level Packaging (FOWLP)

In fan-out packaging, dies are embedded in a reconstituted **molded wafer (or panel)**, and the interconnect **redistribution layer (RDL)** is built directly over the embedded dies, "fanning out" the connections to a larger area than the die itself. This eliminates the need for a separate substrate/interposer for many applications, reducing cost and thickness. TSMC's **InFO (Integrated Fan-Out)** — used for Apple's application processors — and **HDFO (High-Density Fan-Out)**, along with the original **eWLB (embedded Wafer-Level Ball Grid Array)**, are key variants. Required equipment: **molding** (encapsulating dies in epoxy mold compound), **pick-and-place** (precisely positioning known-good dies on a carrier), **RDL lithography and electroplating**, and **debonding** of the carrier.

### 2.4 3D Stacking — Micro-Bump and TCB

True 3D integration stacks dies vertically. The traditional method connects them through **micro-bumps** using **Thermo-Compression Bonding (TCB)** — a bonder that aligns the dies and applies heat and pressure to form the joints, one stack at a time — or **mass reflow** for higher throughput, followed by **underfill**. Micro-bump pitches reach down to roughly 10–40μm, but below that, micro-bumps hit physical limits, motivating hybrid bonding.

### 2.5 Hybrid Bonding (Cu–Cu Direct Bonding)

The frontier of 3D integration. Two surfaces — each a planarized array of copper pads inlaid in dielectric — are bonded directly, without solder. The process requires: **CMP** of both surfaces to **sub-nanometer roughness** with precisely controlled copper recess (File 06); **surface activation** (plasma treatment) of the dielectric; **alignment** to better than ~100nm (far tighter than micro-bump bonding); room-temperature **dielectric-to-dielectric bonding** on contact; and a **thermal anneal** that expands and fuses the copper pads into continuous connections. Hybrid bonding enables bond pitches below 10μm — heading toward 1μm and below — an order-of-magnitude density improvement over micro-bumps, with lower resistance, lower capacitance, and better thermal and electrical performance. It is used in **die-to-wafer (D2W)** and **wafer-to-wafer (W2W)** forms. TSMC's SoIC, Sony's stacked image sensors, and AMD's 3D V-Cache (stacked SRAM) are leading production examples.

### 2.6 HBM Stack Bonding

High-Bandwidth Memory stacks 8–16 DRAM dies, connected vertically by TSVs and micro-bumps (with hybrid bonding arriving for HBM4), then mounts the stack beside logic on an interposer. HBM assembly is a specialized, high-value form of 3D stacking, and HBM demand for AI has made it one of the hottest areas of both memory and packaging investment.

---

## 3. Technology Platform Comparison: SoIC, Foveros, X-Cube

The three leading 3D platforms reflect the strategies of the three leading manufacturers:

- **TSMC SoIC (System on Integrated Chips):** a front-end-grade, bumpless **hybrid-bonding** 3D-stacking technology offering the finest pitches; combined with CoWoS (as "SoIC + CoWoS") for full 3D-plus-2.5D systems. The flagship of TSMC's 3DFabric packaging portfolio.
- **Intel Foveros:** Intel's 3D die-stacking technology using micro-bumps (Foveros) evolving to **Foveros Direct** (hybrid bonding); used in products like Meteor Lake and Ponte Vecchio, combined with **EMIB** (Embedded Multi-die Interconnect Bridge, Intel's alternative to a full interposer, embedding a small silicon bridge in the substrate).
- **Samsung X-Cube (eXtended-Cube):** Samsung's 3D stacking technology, also moving toward hybrid bonding, integrated with its I-Cube (2.5D) and H-Cube offerings.

All three are converging on hybrid bonding as the endpoint of fine-pitch 3D integration, differentiated by their interposer/bridge strategies and their integration with each company's logic and memory.

---

## 4. Equipment Categories in Detail

Advanced packaging draws on a distinct equipment ecosystem, much of it supplied by specialists rather than the front-end WFE giants:

- **Wafer thinning and backgrinding:** **DISCO** (the dominant supplier) and **Okamoto** grind and polish wafers to the thinness required for stacking and TSV reveal.
- **Die singulation (dicing):** mechanical **blade dicing**, **stealth laser dicing** (DISCO; laser creates subsurface damage for clean separation), and **plasma dicing** (etching streets for damage-free singulation of thin/fragile dies).
- **Die attach and bonding:** **BESI (BE Semiconductor Industries)**, **ASM Pacific Technology**, and **Kulicke & Soffa (K&S)** lead die attach, thermo-compression bonding, and hybrid-bonding placement; **EV Group** and **SUSS MicroTec** lead wafer-to-wafer bonders and temporary bonding/debonding.
- **Wire bonding:** K&S and ASM Pacific dominate the still-enormous wire-bond market for mainstream packages.
- **Molding:** **TOWA** (the leader) and **APIC Yamada** supply compression and transfer molding for encapsulation and fan-out.
- **Underfill dispense:** **Nordson** and others supply precision dispensing for capillary and molded underfill.
- **RDL formation:** litho-based redistribution using semi-additive plating (SAP) and electroplating tools, drawing on front-end lithography (steppers) and ECD equipment.
- **TSV formation:** **Bosch-process DRIE** deep silicon etch (Lam, SPTS, TEL), ALD barrier/seed, and copper electrochemical deposition (ECD) fill.
- **Inspection:** **3D X-ray (computed tomography)** and **scanning acoustic microscopy (SAM)** to inspect buried bonds, voids, and TSVs non-destructively, plus optical and e-beam inspection of RDL and bumps.

A notable structural feature is that advanced packaging is bringing **front-end-grade equipment** (EUV-class lithography is not yet needed, but precision steppers, ALD, CMP, plasma etch, and high-end inspection are) into what was historically a low-tech back-end — blurring the line between front-end fab and back-end assembly and drawing the WFE giants (Applied Materials, Lam, TEL) into packaging.

---

## 5. Key Packaging Foundries and OSATs

The advanced-packaging value chain spans both leading foundries and dedicated **OSATs (Outsourced Semiconductor Assembly and Test)** companies:

- **TSMC** — the leader in advanced packaging via its **3DFabric** portfolio (CoWoS, InFO, SoIC); CoWoS capacity is a key constraint on AI-accelerator supply, prompting multi-year capacity expansions.
- **ASE Group (Advanced Semiconductor Engineering)** — the largest OSAT, offering the full range of advanced packaging including fan-out and 2.5D/3D.
- **Amkor Technology** — a leading global OSAT with advanced SiP, fan-out, and 2.5D/3D capabilities; key Western packaging partner.
- **JCET, Powertech (PTI), SPIL (part of ASE), Tongfu, TFME** — major OSATs, several China-based, central to assembly capacity and (in China's case) to localization efforts.
- **Intel and Samsung** — integrated players with their own advanced-packaging (Foveros/EMIB, X-Cube) operations.

---

## 6. Patent Highlights

The most contested packaging IP is in **hybrid bonding**, where **Xperi/Adeia (formerly Invensas)** holds a foundational patent portfolio (the DBI — Direct Bond Interconnect — technology) that it licenses broadly, including to major foundries and memory makers. **Sony** holds important hybrid-bonding IP from its pioneering stacked CMOS image sensors. **TSMC** has built a substantial SoIC and CoWoS patent portfolio. **EV Group** and **SUSS MicroTec** hold key wafer-bonding and temporary-bonding equipment IP. The breadth of Adeia's licensing position makes hybrid-bonding IP a notable example of a packaging technology where a non-manufacturing IP holder shapes the competitive landscape.

---

## 7. Roadmap

The advanced-packaging roadmap points toward ever-finer, ever-more-3D integration:

- **Sub-1μm bump pitch:** hybrid bonding drives bond pitches from ~10μm toward 1μm and below, dramatically increasing inter-die bandwidth density and pushing CMP, alignment, and cleanliness requirements toward front-end levels.
- **3D-stacked logic:** moving beyond stacking memory-on-logic or SRAM-on-logic toward stacking active logic tiers, blurring into the territory of sequential CFET and monolithic 3D (Files 15, 23).
- **Panel-level packaging:** moving from round wafers to large rectangular panels for fan-out, improving area utilization and cost for large packages.
- **Optical and co-packaged optics integration:** integrating silicon-photonics chiplets into the package to break the electrical-bandwidth wall (File 23).
- **Liquid and embedded cooling integration:** as power densities of stacked AI accelerators soar, cooling is increasingly integrated into the package — microfluidic channels, embedded cooling, and advanced thermal-interface materials become part of the packaging equipment roadmap.
- **Glass substrates and new interposers:** glass-core substrates and other interposer materials are emerging to provide larger, flatter, higher-density platforms for very large multi-chiplet systems.

Advanced packaging has thus completed a remarkable transformation — from the industry's neglected back-end to one of its most strategic and fastest-growing frontiers, where the next decade's gains in system performance will increasingly be won not by shrinking transistors, but by integrating chiplets ever more tightly in three dimensions.
