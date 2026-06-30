import { Component } from "@angular/core";

@Component({
    selector: `app-message`,
    template: `
       <h4>This is a message component.</h4>
    `
})
export class MessageComponent {

    displayMessage() {
        console.log('Message Component')
    }
}