import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterClassAComponent } from './filter-classA.component';

describe('FilterAComponent', () => {
  let component: FilterClassAComponent;
  let fixture: ComponentFixture<FilterClassAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterClassAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterClassAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
