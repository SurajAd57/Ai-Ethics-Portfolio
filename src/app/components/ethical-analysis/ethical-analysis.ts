import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { Phase3TopicAnalysis } from '../../data/phase3.model';

@Component({
  selector: 'app-ethical-analysis',
  templateUrl: './ethical-analysis.html',
  styleUrl: './ethical-analysis.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EthicalAnalysis {
  readonly analysis = input.required<Phase3TopicAnalysis>();
  protected readonly selectedOption = signal<0 | 1 | null>(null);

  protected selectOption(index: 0 | 1): void {
    this.selectedOption.set(index);
  }
}
