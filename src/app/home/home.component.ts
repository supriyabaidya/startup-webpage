import {Component, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  // images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`); // NgbCarousel images
  images: string [] = ['../../assets/rsc1.jpg', '../../assets/tech_campus.jpg', '../../assets/rsc2.jpg']; // NgbCarousel images

  constructor(ngbConfig: NgbCarouselConfig) {
    // NgbCarouselConfig starts
    ngbConfig.interval = 2000;
    ngbConfig.keyboard = false;
    ngbConfig.pauseOnHover = false;
    ngbConfig.wrap = true;
    // NgbCarouselConfig ends
  }

  ngOnInit() {
  }

}
