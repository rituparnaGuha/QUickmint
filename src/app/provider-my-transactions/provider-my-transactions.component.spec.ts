import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderMyTransactionsComponent } from './provider-my-transactions.component';

describe('ProviderMyTransactionsComponent', () => {
  let component: ProviderMyTransactionsComponent;
  let fixture: ComponentFixture<ProviderMyTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderMyTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderMyTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
