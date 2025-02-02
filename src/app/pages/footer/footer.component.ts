import { TranslatePipe } from '@ngx-translate/core';
import { Idata } from './../../sheard/idata';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  footerData = input.required<Idata>();

  // @Input({ required: true }) footerData: Idata = {} as Idata;
}
