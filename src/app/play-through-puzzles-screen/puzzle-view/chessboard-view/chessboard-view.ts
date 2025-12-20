import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input, OnChanges,
  Output, SimpleChanges,
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
export class ChessboardView implements AfterViewInit, OnChanges {
  @ViewChild('boardContainer') boardEl!: ElementRef<HTMLDivElement>
  parentDiv!: ElementRef
  @Input() fen!: string
  @Output() playedMove = new EventEmitter<string>()
  chess!: Chess
  chessgroundInstance!: Api
  playerOrientation!: 'w' | 'b'

  @HostListener('window:resize')
  onResize() {
    this.resizeSquare()
  }

  // The board has no responsive functionality, so we resize it ourselves.
  private resizeSquare() {
    if (this.parentDiv === undefined) {
      return
    }
    const parentWidth = this.parentDiv.nativeElement.offsetWidth - 1
    this.boardEl.nativeElement.style.width = parentWidth + 'px'
    this.boardEl.nativeElement.style.height = parentWidth + 'px'
  }

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
    this.resizeSquare()
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['fen'] && !changes['fen'].firstChange) {
      this.updateBoardFromFen(changes['fen'].currentValue);
    }
  }

  private updateBoardFromFen(fen: string) {
    if (!this.chessgroundInstance) {
      return;
    }

    this.chess.load(fen);
    this.playerOrientation = this.chess.turn();

    this.chessgroundInstance.set({
      fen: this.chess.fen(),
      orientation: this.playerOrientation === 'w' ? 'white' : 'black',
      lastMove: []
    });

    this.setPossibleMoves();
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

  makeImmutable() {
    this.chessgroundInstance.set({
      viewOnly: true,
      drawable: {
        enabled: false
      }
    })
  }
}
