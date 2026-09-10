# PROJECT REPORT
# AI ETHICS PORTFOLIO: GENERATIVE AI, TRUTH, CREATIVITY, AND RESPONSIBILITY

---

**Course:** Responsible AI & Computing Ethics (5th Semester)  
**Assessment Component:** CIA-3 (Component 2: Digital Ethics Portfolio & Analytical Report)  
**Academic Unit:** Unit-5 — Generative AI, Truth, Creativity, and Global Ethical Order  
**Academic Year:** 2024–2025  
**Date of Submission:** March 2025  

---

### Student Authors & Contribution Details

| Student Name | Roll / Register Number | Assigned Lead Role | Contribution Share |
| :--- | :--- | :--- | :--- |
| **S M Tejashree Kashyap** | `2460440` | Epistemic Trust & Synthetic Media Lead (Topic 01) | 33.3% |
| **Suraj Adhikari** | `2460457` | Forensic Misinformation & Deepfake Lead (Topic 02) | 33.3% |
| **Swathi P** | `2460478` | Intellectual Labor & Creative Authorship Lead (Topic 03) | 33.3% |

**Faculty Supervisor / Course Instructor:** Dr. Anoop G L  
**Department:** Department of Computer Science & Engineering / AI & Data Science  
**Institution:** CHRIST (Deemed to be University), Kumbalagodu, Bengaluru  

---

## Executive Summary

The rapid escalation of multimodal Generative Artificial Intelligence (GenAI)—powered by diffusion models, large multimodal foundation models, and zero-shot neural voice synthesizers—presents profound challenges to contemporary epistemological, social, and economic paradigms. This academic project report presents the design, technical implementation, and philosophical inquiry underpinning the **Digital AI Ethics Portfolio**, developed for CIA-3 Component 2 in the Responsible AI curriculum.

The project investigates three core ethical crises defined under Unit-5:
1. **Synthetic Reality & Epistemic Risk:** The dissociation of photographic media from empirical truth, leading to institutional epistemic resignation.
2. **Misinformation, Deepfakes & Persuasion:** The weaponization of zero-shot biometric voice cloning and personalized persuasion algorithms, compounded by the *Liar's Dividend*.
3. **Authorship, Creativity & Intellectual Labor:** The mass extraction of human cultural labor into proprietary generative pipelines, challenging copyright norms and the moral agency of authors.

The digital portfolio was engineered as a high-performance web application using **Angular 21** (standalone components, reactive Signals, and modern control flow) coupled with an SCSS design token system. Beyond static analysis, the platform introduces **The Ethics Lab** (interactive trade-off dilemmas), **Creative Visual Artifacts** with complete **AI Provenance Audits**, a **7-Step AI Verification Protocol**, and a dedicated **Presentation Mode** equipped with a synchronized defense timer and speaker notes. This report synthesizes our findings across four philosophical traditions—*Deontology*, *Utilitarianism*, *Distributive Justice*, and *Virtue Ethics*—and provides an actionable, multi-tiered governance roadmap.

---

## Table of Contents

1. [Chapter 1: Introduction & Academic Context](#chapter-1-introduction--academic-context)
2. [Chapter 2: Technical Architecture & System Design](#chapter-2-technical-architecture--system-design)
3. [Chapter 3: Core Ethical Topics & Deep-Dive Analysis](#chapter-3-core-ethical-topics--deep-dive-analysis)
4. [Chapter 4: The Ethics Lab — Interactive Moral Encounters](#chapter-4-the-ethics-lab--interactive-moral-encounters)
5. [Chapter 5: Creative Visual Artifacts & AI Provenance Auditing](#chapter-5-creative-visual-artifacts--ai-provenance-auditing)
6. [Chapter 6: Responsible AI Principles & Verification Protocol](#chapter-6-responsible-ai-principles--verification-protocol)
7. [Chapter 7: Comparative Philosophical Framework Analysis](#chapter-7-comparative-philosophical-framework-analysis)
8. [Chapter 8: Multi-Tiered Governance & Policy Blueprint](#chapter-8-multi-tiered-governance--policy-blueprint)
9. [Chapter 9: Presentation Mode & Oral Defense Structure](#chapter-9-presentation-mode--oral-defense-structure)
10. [Chapter 10: Team Work Distribution, Reflection & Academic Integrity](#chapter-10-team-work-distribution-reflection--academic-integrity)
11. [References & Literature Citations (APA 7th Edition)](#references--literature-citations-apa-7th-edition)
12. [Appendix: Screenshot Guide & Capture Checklist](#appendix-screenshot-guide--capture-checklist)

---

## Chapter 1: Introduction & Academic Context

### 1.1 Background & Motivation
In recent years, artificial intelligence has transitioned from discriminative classification tasks to generative synthesis. State-of-the-art models synthesize photo-realistic human faces, clone vocal cadences from minuscule audio snippets, and compose persuasive rhetoric indistinguishable from human writing. While offering unprecedented productivity gains, generative systems radically disrupt the foundational assumptions of human social trust:
- **Epistemic Trust:** The presumption that sensory media (photographs, audio recordings, video documentation) provides empirical evidence of real-world events.
- **Biometric Security:** The presumption that a person's voice or likeness serves as an authentic biometric identifier.
- **Cultural Authorship:** The presumption that intellectual and creative works represent the intentional labor of human minds deserving attribution, economic protection, and moral rights.

### 1.2 Course Alignment & CIA-3 Objectives
This project was developed as **Component 2 of the Continuous Internal Assessment (CIA-3)** for the course **Responsible AI & Computing Ethics** (5th Semester). It directly synthesizes the curricular mandates of **Unit-5: Generative AI, Truth, Creativity, and Global Ethical Order**.

The specific learning objectives fulfilled include:
- **Critical Conceptual Inquiry:** Deconstructing how generative synthesis challenges philosophical epistemology, free speech, and cultural sovereignty.
- **Multi-Framework Ethical Reasoning:** Evaluating complex dilemmas through Deontology, Utilitarianism, Distributive Justice, and Virtue Ethics.
- **Public Communication & Artifact Design:** Creating tangible visual artifacts that translate ethical dilemmas into accessible campus awareness tools.
- **Transparency in AI Utilization:** Auditing and disclosing our own team’s generative tool usage using rigorous content provenance specifications.
- **Digital Interactive Delivery:** Delivering a production-grade, accessible web portfolio and a 2–3 page academic policy paper.

---

## Chapter 2: Technical Architecture & System Design

### 2.1 Technology Stack & Architectural Decisions
To deliver an engaging, responsive, and robust educational platform, modern web engineering principles were adopted:

```
+-------------------------------------------------------------------------+
|                        Angular 21 Client Application                    |
+-------------------------------------------------------------------------+
|  Routing: Angular Router (Clean semantic paths: /topics, /lab, etc.)    |
|  Reactivity: Angular Signals (signal, update, computed states)           |
|  Templates: Modern Control Flow (@if, @for, @switch, empty states)      |
|  Styling: Vanilla SCSS with CSS Custom Properties (Dark Editorial Mode) |
|  Typography: Modern Serif & Sans-Serif Type Scale                       |
|  Build System: Vite/Webpack via Angular CLI (@angular/build)            |
+-------------------------------------------------------------------------+
                                    |
                                    v
+-------------------------------------------------------------------------+
|                         Decoupled Data Architecture                     |
+-------------------------------------------------------------------------+
|  topics.data.ts    -> Unit-5 Core Topics, Frameworks, Literature        |
|  phase3.data.ts    -> Dilemmas, Trade-Off Matrices, Visual Artifacts    |
|  phase4.data.ts    -> Responsible AI Principles, Verification Steps     |
|  portfolio.data.ts -> Structured Content, Page Metadata, Reflections    |
+-------------------------------------------------------------------------+
```

---

> 📷 **[INSERT SCREENSHOT 1 HERE]**  
> **Route:** `http://localhost:4200/`  
> **Figure 1:** *AI Ethics Portfolio Home Page — Hero Section, Quick Access Navigation, and Core Unit-5 Thematic Overview.*  
> *(Instructions: Open browser at `http://localhost:4200/`, capture the top hero banner showcasing the title, subtitle, and the three topic introductory cards.)*

---

## Chapter 3: Core Ethical Topics & Deep-Dive Analysis

### 3.1 Topic 01: Synthetic Reality & Epistemic Risk
- **Lead Researcher:** S M Tejashree Kashyap (2460440)
- **Focus:** Epistemic Trust, Provenance, and Documentary Collapse
- **Core Dilemma:** *How can society preserve the creative and educational benefits of synthetic media without allowing convincing appearance to displace empirical evidence?*

As philosopher Don Fallis (2015) argues, disinformation does not merely cause individuals to adopt false beliefs (positive deception); its more corrosive long-term effect is **Epistemic Resignation**. When citizens can no longer distinguish authentic documentation from synthetic hallucinations, they cease to trust legitimate news, forensic reports, and court evidence.

---

> 📷 **[INSERT SCREENSHOT 2 HERE]**  
> **Route:** `http://localhost:4200/topics/1`  
> **Figure 2:** *Topic 01 Deep-Dive Page — Synthetic Reality & Epistemic Risk Analysis, Stakeholder Mapping, and Case Study Review.*  
> *(Instructions: Navigate to `http://localhost:4200/topics/1`, capture the section showing the introduction, stakeholders, and harm categories.)*

---

### 3.2 Topic 02: Misinformation, Deepfakes & Persuasion
- **Lead Researcher:** Suraj Adhikari (2460457)
- **Focus:** Biometric Cloning, Covert Influence, and Democratic Erosion
- **Core Dilemma:** *How can creative expression and open persuasion remain free without granting deceptive manipulation an industrial advantage?*

A critical secondary harm identified by legal scholars Robert Chesney and Danielle Citron (2019) is the **Liar's Dividend**. As the general public becomes aware that deepfakes exist, corrupt political or corporate actors gain a universal defense: whenever authentic evidence of misconduct emerges, they can plausibly dismiss it as "an AI-generated fake."

---

> 📷 **[INSERT SCREENSHOT 3 HERE]**  
> **Route:** `http://localhost:4200/topics/2`  
> **Figure 3:** *Topic 02 Analysis Page — Misinformation, Biometric Exploitation, and the Liar's Dividend.*  
> *(Instructions: Navigate to `http://localhost:4200/topics/2`, capture the harms matrix and responsible principles section.)*

---

### 3.3 Topic 03: Authorship, Creativity & Intellectual Labor
- **Lead Researcher:** Swathi P (2460478)
- **Focus:** Political Economy of GenAI, Training Consent, and Authorship
- **Core Dilemma:** *If generative AI contributes substantially to creative production, how should credit, copyright, compensation, and moral liability be allocated?*

Generative foundation models do not generate value in isolation; they are trained on billions of scraped artistic works gathered without consent, attribution, or compensation (Crawford, 2021; UNESCO, 2021). Our analysis rejects the binary between "100% Human" and "100% Machine." Authorship is a spectrum, but **moral and legal agency remains strictly human**.

---

> 📷 **[INSERT SCREENSHOT 4 HERE]**  
> **Route:** `http://localhost:4200/topics/3`  
> **Figure 4:** *Topic 03 Exploration Page — Authorship Spectrum, Creative Labor Disruption, and Ethical Frameworks.*  
> *(Instructions: Navigate to `http://localhost:4200/topics/3`, capture the trade-off slider and reflection questions.)*

---

## Chapter 4: The Ethics Lab — Interactive Moral Encounters

The **Ethics Lab** (`/ethics-lab`) presents users with three realistic encounters corresponding to our core topics. Each encounter forces the user to choose between two imperfect options, and then confronts them with the ethical trade-offs they have accepted.

---

> 📷 **[INSERT SCREENSHOT 5 HERE]**  
> **Route:** `http://localhost:4200/ethics-lab`  
> **Figure 5:** *The Ethics Lab Overview — Guided Encounters for Testing Moral Judgment and Trade-Off Analysis.*  
> *(Instructions: Navigate to `http://localhost:4200/ethics-lab`, capture the lab landing cards and orientation text.)*

---

> 📷 **[INSERT SCREENSHOT 6 HERE]**  
> **Route:** `http://localhost:4200/ethics-lab/1`  
> **Figure 6:** *Lab Encounter 01 — Interactive Decision Matrix for "The Synthetic Witness" Dilemma.*  
> *(Instructions: Navigate to `http://localhost:4200/ethics-lab/1`, select an option, and capture the resulting trade-off inspection card.)*

---

## Chapter 5: Creative Visual Artifacts & AI Provenance Auditing

In compliance with CIA-3 Component 2 requirements, our team developed three creative visual artifacts, each accompanied by a transparent **AI Provenance Manifest**:
1. **Artifact 01 (Provenance Signal Placard):** *"If you cannot name the origin, it is not yet evidence."*
2. **Artifact 02 (Forensic Voice Warning Poster):** *"A familiar voice is not a finished identity check."*
3. **Artifact 03 (Creative Labor Spectrum Flow):** *"Who did what before the work was signed?"*

---

> 📷 **[INSERT SCREENSHOT 7 HERE]**  
> **Route:** `http://localhost:4200/artifacts`  
> **Figure 7:** *Creative Artifacts Gallery — Displaying Curated Visual Works and Provenance Disclosures.*  
> *(Instructions: Navigate to `http://localhost:4200/artifacts`, capture the gallery grid displaying all three artifact cards.)*

---

> 📷 **[INSERT SCREENSHOT 8 HERE]**  
> **Route:** `http://localhost:4200/artifacts/signal-provenance`  
> **Figure 8:** *Artifact Detail View — The Visual Component, Specification, and AI Provenance Audit.*  
> *(Instructions: Navigate to `http://localhost:4200/artifacts/signal-provenance`, capture the visual placard and the provenance audit card.)*

---

## Chapter 6: Responsible AI Principles & Verification Protocol

### The 7-Step AI Verification Pipeline
```
[ Step 1: Question Framing ]
         |
         v
[ Step 2: Generative Draft (Hypothesis only) ]
         |
         v
[ Step 3: Critical Review (Assumptions, tone, bias) ]
         |
         v
[ Step 4: Fact Checking (Primary sources) ]
         |
         v
[ Step 5: Ethical Audit (Consent, privacy, harm) ]
         |
         v
[ Step 6: Human Editing (Substantive rewriting) ]
         |
         v
[ Step 7: Responsible Publication (Disclosed & accountable) ]
```

---

> 📷 **[INSERT SCREENSHOT 9 HERE]**  
> **Route:** `http://localhost:4200/responsible-ai`  
> **Figure 9:** *Responsible AI Page — The 7-Step Verification Workflow, Core Principles, and Do's & Avoids Matrix.*  
> *(Instructions: Navigate to `http://localhost:4200/responsible-ai`, capture the verification protocol and guidance columns.)*

---

## Chapter 7: Comparative Philosophical Framework Analysis

| Domain & Dilemma | Deontological (Kantian) Perspective | Utilitarian / Consequentialist Perspective | Distributive Justice (Rawlsian) Perspective | Virtue Ethics (Aristotelian) Perspective |
| :--- | :--- | :--- | :--- | :--- |
| **1. Synthetic Reality** | Passing synthetic visuals as reality treats the viewer’s epistemic agency as a mere tool of persuasion, violating the Categorical Imperative. | Net social utility collapses when epistemic resignation causes widespread public cynicism toward authentic documentation. | Institutional newsrooms afford verification suites; vulnerable communities bear asymmetric exposure to fabrication. | Demands **Epistemic Humility**: resisting the impulse to share sensational media before verifying origin and truthfulness. |
| **2. Deepfakes & Voice Scams** | Non-consensual voice cloning violates bodily and vocal autonomy, denying individuals the right to author their own identity. | Severe harms of extortion, reputational destruction, and election subversion vastly exceed novelty or convenience gains. | Capital-rich bad actors exploit cognitively vulnerable, distracted, or elderly populations with minimal legal friction. | Cultivates **Prudence & Fidelity**: honoring the sanctity of trust relationships through mandatory verification friction. |
| **3. Authorship & Creative Labor** | Uncredited, unconsented scraping treats human artists as raw uncompensated instruments for corporate valuation. | Short-term consumer efficiency is counterbalanced by the long-term starvation of the human cultural commons. | Automated productivity gains must improve the economic position of living human contributors (Difference Principle). | Values **Creative Integrity & Craft**: transparently acknowledging computational tools rather than claiming false solo virtuosity. |

---

## Chapter 8: Multi-Tiered Governance & Policy Blueprint

- **Technical Tier:** C2PA cryptographic provenance signing; SynthID latent watermarks.
- **Institutional Tier:** Multi-channel out-of-band verification protocols; newsroom media forensic triage desks.
- **Regulatory Tier:** Strict criminal liability for non-consensual biometric impersonation; statutory training dataset licensing dividends (UNESCO, 2021).

---

## Chapter 9: Presentation Mode & Oral Defense Structure

The web application includes an interactive **Presentation Mode** (`/presentation`) calibrated for a strict 5–7 minute oral defense with keyboard navigation and integrated speaker notes.

---

> 📷 **[INSERT SCREENSHOT 10 HERE]**  
> **Route:** `http://localhost:4200/presentation`  
> **Figure 10:** *Presentation Mode Interface — Active Slide Stage, Live Defense Timer, and Synchronized Speaker Notes.*  
> *(Instructions: Navigate to `http://localhost:4200/presentation`, activate speaker notes (`N`), and capture the presenter stage with timer running.)*

---

## Chapter 10: Team Work Distribution, Reflection & Academic Integrity

All three student researchers contributed substantively and equally (33.3% per student):
- **S M Tejashree Kashyap (2460440) — 33.3%:** Topic 01 (Epistemic Risk), Artifact 01 (Provenance Signal), Synthetic Witness case study.
- **Suraj Adhikari (2460457) — 33.3%:** Topic 02 (Deepfakes & Biometric Scams), Artifact 02 (Voice Warning Poster), Persuasive Voice case study.
- **Swathi P (2460478) — 33.3%:** Topic 03 (Authorship & Creative Labor), Artifact 03 (Labor Spectrum Flow), Creative Brief case study.

---

> 📷 **[INSERT SCREENSHOT 11 HERE]**  
> **Route:** `http://localhost:4200/analysis`  
> **Figure 11:** *Formal 2–3 Page Ethical Analysis Document Deliverable with Signature Verifications and Print View.*  
> *(Instructions: Navigate to `http://localhost:4200/analysis`, capture the header and signature verification blocks of the formal paper.)*

---

### Student Signatures & Approvals

```
___________________________          ___________________________          ___________________________
S M Tejashree Kashyap (2460440)      Suraj Adhikari (2460457)             Swathi P (2460478)
Lead: Topic 01 (Epistemology)        Lead: Topic 02 (Deepfakes)           Lead: Topic 03 (Labor)
Date: September 2026                 Date: September 2026                 Date: September 2026
```

---

## References & Literature Citations (APA 7th Edition)

1. **Chesney, R., & Citron, D. (2019).** Deep fakes: A looming challenge for privacy, democracy, and national security. *California Law Review*, 107, 1753–1820. https://doi.org/10.2139/ssrn.3213906
2. **Crawford, K. (2021).** *Atlas of AI: Power, politics, and the planetary costs of artificial intelligence*. Yale University Press. https://yalebooks.yale.edu/book/9780300209579/atlas-of-ai/
3. **Elgammal, A. (2019).** AI is blurring the definition of artist. *American Scientist*, 107(1), 18–21. https://doi.org/10.1511/2019.107.1.18
4. **European Parliament STOA (2021).** *Tackling deepfakes in European policy: Challenges and options*. Scientific Foresight Unit (STOA). https://www.europarl.europa.eu/stoa/en/document/EPRS_STU(2021)690039
5. **Fallis, D. (2015).** What is disinformation? *Library Trends*, 63(3), 401–426. https://doi.org/10.1353/lib.2015.0014
6. **Floridi, L. (2020).** *The logic of information: A theory of philosophy as conceptual design*. Oxford University Press. https://doi.org/10.1093/oso/9780198833635.001.0001
7. **UNESCO (2021).** *Recommendation on the ethics of artificial intelligence*. UNESCO General Conference (41st Session). https://unesdoc.unesco.org/ark:/48223/pf0000381137
8. **United States Copyright Office (2023).** *Copyright registration guidance: Works containing material generated by artificial intelligence*. Federal Register, 88(51), 16190–16194.
9. **Wardle, C., & Derakhshan, H. (2017).** *Information disorder: Toward an interdisciplinary framework for research and policy making*. Council of Europe Report DGI(2017)09. https://rm.coe.int/information-disorder-toward-an-interdisciplinary-framework-for-researc/168076277c
10. **Zuboff, S. (2019).** *The age of surveillance capitalism: The fight for a human future at the new frontier of power*. PublicAffairs.

---

## Appendix: Screenshot Guide & Capture Checklist

Follow this checklist when capturing and embedding screenshots into your document:

| Figure Number | Application Route | Recommended View & Crop | Purpose in Report |
| :--- | :--- | :--- | :--- |
| **Figure 1** | `http://localhost:4200/` | Full-width desktop crop of Hero & 3 Topic Cards | Showcases the digital portfolio landing portal & architecture |
| **Figure 2** | `http://localhost:4200/topics/1` | Synthetic Reality intro & stakeholder matrix | Demonstrates Topic 01 analysis & epistemic framework |
| **Figure 3** | `http://localhost:4200/topics/2` | Biometric cloning harms & Liar's Dividend card | Demonstrates Topic 02 analysis & voice clone threat model |
| **Figure 4** | `http://localhost:4200/topics/3` | Authorship spectrum & creative labor section | Demonstrates Topic 03 analysis & labor equity principles |
| **Figure 5** | `http://localhost:4200/ethics-lab` | Lab overview cards with interactive encounter paths | Shows experiential moral dilemma architecture |
| **Figure 6** | `http://localhost:4200/ethics-lab/1` | Active decision choice with trade-off feedback box | Proves interactive moral decision-forcing mechanism |
| **Figure 7** | `http://localhost:4200/artifacts` | Gallery view displaying all 3 visual artifact thumbnails | Demonstrates creative artifact collection |
| **Figure 8** | `http://localhost:4200/artifacts/signal-provenance` | Provenance Signal Placard & C2PA manifest badge | Details Artifact 01 design & provenance verification |
| **Figure 9** | `http://localhost:4200/responsible-ai` | 7-Step Verification Workflow & Do's/Avoids columns | Demonstrates Responsible AI operational framework |
| **Figure 10** | `http://localhost:4200/presentation` | Presentation slide stage with running timer & notes | Proves 5–7 min oral defense preparation |
| **Figure 11** | `http://localhost:4200/analysis` | Formal paper header, matrix table & signature blocks | Demonstrates the official 2–3 page academic deliverable |

---

*Created by Angry Birds*

