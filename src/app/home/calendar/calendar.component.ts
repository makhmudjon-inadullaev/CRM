import { Component } from "@angular/core";
import { DropdownComponent } from "../shared/dropdown/dropdown.component";
import { CommonModule } from "@angular/common";

@Component({
    standalone: true,
    imports: [DropdownComponent, CommonModule],
    templateUrl: './calendar.component.html'
})
export class CalendarComponent {
    meetings: { avatar: string, title: string, time: string, location: string }[] = [
        {
            title: 'Leslie Alexander',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            time: 'January 10th, 2022 at 5:00 PM',
            location: 'Starbucks'
        },
        {
            title: 'Michael Foster',
            avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            time: 'January 12th, 2022 at 3:00 PM',
            location: 'Tim Hortons'
        },
        {
            title: 'Dries Vincent',
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            time: 'January 12th, 2022 at 5:00 PM',
            location: 'Costa Coffee at Braehead'
        },
        {
            title: 'Lindsay Walton',
            avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            time: 'January 14th, 2022 at 10:00 AM',
            location: 'Silverburn'
        },
        {
            title: 'Courtney Henry',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            time: 'January 14th, 2022 at 12:00 PM',
            location: 'The Glasgow Green'
        }
    ]
}