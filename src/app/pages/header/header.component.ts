import { Component, HostListener, Input, viewChild } from '@angular/core';
import { Idata } from '../../sheard/idata';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input({ required: true }) dataHeader: Idata = {} as Idata;
  translatedData: any = {};
  constructor(private translate: TranslateService) {}

  show(showList: HTMLDivElement): void {
    showList.classList.remove('hidden');
  }
  hide(showList: HTMLDivElement): void {
    showList.classList.add('hidden');
  }
}
