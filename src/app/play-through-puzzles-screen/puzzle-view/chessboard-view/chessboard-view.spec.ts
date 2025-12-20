import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessboardView } from './chessboard-view';

describe('ChessboardView', () => {
  let component: ChessboardView;
  let fixture: ComponentFixture<ChessboardView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChessboardView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChessboardView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
