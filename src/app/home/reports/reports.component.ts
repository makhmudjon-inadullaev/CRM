import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { DropdownComponent } from "../shared/dropdown/dropdown.component";

const randomColor = () => Math.floor(Math.random()*16777215).toString(16)

@Component({
    standalone: true,
    imports: [CommonModule, DropdownComponent],
    templateUrl: './reports.component.html'
})
export class ReportsComponent {
    projects: { title: string, members: number, color: string }[] = [
        {
            title: 'Graph API',
            members: 16,
            color: randomColor()
        },
        {
            title: 'Component Design',
            members: 12,
            color: randomColor()
        },
        {
            title: 'Templates',
            members: 16,
            color: randomColor()
        },
        {
            title: 'React Components',
            members: 8,
            color: randomColor()
        },
        {
            title: 'Vue Components',
            members: 24,
            color: randomColor()
        },
        {
            title: 'Angular Components',
            members: 11,
            color: randomColor()
        }
    ]
    users: { name: string, title: string, email: string, role: string }[] = [
        {
            name: 'Lindsay Walton',
            title: 'Front-end Developer',
            email: 'lindsay.walton@example.com',
            role: 'Member'
        },
        {
            name: 'Courtney Henry',
            title: 'Designer',
            email: 'courtney.henry@example.com',
            role: 'Admin'
        },
        {
            name: 'Tom Cook',
            title: 'Director of Product',
            email: 'tom.cook@example.com',
            role: 'Member'
        },
        {
            name: 'Whitney Francis',
            title: 'Copywriter',
            email: 'whitney.francis@example.com	',
            role: 'Admin'
        },
        {
            name: 'Leonard Krasner',
            title: 'Senior Designer',
            email: 'leonard.krasner@example.com	',
            role: 'Owner'
        },
        {
            name: 'Floyd Miles',
            title: 'Principal Designer',
            email: 'floyd.miles@example.com	',
            role: 'Member'
        }
    ]
}