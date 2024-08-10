import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SplashComponent} from "../components/splash/splash.component";
import {AboutComponent} from "../components/about/about.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SplashComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dreameyes';
}
