import { Component, EventEmitter, Output } from '@angular/core';
import { ClintComponent } from './components/clint/clint.component';
import { InfoComponent } from './components/info/info.component';
import { FilesComponent } from './components/files/files.component';

@Component({
  selector: 'app-bouns',
  imports: [ClintComponent, InfoComponent, FilesComponent],
  templateUrl: './bouns.component.html',
  styleUrl: './bouns.component.css',
})
export class BounsComponent {
  @Output() close = new EventEmitter<void>();

  handleClose() {
    this.close.emit();
  }
}
