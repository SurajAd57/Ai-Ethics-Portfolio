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
    id: topic.id, number: topic.number, title: topic.title, description: topic.subtitle, issue: topic.dilemma,
  }));

  protected readonly framework: readonly FrameworkItem[] = [
    { label: 'Truth', text: 'What can we know?' },
    { label: 'Creativity', text: 'What can we claim?' },
    { label: 'Power', text: 'Who gets to shape reality?' },
    { label: 'Responsibility', text: 'What do we owe one another?' },
  ];

  protected readonly dimensions: readonly FrameworkItem[] = [
    { label: 'Truth', text: 'How AI-generated content affects trust, information and knowledge.' },
    { label: 'Creativity', text: 'How AI changes authorship, originality and intellectual labor.' },
    { label: 'Power', text: 'How AI can influence persuasion, propaganda and conflict.' },
    { label: 'Responsibility', text: 'Why humans and institutions remain accountable for how AI is designed and used.' },
  ];

  protected readonly previews: readonly PreviewItem[] = [
    { number: '01', title: 'Ethical Dilemmas', text: 'Cases that refuse easy answers.', route: '/ethics-lab' },
    { number: '02', title: 'AI-Generated Artifacts', text: 'Objects for close reading and questioning.', route: '/artifacts' },
    { number: '03', title: 'Deepfake Awareness', text: 'Tools for a more careful gaze.', route: '/ethics-lab/2' },
    { number: '04', title: 'Authorship Questions', text: 'Where does creative credit begin?', route: '/ethics-lab/3' },
    { number: '05', title: 'Global AI Governance', text: 'Rules, borders and uneven power.', route: '/ethics-lab/6' },
    { number: '06', title: 'Responsible AI Practices', text: 'Principles translated into action.', route: '/responsible-ai' },
  ];

  protected readonly team: readonly TeamItem[] = [
    { name: 'Member 1', role: 'Truth & Information' },
    { name: 'Member 2', role: 'Creativity & Intellectual Labor' },
    { name: 'Member 3', role: 'Power & Governance' },
  ];
}
