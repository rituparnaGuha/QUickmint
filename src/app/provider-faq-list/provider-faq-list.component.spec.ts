import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderFaqListComponent } from './provider-faq-list.component';

describe('ProviderFaqListComponent', () => {
  let component: ProviderFaqListComponent;
  let fixture: ComponentFixture<ProviderFaqListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderFaqListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderFaqListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
