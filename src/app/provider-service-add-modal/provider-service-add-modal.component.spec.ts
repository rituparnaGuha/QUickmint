import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderServiceAddModalComponent } from './provider-service-add-modal.component';

describe('ProviderServiceAddModalComponent', () => {
  let component: ProviderServiceAddModalComponent;
  let fixture: ComponentFixture<ProviderServiceAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderServiceAddModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderServiceAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
