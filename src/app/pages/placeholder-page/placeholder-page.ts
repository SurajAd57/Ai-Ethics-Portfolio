import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-placeholder-page',
  imports: [RouterLink],
  templateUrl: './placeholder-page.html',
  styleUrl: './placeholder-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaceholderPage {
  private readonly route = inject(ActivatedRoute);
  protected readonly title = this.route.snapshot.data['title'] as string;
  protected readonly label = this.route.snapshot.data['label'] as string;
}
