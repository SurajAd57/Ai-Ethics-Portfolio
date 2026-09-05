import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PHASE3_ANALYSES } from '../../data/phase3.data';
import { findTopic } from '../../data/topics.data';

@Component({
  selector: 'app-ethics-lab',
  imports: [RouterLink],
  templateUrl: './ethics-lab.html',
  styleUrl: './ethics-lab.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EthicsLab {
  protected readonly encounters = PHASE3_ANALYSES.map((analysis) => {
    const topic = findTopic(analysis.topicId);
    return {
      analysis,
      number: topic?.number ?? String(analysis.topicId).padStart(2, '0'),
      title: topic?.title ?? 'Topic',
      subtitle: topic?.subtitle ?? '',
    };
  });
}
