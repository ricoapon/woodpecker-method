import {AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {Chessground} from '@lichess-org/chessground';
import {Config} from '@lichess-org/chessground/config';
import {Key} from '@lichess-org/chessground/types';
import {Chess, SQUARES} from 'chess.js'

@Component({
  selector: 'app-chessboard',
  imports: [],
  templateUrl: './chessboard.html',
  styleUrl: './chessboard.css',
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class Chessboard implements AfterViewInit {
  @ViewChild('boardContainer') boardEl!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    const chess = new Chess('1r1n1rk1/b1p1qppp/p2p1n2/4pP2/P3P3/2PPNB2/6PP/R1BQK2R w KQ - 0 16');
    const dests = new Map<Key, Key[]>();
    SQUARES.forEach(sq => {
      const moves = chess.moves({ square: sq, verbose: true });
      if (moves.length > 0) {
        dests.set(sq, moves.map(m => m.to));
      }
    });

    const config: Config = {
      fen: chess.fen(),
      orientation: 'white',
      draggable: {
        enabled: true
      },
      movable: {
        free: false,
        showDests: true,
        dests: dests
      },
    };

    // Create the board inside the container.
    Chessground(this.boardEl.nativeElement, config);
  }
}
