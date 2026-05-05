import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
  private readonly pageSize = 5;
  private visibleCount = this.pageSize;

  private readonly photoFiles = [
    'kiper-1.jpeg',
    'kiper-2.jpeg',
    'kiper-3.jpeg',
    'mala-1.jpeg',
    'mala-2.jpeg',
    'mala-3.jpeg',
    'mala-4.jpeg',
    'velika-1.jpeg',
    'velika-2.jpeg',
    'velika-3.jpeg'
  ];

  photos = this.photoFiles.map(file => ({
    src: `assets/photos/${file}`
  }));

  lightboxSrc: string | null = null;

  get visiblePhotos() {
    return this.photos.slice(0, this.visibleCount);
  }

  get canLoadMore(): boolean {
    return this.visibleCount < this.photos.length;
  }

  loadMore(): void {
    this.visibleCount = Math.min(this.visibleCount + this.pageSize, this.photos.length);
  }

  openLightbox(src: string): void {
    this.lightboxSrc = src;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxSrc = null;
    document.body.style.overflow = '';
  }
}
