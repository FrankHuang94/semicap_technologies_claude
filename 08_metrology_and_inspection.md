# Metrology, Inspection, and Process Control

If lithography, deposition, and etch *build* the chip, then metrology and inspection are what make it possible to build the chip **reliably and profitably**. Process control — the combined disciplines of metrology (measuring dimensions, films, and overlay), inspection (finding defects), and advanced process control (using those measurements to steer the process) — is the nervous system of the fab. It is also one of the fastest-growing and most yield-critical segments of wafer-fab equipment, typically representing 11–13% of WFE spending and rising, because the difficulty of catching tiny, often stochastic defects and of holding atomic-scale dimensions has escalated dramatically with EUV and gate-all-around. This file covers CD metrology, film metrology, overlay metrology, defect inspection, computational and AI-driven inspection, in-situ and APC control, the vendor landscape (overwhelmingly dominated by KLA), and the roadmap.

A useful distinction underlies everything that follows: **metrology** answers "is the feature the right size, thickness, and position?", while **inspection** answers "is there a defect that shouldn't be there?". Both are essential, and both have become harder at every node.

---

## 1. Critical Dimension (CD) Metrology

CD metrology measures the physical dimensions of patterned features — line widths, space widths, contact diameters, fin and nanosheet dimensions — with sub-nanometer precision. Several complementary techniques are used:

- **CD-SEM (Critical-Dimension Scanning Electron Microscopy):** the workhorse inline CD tool, imaging the top-down profile of features with an electron beam to measure widths and pitches at thousands of sites per wafer. CD-SEM is fast and direct but provides limited information about the three-dimensional profile and can induce slight resist shrinkage. Key suppliers are Hitachi High-Tech (the leader) and Applied Materials.
- **OCD / Scatterometry (Optical Critical Dimension):** an indirect, model-based technique that measures the optical response (reflectance/polarization versus wavelength and angle) of a periodic test structure and fits it to an electromagnetic model (typically using Rigorous Coupled-Wave Analysis, RCWA) to extract the full three-dimensional profile — heights, sidewall angles, widths, and even subtle shape parameters. **Mueller-matrix spectroscopic ellipsometry** captures the complete polarization response for maximum sensitivity. OCD is non-destructive, fast, and rich in three-dimensional information, making it indispensable for complex structures like fins, nanosheets, and high-aspect-ratio features. KLA, Onto Innovation, and Nova are the leaders.
- **CD-AFM (Atomic Force Microscopy):** uses a physical probe tip to trace the surface, providing direct three-dimensional profile and sidewall information; slower than optical methods, used as a reference and for difficult structures.
- **TEM / STEM (Transmission/Scanning Transmission Electron Microscopy):** offers atomic-resolution cross-sectional imaging — the ultimate reference for dimensions and material structure — but is destructive and slow, so it is used for process development, reference metrology, and failure analysis rather than high-volume inline control.

The leading-edge challenge for CD metrology is measuring features that are now only a few atoms wide, buried inside three-dimensional structures (e.g., the width of a nanosheet hidden within a stack), with the precision and throughput needed for production control.

---

## 2. Film Metrology

Film metrology measures the thickness, composition, and properties of the many deposited layers:

- **Ellipsometry** — including single-wavelength, spectroscopic (SE), and Mueller-matrix variants — measures film thickness and optical constants by analyzing how the polarization of reflected light changes; it is the primary tool for dielectric and many other film thicknesses, capable of sub-angstrom thickness precision.
- **XRF (X-Ray Fluorescence)** measures composition and thickness of metal films by detecting the characteristic X-rays emitted under excitation.
- **XRR (X-Ray Reflectivity)** measures thickness, density, and interface roughness of thin films and multilayers with high precision, important for ALD films and complex stacks.
- **Four-point probe** measures sheet resistance of conductive films, providing a direct electrical check on metal and doped-layer properties.

As films thin to a few atomic layers (ALD high-k, barrier, and channel layers), film metrology must resolve thickness and composition differences at the angstrom and sub-angstrom level, often on three-dimensional surfaces.

---

## 3. Overlay Metrology

Overlay measures how accurately each patterned layer is aligned to the layers beneath it — a quantity that has become critically tight as multi-patterning and EUV demand overlay budgets approaching and below two nanometers. Misregistration between layers causes shorts, opens, and yield loss, so overlay is measured at many sites on every production wafer.

- **IBO (Image-Based Overlay)** measures the relative position of specially designed overlay targets (box-in-box or AIM targets) by imaging them optically. KLA's Archer series and ASML's YieldStar (which doubles as an in-line overlay and CD tool tightly integrated with ASML scanners) are the leading systems.
- **DBO (Diffraction-Based Overlay)** measures overlay from the diffraction signal of overlaid gratings, offering high precision and robustness to certain process variations.

A distinctive EUV-era challenge is that **stochastic effects** introduce random placement variation that complicates overlay measurement and control, and the extremely tight overlay budgets at 2nm require not only better metrology but dense sampling and sophisticated correction feeding back to the scanner.

---

## 4. Defect Inspection

Defect inspection scans wafers (and reticles) to find physical defects — particles, pattern bridges and breaks, residues, scratches, and the increasingly important **stochastic** defects of EUV. The fundamental trade-off in inspection is **sensitivity versus throughput versus nuisance**: higher sensitivity finds smaller real defects but also more "nuisance" (harmless) events, and slower scanning. Several modalities span this trade space:

- **Bright-field optical inspection** (e.g., KLA's 29xx/39xx broadband-plasma series) uses broadband light and high-resolution optics for high-sensitivity patterned-wafer inspection; the mainstay for catching pattern defects at high throughput.
- **Dark-field optical inspection** (e.g., KLA Surfscan and dark-field patterned tools) detects scattered light from defects against a dark background, excellent for particles and certain defect types at high speed.
- **E-beam inspection** (e.g., KLA's eSxxx series and the HMI/ASML e-beam tools, plus Applied Materials' e-beam) offers the highest resolution — able to detect the smallest defects and to perform voltage-contrast inspection that reveals electrical opens/shorts — but at far lower throughput than optical, making it a complement used for the most critical layers and for defect-of-interest discovery. **Multi-beam** e-beam inspection is an active development area aimed at overcoming the throughput limitation.
- **Reticle (mask) inspection** is a specialized discipline: defects on a mask print on every wafer, so masks are inspected with dedicated tools (KLA Teron) and, for EUV, increasingly require **actinic** inspection at the 13.5nm wavelength (ZEISS AIMS EUV) to see EUV-relevant defects and to qualify the stochastic-defect behavior of the mask.

The defining inspection challenge at the leading edge is **EUV stochastic defectivity**: random, low-probability bridges and breaks that occur at acceptable doses and must be caught at densities below 0.001/cm² — pushing inspection toward higher sensitivity, larger sampled area, and AI-driven classification.

---

## 5. Computational and AI-Driven Inspection

The flood of data from high-sensitivity inspection has made **computation** as important as the optics. **AI-driven defect classification** uses convolutional neural networks and, increasingly, vision transformers to automatically sort detected events into defect types and to separate real "defects of interest" from harmless nuisance — dramatically improving the signal-to-noise of inspection and reducing the engineer time needed to review images. **Nuisance filtering** and **synthetic-defect augmentation** (using generative models to create training images of rare defects) further sharpen classifier performance. These capabilities are increasingly bundled into the inspection platforms and into yield-management software (File 22 covers AI/ML in depth).

---

## 6. In-Situ Metrology and Advanced Process Control (APC)

Beyond standalone metrology tools, process control is increasingly embedded **inside** the process tools and woven into closed control loops:

- **In-situ sensors** monitor the process in real time: **optical emission spectroscopy (OES)** detects etch endpoint by watching plasma emission lines change as a layer clears; **optical/spectroscopic endpoint** detects CMP completion; in-situ reflectometry monitors deposition thickness.
- **Advanced Process Control (APC)** uses metrology results to steer the process. **Run-to-run (R2R) control** adjusts each tool's recipe based on measurements of prior wafers (feedback) and incoming-wafer conditions (feed-forward), holding the process on target despite drift. **Fault Detection and Classification (FDC)** monitors hundreds of tool sensor signals to detect excursions and predict failures.
- **Virtual metrology** uses machine-learning models to *predict* a wafer's measured result from tool sensor data, so that every wafer effectively gets a (modeled) measurement without the throughput cost of measuring it physically — enabling tighter control with less sampling.

APC is what converts raw measurements into yield: it closes the loop so that the fab continuously self-corrects, which is essential when the process window has shrunk to atomic dimensions.

---

## 7. Vendor Landscape

| Vendor | Position |
|---|---|
| **KLA Corporation** | The **dominant** process-control company, with leading positions in optical and e-beam defect inspection, reticle inspection, overlay (Archer), film and OCD metrology, and yield-management software; KLA's broad, deep portfolio and data-analytics franchise give it one of the strongest moats in all of SemiCap, with industry-leading margins. |
| **Applied Materials (AMAT)** | A significant process-control player, especially in **e-beam** inspection/review and in select metrology, leveraging its breadth across process and control. |
| **ASML** | Provides **YieldStar** (overlay/CD metrology tightly integrated with its scanners) and, via its **HMI** acquisition, e-beam inspection — using metrology to close the loop on its own lithography. |
| **Onto Innovation** | Formed from the Rudolph/Nanometrics merger; strong in OCD, thin-film, overlay, and packaging/advanced-node inspection and lithography systems. |
| **Nova Measuring Instruments** | Specialist in OCD/scatterometry, materials metrology, and XPS-based composition metrology; a focused, fast-growing pure-play. |
| **ZEISS** | Provides EUV **actinic mask inspection** (AIMS EUV) and electron microscopy, alongside its lithography-optics role. |
| **Hitachi High-Tech** | The CD-SEM leader, plus FIB-SEM and process-analysis tools. |
| **SCREEN** | Inspection and review tools, alongside its wet-process franchise. |

The standout feature of this landscape is KLA's dominance: in a SemiCap industry generally characterized by category-specific leaders, KLA holds a commanding, broad position across nearly the whole of inspection and much of metrology, making process control one of the most concentrated and profitable corners of the equipment world.

---

## 8. Roadmap

The process-control roadmap is shaped by the device transitions and the data deluge:

- **AI-native metrology and inspection:** machine learning moves from a bolt-on classifier to the core of how measurements are made, predicted, and interpreted — virtual metrology, generative defect modeling, and AI-driven recipe optimization become standard.
- **Actinic EUV mask inspection:** as 2nm-class pitches make stochastic mask defects decisive, faster actinic inspection (next-generation AIMS EUV) becomes a gating capability for HVM mask qualification.
- **In-cell 3D metrology for GAA and CFET:** measuring the dimensions of nanosheets and dual-tier CFET channels *buried inside* the device — the width of a sheet hidden within a stack, the profile of an inner spacer — requires new model-based optical, X-ray, and e-beam techniques capable of seeing in three dimensions inside the cell.
- **High-throughput e-beam:** multi-beam e-beam inspection and review aim to break the resolution-versus-throughput trade-off, bringing e-beam-class sensitivity to a larger sampled area to catch the smallest stochastic defects in production.
- **Tighter overlay and CD control:** sub-2nm overlay and angstrom-level CD control demand denser sampling, better targets, and faster feedback to the scanner — making metrology and lithography ever more tightly co-engineered.

As the physical margins of manufacturing shrink toward the atomic scale, the ability to *see* and *control* what is happening on the wafer has become as decisive as the ability to pattern, deposit, and etch it — which is why process control, led by KLA, has become one of the most strategically important and defensible franchises in the entire semiconductor-equipment industry.
