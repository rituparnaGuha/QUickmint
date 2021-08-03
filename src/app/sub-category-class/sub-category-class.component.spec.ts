import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryClassComponent } from './sub-category-class.component';

describe('SubCategoryClassComponent', () => {
  let component: SubCategoryClassComponent;
  let fixture: ComponentFixture<SubCategoryClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCategoryClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategoryClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
