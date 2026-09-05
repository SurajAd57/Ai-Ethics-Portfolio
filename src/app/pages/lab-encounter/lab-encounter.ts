import { ChangeDetectionStrategy, Component, computed, effect, inject, signal, untracked } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { findPhase3Analysis, artifactsForTopic } from '../../data/phase3.data';
import { findTopic } from '../../data/topics.data';

@Component({
  selector: 'app-lab-encounter',
  imports: [RouterLink],
  templateUrl: './lab-encounter.html',
  styleUrl: './lab-encounter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabEncounter {
  private readonly route = inject(ActivatedRoute);
  private readonly topicId = toSignal(
    this.route.paramMap.pipe(map((params) => Number(params.get('id')))),
    { initialValue: Number(this.route.snapshot.paramMap.get('id')) },
  );

  protected readonly selectedOption = signal<0 | 1 | null>(null);

  constructor() {
    effect(() => {
      this.topicId();
      untracked(() => this.selectedOption.set(null));
    });
  }

  protected readonly topic = computed(() => findTopic(this.topicId()));
  protected readonly analysis = computed(() => findPhase3Analysis(this.topicId()));
  protected readonly artifact = computed(() => artifactsForTopic(this.topicId())[0]);
  protected readonly choice = computed(() => {
    const analysis = this.analysis();
    const selected = this.selectedOption();
    if (!analysis || selected === null) {
      return null;
    }
    return analysis.dilemmaOptions[selected];
  });

  protected selectOption(index: 0 | 1): void {
    this.selectedOption.set(index);
  }
}
