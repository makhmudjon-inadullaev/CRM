import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { AppRoutingModule } from "src/app/app-routing.module";

@Component({
    selector: 'app-sidebar-icon',
    standalone: true,
    imports: [CommonModule, AppRoutingModule],
    templateUrl: './icons.component.html'
})
export class SidebarIcons {
    @Input() icon: string = ''
    @Input() exact: boolean = false
}