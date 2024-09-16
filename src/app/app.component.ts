import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SplashComponent} from "../components/splash/splash.component";
import {AboutComponent} from "../components/about/about.component";
import {MusicComponent} from "../components/music/music.component";
import {ContactComponent} from "../components/contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SplashComponent, AboutComponent, MusicComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dreameyes';
}
