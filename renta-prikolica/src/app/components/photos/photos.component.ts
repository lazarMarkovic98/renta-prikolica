import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
  photos = [
    {
      src: 'assets/photos/photo-1.svg',
      alt: 'Prikolica na putu u inostranstvu',
      caption: 'Na evropskim putevima'
    },
    {
      src: 'assets/photos/photo-2.svg',
      alt: 'Prikolica napunjena teretom',
      caption: 'Siguran prevoz tereta'
    },
    {
      src: 'assets/photos/photo-3.svg',
      alt: 'Zadovoljan korisnik sa priklolicom',
      caption: 'Zadovoljni korisnici'
    },
    {
      src: 'assets/photos/photo-4.svg',
      alt: 'Prikolica tokom selidbe',
      caption: 'Selidba bez stresa'
    },
    {
      src: 'assets/photos/photo-5.svg',
      alt: 'Prikolica sa motorom',
      caption: 'Prevoz vozila'
    },
    {
      src: 'assets/photos/photo-6.svg',
      alt: 'Prikolica na planini',
      caption: 'Uvek na cilju'
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
