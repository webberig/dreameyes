import {Component, inject} from '@angular/core';
import {Dialog} from "@angular/cdk/dialog";
import {SoundcloudDialogComponent} from "../../components/soundcloud-dialog/soundcloud-dialog.component";

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [],
  templateUrl: './album.component.html',
  styleUrl: './album.component.scss'
})
export class AlbumComponent {
  dialog = inject(Dialog);

  openAlbum(albumId: string) {
    this.dialog.open(SoundcloudDialogComponent, {
      data: {albumId}
    });
  }
}
