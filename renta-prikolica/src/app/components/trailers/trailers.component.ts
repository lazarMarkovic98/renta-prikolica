import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { Trailer } from '../../models/trailer.model';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.scss']
})
export class TrailersComponent implements AfterViewInit {
  @ViewChildren('animCard') cards!: QueryList<ElementRef>;

  trailers: Trailer[] = [
    {
      icon: '📦',
      name: 'Mala Prikolica',
      desc: 'Idealna za prevoz manjih tereta, nameštaja ili opreme. Laka za upravljanje i parkiranje.',
      nosivost: 'Do 500 kg',
      dimenzije: '2.5m × 1.3m',
      features: ['Cerada', 'Rezervni točak', 'Tepih podloga', 'Carinska sajla'],
      price: '25€',
      popular: false,
      images: [
        'assets/trailers/mala-1.svg',
        'assets/trailers/mala-2.svg',
        'assets/trailers/mala-3.svg'
      ]
    },
    {
      icon: '🚛',
      name: 'Velika Prikolica',
      desc: 'Svestrana prikolica za selidbe, prevoz manjih vozila i kabastog tereta. Najpopularniji izbor.',
      nosivost: 'Do 1.200 kg',
      dimenzije: '3.5m × 1.8m',
      features: ['Cerada', 'Udarna ruda', 'Dve osovine' ,'Rampa za utovar'],
      price: '35€',
      popular: true,
      images: [
        'assets/trailers/velika-1.svg',
        'assets/trailers/velika-2.svg',
        'assets/trailers/velika-3.svg'
      ]
    }
  ];

  selectedTrailer: Trailer | null = null;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    this.cards.forEach(card => observer.observe(card.nativeElement));
  }

  scrollToContact(): void {
    const el = document.getElementById('kontakt');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  openGallery(trailer: Trailer): void {
    this.selectedTrailer = trailer;
  }

  closeGallery(): void {
    this.selectedTrailer = null;
  }

  onReserveClick(event: Event): void {
    event.stopPropagation();
    this.scrollToContact();
  }
}
