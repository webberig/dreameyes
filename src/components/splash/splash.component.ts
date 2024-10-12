import {Component, ElementRef, HostListener, inject} from '@angular/core';

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [],
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.scss'
})
export class SplashComponent {

  private element: HTMLElement = inject(ElementRef).nativeElement;

  @HostListener('window:scroll', ['$event']) onScrollEvent() {
    this.element.style.setProperty('--scroll', window.scrollY + 'px')
  }

}
