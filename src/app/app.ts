import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { DataService } from './core/services/data.service';
import { LoginData } from './core/models/model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  fb = inject(FormBuilder)
  dataService = inject(DataService)

  loginForm!: FormGroup

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: new FormControl('', []),
      password: new FormControl('', [])
    })
  }

  onSubmit() {
    console.log('==> loginForm', this.loginForm.value)
    const payload: LoginData = this.loginForm.value
    this.dataService.validate(payload).subscribe({
      next: (value) => {
        console.log('==> value', value)
      },
      error: (err: HttpErrorResponse) => {
        if('serverError' in err.error) {
        console.log('==> error', err.error.serverError);
        this.loginForm.get('password')?.setErrors({'serverError': err.error.serverError})
        }
      }
    })
  }
}
