import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SplashComponent} from "../components/splash/splash.component";
import {AboutComponent} from "../components/about/about.component";
import {MusicComponent} from "../components/music/music.component";
import {ContactComponent} from "../components/contact/contact.component";
import {NewsComponent} from "../components/news/news.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SplashComponent, AboutComponent, MusicComponent, ContactComponent, NewsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dreameyes';
}
