import { Component, signal } from "@angular/core";
import { form, FormField } from "@angular/forms/signals";
import { FilterPipe } from "../core/pipes/custom-impure-pipe";

interface IForm {
    searchTerm: string
}

@Component({
    selector: `app-home`,
    templateUrl: `./home.html`,
    styleUrl: `./home.scss`,
    imports: [FilterPipe, FormField]
})
export class HomeComponent {

    fruits = ['apple', 'banana', 'orange', 'grapes', 'strawberry']
    _search_form_model = signal<IForm>({searchTerm: ''})

    searchForm = form(this._search_form_model)


}