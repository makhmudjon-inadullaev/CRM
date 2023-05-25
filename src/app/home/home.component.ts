import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html'
})
export class HomeComponent {
    elements = 
    [
        {
            title: 'Dashboard',
            path: '/',
            icon: 'dashboard'
        },
        {
            title: 'Team',
            path: 'team',
            icon: 'team'
        },
        {
            title: 'Projects',
            path: '/projects',
            icon: 'projects'
        },
        {
            title: 'Calendar',
            path: '/calendar',
            icon: 'calendar'
        },
        {
            title: 'Documents',
            path: '/documents',
            icon: 'documents'
        },
        {
            title: 'Reports',
            path: '/reports',
            icon: 'reports'
        },
        {
            title: 'Learning',
            path: '/learning',
            icon: 'learning'
        }
    ]
}