import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeading } from '../../components/section-heading/section-heading';
import { TopicCard, TopicCardData } from '../../components/topic-card/topic-card';
import { TOPICS } from '../../data/topics.data';

interface FrameworkItem {
  readonly label: string;
  readonly text: string;
}

interface PreviewItem {
  readonly number: string;
  readonly title: string;
  readonly text: string;
  readonly route: string;
}

interface TeamItem {
  readonly name: string;
  readonly role: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, SectionHeading, TopicCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  protected readonly topics: readonly TopicCardData[] = TOPICS.map((topic) => ({
    id: topic.id,
    number: topic.number,
    title: topic.title,
    description: topic.subtitle,
    issue: topic.dilemma,
  }));

  protected readonly framework: readonly FrameworkItem[] = [
    { label: 'Truth', text: 'What can we know when synthetic media blurs evidence?' },
    { label: 'Creativity', text: 'What can we claim when machines participate in making?' },
    { label: 'Power', text: 'Who gets to shape reality and control persuasive tools?' },
    { label: 'Responsibility', text: 'What do we owe one another in design, governance and use?' },
  ];

  protected readonly dimensions: readonly FrameworkItem[] = [
    { label: 'Truth', text: 'How AI-generated content affects trust, verification and shared facts.' },
    { label: 'Creativity', text: 'How AI transforms authorship, originality and creative labor.' },
    { label: 'Power', text: 'How influence, deepfakes and persuasion cross into manipulation.' },
    { label: 'Responsibility', text: 'Why humans remain accountable for every AI-assisted choice.' },
  ];

  protected readonly previews: readonly PreviewItem[] = [
    { number: '01', title: 'Ethical Topics', text: 'Three exhibitions exploring truth, deception and authorship.', route: '/topics' },
    { number: '02', title: 'Ethics Lab', text: 'Interactive encounters testing judgment under pressure.', route: '/ethics-lab' },
    { number: '03', title: 'Creative Artifacts', text: 'Visual objects and signals for critical reading.', route: '/artifacts' },
    { number: '04', title: 'Responsible AI', text: 'Actionable principles, limitations and verification workflows.', route: '/responsible-ai' },
    { number: '05', title: 'Our Reflection', text: 'Documented team learning, process notes and honest boundaries.', route: '/reflection' },
  ];

  protected readonly labEncounters: readonly PreviewItem[] = [
    { number: '01', title: 'The Synthetic Witness', text: 'Decide how to treat an unverified viral image presented as evidence.', route: '/ethics-lab/1' },
    { number: '02', title: 'The Persuasive Voice', text: 'Weigh urgent friction versus open access when a cloned voice asks for trust.', route: '/ethics-lab/2' },
    { number: '03', title: 'The Creative Brief', text: 'Navigate attribution, human craft and tool disclosures in AI-assisted work.', route: '/ethics-lab/3' },
  ];

  protected readonly team: readonly TeamItem[] = [
    { name: 'Member 1', role: 'Truth & Epistemic Trust' },
    { name: 'Member 2', role: 'Persuasion, Deepfakes & Influence' },
    { name: 'Member 3', role: 'Authorship & Intellectual Labor' },
  ];
}
