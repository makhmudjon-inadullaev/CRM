import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    standalone: true,
    selector: 'app-learning-http',
    imports: [RouterModule],
    templateUrl: './http.component.html',
})
export class HttpComponent {
    title = 'HTTP'
    description = 'HTTP is a protocol that allows us to communicate with remote servers. Angular has a built-in HTTP client that allows us to communicate with remote servers using the HTTP protocol.'
}