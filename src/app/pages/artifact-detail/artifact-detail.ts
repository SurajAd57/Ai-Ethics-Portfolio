import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { ArtifactVisual } from '../../components/artifact-visual/artifact-visual';
import { findArtifact } from '../../data/phase3.data';
import { findTopic } from '../../data/topics.data';

@Component({
  selector: 'app-artifact-detail',
  imports: [RouterLink, ArtifactVisual],
  templateUrl: './artifact-detail.html',
  styleUrl: './artifact-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArtifactDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly artifactId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('id') ?? '')),
    { initialValue: this.route.snapshot.paramMap.get('id') ?? '' },
  );

  protected readonly artifact = computed(() => findArtifact(this.artifactId()));
  protected readonly topic = computed(() => {
    const artifact = this.artifact();
    return artifact ? findTopic(artifact.topicId) : undefined;
  });
}
