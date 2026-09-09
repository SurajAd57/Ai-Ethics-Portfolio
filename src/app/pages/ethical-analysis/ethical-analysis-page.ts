import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TOPICS } from '../../data/topics.data';
import { ARTIFACTS } from '../../data/phase3.data';

@Component({
  selector: 'app-ethical-analysis-page',
  imports: [RouterLink],
  templateUrl: './ethical-analysis-page.html',
  styleUrl: './ethical-analysis-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EthicalAnalysisPage {
  protected readonly topics = TOPICS;
  protected readonly artifacts = ARTIFACTS;
  protected readonly printTimestamp = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  protected readonly activeTab = signal<'document' | 'frameworks' | 'governance'>('document');

  protected printDocument(): void {
    window.print();
  }

  protected setTab(tab: 'document' | 'frameworks' | 'governance'): void {
    this.activeTab.set(tab);
  }
}
