import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingformComponent } from './onboardingform.component';

describe('OnboardingformComponent', () => {
  let component: OnboardingformComponent;
  let fixture: ComponentFixture<OnboardingformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardingformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
