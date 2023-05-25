import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { AppRoutingModule } from "src/app/app-routing.module";
import { SidebarIcons } from "../icons/icons.component";

@Component({
    standalone: true,
    imports: [CommonModule, AppRoutingModule, SidebarIcons],
    selector: 'app-sidebar-mobile',
    templateUrl: './mobile.component.html'
})
export class MobileSidebar {
    @Input() expanded: boolean = false
    @Input() menu: { title: string, path: string, icon: string }[] = []
}