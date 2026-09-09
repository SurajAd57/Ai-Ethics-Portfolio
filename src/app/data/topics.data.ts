import { Topic } from './topic.model';

export const TOPICS: readonly Topic[] = [
  {
    id: 1,
    number: '01',
    title: 'Synthetic Reality & Epistemic Risk',
    subtitle: 'When seeing is no longer enough to believe.',
    introduction: [
      'Generative AI can produce images, audio, video and text that look or sound plausible without documenting an event that actually happened. Synthetic media is not automatically harmful: it can support accessibility, education, art and simulation. The ethical problem begins when appearance is mistaken for evidence.',
      'Epistemic risk means a risk to how people form justified beliefs. If reliable signals become harder to identify, people may not only believe false claims; they may also stop believing accurate ones. The result is uncertainty about what can be known together.',
    ],
    whyItMatters: 'Individuals make decisions from the information around them, while journalists, researchers, courts and public institutions depend on shared standards of evidence. Generative media changes the cost and speed of producing persuasive appearances. Human responsibility therefore includes building better ways to verify context without treating every unfamiliar image as false.',
    dilemma: 'How can society preserve the benefits of synthetic media without allowing convincing appearance to replace evidence?',
    concerns: [
      { title: 'Epistemic trust', explanation: 'People need dependable ways to distinguish a claim, an interpretation and a fabricated artifact.', importance: 'Without shared trust, public reasoning becomes slower and more vulnerable to cynicism.' },
      { title: 'Authenticity and context', explanation: 'A real image can be cropped, relabeled or placed in a false context; a generated image can be honestly disclosed.', importance: 'The ethical issue is not only whether a file is real, but whether its meaning is represented truthfully.' },
      { title: 'Unequal verification power', explanation: 'Platforms and institutions may have better detection tools than ordinary users.', importance: 'A verification gap can make some communities easier to mislead and less able to challenge a powerful source.' },
      { title: 'Automation bias', explanation: 'People may over-trust outputs from systems that sound objective or technical.', importance: 'A machine-produced answer still requires human judgment about evidence, uncertainty and consequences.' },
    ],
    stakeholders: [
      { name: 'Audiences', stake: 'Need understandable signals about provenance, uncertainty and the limits of what a media artifact proves.' },
      { name: 'Journalists and researchers', stake: 'Must preserve evidential standards while working in an environment where verification takes more time.' },
      { name: 'Platforms', stake: 'Control distribution, labeling and moderation choices that can either support or weaken public knowledge.' },
      { name: 'People depicted', stake: 'Can be misrepresented through synthetic likenesses, even when they never consented to the creation.' },
    ],
    harms: [
      { category: 'Individual', direct: 'A person may be falsely represented or make a harmful decision from fabricated evidence.', longTerm: 'Repeated exposure can produce resignation: the belief that no information is worth trusting.' },
      { category: 'Social', direct: 'Communities may argue over media that has no reliable context.', longTerm: 'Shared facts become harder to establish across political or cultural differences.' },
      { category: 'Institutional', direct: 'Verification workloads increase for newsrooms, schools and public services.', longTerm: 'Institutions may lose legitimacy if they cannot explain why a claim is accepted or rejected.' },
    ],
    caseStudy: { title: 'The synthetic image as evidence', text: 'A fabricated image circulated as if it documented a real public event. The ethical lesson does not depend on one specific viral incident: a visual artifact can travel faster than its context, while later corrections rarely reach everyone who saw the first claim.', note: 'Case pattern analyzed in relation to C2PA provenance and verification standards.' },
    frameworks: [
      { name: 'Rights and autonomy', principle: 'People deserve the information needed to make informed choices.', application: 'Undisclosed synthetic evidence can interfere with a person\'s ability to judge a situation for themselves.', tension: 'Full disclosure can be difficult when content is remixed across platforms and contexts.', conclusion: 'Provenance and clear context should be treated as supports for autonomy, not optional decoration.' },
      { name: 'Justice and fairness', principle: 'Risks and protective resources should not be distributed arbitrarily.', application: 'Communities with less media literacy, connectivity or institutional support may bear more of the cost.', tension: 'A single verification rule may not work equally well across languages and access conditions.', conclusion: 'Verification systems should be tested with the communities most likely to be excluded.' },
    ],
    responsiblePrinciples: [
      { title: 'Content provenance', explanation: 'Preserve meaningful information about how and where media was made so viewers can assess context.' },
      { title: 'Disclosure', explanation: 'Label significant synthetic alterations in language people can understand before they make decisions.' },
      { title: 'Human verification', explanation: 'Use trained review for high-impact claims rather than treating an automated detector as final authority.' },
      { title: 'Media literacy', explanation: 'Teach people to ask what a file proves, who supplied it and what evidence is missing.' },
    ],
    tradeoff: { left: 'Synthetic expression', right: 'Epistemic trust', explanation: 'Creative and educational uses deserve room to develop, but that freedom should not depend on confusing audiences about what is documentary evidence.' },
    reflectionQuestions: [
      'Can society function if people cannot reliably tell whether important evidence is authentic?',
      'Who should carry the burden of proving that a widely shared artifact is genuine?',
      'When does a disclosure label meaningfully protect a viewer, and when is it too easy to miss?',
      'Could distrust itself become a form of manipulation?',
    ],
    biggerQuestion: 'This topic begins with TRUTH and ends with RESPONSIBILITY: what we know depends not only on the artifact, but on the systems and people that give it context.',
    sources: [
      { label: 'Floridi, L. (2020). The Logic of Information: A Theory of Philosophy as Conceptual Design. Oxford University Press.', status: 'verified', url: 'https://doi.org/10.1093/oso/9780198833635.001.0001' },
      { label: 'Fallis, D. (2015). What Is Disinformation? Library Trends, 63(3), 401–426.', status: 'verified', url: 'https://doi.org/10.1353/lib.2015.0014' },
      { label: 'European Parliament STOA (2021). Tackling Deepfakes in European Policy: Challenges and Options.', status: 'verified', url: 'https://www.europarl.europa.eu/stoa/en/document/EPRS_STU(2021)690039' },
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'Misinformation, Deepfakes & Persuasion',
    subtitle: 'When influence crosses the line into manipulation.',
    introduction: [
      'Misinformation is inaccurate information shared without an established intention to deceive. Disinformation is false or misleading information deliberately created or distributed to deceive. Generative AI can make both easier to produce, personalize and scale through images, video, text and cloned voices.',
      'Persuasion is not automatically unethical. Teaching, campaigning and advertising all try to change minds. The ethical difficulty appears when a person is denied meaningful awareness or consent, when a message exploits vulnerability, or when a fabricated identity makes deception difficult to detect.',
    ],
    whyItMatters: 'Individuals can lose money or reputation, while public discourse depends on citizens being able to evaluate competing claims. Political actors, advertisers and platforms have different powers to shape attention. Responsible use therefore asks not only whether speech is legal or creative, but whether the method preserves agency and avoids foreseeable harm.',
    dilemma: 'How can creative expression and open persuasion remain free without giving deception an industrial advantage?',
    concerns: [
      { title: 'Deception and consent', explanation: 'Voice cloning or a fabricated likeness can make someone appear to speak without permission.', importance: 'A person cannot meaningfully consent to a message they did not make or approve.' },
      { title: 'Manipulative targeting', explanation: 'Generative systems can tailor messages to fears, identities or moments of vulnerability.', importance: 'Personalization can move from relevance to exploitation when the audience cannot see how it was selected.' },
      { title: 'Platform responsibility', explanation: 'Distribution systems influence reach, recommendation and the speed of correction.', importance: 'A platform is not the sole cause of harm, but its design affects the scale of foreseeable consequences.' },
      { title: 'The liar\'s dividend', explanation: 'Once deepfakes are common, genuine evidence can be dismissed as fake.', importance: 'The existence of synthetic media can damage real people even when no fake is believed.' },
      { title: 'Fraud and impersonation', explanation: 'Synthetic voices and messages can be used to imitate trusted people or institutions.', importance: 'Trust relationships become attack surfaces for economic and emotional harm.' },
    ],
    stakeholders: [
      { name: 'People depicted or imitated', stake: 'Need control over their likeness, voice and reputation.' },
      { name: 'Voters and communities', stake: 'Need access to political information that does not covertly exploit or deceive them.' },
      { name: 'Platforms and moderators', stake: 'Must balance expression, speed, context and the consequences of distribution choices.' },
      { name: 'Creators and campaigners', stake: 'Need clear norms that protect legitimate satire and art while discouraging impersonation.' },
      { name: 'Targets of fraud', stake: 'May have limited time and technical ability to verify a convincing request.' },
    ],
    harms: [
      { category: 'Individual', direct: 'A person may lose money, privacy or reputation through impersonation.', longTerm: 'Victims may withdraw from online participation or public life.' },
      { category: 'Political', direct: 'False content can distract, intimidate or confuse people during a public debate.', longTerm: 'Repeated manipulation can reduce confidence in elections, journalism and democratic disagreement.' },
      { category: 'Social', direct: 'Communities may be pushed toward anger before corrections travel.', longTerm: 'Polarization makes it harder to recognize good-faith disagreement.' },
    ],
    caseStudy: { title: 'A cloned voice in a trusted relationship', text: 'A synthetic voice message that resembles a family member, executive or public figure can exploit a relationship before the recipient pauses to verify it. The important ethical question is how systems, institutions and users can make verification normal without placing all responsibility on a potential victim.', note: 'Examined against audio forensics and out-of-band verification protocols.' },
    frameworks: [
      { name: 'Autonomy', principle: 'Persuasion should leave people able to deliberate rather than covertly bypassing their judgment.', application: 'Undisclosed impersonation interferes with the audience\'s ability to assess who is speaking and why.', tension: 'All communication uses framing, and not every emotional appeal is manipulation.', conclusion: 'The key boundary is meaningful awareness, consent and the avoidance of exploitative targeting.' },
      { name: 'Consequentialism', principle: 'An action should be judged partly by its foreseeable effects.', application: 'A small act of fabrication can cause large harm when a platform amplifies it.', tension: 'Over-removal can suppress satire, dissent or legitimate creative work.', conclusion: 'Proportionate safeguards should consider reach, vulnerability, likelihood and reversibility of harm.' },
    ],
    responsiblePrinciples: [
      { title: 'Authenticity signals', explanation: 'Make it easier to identify the origin and editing history of high-impact media.' },
      { title: 'Consent and takedown', explanation: 'Do not create or distribute a person\'s likeness or voice deceptively, and provide meaningful remedy.' },
      { title: 'Friction for high-risk actions', explanation: 'Add review, confirmation or limits before mass distribution, impersonation or targeted political persuasion.' },
      { title: 'Contextual moderation', explanation: 'Assess intent, reach and likely harm instead of treating every synthetic artifact as identical.' },
    ],
    tradeoff: { left: 'Expression and creativity', right: 'Protection from manipulation', explanation: 'A responsible boundary should protect satire and experimentation while making impersonation and covert exploitation harder to scale.' },
    reflectionQuestions: [
      'When does a persuasive message become manipulative rather than merely effective?',
      'Should platforms remove deceptive synthetic content, label it, reduce its reach, or use different responses by context?',
      'How much verification friction is reasonable before it begins to chill ordinary communication?',
      'Who is responsible when a fabricated message is made by one person, amplified by another system and believed by a third?',
    ],
    biggerQuestion: 'This topic connects TRUTH to POWER: the ability to manufacture belief becomes an ethical issue when influence is unevenly distributed.',
    sources: [
      { label: 'Zuboff, S. (2019). The Age of Surveillance Capitalism. PublicAffairs.', status: 'verified', url: 'https://www.publicaffairsbooks.com/titles/shoshana-zuboff/the-age-of-surveillance-capitalism/9781610395694/' },
      { label: 'Chesney, R., & Citron, D. (2019). Deep Fakes: A Looming Challenge for Privacy, Democracy, and National Security. California Law Review, 107, 1753.', status: 'verified', url: 'https://doi.org/10.2139/ssrn.3213906' },
      { label: 'Wardle, C., & Derakhshan, H. (2017). Information Disorder: Toward an Interdisciplinary Framework for Research and Policy Making. Council of Europe Report DGI(2017)09.', status: 'verified', url: 'https://rm.coe.int/information-disorder-toward-an-interdisciplinary-framework-for-researc/168076277c' },
    ],
    image: {
      url: '/images/news-ai-tiles.jpg',
      alt: 'Letter tiles spelling NEWS and AI on a wooden table',
      caption: 'Information disorder: how synthetic generation alters the landscape of news, evidence, and public persuasion.',
    },
  },
  {
    id: 3,
    number: '03',
    title: 'Authorship, Creativity & Intellectual Labor',
    subtitle: 'When making becomes a collaboration with a machine.',
    introduction: [
      'Generative AI complicates authorship because a finished work can involve a person\'s intention, a model\'s learned patterns, other people\'s creative labor and a platform\'s tools. Human-created, AI-assisted and AI-generated are useful distinctions, but they are not complete moral categories by themselves.',
      'The question is not simply whether AI replaces creativity. People still choose goals, prompts, edits, judgments and contexts. The ethical challenge is to recognize contribution, protect creative workers and make claims about originality and training data honestly.',
    ],
    whyItMatters: 'Artists, writers, musicians, designers and programmers depend on credit, income and the ability to decide how their work circulates. Institutions also need fair rules for assessment and employment. A responsible approach must account for both the value of new creative access and the labor that makes these systems possible.',
    dilemma: 'If AI contributes substantially to a work, how should credit, rights, compensation and responsibility be shared?',
    concerns: [
      { title: 'Attribution', explanation: 'A work can hide the contributions of the user, source creators, editors or tool makers.', importance: 'Credit affects dignity, accountability, reputation and economic opportunity.' },
      { title: 'Originality', explanation: 'A new output may be novel to its user while still reflecting patterns from a large training corpus.', importance: 'Claims of originality should match what the creator actually did and knows.' },
      { title: 'Training-data consent', explanation: 'Creators may not know whether or how their work entered a training process.', importance: 'Consent and compensation questions concern the relationship between innovation and existing labor.' },
      { title: 'Economic displacement', explanation: 'Cheap generated output can change demand for human creative work.', importance: 'Efficiency gains are not ethically neutral if the costs fall on workers with little bargaining power.' },
      { title: 'Deskilling and agency', explanation: 'Over-reliance on generated drafts can weaken a person\'s ability to develop judgment.', importance: 'Creative agency includes the capacity to understand and evaluate the work, not only to request it.' },
    ],
    stakeholders: [
      { name: 'Artists and writers', stake: 'Need recognition, consent and sustainable conditions for creative labor.' },
      { name: 'AI users', stake: 'Need clear expectations about disclosure, rights and the limits of tool outputs.' },
      { name: 'Copyright holders', stake: 'Need fair treatment when their works influence training or are reproduced in outputs.' },
      { name: 'Employers and educators', stake: 'Must assess contribution fairly without assuming that all AI assistance is equivalent.' },
      { name: 'AI developers', stake: 'Control dataset practices, product disclosures and how contribution is represented.' },
    ],
    harms: [
      { category: 'Economic', direct: 'Creators may lose commissions, bargaining power or income.', longTerm: 'A thinner creative ecosystem can reduce the diversity of voices and practices available to society.' },
      { category: 'Cultural', direct: 'Outputs may imitate styles without recognizing the communities that developed them.', longTerm: 'Cultural expression can be detached from context and redistributed toward already powerful institutions.' },
      { category: 'Educational', direct: 'Unclear assistance can make evaluation of student learning unreliable.', longTerm: 'Learners may practice less if producing an answer becomes easier than developing a skill.' },
    ],
    caseStudy: { title: 'The AI-assisted creative brief', text: 'A designer uses a generative system for variations, selects a direction, redraws key elements and presents the result to a client. The case shows why authorship is better understood as a spectrum of contribution than as a binary label.', note: 'Analyzed with respect to US Copyright Office guidance and labor equity.' },
    frameworks: [
      { name: 'Justice', principle: 'Benefits and burdens should be distributed fairly among contributors.', application: 'A system that captures value from creative labor without recognition raises distributive concerns.', tension: 'It is difficult to measure the influence of millions of works or assign a single contribution value.', conclusion: 'Fairness may require multiple mechanisms: consent choices, attribution, compensation and labor protections.' },
      { name: 'Virtue ethics', principle: 'Good creative practice cultivates honesty, care and responsibility.', application: 'A creator who discloses meaningful assistance and checks the work demonstrates integrity.', tension: 'Disclosure norms vary by context, and total process transparency can be burdensome.', conclusion: 'The relevant virtue is not rejection of tools but truthful representation of one\'s contribution.' },
    ],
    responsiblePrinciples: [
      { title: 'Contribution disclosure', explanation: 'Describe meaningful AI assistance so audiences can interpret authorship and accountability accurately.' },
      { title: 'Consent and attribution', explanation: 'Treat source creators as stakeholders rather than invisible raw material.' },
      { title: 'Human review', explanation: 'Keep a person responsible for accuracy, quality, context and the final decision to publish.' },
      { title: 'Fair labor transition', explanation: 'Pair productivity gains with training, negotiation and protections for affected creative workers.' },
    ],
    tradeoff: { left: 'AI-assisted creativity', right: 'Human authorship', explanation: 'The goal is not to freeze creativity in one form, but to ensure that assistance does not erase contribution, consent or accountability.' },
    reflectionQuestions: [
      'What level of human judgment turns an AI-assisted output into a person\'s authored work?',
      'Should training on creative work require consent, compensation, attribution, or a different model?',
      'Can a work be valuable without having a single human author?',
      'How should universities evaluate learning when students use generative tools?',
    ],
    biggerQuestion: 'This topic puts CREATIVITY under pressure from POWER: who is visible as an author often determines who receives credit and opportunity.',
    sources: [
      { label: 'UNESCO (2021). Recommendation on the Ethics of Artificial Intelligence. UNESCO General Conference.', status: 'verified', url: 'https://unesdoc.unesco.org/ark:/48223/pf0000381137' },
      { label: 'Crawford, K. (2021). Atlas of AI: Power, Politics, and the Planetary Costs of Artificial Intelligence. Yale University Press.', status: 'verified', url: 'https://yalebooks.yale.edu/book/9780300209579/atlas-of-ai/' },
      { label: 'Elgammal, A. (2019). AI Is Blurring the Definition of Artist. American Scientist, 107(1), 18–21.', status: 'verified', url: 'https://doi.org/10.1511/2019.107.1.18' },
    ],
    image: {
      url: '/images/intelligence-crossword.jpg',
      alt: 'Crossword tiles contrasting artificial intelligence, humanity, and judgment',
      caption: 'Authorship under question: negotiating the boundaries between human creative craft, machine intelligence, and human judgment.',
    },
  },
];

export function findTopic(id: number): Topic | undefined {
  return TOPICS.find((topic) => topic.id === id);
}
