import { ChangeDetectionStrategy, Component, HostListener, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TOPICS } from '../../data/topics.data';
import { ARTIFACTS } from '../../data/phase3.data';

export interface PresentationSlide {
  readonly id: number;
  readonly title: string;
  readonly speaker: string;
  readonly timeAllocated: string;
  readonly category: string;
  readonly keyTakeaways: readonly string[];
  readonly quote: string;
  readonly artifactReference?: string;
  readonly speakerNotes: readonly string[];
}

@Component({
  selector: 'app-presentation-mode',
  imports: [RouterLink],
  templateUrl: './presentation-mode.html',
  styleUrl: './presentation-mode.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresentationMode implements OnDestroy {
  protected readonly currentSlideIndex = signal<number>(0);
  protected readonly isNotesOpen = signal<boolean>(true);
  protected readonly isTimerRunning = signal<boolean>(false);
  protected readonly elapsedSeconds = signal<number>(0);

  private timerInterval: ReturnType<typeof setInterval> | null = null;

  protected readonly slides: readonly PresentationSlide[] = [
    {
      id: 1,
      category: 'Unit-5 Context & Orientation',
      title: 'Generative AI, Truth, Creativity & Global Ethical Order',
      speaker: 'Team Introduction (Co-Presented)',
      timeAllocated: '0:00 – 1:00 (60s)',
      quote: 'When AI changes everything, how should we live with its power?',
      keyTakeaways: [
        'Explores the ethical boundaries of generative AI across Truth, Creativity, Power, and Responsibility.',
        'Structured across 3 professor-approved Unit-5 topics, analyzed by 3 distinct student leads.',
        'Balances technological potential with human dignity, democratic integrity, and labor rights.',
      ],
      speakerNotes: [
        'Introduce the team members and state that this portfolio fulfills CIA-3 Component 2.',
        'Highlight our core thesis: GenAI is not just a software tool; it alters how human beings verify reality and attribute creative value.',
        'Outline the agenda: 3 core topics, 3 creative visual artifacts, and a multi-tiered governance blueprint.',
      ],
    },
    {
      id: 2,
      category: 'Topic 01 · Epistemic Truth',
      title: 'Synthetic Reality & Epistemic Risk: Beyond Seeing is Believing',
      speaker: 'Team Member 1 (Lead Analyst)',
      timeAllocated: '1:00 – 2:30 (90s)',
      quote: 'The ethical danger is not that everything is fake, but that nothing can be proven real.',
      artifactReference: 'Artifact 01: Epistemic Provenance Signal Placard',
      keyTakeaways: [
        'Diffusion & photorealistic synthesis sever the historical link between appearance and evidence.',
        'The primary threat is "Epistemic Resignation": public exhaustion leading to cynical disbelief of authentic evidence.',
        'Proposes C2PA cryptographic content credentials and institutional verification desks.',
      ],
      speakerNotes: [
        'Cite Fallis (2015) and Floridi (2020) on epistemic injustice and justified belief.',
        'Demonstrate Artifact 01: Why a visible provenance badge must replace subjective visual inspection.',
        'Highlight the Kantian argument: undisclosed synthetic media violates the audience’s epistemic autonomy.',
      ],
    },
    {
      id: 3,
      category: 'Topic 02 · Biometrics & Influence',
      title: 'Misinformation, Deepfakes & Persuasion: Weaponized Biometrics',
      speaker: 'Team Member 2 (Lead Analyst)',
      timeAllocated: '2:30 – 4:00 (90s)',
      quote: 'Zero-shot voice cloning turns interpersonal love and emergency into an exploit vector.',
      artifactReference: 'Artifact 02: Forensic Audio Warning Poster',
      keyTakeaways: [
        'Impersonation exploits cognitive panic and emotional urgency before verification can occur.',
        'The "Liar’s Dividend" (Chesney & Citron, 2019) enables real wrongdoers to escape blame by claiming authentic proof is fake.',
        'Enforces the Triple-Lock Verification Protocol: Cadence Triage, Out-of-band Callback, and Shared Secret Challenge.',
      ],
      speakerNotes: [
        'Explain how 3 seconds of audio can clone a family member or corporate leader.',
        'Walk through Artifact 02: Why behavioral awareness must pair with structural out-of-band verification.',
        'Argue from Consequentialism: the asymmetrical social catastrophe of fraud outweighs the novelty of voice generation apps.',
      ],
    },
    {
      id: 4,
      category: 'Topic 03 · Labor & Copyright',
      title: 'Authorship, Creativity & Intellectual Labor: The Value Dilemma',
      speaker: 'Team Member 3 (Lead Analyst)',
      timeAllocated: '4:00 – 5:30 (90s)',
      quote: 'Generative models do not create from nothing; they distill trillions of uncompensated human artistic hours.',
      artifactReference: 'Artifact 03: Authorship Spectrum & Contribution Flow',
      keyTakeaways: [
        'Mass scraping without consent or credit constitutes digital extractivism and artistic deskilling.',
        'Authorship is a spectrum: from prompting and iterative filtering to final civil and ethical liability.',
        'Moral agency is indivisible: a machine cannot hold copyright or be held legally liable—only human authors can.',
      ],
      speakerNotes: [
        'Reference UNESCO (2021) and Crawford’s Atlas of AI regarding labor displacement and corporate rent extraction.',
        'Present Artifact 03: The flow from training data to prompting to curatorial human editing and final accountability.',
        'Apply Rawlsian Distributive Justice: the benefits of AI efficiency must benefit the creative workers whose works made the models possible.',
      ],
    },
    {
      id: 5,
      category: 'Responsible AI Synthesis',
      title: 'Multi-Tiered Governance & The AI Verification Protocol',
      speaker: 'Team Co-Presentation',
      timeAllocated: '5:30 – 6:30 (60s)',
      quote: 'AI capability + human judgment + ethical awareness + verification = Responsible AI.',
      keyTakeaways: [
        'Technical: C2PA metadata manifests, latent watermarking, and forensic hash ledgers.',
        'Institutional: Newsroom media desks, university academic integrity guidelines, and out-of-band verification.',
        'Policy: Mandatory disclosure labels and strict liability for deceptive synthetic impersonation.',
      ],
      speakerNotes: [
        'Summarize the 7-step AI Verification Workflow from our Responsible AI page.',
        'Show how our team audited our own AI usage with explicit AI Provenance cards for every artifact.',
        'Emphasize that responsible AI is an active practice of human oversight, not a decorative checkbox.',
      ],
    },
    {
      id: 6,
      category: 'Conclusion & Defense',
      title: 'Team Reflection & Conclusion for Q&A',
      speaker: 'All Team Members',
      timeAllocated: '6:30 – 7:00 (30s)',
      quote: 'Human judgment remains the ultimate check on artificial capability.',
      keyTakeaways: [
        'Equal participation: all 3 members contributed research, artifact design, and analytical writeups.',
        '2–3 Page Ethical Analysis Document is formatted and available for formal submission.',
        'Ready for questions from the evaluation panel.',
      ],
      speakerNotes: [
        'Thank the professor and evaluators.',
        'State that the complete digital ethics portfolio, interactive ethics lab, and 2-3 page paper are live.',
        'Open the floor for questions regarding our frameworks, case studies, or artifact designs.',
      ],
    },
  ];

  @HostListener('window:keydown', ['$event'])
  protected handleKeyboardNavigation(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight' || event.key === 'Space') {
      this.nextSlide();
    } else if (event.key === 'ArrowLeft') {
      this.prevSlide();
    } else if (event.key.toLowerCase() === 'n') {
      this.toggleNotes();
    } else if (event.key.toLowerCase() === 'f') {
      this.toggleFullscreen();
    }
  }

  protected nextSlide(): void {
    if (this.currentSlideIndex() < this.slides.length - 1) {
      this.currentSlideIndex.update((i) => i + 1);
    }
  }

  protected prevSlide(): void {
    if (this.currentSlideIndex() > 0) {
      this.currentSlideIndex.update((i) => i - 1);
    }
  }

  protected goToSlide(index: number): void {
    if (index >= 0 && index < this.slides.length) {
      this.currentSlideIndex.set(index);
    }
  }

  protected toggleNotes(): void {
    this.isNotesOpen.update((v) => !v);
  }

  protected toggleTimer(): void {
    if (this.isTimerRunning()) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  }

  protected resetTimer(): void {
    this.stopTimer();
    this.elapsedSeconds.set(0);
  }

  private startTimer(): void {
    this.isTimerRunning.set(true);
    this.timerInterval = setInterval(() => {
      this.elapsedSeconds.update((s) => s + 1);
    }, 1000);
  }

  private stopTimer(): void {
    this.isTimerRunning.set(false);
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  protected formatTime(totalSeconds: number): string {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  protected get timerStatusClass(): string {
    const s = this.elapsedSeconds();
    if (s > 420) return 'timer-danger'; // > 7 mins
    if (s > 330) return 'timer-warning'; // > 5.5 mins
    return 'timer-normal';
  }

  protected toggleFullscreen(): void {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }
}
