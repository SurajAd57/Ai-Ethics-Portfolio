import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArtifactVisual } from '../../components/artifact-visual/artifact-visual';
import { ARTIFACTS } from '../../data/phase3.data';
import { findTopic } from '../../data/topics.data';
import { AiUsage } from '../../components/ai-usage/ai-usage';

@Component({
  selector: 'app-artifacts-gallery',
  imports: [RouterLink, ArtifactVisual, AiUsage],
  templateUrl: './artifacts-gallery.html',
  styleUrl: './artifacts-gallery.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArtifactsGallery {
  protected readonly items = ARTIFACTS.map((artifact) => ({
    artifact,
    topicTitle: findTopic(artifact.topicId)?.title ?? 'Topic',
  }));
}
