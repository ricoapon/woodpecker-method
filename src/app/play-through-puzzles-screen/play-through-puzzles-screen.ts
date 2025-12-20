import {Component, signal} from '@angular/core';
import {getPuzzle} from '../puzzle';
import {User} from '@angular/fire/auth';
import {FirestoreService} from '../firestore/firestore.service';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';
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
  puzzle1 = getPuzzle(1)

  currentPuzzle = signal(0)
  user: User;

  constructor(private puzzleService: FirestoreService, private authService: AuthService, private router: Router) {
    puzzleService.getCurrentPuzzle().then(v => this.currentPuzzle.set(v))
    this.user = this.authService.currentUser()
  }

  increase() {
    this.currentPuzzle.update(v => v + 1)
    // TODO: error handling.
    this.puzzleService.incrementCurrentPuzzle()
  }

  logout() {
    this.authService.logout().then(() => this.router.navigate(['/login']))
  }
}
