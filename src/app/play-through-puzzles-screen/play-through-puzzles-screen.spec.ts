import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayThroughPuzzlesScreen } from './play-through-puzzles-screen';

describe('PlayThroughPuzzlesScreen', () => {
  let component: PlayThroughPuzzlesScreen;
  let fixture: ComponentFixture<PlayThroughPuzzlesScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayThroughPuzzlesScreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayThroughPuzzlesScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
