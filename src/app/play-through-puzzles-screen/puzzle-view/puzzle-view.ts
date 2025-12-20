import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Chess} from 'chess.js';
import {ChessboardView} from './chessboard-view/chessboard-view';
import {Puzzle} from '../../puzzle';

@Component({
  selector: 'app-puzzle-view',
  imports: [
    ChessboardView
  ],
  templateUrl: './puzzle-view.html',
  styleUrl: './puzzle-view.css',
  standalone: true
})
export class PuzzleView implements AfterViewInit {
  @ViewChild('chessboard') chessboard!: ChessboardView;
  @ViewChild('boardParentDiv') boardParentDiv!: ElementRef;
  @Output() completed = new EventEmitter<void>()

  puzzleId = 0
  currentMove = -1
  solutionMoves: string[] = []
  chess: Chess = new Chess()

  @Input()
  set puzzle(value: Puzzle) {
    this.initializeFromPuzzle(value);
  }

  ngAfterViewInit() {
    this.chessboard.parentDiv = this.boardParentDiv;
    this.chessboard.onResize()
  }

  initializeFromPuzzle(puzzle: Puzzle) {
    this.puzzleId = puzzle.id

    // When loading a PGN, the board will fast-forward to the last position. This is not what we want to display.
    // We remember the moves from it, but reset to the initial position. Note that we cannot use chess.reset(), as this
    // resets to the actual starting position of chess. We want to return to the starting FEN in the PGN.
    this.chess.loadPgn(puzzle.pgn)
    this.solutionMoves = this.chess.history()
    while (this.chess.undo() != null) {
    }
    this.currentMove = 0
  }

  onPlayedMove(move: string) {
    const correctMove = this.solutionMoves[this.currentMove]

    // If the played move is not the right move, we need to undo it.
    if (correctMove !== move) {
      this.chessboard.undoLastMove()
    } else {
      const computerMove = this.solutionMoves[this.currentMove + 1]

      if (computerMove === undefined) {
        this.emitCompleted()
      } else {
        this.chessboard.playMove(computerMove)
        this.currentMove += 2

        // It could be that the PGN ends on a move for the opponent. Check this situation
        if (this.currentMove >= this.solutionMoves.length) {
          this.emitCompleted()
        }
      }
    }
  }

  emitCompleted() {
    this.chessboard.makeImmutable()
    this.completed.emit()
  }

  showHint() {
    const correctMove = this.solutionMoves[this.currentMove]
    this.chessboard.drawArrowForMove(correctMove)
  }
}
