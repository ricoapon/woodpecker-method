import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {Chessground} from '@lichess-org/chessground';
import {Config} from '@lichess-org/chessground/config';
import {Key} from '@lichess-org/chessground/types';
import {Chess, SQUARES} from 'chess.js'
import {Api} from '@lichess-org/chessground/api';

@Component({
  selector: 'app-chessboard-view',
  imports: [],
  templateUrl: './chessboard-view.html',
  styleUrl: './chessboard-view.css',
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class ChessboardView implements AfterViewInit {
  @ViewChild('boardContainer') boardEl!: ElementRef<HTMLDivElement>
  @Input() fen!: string
  @Output() playedMove = new EventEmitter<string>()
  chess!: Chess
  chessgroundInstance!: Api
  playerOrientation!: 'w' | 'b'

  ngAfterViewInit() {
    this.chess = new Chess(this.fen)
    this.playerOrientation = this.chess.turn()

    const config: Config = {
      fen: this.chess.fen(),
      orientation: this.playerOrientation === "w" ? "white" : "black",
      draggable: {
        enabled: true
      },
      movable: {
        free: false,
        showDests: true,
      },
      events: {
        move: (from: Key, to: Key) => this.onMove(from, to)
      }
    }

    // Create the board inside the container.
    this.chessgroundInstance = Chessground(this.boardEl.nativeElement, config)
    this.setPossibleMoves()
  }

  onMove(from: Key, to: Key) {
    const move = this.chess.move({
      from: from,
      to: to,
      promotion: 'q' // TODO: implement promotion pop-up.
    })
    this.setPossibleMoves()

    // Only emit the move if it was played by the player, not if it was automatically made by the 'playMove' method.
    if (move.color === this.playerOrientation) {
      this.playedMove.emit(move.san)
    }
  }

  setPossibleMoves() {
    const possibleMoves = new Map<Key, Key[]>()

    SQUARES.forEach(sq => {
      const moves = this.chess.moves({square: sq, verbose: true})
      if (moves.length > 0) {
        possibleMoves.set(sq, moves.map(m => m.to))
      }
    })

    this.chessgroundInstance.set({
      movable: {
        dests: possibleMoves
      }
    })
  }

  undoLastMove() {
    this.chess.undo()
    this.chessgroundInstance.set({
      fen: this.chess.fen(),
      lastMove: []
    })
    this.setPossibleMoves()
  }

  playMove(move: string) {
    // Convert the move into from-to coordinates without affecting the chess variable, which is going to be modified
    // using the onMove method.
    const moveObject = this.chess.move(move)
    this.chess.undo()

    this.chessgroundInstance.move(moveObject.from, moveObject.to)
  }
}
