import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    standalone: true,
    imports: [RouterModule],
    selector: 'app-learning-forms',
    templateUrl: './forms.component.html'
})
export class FormsCompoennt {
    title: string = 'Forms'
    description: string = 'Forms are used to collect data from the user. There are two types of forms in Angular: Template Driven and Reactive.'
}