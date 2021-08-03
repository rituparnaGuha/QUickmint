import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsForCalendarComponent } from './slots-for-calendar.component';

describe('SlotsForCalendarComponent', () => {
  let component: SlotsForCalendarComponent;
  let fixture: ComponentFixture<SlotsForCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotsForCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotsForCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
