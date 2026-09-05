import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-topic-placeholder',
  imports: [RouterLink],
  template: `
    <main class="topic-placeholder">
      <div>
        <p class="eyebrow">Question {{ topicId }}</p>
        <h1>{{ topicTitle }}</h1>
        <p>This topic will be developed in a later phase of the AI Ethics Lab exhibition.</p>
        <a routerLink="/topics" class="back-link">← Back to all questions</a>
      </div>
    </main>
  `,
  styles: `
    :host { display: block; }
    .topic-placeholder { min-height: 66vh; display: grid; place-items: center; padding: 5rem var(--gutter); background: radial-gradient(circle at 70% 20%, rgba(199, 168, 108, 0.1), transparent 28rem); }
    .topic-placeholder > div { max-width: 44rem; text-align: center; }
    .eyebrow, .back-link { color: var(--accent); font-size: 0.7rem; font-weight: 800; letter-spacing: 0.15em; text-transform: uppercase; }
    h1 { margin: 1rem 0; color: var(--text); font-family: var(--font-display); font-size: clamp(2.4rem, 6vw, 5rem); font-weight: 500; line-height: 0.98; text-transform: uppercase; }
    p:not(.eyebrow) { color: var(--muted); line-height: 1.7; }
    .back-link { display: inline-block; margin-top: 1.5rem; text-decoration: none; }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicPlaceholder {
  private readonly route = inject(ActivatedRoute);
  protected readonly topicId = this.route.snapshot.paramMap.get('id');
  protected readonly topicTitle = this.route.snapshot.data['title'] as string;
}
