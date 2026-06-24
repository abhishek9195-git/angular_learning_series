import { Component, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

const emailValidatorFn: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const value = control.value as string

  if(!value.includes('@')) {
    return {invalidEmail: true}
  }
  return null
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  loginForm!: FormGroup;
  private readonly fb = inject(FormBuilder);

  constructor() {
    this.loginForm = this.fb.group({
      email: new FormControl('test', [emailValidatorFn]),
      password: new FormControl('')
    })
  }
  
  onSubmit() {
    console.log('==> this.loginForm', this.loginForm.get('email')?.errors);
  }

}
