import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { Artifact } from '../../data/phase3.model';

@Component({
  selector: 'app-artifact-visual',
  templateUrl: './artifact-visual.html',
  styleUrl: './artifact-visual.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArtifactVisual {
  readonly artifact = input.required<Artifact>();

  protected readonly isSimulatingCheck = signal<boolean>(false);
  protected readonly isCheckComplete = signal<boolean>(false);
  protected readonly showMetadata = signal<boolean>(false);
  protected readonly activeStep = signal<number>(1);

  protected runC2PACheck(): void {
    this.isSimulatingCheck.set(true);
    this.isCheckComplete.set(false);
    setTimeout(() => {
      this.isSimulatingCheck.set(false);
      this.isCheckComplete.set(true);
    }, 1200);
  }

  protected toggleMetadata(): void {
    this.showMetadata.update((v) => !v);
  }

  protected selectStep(step: number): void {
    this.activeStep.set(step);
  }
}
