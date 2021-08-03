import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderMyAccountComponent } from './provider-my-account.component';

describe('ProviderMyAccountComponent', () => {
  let component: ProviderMyAccountComponent;
  let fixture: ComponentFixture<ProviderMyAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderMyAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
