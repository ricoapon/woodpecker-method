import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleInfoView } from './puzzle-info-view';

describe('PuzzleInfoView', () => {
  let component: PuzzleInfoView;
  let fixture: ComponentFixture<PuzzleInfoView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuzzleInfoView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuzzleInfoView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
