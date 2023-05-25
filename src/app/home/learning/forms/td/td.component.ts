import { CommonModule, JsonPipe } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";

@Component({
    standalone: true,
    imports: [FormsModule, CommonModule, JsonPipe],
    templateUrl: './td.component.html',
    styleUrls: ['./td.component.css']
})
export class TemplateDrivenFormsComponent {
    @ViewChild('simpleForm') form: NgForm | undefined
    simpleFormResult = {}

    handleSubmit() {
        this.simpleFormResult = this.form?.value || {}
    }
}