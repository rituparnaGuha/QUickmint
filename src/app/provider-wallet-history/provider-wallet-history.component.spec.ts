import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderWalletHistoryComponent } from './provider-wallet-history.component';

describe('ProviderWalletHistoryComponent', () => {
  let component: ProviderWalletHistoryComponent;
  let fixture: ComponentFixture<ProviderWalletHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderWalletHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderWalletHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
