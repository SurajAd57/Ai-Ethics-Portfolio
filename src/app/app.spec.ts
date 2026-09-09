import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';
import { TOPICS, findTopic } from './data/topics.data';
import { ARTIFACTS, PHASE3_ANALYSES, findArtifact, findPhase3Analysis } from './data/phase3.data';

if (!TestBed.platform) {
  TestBed.initTestEnvironment(BrowserTestingModule, platformBrowserTesting());
}

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the application shell', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-navbar')).toBeTruthy();
    expect(compiled.querySelector('app-footer')).toBeTruthy();
  });
});

describe('Portfolio Data Integrity (3 Topics Scope)', () => {
  it('should contain exactly 3 topics', () => {
    expect(TOPICS.length).toBe(3);
    expect(TOPICS.map((t) => t.id)).toEqual([1, 2, 3]);
  });

  it('should find topics 1, 2, and 3 but return undefined for topic 4', () => {
    expect(findTopic(1)?.title).toBe('Synthetic Reality & Epistemic Risk');
    expect(findTopic(2)?.title).toBe('Misinformation, Deepfakes & Persuasion');
    expect(findTopic(3)?.title).toBe('Authorship, Creativity & Intellectual Labor');
    expect(findTopic(4)).toBeUndefined();
  });

  it('should have verified academic sources on all 3 topics', () => {
    for (const topic of TOPICS) {
      expect(topic.sources.length).toBeGreaterThanOrEqual(2);
      for (const source of topic.sources) {
        expect(source.status).toBe('verified');
        expect(source.url).toBeTruthy();
      }
    }
  });

  it('should have leadMember assigned for each of the 3 topics', () => {
    for (const topic of TOPICS) {
      expect(topic.leadMember).toBeDefined();
      expect(topic.leadMember?.name).toBeTruthy();
      expect(topic.leadMember?.role).toBeTruthy();
    }
  });

  it('should have comprehensive AI provenance documentation on all artifacts', () => {
    for (const artifact of ARTIFACTS) {
      expect(artifact.aiProvenance).toBeDefined();
      expect(artifact.aiProvenance?.promptExploration).toBeTruthy();
      expect(artifact.aiProvenance?.model).toBeTruthy();
      expect(artifact.aiProvenance?.verificationStep).toBeTruthy();
    }
  });

  it('should include routes for the 2-3 page Ethical Analysis and Presentation Mode deliverables', () => {
    const analysisRoute = routes.find((r) => r.path === 'analysis');
    const presentationRoute = routes.find((r) => r.path === 'presentation');
    expect(analysisRoute).toBeDefined();
    expect(presentationRoute).toBeDefined();
  });
});
