import { CommonModule, JsonPipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule, JsonPipe],
    templateUrl: './reactive.component.html'
})
export class ReactiveFormsComponent implements OnInit {
    simpleFormGroup: FormGroup = {} as FormGroup;
    simpleFormResult = {}

    ngOnInit(): void {
        this.simpleFormGroup = new FormGroup({
            info: new FormGroup({
                name: new FormControl(null),
                email: new FormControl(null)
            }),
            passwords: new FormGroup({
                password: new FormControl(null),
                confirmPassword: new FormControl(null)
            }),
            hobbies: new FormArray([])
        })
    }

    get hobbies() {
        return (this.simpleFormGroup.get('hobbies') as FormArray).controls;
    }

    addAHobby() {
        (<FormArray>this.simpleFormGroup.get('hobbies')).push(new FormControl(null));
    }

    removeHobby(index: number) {
        (<FormArray>this.simpleFormGroup.get('hobbies')).removeAt(index);
    }

    handleSubmit() {
        this.simpleFormResult = this.simpleFormGroup.value || {}
    }

}