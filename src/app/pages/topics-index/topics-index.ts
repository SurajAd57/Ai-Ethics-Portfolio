import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeading } from '../../components/section-heading/section-heading';
import { TopicCard, TopicCardData } from '../../components/topic-card/topic-card';
import { TOPICS } from '../../data/topics.data';

@Component({
  selector: 'app-topics-index',
  imports: [RouterLink, SectionHeading, TopicCard],
  templateUrl: './topics-index.html',
  styleUrl: './topics-index.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicsIndex {
  protected readonly searchQuery = signal('');
  protected readonly topics = computed<readonly TopicCardData[]>(() => {
    const query = this.searchQuery().trim().toLowerCase();
    return TOPICS
      .filter((topic) => !query || `${topic.title} ${topic.subtitle} ${topic.dilemma}`.toLowerCase().includes(query))
      .map((topic) => ({ id: topic.id, number: topic.number, title: topic.title, description: topic.subtitle, issue: topic.dilemma }));
  });

  protected updateSearch(event: Event): void {
    this.searchQuery.set((event.target as HTMLInputElement).value);
  }
}
