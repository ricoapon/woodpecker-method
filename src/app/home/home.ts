import {Component, signal} from '@angular/core';
import {AuthService} from '../login/auth.service';
import {Router} from '@angular/router';
import {User} from '@angular/fire/auth';
import {PuzzleFirestoreService} from '../firestore/puzzle.firestore.service';
import {Chessboard} from '../chessboard/chessboard';

@Component({
  selector: 'app-home',
  imports: [
    Chessboard
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class Home {
  currentPuzzle = signal(0)
  user: User;

  constructor(private puzzleService: PuzzleFirestoreService, private authService: AuthService, private router: Router) {
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
