import { Component, contentChild, effect, ElementRef } from "@angular/core";
import { MessageComponent } from "../../core/components/message/message";

@Component({
    selector: `app-child`,
    template: `
        <h4>Child Component</h4>
        <ng-content/>
    `
})
export class ChildComponent {

    paragraphContent = contentChild<ElementRef>('demo')
    messageComponentcontent = contentChild(MessageComponent)

    constructor() {
        effect(() => {
            const projectedParagraph = this.paragraphContent()?.nativeElement.innerText
            console.log(projectedParagraph);

            this.messageComponentcontent()?.displayMessage()
        })
    }
    
    sayHi() {
        console.log('Child says HI !')
    }
}