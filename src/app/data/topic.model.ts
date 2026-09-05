export interface TopicConcern {
  readonly title: string;
  readonly explanation: string;
  readonly importance: string;
}

export interface TopicStakeholder {
  readonly name: string;
  readonly stake: string;
}

export interface TopicHarm {
  readonly category: string;
  readonly direct: string;
  readonly longTerm: string;
}

export interface EthicalFramework {
  readonly name: string;
  readonly principle: string;
  readonly application: string;
  readonly tension: string;
  readonly conclusion: string;
}

export interface ResponsiblePrinciple {
  readonly title: string;
  readonly explanation: string;
}

export interface TopicSource {
  readonly label: string;
  readonly url?: string;
  readonly status: 'to-verify' | 'verified';
}

export interface Topic {
  readonly id: number;
  readonly number: string;
  readonly title: string;
  readonly subtitle: string;
  readonly introduction: readonly string[];
  readonly whyItMatters: string;
  readonly dilemma: string;
  readonly concerns: readonly TopicConcern[];
  readonly stakeholders: readonly TopicStakeholder[];
  readonly harms: readonly TopicHarm[];
  readonly caseStudy: { readonly title: string; readonly text: string; readonly note: string };
  readonly frameworks: readonly EthicalFramework[];
  readonly responsiblePrinciples: readonly ResponsiblePrinciple[];
  readonly tradeoff: { readonly left: string; readonly right: string; readonly explanation: string };
  readonly reflectionQuestions: readonly string[];
  readonly biggerQuestion: string;
  readonly sources: readonly TopicSource[];
}
