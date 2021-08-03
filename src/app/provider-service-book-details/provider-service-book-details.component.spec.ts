import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderServiceBookDetailsComponent } from './provider-service-book-details.component';

describe('ProviderServiceBookDetailsComponent', () => {
  let component: ProviderServiceBookDetailsComponent;
  let fixture: ComponentFixture<ProviderServiceBookDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderServiceBookDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderServiceBookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
