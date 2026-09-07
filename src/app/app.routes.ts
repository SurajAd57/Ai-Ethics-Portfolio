import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { TopicDetail } from './pages/topic-detail/topic-detail';
import { TopicsIndex } from './pages/topics-index/topics-index';
import { PortfolioPage } from './pages/portfolio-page/portfolio-page';
import { EthicsLab } from './pages/ethics-lab/ethics-lab';
import { LabEncounter } from './pages/lab-encounter/lab-encounter';
import { ArtifactsGallery } from './pages/artifacts-gallery/artifacts-gallery';
import { ArtifactDetail } from './pages/artifact-detail/artifact-detail';

export const routes: Routes = [
	{ path: '', component: Home, title: 'AI Ethics Portfolio' },
	{ path: 'topics', component: TopicsIndex, title: 'Topics | AI Ethics Portfolio' },
	{ path: 'topics/:id', component: TopicDetail, title: 'Question | AI Ethics Lab' },
	{ path: 'ethics-lab', component: EthicsLab, title: 'Ethics Lab | AI Ethics Portfolio' },
	{ path: 'ethics-lab/:id', component: LabEncounter, title: 'Encounter | Ethics Lab' },
	{ path: 'artifacts', component: ArtifactsGallery, title: 'Artifacts | AI Ethics Portfolio' },
	{ path: 'artifacts/:id', component: ArtifactDetail, title: 'Artifact | AI Ethics Portfolio' },
	{ path: 'responsible-ai', component: PortfolioPage, data: { pageKey: 'responsibleAi' }, title: 'Responsible AI | AI Ethics Portfolio' },
	{ path: 'reflection', component: PortfolioPage, data: { pageKey: 'reflection' }, title: 'Reflection | AI Ethics Portfolio' },
	{ path: '**', redirectTo: '' },
];
