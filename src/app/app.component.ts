import { Component, inject } from '@angular/core';
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
@Component({
  selector: 'app-root',
  imports: [Parent2Component, BounsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly myTranslateService = inject(MyTranslateService);
  showPar: boolean = false;
  show(): void {
    console.log('fdasadfs');

    this.showPar = !this.showPar;
  }
  lang(lang: string): void {
    this.myTranslateService.changeLange(lang);
  }

  login = new FormGroup(
    {
      name: new FormControl(null, [Validators.required]),
    },
    { updateOn: 'submit' }
  );

  submit() {
    console.log(this.login.value);
    this.login.reset();
  }
}
