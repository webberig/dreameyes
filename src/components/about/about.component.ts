import {Component, inject} from '@angular/core';
import {Dialog} from "@angular/cdk/dialog";
import {MemberDialogComponent} from "../member-dialog/member-dialog.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  private dialog = inject(Dialog);

  openMember() {
    this.dialog.open(MemberDialogComponent)
  }
}
