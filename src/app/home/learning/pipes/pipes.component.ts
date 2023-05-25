import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    standalone: true,
    selector: 'app-learning-pipes',
    imports: [RouterModule],
    templateUrl: './pipes.component.html',
})
export class PipesComponent {
    title = "Pipes"
    description = "Pipes are a way to transform data in Angular templates. Pipes are used in interpolation and binding expressions with the pipe operator, |."
}