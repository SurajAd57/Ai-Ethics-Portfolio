import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { TopicStakeholder } from '../../data/topic.model';

@Component({
  selector: 'app-stakeholder-map',
  templateUrl: './stakeholder-map.html',
  styleUrl: './stakeholder-map.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StakeholderMap {
  readonly stakeholders = input.required<readonly TopicStakeholder[]>();
  protected readonly selected = signal(0);
  protected select(index: number): void { this.selected.set(index); }
}
