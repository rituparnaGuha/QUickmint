import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderFeedbackListComponent } from './provider-feedback-list.component';

describe('ProviderFeedbackListComponent', () => {
  let component: ProviderFeedbackListComponent;
  let fixture: ComponentFixture<ProviderFeedbackListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderFeedbackListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderFeedbackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
