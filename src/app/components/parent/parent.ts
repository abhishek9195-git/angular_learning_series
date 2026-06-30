import { Component, contentChild, effect } from "@angular/core";
import { ChildComponent } from "../child/child";
import { MessageComponent } from "../../core/components/message/message";

@Component({
    selector: `app-parent`,
    template: `
        <h1>Welcome to parent.</h1>

        <app-child>
            <p #demo>Message to child</p>
            <app-message />
        </app-child>

    `,
    imports: [ChildComponent, MessageComponent]
})
export class ParentComponent {

}