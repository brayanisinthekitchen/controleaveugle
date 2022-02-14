import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpResultsDialogComponent } from './pop-up-results-dialog.component';

describe('PopUpResultsDialogComponent', () => {
  let component: PopUpResultsDialogComponent;
  let fixture: ComponentFixture<PopUpResultsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpResultsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpResultsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
