export interface PortfolioCard {
  readonly number: string;
  readonly title: string;
  readonly text: string;
  readonly route?: string;
}

export interface PortfolioPageData {
  readonly key: string;
  readonly label: string;
  readonly title: string;
  readonly accent: string;
  readonly intro: string;
  readonly sections: readonly { readonly title: string; readonly text: string }[];
  readonly cards: readonly PortfolioCard[];
  readonly closing: string;
}

export const PORTFOLIO_PAGES: Record<string, PortfolioPageData> = {
  ethicsLab: {
    key: 'ethicsLab', label: 'Interactive space', title: 'The Ethics Lab', accent: 'Think before you decide.',
    intro: 'A set of guided encounters for testing ethical judgment. Phase 3 asks you to weigh benefits, risks and two imperfect options, then inspect the trade-off you accepted.',
    sections: [
      { title: 'Read the situation', text: 'Begin with a concrete scenario where an AI system changes what people can know, make, decide or control.' },
      { title: 'Map the stakeholders', text: 'Notice who gains power, who carries risk and whose perspective is missing from the first explanation.' },
      { title: 'Name the responsibility', text: 'Move beyond “the algorithm did it” and ask which human choices shaped the system, context and outcome.' },
    ],
    cards: [
      { number: '01', title: 'The synthetic witness', text: 'A convincing media artifact enters a public investigation.', route: '/topics/1' },
      { number: '02', title: 'The persuasive voice', text: 'A cloned voice makes a request from someone you trust.', route: '/topics/2' },
      { number: '03', title: 'The creative brief', text: 'A team must decide who deserves credit for an AI-assisted work.', route: '/topics/3' },
      { number: '04', title: 'The automated decision', text: 'A system recommends an action while time for human review is limited.', route: '/topics/5' },
    ],
    closing: 'The lab is designed to make ethical reasoning visible: slow enough to question, practical enough to use.',
  },
  artifacts: {
    key: 'artifacts', label: 'Portfolio collection', title: 'Creative Artifacts', accent: 'Make the question visible.',
    intro: 'A gallery of visual work that helps an audience encounter AI ethics through signals, posters, flows and matrices. Each object names its purpose, AI involvement and limits.',
    sections: [
      { title: 'Context first', text: 'Every artifact should state what it is, how AI was used and what question it asks the viewer to consider.' },
      { title: 'Evidence over spectacle', text: 'Visual polish should clarify an ethical issue rather than make an unsupported claim feel authoritative.' },
      { title: 'Designed for discussion', text: 'The collection is a starting point for critique, comparison and responsible revision.' },
    ],
    cards: [
      { number: '01', title: 'Infographics', text: 'Clear visual explanations of concepts such as provenance, bias and accountability.' },
      { number: '02', title: 'Posters', text: 'Short-form awareness material for a campus or public audience.' },
      { number: '03', title: 'AI-generated examples', text: 'Clearly disclosed examples for examining authorship, trust and context.' },
      { number: '04', title: 'Decision diagrams', text: 'Visual pathways for pausing before a high-impact AI-assisted choice.' },
      { number: '05', title: 'Awareness material', text: 'Accessible prompts that help viewers spot manipulation and ask better questions.' },
      { number: '06', title: 'Process notes', text: 'Space to document creative decisions, revisions and responsible AI use.' },
    ],
    closing: 'Each artifact is offered with its context, process and limitations clearly identified.',
  },
  responsibleAi: {
    key: 'responsibleAi', label: 'Practice guide', title: 'Responsible AI', accent: 'Using Generative AI with responsibility requires more than technical capability — it requires human judgment, transparency, accountability and awareness of potential harm.',
    intro: 'Responsible AI is not a single checklist. It is an ongoing commitment to design and use systems in ways that respect people, reduce foreseeable harm and keep accountability visible.',
    sections: [
      { title: 'Start with people', text: 'Define who is affected, what they need and what could go wrong before choosing a technical solution.' },
      { title: 'Make limits visible', text: 'Explain data, uncertainty, capability and failure modes so users can make informed decisions.' },
      { title: 'Keep humans accountable', text: 'Assign ownership, provide ways to challenge outcomes and review impacts after deployment.' },
    ],
    cards: [
      { number: '01', title: 'Fairness', text: 'Look for unequal errors, access and burdens across relevant groups.' },
      { number: '02', title: 'Transparency', text: 'Communicate how a system is used, what it can do and where it is uncertain.' },
      { number: '03', title: 'Accountability', text: 'Name the people and institutions responsible for decisions and remedies.' },
      { number: '04', title: 'Privacy', text: 'Collect and use personal information with purpose, restraint and respect.' },
      { number: '05', title: 'Safety', text: 'Test foreseeable misuse and provide safeguards proportionate to the stakes.' },
      { number: '06', title: 'Human oversight', text: 'Ensure review is meaningful, informed and able to change the outcome.' },
    ],
    closing: 'Responsible AI becomes real when principles influence everyday choices, not only final statements.',
  },
  reflection: {
    key: 'reflection', label: 'Process notes', title: 'Our Reflection', accent: 'Learning is part of the artifact.',
    intro: 'This page holds the reflective structure for the team’s final account of researching, designing and using generative AI responsibly. The prompts below are ready for our own voice.',
    sections: [
      { title: 'What we learned', text: 'Which ideas changed as we moved from definitions to cases, stakeholders and trade-offs?' },
      { title: 'How AI affected our thinking', text: 'Where did generative tools help us explore possibilities, and where did human judgment remain essential?' },
      { title: 'What we would improve', text: 'Which evidence, perspectives, tests or design decisions should a future version add?' },
    ],
    cards: [
      { number: '01', title: 'Ethical challenges', text: 'Record the tensions that resisted a simple answer.' },
      { number: '02', title: 'Responsible use', text: 'Explain how AI assistance was reviewed, shaped and disclosed.' },
      { number: '03', title: 'Team learning', text: 'Connect individual topic work to the shared Truth, Creativity, Power and Responsibility framework.' },
      { number: '04', title: 'Future improvements', text: 'Identify the next research and design steps with honesty about current limits.' },
    ],
    closing: 'A good reflection does not claim certainty; it shows how our reasoning became more careful.',
  },
  references: {
    key: 'references', label: 'Research trail', title: 'References', accent: 'Claims deserve a trail.',
    intro: 'A structured place for the sources that will support the final portfolio. No fabricated citations are included. Verified academic, institutional and course materials can be added here as research is completed.',
    sections: [
      { title: 'Academic sources', text: 'Add books, journal articles and course readings with complete author, title, publication and access details.' },
      { title: 'Online resources', text: 'Add reliable institutional, standards, policy and educational resources with the date they were consulted.' },
      { title: 'AI tools used', text: 'Document tools used for ideation, drafting or design support, alongside the human review applied to their outputs.' },
    ],
    cards: [
      { number: '01', title: 'Academic sources', text: 'Research entries will be added after verification.' },
      { number: '02', title: 'Online resources', text: 'Institutional and policy resources will be recorded with context.' },
      { number: '03', title: 'AI tools used', text: 'A transparent disclosure of tools and how they supported the project.' },
    ],
    closing: 'Reference work is part of responsible communication: it lets a reader inspect where an idea came from.',
  },
};
