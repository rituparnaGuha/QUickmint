import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderFaqComponent } from './provider-faq.component';

describe('ProviderFaqComponent', () => {
  let component: ProviderFaqComponent;
  let fixture: ComponentFixture<ProviderFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
