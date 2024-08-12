import {Component, inject} from '@angular/core';
import {Dialog} from "@angular/cdk/dialog";
import {SoundcloudDialogComponent} from "../soundcloud-dialog/soundcloud-dialog.component";

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [],
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss'
})
export class MusicComponent {
  dialog = inject(Dialog);

  openAlbum(albumId: string) {
    this.dialog.open(SoundcloudDialogComponent, {
      data: {albumId}
    });
  }
}
