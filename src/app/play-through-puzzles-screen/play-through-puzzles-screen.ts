import {Component, signal} from '@angular/core';
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
  currentPuzzleObject = signal(getPuzzle(1))
  user: User;

  constructor(private puzzleService: FirestoreService, private authService: AuthService) {
    puzzleService.getCurrentPuzzle().then(puzzleId => this.initializePuzzle(puzzleId))
    this.user = this.authService.currentUser()
  }

  onPuzzleCompleted() {
    if (this.currentPuzzleObject().id >= totalNrOfPuzzles()) {
      // Go back to 1 (puzzleId starts counting at 1).
      this.initializePuzzle(1)
      // TODO: error handling.
      this.puzzleService.setCurrentPuzzleToOne()
    } else {
      this.initializePuzzle(this.currentPuzzleObject().id + 1)
      this.puzzleService.incrementCurrentPuzzle()
    }
  }

  private initializePuzzle(puzzleId: number) {
    this.currentPuzzleObject.update(() => getPuzzle(puzzleId))
  }
}
