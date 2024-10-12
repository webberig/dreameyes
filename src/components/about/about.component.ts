import {Component, ElementRef, inject, PLATFORM_ID} from '@angular/core';
import {Dialog} from "@angular/cdk/dialog";
import {MemberDialogComponent} from "../member-dialog/member-dialog.component";
import {isPlatformBrowser} from "@angular/common";
import {animationFrames, map} from "rxjs";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  private dialog = inject(Dialog);

  private element: HTMLElement = inject(ElementRef).nativeElement;

  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID))) {
      this.setupParallax();
    }
  }

  private setupParallax () {
    animationFrames().pipe(
      map(() => {
        const scrollY = this.element.getBoundingClientRect().top
        const elementHeight = this.element.clientHeight;
        const windowHeight = window.innerHeight;
        return (scrollY * -1) + ((windowHeight - elementHeight) / 2);
      })
    ).subscribe(scrollOffset => {
      this.element.style.setProperty('--scroll', scrollOffset + 'px');
    });
  }

  openMember(member: string) {
    this.dialog.open(MemberDialogComponent, {
      data: {
        member,
      }
    })
  }
}
