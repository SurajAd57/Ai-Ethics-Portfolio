import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Artifact } from '../../data/phase3.model';

@Component({
  selector: 'app-artifact-visual',
  templateUrl: './artifact-visual.html',
  styleUrl: './artifact-visual.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArtifactVisual {
  readonly artifact = input.required<Artifact>();
}
