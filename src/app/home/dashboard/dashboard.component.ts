import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { DropdownComponent } from "../shared/dropdown/dropdown.component";

@Component({
    standalone: true,
    imports: [CommonModule, DropdownComponent],
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
    clients: {
        name: string,
        logo: string,
        lastInvoice: string,
        amout: string,
        status: 'Paid' | 'Overdue'
    }[] = [
        {
            name: 'Github',
            logo: 'https://pngimg.com/d/github_PNG58.png',
            lastInvoice: 'January 22, 2023',
            amout: '$2,000.00',
            status: 'Overdue'
        },
        {
            name: 'Microsoft',
            logo: 'https://www.sccnewsbyte.co.uk/wp-content/uploads/2015/09/Microsoft-logo-m-box-880x660.png',
            lastInvoice: 'December 13, 2022',
            amout: '$14,000.00',
            status: 'Paid',
        },
        {
            name: 'Bing',
            logo: 'https://cdn.vox-cdn.com/thumbor/lw7eaG_tnqPDo-Jy5CVzQ22WyCY=/0x0:660x440/1400x1050/filters:focal(330x220:331x221)/cdn.vox-cdn.com/uploads/chorus_asset/file/21937385/binglogo.jpg',
            lastInvoice: 'January 23, 2023',
            amout: '$7,600.00',
            status: 'Paid'
        }
    ]
}