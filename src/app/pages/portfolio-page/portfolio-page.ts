import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PORTFOLIO_PAGES, PortfolioPageData } from '../../data/portfolio.data';
import { TOPICS } from '../../data/topics.data';
import { AI_LIMITATIONS, AVOID_GUIDANCE, DO_GUIDANCE, RESPONSIBLE_PRINCIPLES } from '../../data/phase4.data';
import { AiUsage } from '../../components/ai-usage/ai-usage';
import { AiVerification } from '../../components/ai-verification/ai-verification';
import { ResponsibleChecklist } from '../../components/responsible-checklist/responsible-checklist';

@Component({
  selector: 'app-portfolio-page',
  imports: [RouterLink, AiUsage, AiVerification, ResponsibleChecklist],
  templateUrl: './portfolio-page.html',
  styleUrl: './portfolio-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioPage {
  private readonly route = inject(ActivatedRoute);
  private readonly pageKey = this.route.snapshot.data['pageKey'] as string;
  protected readonly page = computed<PortfolioPageData>(() => PORTFOLIO_PAGES[this.pageKey] ?? PORTFOLIO_PAGES['ethicsLab']);
  protected readonly topics = TOPICS;
  protected readonly principles = RESPONSIBLE_PRINCIPLES;
  protected readonly limitations = AI_LIMITATIONS;
  protected readonly doGuidance = DO_GUIDANCE;
  protected readonly avoidGuidance = AVOID_GUIDANCE;
  protected readonly isResponsibleAi = this.pageKey === 'responsibleAi';
  protected readonly isReflection = this.pageKey === 'reflection';
  protected readonly isReferences = this.pageKey === 'references';
}
