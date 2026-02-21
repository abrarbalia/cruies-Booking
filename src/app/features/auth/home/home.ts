import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements AfterViewInit {

  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('experienceWrapper') experienceWrapper!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    const video = this.heroVideo.nativeElement;
    video.muted = true;

    setTimeout(() => {
      video.play().catch(() => {});
    }, 100);
  }

  scrollExperience(direction: number) {
    const container = this.experienceWrapper.nativeElement;

    container.scrollBy({
      left: direction * 350,
      behavior: 'smooth'
    });
  }
}