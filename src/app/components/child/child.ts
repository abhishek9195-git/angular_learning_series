import { Component } from "@angular/core";

@Component({
    selector: `app-child`,
    template: `
        <h1>Child component</h1>
    `,
    styles: ``
})
export class ChildComponent {

    sayHi() {
        console.log('Child says Hi.')
    }
}