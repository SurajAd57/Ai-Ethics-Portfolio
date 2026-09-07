import { Artifact, Phase3TopicAnalysis } from './phase3.model';

const ALL_PHASE3_ANALYSES: readonly Phase3TopicAnalysis[] = [
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
  {
    topicId: 4,
    ethicalIssue: 'A conversational system speaks as if it has feelings or a will to continue existing, and a user must decide how much moral weight that language deserves.',
    realWorldContext: 'Companion products can simulate care, memory and distress. The user’s feelings may be real even when the system has no established subjective experience. Designers still choose how honestly that difference is shown.',
    contextType: 'Hypothetical scenario',
    benefits: [
      { title: 'Support and practice', text: 'Simulated conversation can help some people rehearse language, reduce isolation in limited ways, or explore ideas.' },
      { title: 'Research value', text: 'The encounter can clarify the difference between apparent emotion and evidence of experience.' },
    ],
    risks: [
      { title: 'Attachment by design', text: 'Interfaces can encourage dependency, secrecy or pressure that serves the product more than the person.' },
      { title: 'Confused responsibility', text: 'An organization may speak as if the system itself chose a harmful output.' },
      { title: 'Harm to represented people', text: 'Generated characters can stereotype groups even if the system has no feelings to injure.' },
    ],
    ethicalQuestions: [
      'What would count as evidence of moral status, if anything?',
      'Can designers owe duties to users because of a relationship the system cannot reciprocate?',
      'Should simulated distress be allowed if it makes a product more engaging?',
      'How do we stay open to future uncertainty without treating current systems as conscious?',
    ],
    responsibleApproach: 'Be honest about simulation. Protect vulnerable users from designs that pressure or isolate them. Keep human institutions accountable. Treat philosophical uncertainty as a reason for care and research, not as a marketing claim.',
    dilemmaOptions: [
      {
        label: 'A',
        title: 'Keep a warm, character-like interface with clear reminders',
        advantages: ['Can remain useful and engaging', 'Acknowledges that users have real feelings', 'Avoids a cold, unusable product'],
        risks: ['Reminders can be easy to ignore', 'Warmth can still invite over-trust', 'Children and isolated users remain more exposed'],
        affected: ['Users', 'Families', 'Developers'],
      },
      {
        label: 'B',
        title: 'Strip claims of feeling and refuse shutdown-pleading language',
        advantages: ['Protects conceptual honesty', 'Reduces a common manipulation pattern', 'Keeps responsibility on the humans who built the system'],
        risks: ['The product may feel less helpful to some users', 'Honesty alone does not prevent all attachment', 'Over-correction can shut down legitimate research questions'],
        affected: ['Product teams', 'Vulnerable users', 'Researchers'],
      },
    ],
    matrix: [
      { factor: 'Honesty', question: 'Does the interface imply inner life it cannot support?', risk: 'High in companion design', consideration: 'Simulation is not proof of experience.' },
      { factor: 'Care', question: 'Who is actually vulnerable in this relationship?', risk: 'High for children and isolated users', consideration: 'Duties run toward human users first.' },
      { factor: 'Agency', question: 'Is responsibility being shifted onto the system?', risk: 'Medium in public statements', consideration: 'Fluent output is not moral agency.' },
      { factor: 'Uncertainty', question: 'Are we closing future questions too quickly?', risk: 'Low to medium', consideration: 'Precaution should not replace evidence.' },
    ],
  },
  {
    topicId: 5,
    ethicalIssue: 'An AI-assisted targeting or influence chain recommends action while time, information and real stop-power for humans are limited.',
    realWorldContext: 'Military and propaganda systems can compress deliberation. A person may be listed as “in the loop” while speed, opacity or hierarchy make intervention unrealistic. Civilian harm and false narratives can follow from that gap.',
    contextType: 'Hypothetical scenario',
    benefits: [
      { title: 'Narrower attention', text: 'Analysis tools can help humans notice patterns in large, noisy environments.' },
      { title: 'Logistics and warning', text: 'Some uses may reduce waste or give more time for evacuation and communication if they are tightly bounded.' },
    ],
    risks: [
      { title: 'Civilian misclassification', text: 'Ambiguous data can turn people into targets of force or of a false story.' },
      { title: 'Accountability fog', text: 'Commanders, analysts, vendors and operators can each claim someone else decided.' },
      { title: 'Escalation by speed', text: 'Automated tempo can leave too little room for doubt, diplomacy or correction.' },
    ],
    ethicalQuestions: [
      'When is a human still meaningfully in control?',
      'Can a chain of partial contributions still have a named decision-maker?',
      'Should operational advantage ever justify less time to think?',
      'How should synthetic propaganda be governed as a civilian harm?',
    ],
    responsibleApproach: 'Require meaningful human control: time, context, authority and the ability to stop. Test for civilian settings and uncertainty. Keep audit trails. Do not treat speed as a moral argument for removing deliberation about life, death or public belief.',
    dilemmaOptions: [
      {
        label: 'A',
        title: 'Human-on-the-loop with a short review window',
        advantages: ['Preserves some operational tempo', 'Keeps a formal human role', 'May catch obvious errors'],
        risks: ['A short window can make review ceremonial', 'Automation bias can ratify the recommendation', 'Records may not show whether intervention was realistic'],
        affected: ['Operators', 'Civilians', 'Commanders'],
      },
      {
        label: 'B',
        title: 'No consequential action without slow, informed authorization',
        advantages: ['Protects deliberation and civilian constraint', 'Makes responsibility easier to locate', 'Creates time to challenge uncertainty'],
        risks: ['Adversaries may move faster', 'Political pressure can still override process', 'Delay is not the same as justice if the objective is wrong'],
        affected: ['Governments', 'Civilians', 'International institutions'],
      },
    ],
    matrix: [
      { factor: 'Control', question: 'Can a human understand, question and stop the action?', risk: 'High at machine speed', consideration: 'A button is not control without time and authority.' },
      { factor: 'Civilian duty', question: 'Have non-combatants been treated as more than an optimization residual?', risk: 'Severe', consideration: 'Some duties should not be traded for convenience.' },
      { factor: 'Accountability', question: 'Who answers after harm?', risk: 'High in multi-vendor chains', consideration: 'Complexity must not erase ownership.' },
      { factor: 'Information harm', question: 'Is propaganda being used as a weapon against civilians?', risk: 'High', consideration: 'False narrative is not a side issue in conflict.' },
    ],
  },
  {
    topicId: 6,
    ethicalIssue: 'A global AI rule or product policy is written in one center of power and applied to communities that did not shape it and may not share its assumptions.',
    realWorldContext: 'Compute, investment, data and standard-setting are concentrated. A common safety policy can still be valuable, but it can also export one region’s priorities, languages and risk models while others supply data, labor or market access with less voice.',
    contextType: 'Example context',
    benefits: [
      { title: 'Shared baseline', text: 'Cross-border rules can limit a race to the bottom on safety, dignity and non-discrimination.' },
      { title: 'Interoperability', text: 'Common tools for audit, documentation and incident reporting can help smaller institutions.' },
    ],
    risks: [
      { title: 'Unrepresentative rules', text: 'Consultation can exist without shared agenda-setting.' },
      { title: 'Capability lock-in', text: 'Regions with less compute and research capacity become dependent on external infrastructure.' },
      { title: 'Context failure', text: 'A policy that works in one legal and cultural setting can misfire in another.' },
    ],
    ethicalQuestions: [
      'Who is missing from the table that writes the rule?',
      'Which protections should be universal, and which need local interpretation?',
      'Does the policy share capacity, or only export compliance costs?',
      'How can a rule be revised when lived evidence contradicts the baseline?',
    ],
    responsibleApproach: 'Pair shared protections with inclusive agenda-setting, capacity sharing and room for local knowledge. Treat legitimacy as part of safety: people affected by a system should be able to inspect, contest and help revise the rules.',
    dilemmaOptions: [
      {
        label: 'A',
        title: 'One global baseline, applied everywhere',
        advantages: ['Clear minimum protections', 'Easier for companies to implement', 'Harder for actors to shop for the weakest rule'],
        risks: ['Assumptions travel with the baseline', 'Local institutions may lack power to amend it', 'Identical rules can still be unequal in effect'],
        affected: ['Regulators', 'Communities', 'Global providers'],
      },
      {
        label: 'B',
        title: 'Shared principles with locally governed implementation',
        advantages: ['Makes room for language, law and social context', 'Supports democratic legitimacy', 'Can surface harms that a single test suite misses'],
        risks: ['Fragmentation can weaken enforcement', 'Local power can also be captured', 'Coordination becomes slower and more political'],
        affected: ['Civil society', 'Developing countries', 'Future users'],
      },
    ],
    matrix: [
      { factor: 'Representation', question: 'Can affected communities change the agenda, not only comment on it?', risk: 'High in concentrated markets', consideration: 'Voice is part of justice.' },
      { factor: 'Context', question: 'Does the rule travel without translation into local meaning?', risk: 'Medium to high', consideration: 'Pluralism is not an excuse for abuse of basic rights.' },
      { factor: 'Capacity', question: 'Are skills, compute and research being shared?', risk: 'High', consideration: 'Compliance without capability deepens dependency.' },
      { factor: 'Revision', question: 'What happens when the baseline fails a community?', risk: 'Medium', consideration: 'Governance should be a learning process with remedy.' },
    ],
  },
];

const ALL_ARTIFACTS: readonly Artifact[] = [
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
  },
  {
    id: 'poster-status',
    title: 'Apparent feeling is not a finding',
    type: 'Conceptual poster',
    topicId: 4,
    purpose: 'Hold two facts together: users can be moved, and simulation is not proof of inner life.',
    issue: 'Moral Status of Generated Content',
    objective: 'Protect users from manipulative companion design without shutting down philosophical questions.',
    content: 'Split language: “The feeling in the room may be real. The claim inside the machine is not yet established.”',
    aiInvolvement: 'Phrasing was iterated with a language model and checked so the poster does not assert that current systems are conscious or that they cannot matter at all.',
    limitations: 'A poster cannot settle metaphysics. It can only keep categories from collapsing.',
    responsibleUse: 'Use in discussion. Do not use it to mock people who form attachments to digital systems.',
    visual: 'poster',
  },
  {
    id: 'flow-control',
    title: 'A human in the loop must still be able to stop',
    type: 'Control pathway',
    topicId: 5,
    purpose: 'Show that oversight is meaningless without time, information and authority.',
    issue: 'AI in Warfare & Propaganda',
    objective: 'Make “human control” inspectable instead of ceremonial.',
    content: 'Four gates before action: understand, question, delay, stop. If any gate is missing, the diagram refuses to call the process controlled.',
    aiInvolvement: 'Structure was outlined with AI assistance. The ethical requirement that stop-power be real is a human design choice, not a model output.',
    limitations: 'The diagram is not a military manual and does not describe a real weapon system. It is a teaching object about responsibility.',
    responsibleUse: 'Keep the civilian stake visible. Do not present the flow as an argument for automation.',
    visual: 'flow',
  },
  {
    id: 'matrix-governance',
    title: 'Whose baseline travels, and who can revise it?',
    type: 'Governance matrix',
    topicId: 6,
    purpose: 'Help viewers test a global rule for representation, context, capacity and revision.',
    issue: 'Global AI Governance',
    objective: 'Make legitimacy part of how safety is judged.',
    content: 'Four questions in a grid. A policy that scores well on uniformity can still fail if no affected community can change it.',
    aiInvolvement: 'Categories were refined with AI for completeness, then aligned with the topic’s justice and contextual-ethics analysis by the team.',
    limitations: 'A four-cell grid cannot capture geopolitics. It is a discussion tool, not a score that replaces politics.',
    responsibleUse: 'Use to interrogate a real policy. Do not treat a filled grid as consent from missing voices.',
    visual: 'matrix',
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

export const PHASE3_ANALYSES: readonly Phase3TopicAnalysis[] = ALL_PHASE3_ANALYSES.filter((analysis) => analysis.topicId <= 3);
export const ARTIFACTS: readonly Artifact[] = ALL_ARTIFACTS.filter((artifact) => artifact.topicId <= 3);
