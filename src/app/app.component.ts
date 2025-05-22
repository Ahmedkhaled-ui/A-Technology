import { Component, inject, signal } from '@angular/core';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

import { MyTranslateService } from './core/services/translate/my-translate.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { animation } from '@angular/animations';
import { Parent2Component } from './pages/task2/parent2/parent2.component';
import { BounsComponent } from './pages/bouns/bouns.component';
import { Child2Component } from './pages/task2/child2/child2.component';
@Component({
  selector: 'app-root',
  imports: [Parent2Component, BounsComponent, Child2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly myTranslateService = inject(MyTranslateService);
  showPopTicket: boolean = false;
  showPop: boolean = false;

  showCall(): void {
    this.showPop = true;
  }
  showTicket(): void {
    this.showPopTicket = true;
  }

  closePopup() {
    this.showPopTicket = false;
  }
  closePopupCall() {
    this.showPop = false;
  }
}
