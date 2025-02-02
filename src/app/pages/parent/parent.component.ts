import { Idata } from './../../sheard/idata';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TableComponent } from '../table/table.component';
import { FooterComponent } from '../footer/footer.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-parent',
  imports: [HeaderComponent, TableComponent, FooterComponent, TranslatePipe],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  data: Idata = {
    protocolName: 'PROTOCOL_NAME',
    date: 'DATE_VALUE',
    country: 'COUNTRY_NAME',
    countryImage: '/الاردن.png',
    currentAccount: 4000,
    currentClint: 'COMPANY_NAME',
    currentClintImage: '/download.png',
    currentAccountUse: 5000,
    numOfExtensions: 20,
    allCurrentUse: 4000,
    Amount: 5000,
    appointmentDate: '"20/5/2024"',
    dateOfcancellationOfAppointment: '31/10/2026',
    globalMinutes: 542,
    localMinutes: 150,
    responsibleForAppointment: 'RESPONSIBLE_PERSON',
  };
}
