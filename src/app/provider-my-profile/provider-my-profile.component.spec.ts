import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderMyProfileComponent } from './provider-my-profile.component';

describe('ProviderMyProfileComponent', () => {
  let component: ProviderMyProfileComponent;
  let fixture: ComponentFixture<ProviderMyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderMyProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderMyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
