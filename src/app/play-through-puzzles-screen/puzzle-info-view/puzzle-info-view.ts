import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Puzzle} from '../../puzzle';
import {Chess} from 'chess.js';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-puzzle-info-view',
  imports: [
    NgClass
  ],
  templateUrl: './puzzle-info-view.html',
  styleUrl: './puzzle-info-view.css',
  standalone: true
})
export class PuzzleInfoView {
  colorToMove = ""
  puzzleEnded = false
  _puzzle!: Puzzle
  @Output() goToNextPuzzle = new EventEmitter<void>()
  @Output() showHint = new EventEmitter<void>()

  @Input()
  set puzzle(value: Puzzle) {
    this._puzzle = value
    this.initializeFromPuzzle(value);
  }

  initializeFromPuzzle(puzzle: Puzzle) {
    const chess = new Chess()
    chess.loadPgn(puzzle.pgn)
    while (chess.undo() != null) {
    }
    this.colorToMove = chess.turn() === 'w' ? "White" : "Black"
  }

  openPuzzleFenInLichess() {
    const chess = new Chess()
    chess.loadPgn(this._puzzle.pgn)
    while (chess.undo() != null) {
    }
    let url = `https://lichess.org/analysis/${chess.fen()}`;
    if (chess.turn() === 'b') {
      url += "?pov=black"
    }
    window.open(url, '_blank')
  }
}
