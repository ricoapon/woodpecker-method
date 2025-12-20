import {Component, signal} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';
import {User} from '@angular/fire/auth';
import {FirestoreService} from '../firestore/firestore.service';
import {getPuzzle} from '../puzzle-view/puzzle';
import {PuzzleView} from '../puzzle-view/puzzle-view';

@Component({
  selector: 'app-home',
  imports: [
    PuzzleView
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class Home {
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
