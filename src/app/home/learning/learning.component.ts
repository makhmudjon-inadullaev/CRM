import { Component } from "@angular/core";
import { FormsCompoennt } from "./forms/forms.component";
import { RouterModule } from "@angular/router";

@Component({
    standalone: true,
    imports: [FormsCompoennt, RouterModule],
    templateUrl: './learning.component.html'
})
export class LearningCompoennt {}