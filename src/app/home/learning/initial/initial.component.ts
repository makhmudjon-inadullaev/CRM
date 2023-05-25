import { Component } from "@angular/core";
import { FormsCompoennt } from "../forms/forms.component";
import { PipesComponent } from "../pipes/pipes.component";
import { HttpComponent } from "../http/http.component";

@Component({
    standalone: true,
    imports: [FormsCompoennt, PipesComponent, HttpComponent],
    templateUrl: './initial.component.html'
})
export class LearningInitialComponent {}