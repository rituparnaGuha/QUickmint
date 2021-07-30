import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderMyAnalysisComponent } from './provider-my-analysis.component';

describe('ProviderMyAnalysisComponent', () => {
  let component: ProviderMyAnalysisComponent;
  let fixture: ComponentFixture<ProviderMyAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderMyAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderMyAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
