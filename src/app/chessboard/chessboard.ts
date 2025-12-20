import {AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';
import { Chessground } from '@lichess-org/chessground';
import {Config} from '@lichess-org/chessground/config';

@Component({
  selector: 'app-chessboard',
  imports: [],
  templateUrl: './chessboard.html',
  styleUrl: './chessboard.css',
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class Chessboard implements AfterViewInit  {
  @ViewChild('boardContainer') boardEl!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    const config: Config = {
      fen: 'start',
      orientation: 'white',
      draggable: {
        enabled: true
      }
    };

    // create the board inside the container
    Chessground(this.boardEl.nativeElement, config);
  }
}
