import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  template: `
    <div class="section-heading">
      <p class="eyebrow">{{ eyebrow() }}</p>
      <h2>{{ title() }}</h2>
      @if (description()) {
        <p class="description">{{ description() }}</p>
      }
    </div>
  `,
  styles: `
    :host { display: block; }
    .section-heading { max-width: 44rem; }
    .eyebrow { margin: 0 0 0.8rem; color: var(--accent); font-size: 0.68rem; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase; }
    h2 { margin: 0; color: var(--text); font-family: var(--font-display); font-size: var(--heading-section); font-weight: 500; letter-spacing: 0.01em; line-height: 1.02; text-transform: uppercase; }
    .description { margin: 1rem 0 0; color: var(--muted); font-size: 1rem; line-height: 1.7; }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeading {
  readonly eyebrow = input('Field notes');
  readonly title = input.required<string>();
  readonly description = input('');
}
