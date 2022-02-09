import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWithAccountComponent } from './dashboard-with-account.component';

describe('DashboardWithAccountComponent', () => {
  let component: DashboardWithAccountComponent;
  let fixture: ComponentFixture<DashboardWithAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardWithAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardWithAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
