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
  protected readonly selectedOption = signal<number | null>(null);

  protected selectOption(index: number): void {
    this.selectedOption.set(index);
  }
}
