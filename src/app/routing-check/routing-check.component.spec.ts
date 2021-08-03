import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingCheckComponent } from './routing-check.component';

describe('RoutingCheckComponent', () => {
  let component: RoutingCheckComponent;
  let fixture: ComponentFixture<RoutingCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
