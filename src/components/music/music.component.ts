import {Component, inject} from '@angular/core';
import {Dialog} from "@angular/cdk/dialog";
import {SoundcloudDialogComponent} from "../soundcloud-dialog/soundcloud-dialog.component";
import {AlbumComponent} from "../../components/album/album.component";

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [
    AlbumComponent
  ],
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss'
})
export class MusicComponent {

}
