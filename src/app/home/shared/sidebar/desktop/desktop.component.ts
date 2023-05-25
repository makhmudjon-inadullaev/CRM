import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { SidebarIcons } from "../icons/icons.component";
import { AppRoutingModule } from "src/app/app-routing.module";

@Component({
    standalone: true,
    imports: [CommonModule, SidebarIcons, AppRoutingModule],
    selector: 'app-sidebar-desktop',
    templateUrl: './desktop.component.html'
})
export class DesktopSidebar {
    @Input() menu: { title: string, path: string, icon: string }[] = []
}