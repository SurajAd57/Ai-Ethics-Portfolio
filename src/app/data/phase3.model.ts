export interface AnalysisRisk {
  readonly title: string;
  readonly text: string;
}

export interface DilemmaOption {
  readonly label: string;
  readonly title: string;
  readonly advantages: readonly string[];
  readonly risks: readonly string[];
  readonly affected: readonly string[];
}

export interface MatrixRow {
  readonly factor: string;
  readonly question: string;
  readonly risk: string;
  readonly consideration: string;
}

export interface Phase3TopicAnalysis {
  readonly topicId: number;
  readonly ethicalIssue: string;
  readonly realWorldContext: string;
  readonly contextType: 'Example context' | 'Hypothetical scenario';
  readonly benefits: readonly AnalysisRisk[];
  readonly risks: readonly AnalysisRisk[];
  readonly ethicalQuestions: readonly string[];
  readonly responsibleApproach: string;
  readonly dilemmaOptions: readonly [DilemmaOption, DilemmaOption];
  readonly matrix: readonly MatrixRow[];
}

export interface AiProvenance {
  readonly promptExploration: string;
  readonly model: string;
  readonly humanIntervention: string;
  readonly biasRiskAudit: string;
  readonly verificationStep: string;
}

export interface Artifact {
  readonly id: string;
  readonly title: string;
  readonly type: string;
  readonly topicId: number;
  readonly purpose: string;
  readonly issue: string;
  readonly objective: string;
  readonly content: string;
  readonly aiInvolvement: string;
  readonly limitations: string;
  readonly responsibleUse: string;
  readonly visual: 'poster' | 'flow' | 'matrix' | 'signal';
  readonly aiProvenance?: AiProvenance;
}
