import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { VERIFICATION_STEPS } from '../../data/phase4.data';

@Component({
  selector: 'app-ai-verification',
  templateUrl: './ai-verification.html',
  styleUrl: './ai-verification.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiVerification {
  protected readonly steps = VERIFICATION_STEPS;
  protected readonly selectedStep = signal(0);
  protected selectStep(index: number): void { this.selectedStep.set(index); }
}
