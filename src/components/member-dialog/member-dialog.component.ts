import {Component, inject} from '@angular/core';
import {DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-member-dialog',
  standalone: true,
  imports: [],
  templateUrl: './member-dialog.component.html',
  styleUrl: './member-dialog.component.scss'
})
export class MemberDialogComponent {
  private dialog = inject(DialogRef);

  close() {
    this.dialog.close();
  }
}
