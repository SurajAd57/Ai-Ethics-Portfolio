export interface ResponsiblePrinciple {
  readonly title: string;
  readonly explanation: string;
  readonly why: string;
  readonly example: string;
  readonly action: string;
}

export interface AiLimitation {
  readonly title: string;
  readonly problem: string;
  readonly why: string;
  readonly action: string;
}

export interface VerificationStep {
  readonly title: string;
  readonly text: string;
}

export const RESPONSIBLE_PRINCIPLES: readonly ResponsiblePrinciple[] = [
  { title: 'Human oversight', explanation: 'People remain able to understand, question and change consequential AI-assisted decisions.', why: 'Automation can hide uncertainty and make responsibility feel distant.', example: 'A student reviews and rewrites an AI draft before submitting it.', action: 'Name a human reviewer with enough time and authority to intervene.' },
  { title: 'Fairness', explanation: 'Benefits, errors and burdens should not fall unfairly on particular groups.', why: 'Training data and deployment contexts can reproduce unequal treatment.', example: 'A team checks whether a generated explanation assumes one culture or language.', action: 'Test with affected communities and correct unequal failure patterns.' },
  { title: 'Transparency', explanation: 'People should know when AI is involved and what its output can and cannot establish.', why: 'Without context, audiences may mistake generated confidence for evidence.', example: 'An AI-assisted poster is labelled as a demonstration rather than a real event.', action: 'Disclose meaningful assistance, limits and uncertainty in plain language.' },
  { title: 'Accountability', explanation: 'A person or organization remains answerable for the result and available remedy.', why: 'A system cannot accept responsibility or repair harm by itself.', example: 'A publisher identifies who approved an AI-assisted public claim.', action: 'Keep decision records and provide a way to challenge or correct outcomes.' },
  { title: 'Privacy', explanation: 'Personal and confidential information is handled only for a justified purpose.', why: 'Prompts and outputs can expose people to unwanted collection or disclosure.', example: 'A team removes names and identifying details before asking for drafting help.', action: 'Minimize sensitive data and use approved, secure workflows.' },
  { title: 'Safety', explanation: 'Foreseeable misuse and harmful failure modes are considered before release or use.', why: 'Fast generation can scale a mistake, manipulation or unsafe instruction.', example: 'A deepfake awareness example is clearly fictional and cannot be mistaken for news.', action: 'Add safeguards, review high-impact uses and pause when risk is unclear.' },
  { title: 'Inclusivity', explanation: 'People with different languages, abilities, histories and resources can participate and be heard.', why: 'A narrow design process can make a supposedly universal system exclusionary.', example: 'A governance discussion asks which communities are absent from the decision.', action: 'Include affected voices in design, testing and revision.' },
  { title: 'Verification', explanation: 'Important claims are checked against reliable context before they guide action.', why: 'AI can produce plausible but incorrect, outdated or invented information.', example: 'A reference is opened and checked rather than copied from a generated answer.', action: 'Verify sources, compare evidence and treat uncertainty as information.' },
];

export const AI_LIMITATIONS: readonly AiLimitation[] = [
  { title: 'Hallucinations', problem: 'A system may produce an incorrect claim with fluent wording.', why: 'Confidence in style can be mistaken for confidence in evidence.', action: 'Check important claims against reliable primary or institutional sources.' },
  { title: 'Bias', problem: 'Generated content can reproduce stereotypes or unequal assumptions.', why: 'Models learn from imperfect data and reflect patterns in their context.', action: 'Look for missing perspectives, harmful framing and unequal effects.' },
  { title: 'Limited context', problem: 'A system may miss local meaning, history, tone or the needs of a specific person.', why: 'General patterns cannot replace situated human understanding.', action: 'Ask people with relevant knowledge to review the output.' },
  { title: 'Overconfidence', problem: 'An answer can sound certain even when the system is uncertain.', why: 'Users may stop asking what is known, inferred or missing.', action: 'Separate evidence from interpretation and record unresolved uncertainty.' },
  { title: 'Outdated information', problem: 'The output may not reflect recent events, rules or research.', why: 'Decisions based on stale information can create practical harm.', action: 'Check dates and consult current authoritative sources.' },
  { title: 'Ethical judgment', problem: 'AI can list principles but cannot own the moral consequences of a choice.', why: 'Ethical decisions involve relationships, power and accountability.', action: 'Use AI to surface questions, then decide through human deliberation.' },
  { title: 'Misinformation', problem: 'Generated text, images, audio or video can make false claims easier to produce.', why: 'Speed and scale can outrun correction and verification.', action: 'Label synthetic examples and verify before sharing high-impact content.' },
  { title: 'Manipulation', problem: 'Personalized output can exploit fear, urgency or vulnerability.', why: 'Influence becomes harmful when people cannot see or resist the tactic.', action: 'Assess consent, audience vulnerability and the purpose of the communication.' },
  { title: 'No genuine responsibility', problem: 'A model cannot be the accountable author of a consequential decision.', why: 'Blaming a tool creates an accountability gap.', action: 'Keep ownership with the people and institutions that choose to use it.' },
];

export const VERIFICATION_STEPS: readonly VerificationStep[] = [
  { title: 'Question', text: 'Clarify the task, audience, stakes and what a responsible answer would need to establish.' },
  { title: 'Generative AI output', text: 'Treat the response as a draft or possibility, not as an authority.' },
  { title: 'Critical review', text: 'Inspect assumptions, omissions, tone, bias and unsupported certainty.' },
  { title: 'Fact check', text: 'Compare important claims with reliable, current sources and original context.' },
  { title: 'Ethical check', text: 'Ask who benefits, who may be harmed, whether consent and privacy are respected.' },
  { title: 'Human editing', text: 'Rewrite, contextualize and remove anything the reviewer cannot defend.' },
  { title: 'Final responsible output', text: 'Publish only what is accurate enough, appropriately disclosed and proportionate to the stakes.' },
];

export const DO_GUIDANCE = [
  'Use AI to support brainstorming and idea generation.', 'Verify important information.', 'Review AI-generated content before submission.', 'Acknowledge AI assistance where appropriate.', 'Protect personal and confidential information.', 'Consider possible bias and harmful outputs.', 'Maintain human responsibility for final decisions.', 'Use AI to enhance learning rather than replace understanding.',
] as const;

export const AVOID_GUIDANCE = [
  'Blindly copying AI-generated content.', 'Treating AI output as automatically factual.', 'Using AI to create harmful or deceptive content.', 'Uploading confidential personal information.', 'Presenting AI-generated work as entirely human-created when disclosure is required.', 'Using AI to manipulate people through misinformation or deception.', 'Using AI output without checking for bias or inaccuracies.',
] as const;
