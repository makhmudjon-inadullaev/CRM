import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";
import { catchError, of } from "rxjs";

@Component({
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent {
    authError: string | null = null

    constructor(private authService: AuthService) {}

    handleSubmit(form: NgForm) {
        this.authService.login(form.value).pipe(catchError((err) => {
            this.authError = err.message
            return of(err.message)
        })).subscribe()
    }
}