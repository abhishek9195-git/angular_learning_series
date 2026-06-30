import { JsonPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'user-dashboard',
    template: `
    <h1>
        Welcome to user dashboard, {{data['firstName']}}
    </h1>
    `,
    styles: []
})
export class UserDashboardComponent {

    private route = inject(ActivatedRoute)
    data = this.route.snapshot.data['data']


}