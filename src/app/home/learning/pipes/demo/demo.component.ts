import { UpperCasePipe, DatePipe, CommonModule, AsyncPipe } from "@angular/common";
import { Component } from "@angular/core";
import { FilterPipe } from "./filter.pipe";
import { FormsModule } from "@angular/forms";

@Component({
    standalone: true,
    imports: [CommonModule, FormsModule, UpperCasePipe, DatePipe, FilterPipe, AsyncPipe],
    templateUrl: './demo.component.html'
})
export class PipesDemoComponent {
    uppercasePipeDemo = 'demo name'

    datePipeDemo = new Date()

    filterPipeDemoFilter = ''
    filterPipeDemoArray = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'mango', 'pineapple', 'strawberry', 'blueberry', 'raspberry']

    asyncPipeDemo = new Promise((resolve) => {
        setTimeout(() => resolve('Async pipe completed'), 3000)
    })
}