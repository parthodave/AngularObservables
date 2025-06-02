import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-onboarding-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './onboardingform.component.html',  
  styleUrl: './onboardingform.component.css'
})
export class OnboardingformComponent {
  onboardingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.onboardingForm = this.fb.group({
      basicInfo: this.fb.group({
        fullName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      }),
      kycInfo: this.fb.group({
        pan: ['', [Validators.required, Validators.pattern(/[A-Z]{5}\d{4}[A-Z]{1}/)]],
        aadhaar: ['', [Validators.required, Validators.pattern(/^\d{12}$/)]],
      }),
      accountType: new FormControl('', Validators.required),
      nominees: this.fb.array([]),
    });
  }

  get nominees(): FormArray {
    return this.onboardingForm.get('nominees') as FormArray;
  }

  addNominee() {
    const nomineeGroup = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      relation: ['', Validators.required],
    });
    this.nominees.push(nomineeGroup);
  }

  removeNominee(index: number) {
    this.nominees.removeAt(index);
  }

  onSubmit() {
    if (this.onboardingForm.valid) {
      console.log('Form Submitted ✅', this.onboardingForm.value);
    } else {
      console.log('❌ Form is Invalid');
      this.onboardingForm.markAllAsTouched();
    }
  }
}
