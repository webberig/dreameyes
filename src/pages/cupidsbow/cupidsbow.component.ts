import { Component } from '@angular/core';
import {AlbumComponent} from "../../components/album/album.component";

@Component({
  selector: 'app-cupidsbow',
  standalone: true,
  imports: [
    AlbumComponent,
  ],
  templateUrl: './cupidsbow.component.html',
  styleUrl: './cupidsbow.component.scss'
})
export class CupidsbowComponent {

}
