import { Component, Input, OnInit } from "@angular/core";
import { DesktopSidebar } from "./desktop/desktop.component";
import { DropdownComponent } from "../dropdown/dropdown.component";
import { MobileSidebar } from "./mobile/mobile.component";
import { AuthService } from "src/app/auth/auth.service";
import { Router } from "@angular/router";

@Component({
    standalone: true,
    imports: [DesktopSidebar, MobileSidebar, DropdownComponent],
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    expanded = false
    @Input() menu: { title: string, path: string, icon: string }[] = []

    profileItems: { title: string, onClick: () => void }[] = []

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit(): void {
        this.profileItems = [
            { title: 'Profile', onClick: () => this.router.navigate(['/settings']) },
            { title: 'Logout', onClick: () => this.authService.logout().subscribe() }
        ]
    }
}