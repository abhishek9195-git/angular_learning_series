import { Component, effect, ElementRef, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./components/child/child";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  childRef = viewChild(ChildComponent)
  h1Ref = viewChild('h1_ref')
  
  constructor() {
    effect(() => {
      const h1_element = (this.h1Ref() as ElementRef).nativeElement.innerText
      console.log(h1_element)
    })
  }

  sayHi() {
    this.childRef()?.sayHi()
  }
}
