import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnInit,
	AfterViewInit
  } from '@angular/core';
  
  declare var data: any;
  
  @Component({
	selector: 'app-portfolio',
	templateUrl: './portfolio.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./portfolio.component.css'],
	standalone: false
  })
  export class PortfolioComponent implements OnInit, AfterViewInit {
	public portfolioData = data['Portfolio'];
  
	constructor(private changeDetectorRef: ChangeDetectorRef) {
	  changeDetectorRef.detach();
	}
  
	ngOnInit(): void {
	  this.changeDetectorRef.detectChanges();
	}
  
	ngAfterViewInit(): void {
	  const videos = document.querySelectorAll('video');
	  videos.forEach((video: HTMLVideoElement) => {
		video.muted = true; // mute video to allow autoplay
		video.play().catch((e) => {
		  console.log('Autoplay blocked or failed:', e);
		});
	  });
	}
  }
  