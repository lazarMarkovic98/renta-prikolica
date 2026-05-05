import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Trailer } from '../../models/trailer.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy, OnChanges {
  @Input() trailer!: Trailer;
  @Output() closed = new EventEmitter<void>();

  selectedImageIndex = 0;

  ngOnInit(): void {
    document.body.style.overflow = 'hidden';
  }

  ngOnChanges(): void {
    this.selectedImageIndex = 0;
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }

  close(): void {
    this.closed.emit();
  }

  prev(): void {
    const total = this.trailer.images.length;
    this.selectedImageIndex = (this.selectedImageIndex - 1 + total) % total;
  }

  next(): void {
    const total = this.trailer.images.length;
    this.selectedImageIndex = (this.selectedImageIndex + 1) % total;
  }

  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }
}
