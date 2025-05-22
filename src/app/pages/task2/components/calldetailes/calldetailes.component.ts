import { Component, Input, input } from '@angular/core';
import { Calls } from '../../../../shared/calls';

@Component({
  selector: 'app-calldetailes',
  imports: [],
  templateUrl: './calldetailes.component.html',
  styleUrl: './calldetailes.component.css',
})
export class CalldetailesComponent {
  @Input() details!: Calls;
}
