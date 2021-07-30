import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterClassListComponent } from './register-class-list.component';

describe('RegisterClassListComponent', () => {
  let component: RegisterClassListComponent;
  let fixture: ComponentFixture<RegisterClassListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterClassListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterClassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
