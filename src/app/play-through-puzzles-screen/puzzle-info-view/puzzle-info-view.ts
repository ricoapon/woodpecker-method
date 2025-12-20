import {Component, Input} from '@angular/core';
import {Puzzle} from '../../puzzle';
import {Chess} from 'chess.js';

@Component({
  selector: 'app-puzzle-info-view',
  imports: [],
  templateUrl: './puzzle-info-view.html',
  styleUrl: './puzzle-info-view.css',
  standalone: true
})
export class PuzzleInfoView {
  colorToMove = ""
  @Input()
  set puzzle(value: Puzzle) {
    this.initializeFromPuzzle(value);
  }

  initializeFromPuzzle(puzzle: Puzzle) {
    const chess = new Chess()
    chess.loadPgn(puzzle.pgn)
    while (chess.undo() != null) {
    }
    this.colorToMove = chess.turn() === 'w' ? "White" : "Black"
  }
}
