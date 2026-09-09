import { Artifact, Phase3TopicAnalysis } from './phase3.model';

export const PHASE3_ANALYSES: readonly Phase3TopicAnalysis[] = [
  {
    topicId: 1,
    ethicalIssue: 'A convincing generated image is treated as documentation of a public event before anyone can verify what, if anything, it records.',
    realWorldContext: 'Newsrooms, courts, schools and social platforms now receive visual claims faster than they can establish provenance. A file can look like evidence while carrying no reliable information about when it was made, by whom, or whether it depicts a real scene.',
    contextType: 'Example context',
    benefits: [
      { title: 'Access and explanation', text: 'Synthetic images can illustrate complex events, support accessibility and help people imagine scenarios that photographs cannot capture.' },
      { title: 'Creative and educational use', text: 'Studios, teachers and researchers can generate visual material without claiming it is documentary proof.' },
    ],
    risks: [
      { title: 'False evidence', text: 'A fabricated image can shape public belief before a correction reaches the same audience.' },
      { title: 'Erosion of genuine proof', text: 'Once synthetic images are common, real documentation can be dismissed as fake.' },
      { title: 'Unequal verification', text: 'Institutions with detection tools can check claims that ordinary viewers cannot.' },
    ],
    ethicalQuestions: [
      'What does this image actually prove, and what is still unknown?',
      'Who benefits if the image is believed before it is verified?',
      'Should platforms slow distribution of high-impact visuals, or only label them?',
      'Who is responsible if a later correction never reaches the first audience?',
    ],
    responsibleApproach: 'Treat provenance, context and human review as part of publication, not as optional extras. Disclose significant synthetic construction, preserve what is known about origin, and refuse to let a convincing appearance stand in for evidence in high-stakes settings.',
    dilemmaOptions: [
      {
        label: 'A',
        title: 'Release with a visible synthetic label',
        advantages: ['Keeps information moving', 'Gives viewers a chance to notice construction', 'Protects some creative and explanatory uses'],
        risks: ['Labels can be cropped, ignored or misunderstood', 'The first impression may still land as fact', 'A label does not restore missing context'],
        affected: ['Audiences', 'Publishers', 'People depicted'],
      },
      {
        label: 'B',
        title: 'Hold until origin can be checked',
        advantages: ['Reduces the chance that unverified visuals become evidence', 'Gives journalists and institutions time to inspect context', 'Signals that appearance is not enough'],
        risks: ['Delay can hide a genuine event', 'Powerful actors may still leak the file elsewhere', 'Verification capacity is uneven across communities'],
        affected: ['Newsrooms', 'The public', 'Communities seeking urgent attention'],
      },
    ],
    matrix: [
      { factor: 'Autonomy', question: 'Can viewers judge what the file proves?', risk: 'High if origin is hidden', consideration: 'Disclosure and context support informed choice.' },
      { factor: 'Harm', question: 'What happens if the image is believed or dismissed wrongly?', risk: 'High in public controversy', consideration: 'Reach, reversibility and vulnerability matter more than visual quality.' },
      { factor: 'Accountability', question: 'Who owns the decision to publish?', risk: 'Medium if many hands share the file', consideration: 'A named editor or platform policy should remain answerable.' },
      { factor: 'Fairness', question: 'Who can actually verify the claim?', risk: 'High where tools and literacy are scarce', consideration: 'Safeguards should not depend only on expert users.' },
    ],
  },
  {
    topicId: 2,
    ethicalIssue: 'A cloned voice uses a trusted relationship to request money, access or political attention before the listener can confirm who is speaking.',
    realWorldContext: 'Voice cloning and tailored text make impersonation cheaper. The ethical problem is not persuasion itself, but covert influence: a message that hides its source, exploits urgency, or uses a likeness without consent.',
    contextType: 'Hypothetical scenario',
    benefits: [
      { title: 'Legitimate communication', text: 'Synthetic voices can support accessibility, language access, satire and clearly disclosed creative work.' },
      { title: 'Rapid outreach', text: 'Campaigns and public services can reach more people, in more languages, at lower cost.' },
    ],
    risks: [
      { title: 'Impersonation', text: 'A familiar voice can short-circuit ordinary caution.' },
      { title: 'Manipulative targeting', text: 'Messages can be fitted to fear, identity or a moment of stress.' },
      { title: 'The liar’s dividend', text: 'Genuine recordings can be denied once fakes are known to exist.' },
    ],
    ethicalQuestions: [
      'When does persuasion become manipulation rather than advocacy?',
      'Should consent of the person imitated be required before a voice is used?',
      'How much friction is reasonable before an urgent-sounding request is believed?',
      'Who shares responsibility among maker, amplifier and believer?',
    ],
    responsibleApproach: 'Require meaningful awareness of source, consent for likeness, and extra friction for high-risk requests. Platforms and institutions should make verification normal rather than placing the whole burden on a startled listener.',
    dilemmaOptions: [
      {
        label: 'A',
        title: 'Allow disclosed synthetic voices',
        advantages: ['Protects satire, art and accessibility', 'Avoids treating every synthetic clip as an attack', 'Keeps expression relatively open'],
        risks: ['Disclosure can be missed under pressure', 'Bad actors will omit labels', 'Personalization can still exploit vulnerability'],
        affected: ['Creators', 'Audiences', 'People whose voices are cloned'],
      },
      {
        label: 'B',
        title: 'Block impersonation-like voice use by default',
        advantages: ['Makes non-consensual cloning harder to scale', 'Gives potential victims more time', 'Signals that trusted relationships are not attack surfaces'],
        risks: ['Over-blocking can chill parody and assistive uses', 'Detection will be imperfect', 'Harm can still travel through other channels'],
        affected: ['Platforms', 'Vulnerable users', 'Legitimate voice artists'],
      },
    ],
    matrix: [
      { factor: 'Consent', question: 'Did the person whose voice is used agree to this use?', risk: 'High without permission', consideration: 'Likeness is not raw material for persuasion.' },
      { factor: 'Awareness', question: 'Can the listener tell who is actually speaking?', risk: 'High in urgent requests', consideration: 'Covert source substitution undermines autonomy.' },
      { factor: 'Scale', question: 'How far can the message travel before review?', risk: 'High on recommendation systems', consideration: 'Reach changes the foreseeable harm of a single clip.' },
      { factor: 'Remedy', question: 'Can the harm be undone if the clip is false?', risk: 'Medium to high', consideration: 'Money, reputation and votes are not equally reversible.' },
    ],
  },
  {
    topicId: 3,
    ethicalIssue: 'A finished creative work mixes human direction, model output and other people’s prior labor, while credit is claimed as if one author worked alone.',
    realWorldContext: 'Design, writing, music and code now often involve prompts, selection, revision and generated drafts. Clients, teachers and audiences still need to know who contributed, who is accountable, and whether training data was treated fairly.',
    contextType: 'Example context',
    benefits: [
      { title: 'Wider creative access', text: 'People with less technical training can explore visual and textual possibilities.' },
      { title: 'Faster iteration', text: 'Variations can be tested before a human invests scarce production time.' },
    ],
    risks: [
      { title: 'Hidden labor', text: 'Source creators and the human editor can disappear behind a tool name or a solo credit.' },
      { title: 'Unfair claims', text: 'Originality may be asserted without matching the actual contribution.' },
      { title: 'Deskilling', text: 'Judgment can weaken if generating replaces learning how to evaluate work.' },
    ],
    ethicalQuestions: [
      'What level of human judgment makes a work authored rather than merely requested?',
      'Should training on creative work require consent, compensation, or another model?',
      'How should schools assess learning when tools are part of the process?',
      'Who is accountable if an assisted work copies or harms someone?',
    ],
    responsibleApproach: 'Describe contribution honestly, keep a human responsible for the published result, and treat source creators as stakeholders. Productivity gains should not erase credit, consent or the skill of judging quality.',
    dilemmaOptions: [
      {
        label: 'A',
        title: 'Disclose AI assistance and keep human credit',
        advantages: ['Lets audiences interpret authorship accurately', 'Preserves human accountability', 'Allows tools to remain useful'],
        risks: ['Disclosure norms vary by field', 'Partial disclosure can still mislead', 'Credit disputes remain if contribution is hard to measure'],
        affected: ['Creators', 'Clients', 'Students'],
      },
      {
        label: 'B',
        title: 'Treat substantial generation as joint or tool-attributed work',
        advantages: ['Resists inflated originality claims', 'Makes the machine’s role visible', 'May support fairer contracting'],
        risks: ['Joint credit can dilute human craft', 'Legal and academic rules may not match the label', 'A tool cannot hold moral responsibility'],
        affected: ['Employers', 'Educators', 'Copyright holders'],
      },
    ],
    matrix: [
      { factor: 'Attribution', question: 'Whose work is being recognized?', risk: 'High if labor is invisible', consideration: 'Credit affects dignity, pay and accountability.' },
      { factor: 'Honesty', question: 'Does the claim match the process?', risk: 'Medium in commercial briefs', consideration: 'Virtue here is truthful representation, not refusal of tools.' },
      { factor: 'Labor', question: 'Who absorbs the economic cost of cheaper output?', risk: 'High for freelance creatives', consideration: 'Efficiency is not ethically neutral.' },
      { factor: 'Learning', question: 'Does the process still develop judgment?', risk: 'High in education', consideration: 'Assessment should measure understanding, not only delivery.' },
    ],
  },
];

export const ARTIFACTS: readonly Artifact[] = [
  {
    id: 'signal-provenance',
    title: 'If you cannot name the origin, it is not yet evidence',
    type: 'Public awareness signal',
    topicId: 1,
    purpose: 'Give viewers a pause before treating a striking image as documentation.',
    issue: 'Synthetic Reality & Epistemic Risk',
    objective: 'Separate appearance from proof and make provenance a public habit.',
    content: 'A three-step signal: What is this file? Who made it? What does it actually show? The design withholds decorative certainty so the question stays visible.',
    aiInvolvement: 'Copy was drafted with generative assistance, then rewritten by the team. The visual structure is human-designed in code, not presented as a photograph of a real event.',
    limitations: 'A campus poster cannot verify a file. It can only change how quickly someone treats an image as proof.',
    responsibleUse: 'Use as a literacy prompt. Do not treat the artifact itself as forensic evidence.',
    visual: 'signal',
    aiProvenance: {
      promptExploration: 'Draft 5 minimalist public awareness slogans contrasting photorealistic synthetic generation with forensic epistemic evidence. Focus on provenance, metadata chains, and critical doubt.',
      model: 'Anthropic Claude 3.5 Sonnet / OpenAI GPT-4o (Comparative Prompting)',
      humanIntervention: 'Filtered out aggressive "AI is a lie" framing; reframed around Luciano Floridi’s information ethics and C2PA standards. Created interactive verification status badges.',
      biasRiskAudit: 'AI drafts tended toward alarmism. Human editing restored institutional epistemic nuance: synthetic media has legitimate artistic and assistive uses.',
      verificationStep: 'Cross-checked against Coalition for Content Provenance and Authenticity (C2PA) technical specifications and fallibilist epistemological theory.',
    },
  },
  {
    id: 'poster-voice',
    title: 'A familiar voice is not a finished identity check',
    type: 'Awareness poster',
    topicId: 2,
    purpose: 'Warn that cloned voices exploit trust and urgency.',
    issue: 'Misinformation, Deepfakes & Persuasion',
    objective: 'Make verification feel ordinary rather than suspicious.',
    content: 'The poster asks one action: pause a high-stakes request and confirm through a second channel. It refuses sensational fake faces in favor of a clear duty.',
    aiInvolvement: 'Headline options were explored with AI, then selected and edited by humans. No cloned voice or likeness of a real person is used.',
    limitations: 'Awareness does not stop determined fraud. It only reduces the chance that surprise does all the work.',
    responsibleUse: 'Share with context. Do not imply that every synthetic voice is criminal.',
    visual: 'poster',
    aiProvenance: {
      promptExploration: 'Generate behavioral guidance steps for families and enterprises facing zero-shot neural voice cloning scams. Emphasize out-of-band verification and emotional pausing.',
      model: 'Claude 3.5 Sonnet & GPT-4o',
      humanIntervention: 'Rejected generic password tips; structured a 3-step biometric triage protocol (Listen for cadence artifacts, Out-of-band callback, Challenge question).',
      biasRiskAudit: 'Initial model outputs assumed high-tech detection apps are readily available. Human team redesigned protocol for low-tech, accessible human verification under emotional stress.',
      verificationStep: 'Verified against FTC consumer alerts on voice cloning fraud and Council of Europe information disorder frameworks.',
    },
  },
  {
    id: 'flow-credit',
    title: 'Who did what before the work was signed?',
    type: 'Contribution flow',
    topicId: 3,
    purpose: 'Make authorship visible as a sequence of contributions rather than a single name.',
    issue: 'Authorship, Creativity & Intellectual Labor',
    objective: 'Help teams disclose process without pretending the tool is an author in the moral sense.',
    content: 'A path from training data and prompt to selection, revision and publication, with a human remaining accountable at the last step.',
    aiInvolvement: 'The diagram idea was sketched with AI support for structure. Layout, wording and the decision to keep human accountability at the end are human judgments.',
    limitations: 'A flow cannot measure the influence of millions of training works. It is a prompt for honesty, not a complete labor theory.',
    responsibleUse: 'Attach this to real project notes. Empty disclosure is worse than a simple diagram.',
    visual: 'flow',
    aiProvenance: {
      promptExploration: 'Propose a taxonomy of human-AI creative collaboration steps ranging from latent space generation to semantic steering, human curatorial filtering, and legal authorship claims.',
      model: 'Claude 3.5 Sonnet',
      humanIntervention: 'Replaced linear "human vs machine" binary with a multi-layered spectrum of creative labor; ensured terminal accountability remains exclusively human.',
      biasRiskAudit: 'AI responses minimized source artist exploitation. The team explicitly added "Source Corpus & Training Labor" as an indispensable first node.',
      verificationStep: 'Benchmarked against US Copyright Office AI Registration Guidance (2023) and UNESCO Recommendation on the Ethics of Artificial Intelligence (2021).',
    },
  },
];

export function findPhase3Analysis(topicId: number): Phase3TopicAnalysis | undefined {
  return PHASE3_ANALYSES.find((analysis) => analysis.topicId === topicId);
}

export function findArtifact(id: string): Artifact | undefined {
  return ARTIFACTS.find((artifact) => artifact.id === id);
}

export function artifactsForTopic(topicId: number): readonly Artifact[] {
  return ARTIFACTS.filter((artifact) => artifact.topicId === topicId);
}
