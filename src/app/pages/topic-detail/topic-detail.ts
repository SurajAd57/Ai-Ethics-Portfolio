import { ChangeDetectionStrategy, Component, computed, effect, inject, signal, untracked } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { artifactsForTopic, findPhase3Analysis } from '../../data/phase3.data';
import { TOPICS, findTopic } from '../../data/topics.data';
import { EthicalAnalysis } from '../../components/ethical-analysis/ethical-analysis';
import { StakeholderMap } from '../../components/stakeholder-map/stakeholder-map';

@Component({
  selector: 'app-topic-detail',
  imports: [RouterLink, EthicalAnalysis, StakeholderMap],
  templateUrl: './topic-detail.html',
  styleUrl: './topic-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly topicId = toSignal(
    this.route.paramMap.pipe(map((params) => Number(params.get('id')))),
    { initialValue: Number(this.route.snapshot.paramMap.get('id')) },
  );

  protected readonly topic = computed(() => findTopic(this.topicId()));
  protected readonly analysis = computed(() => findPhase3Analysis(this.topicId()));
  protected readonly artifact = computed(() => artifactsForTopic(this.topicId())[0]);
  protected readonly expandedConcerns = signal<ReadonlySet<number>>(new Set([0]));

  protected readonly previousTopic = computed(() => TOPICS.find((item) => item.id === this.topicId() - 1));
  protected readonly nextTopic = computed(() => TOPICS.find((item) => item.id === this.topicId() + 1));

  constructor() {
    effect(() => {
      this.topicId();
      untracked(() => this.expandedConcerns.set(new Set([0])));
    });
  }

  protected toggleConcern(index: number): void {
    this.expandedConcerns.update((expanded) => {
      const next = new Set(expanded);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  protected isConcernExpanded(index: number): boolean {
    return this.expandedConcerns().has(index);
  }
}
