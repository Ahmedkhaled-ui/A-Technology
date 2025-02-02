import { Component, Input } from '@angular/core';
import { Idata } from '../../sheard/idata';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgFor } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-table',
  imports: [NgxPaginationModule, NgFor, TranslatePipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input() dataTable: Idata = {} as Idata;
  page: number = 1;

  numOfPages: number = 10;

  maxSize: number = 15;

  data: object[] = [
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
    {
      Amount: this.dataTable.Amount,
      globalMinutes: this.dataTable.globalMinutes,
      localMinutes: this.dataTable.localMinutes,
      responsibleForAppointment: this.dataTable.responsibleForAppointment,
      dateOfcancellationOfAppointment:
        this.dataTable.dateOfcancellationOfAppointment,
      appointmentDate: this.dataTable.appointmentDate,
    },
  ];
  count: number = this.data.length;
}
