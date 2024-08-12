import {Component, inject} from '@angular/core';
import {DIALOG_DATA, DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-soundcloud-dialog',
  standalone: true,
  imports: [],
  templateUrl: './soundcloud-dialog.component.html',
  styleUrl: './soundcloud-dialog.component.scss'
})
export class SoundcloudDialogComponent {
  private dialog = inject(DialogRef);

  albumId = inject(DIALOG_DATA).albumId;

  close() {
    this.dialog.close();
  }
}
