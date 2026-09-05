import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

const CHECKS = [
  'Is the information factually verified?', 'Is the source/context reliable?', 'Could the output contain bias?', 'Could anyone be harmed by this output?', 'Does it respect privacy?', 'Is the content misleading or deceptive?', 'Is human review required?', 'Have we disclosed AI assistance where appropriate?', 'Are we using AI for a legitimate purpose?', 'Are we prepared to take responsibility for the final result?',
] as const;

@Component({
  selector: 'app-responsible-checklist',
  templateUrl: './responsible-checklist.html',
  styleUrl: './responsible-checklist.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResponsibleChecklist {
  protected readonly checks = CHECKS;
  protected readonly completed = signal<ReadonlySet<number>>(new Set());
  protected readonly completedCount = computed(() => this.completed().size);

  protected toggle(index: number): void {
    this.completed.update((current) => {
      const next = new Set(current);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  }
}
