import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostANeedComponent } from './post-a-need.component';

describe('PostANeedComponent', () => {
  let component: PostANeedComponent;
  let fixture: ComponentFixture<PostANeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostANeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostANeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
