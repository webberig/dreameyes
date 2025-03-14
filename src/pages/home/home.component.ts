import { Component } from '@angular/core';
import {AboutComponent} from "../../components/about/about.component";
import {ContactComponent} from "../../components/contact/contact.component";
import {MusicComponent} from "../../components/music/music.component";
import {NewsComponent} from "../../components/news/news.component";
import {SplashComponent} from "../../components/splash/splash.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutComponent,
    ContactComponent,
    MusicComponent,
    NewsComponent,
    SplashComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
