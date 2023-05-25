import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html'
})
export class DropdownComponent {
    expanded = false
    @Input() items: { title: string, onClick?: () => void }[] = []

    handleClick(callBack?: () => void) {
        this.expanded = !this.expanded
        callBack?.()
    }
}