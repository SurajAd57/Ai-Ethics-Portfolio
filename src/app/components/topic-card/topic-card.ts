import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface TopicCardData {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly issue?: string;
  readonly id: number;
}

@Component({
  selector: 'app-topic-card',
  imports: [RouterLink],
  templateUrl: './topic-card.html',
  styleUrl: './topic-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicCard {
  readonly topic = input.required<TopicCardData>();
}
