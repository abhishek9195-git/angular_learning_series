import { Component, signal } from '@angular/core';
import { form, FormField, maxLength, minLength, required } from '@angular/forms/signals';
import { RouterOutlet } from '@angular/router';

interface loginFormData {
  email: string 
  password: string 
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormField],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular_learning_series');

  loginFormModel = signal<loginFormData>({email: 'abc@xyz.com', password: 'test'})

  loginForm = form(this.loginFormModel, (form) => {
    required(form.email),
    minLength(form.email, 15),
    maxLength(form.email, 20),

    required(form.password),
    minLength(form.password, 8, {message: 'Password must be of atleast 8 chracters.'})
  })

  onSubmit(event: Event) {
    console.log('=====> Email');
    console.log(this.loginForm.email().errors());
    console.log(this.loginForm.email().getError('minLength')?.message);

    for(let e of this.loginForm.email().errors()) {
      console.log(e.kind)
    }

    console.log('=====> Password');
    console.log(this.loginForm.password().errors());
    console.log(this.loginForm.password().getError('minLength')?.message);


    event.preventDefault()
    event.stopPropagation()
  }
}
