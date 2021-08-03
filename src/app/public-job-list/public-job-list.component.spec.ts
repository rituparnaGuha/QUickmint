import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicJobListComponent } from './public-job-list.component';

describe('PublicJobListComponent', () => {
  let component: PublicJobListComponent;
  let fixture: ComponentFixture<PublicJobListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicJobListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
