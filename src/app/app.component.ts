import { Component } from '@angular/core';
import { ParentComponent } from './pages/parent/parent.component';

import { NavComponent } from './pages/nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [ParentComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
