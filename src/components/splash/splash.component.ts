import {Component, ElementRef, HostListener, inject, PLATFORM_ID} from '@angular/core';
import {animationFrames, map} from "rxjs";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [],
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.scss'
})
export class SplashComponent {

  private element: HTMLElement = inject(ElementRef).nativeElement;

  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID))) {
      this.setupParallax();
    }
  }

  private setupParallax () {
    animationFrames().pipe(
      map(() => window.scrollY)
    ).subscribe(scrollY => this.element.style.setProperty('--scroll', scrollY + 'px'));
  }
}
