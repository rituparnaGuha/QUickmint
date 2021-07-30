import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryClassAComponent } from './sub-category-classA.component';

describe('SubCategoryClassAComponent', () => {
  let component: SubCategoryClassAComponent;
  let fixture: ComponentFixture<SubCategoryClassAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCategoryClassAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategoryClassAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
