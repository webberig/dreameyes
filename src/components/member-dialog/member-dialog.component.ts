import {Component, inject} from '@angular/core';
import {DIALOG_DATA, DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-member-dialog',
  standalone: true,
  imports: [],
  templateUrl: './member-dialog.component.html',
  styleUrl: './member-dialog.component.scss'
})
export class MemberDialogComponent {
  private dialog = inject(DialogRef);

  member = inject(DIALOG_DATA).member

  close() {
    this.dialog.close();
  }
}
