import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, KeyValuePipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { RouterOutlet } from '@angular/router';
import { interval, map } from 'rxjs';
import { CustomPurePipe } from './core/pipes/custom-pure-pipe';
import { FilterPipe } from './core/pipes/custom-impure-pipe';

interface FormInterface {
  text: string 
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
