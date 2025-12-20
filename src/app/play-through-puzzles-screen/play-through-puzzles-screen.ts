import {Component, signal, ViewChild} from '@angular/core';
import {getPuzzle, totalNrOfPuzzles} from '../puzzle';
import {User} from '@angular/fire/auth';
import {FirestoreService} from '../firestore/firestore.service';
import {AuthService} from '../auth/auth.service';
import {PuzzleView} from './puzzle-view/puzzle-view';
import {HeaderView} from './header-view/header-view';
import {PuzzleInfoView} from './puzzle-info-view/puzzle-info-view';

@Component({
  selector: 'app-play-through-puzzles-screen',
  imports: [
    PuzzleView,
    HeaderView,
    PuzzleInfoView
  ],
  templateUrl: './play-through-puzzles-screen.html',
  styleUrl: './play-through-puzzles-screen.css',
  standalone: true
})
export class PlayThroughPuzzlesScreen {
  @ViewChild('puzzleInfoView') puzzleInfoView!: PuzzleInfoView;
  // TODO: not make it a signal? Or maybe start at starting chess board position?
  // Bit weird how the board starts with moving pieces instead of immediately showing the right board.
  currentPuzzle = signal(getPuzzle(1))
  user: User;

  constructor(private puzzleService: FirestoreService, private authService: AuthService) {
    puzzleService.getCurrentPuzzle().then(puzzleId => this.initializePuzzle(puzzleId))
    this.user = this.authService.currentUser()
  }

  onPuzzleCompleted() {
    this.puzzleInfoView.puzzleEnded = true
  }

  private initializePuzzle(puzzleId: number) {
    this.currentPuzzle.update(() => getPuzzle(puzzleId))
  }

  goToNextPuzzle() {
    if (this.currentPuzzle().id >= totalNrOfPuzzles()) {
      // Go back to 1 (puzzleId starts counting at 1).
      this.initializePuzzle(1)
      // TODO: error handling.
      this.puzzleService.setCurrentPuzzleToOne()
    } else {
      this.initializePuzzle(this.currentPuzzle().id + 1)
      this.puzzleService.incrementCurrentPuzzle()
    }

    this.puzzleInfoView.puzzleEnded = false
  }
}
