import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
  photos = [
    {
      src: 'assets/photos/mala-1.jpeg',
      alt: '',
      caption: ''
    },
    {
      src: 'assets/photos/mala-2.jpeg',
      alt: '',
      caption: ''
    },
    {
      src: 'assets/photos/mala-3.jpeg',
      alt: '',
      caption: ''
    },
    {
      src: 'assets/photos/mala-4.jpeg',
      alt: '',
      caption: ''
    },
    {
      src: 'assets/photos/velika-1.jpeg',
      alt: '',
      caption: ''
    },
    {
      src: 'assets/photos/velika-2.jpeg',
      alt: '',
      caption: ''
    },
    {
      src: 'assets/photos/velika-3.jpeg',
      alt: '',
      caption: ''
    }
  ];

  lightboxSrc: string | null = null;
  lightboxAlt = '';

  openLightbox(src: string, alt: string): void {
    this.lightboxSrc = src;
    this.lightboxAlt = alt;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxSrc = null;
    this.lightboxAlt = '';
    document.body.style.overflow = '';
  }
}
