import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Calls } from '../../../../shared/calls';

@Component({
  selector: 'app-callnote',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './callnote.component.html',
  styleUrl: './callnote.component.css',
})
export class CallnoteComponent {
  show: boolean = false;
  showList(): void {
    this.show = !this.show;
  }

  @Input() data!: Calls;
}
