import { Component } from '@angular/core';
import { FilesComponent } from '../files/files.component';

@Component({
  selector: 'app-info',
  imports: [FilesComponent],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
})
export class InfoComponent {}
