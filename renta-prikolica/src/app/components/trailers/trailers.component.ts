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
      icon: 'assets/icons/trailer-small-blue.svg',
      name: 'Mala Prikolica',
      desc: 'Idealna za prevoz manjih tereta, nameštaja ili opreme. Laka za upravljanje i parkiranje.',
      nosivost: 'Do 550 kg',
      bruto:'Do 750 kg',
      dimenzije: '255 cm × 125 cm',
      features: ['Cerada', 'Rezervni točak', 'Tepih podloga', 'Carinska sajla'],
      price: '30€',
      popular: false,
      images: [
        'assets/trailers/mala-1.jpeg',
        'assets/trailers/mala-2.jpeg',
        'assets/trailers/mala-3.jpeg',
        'assets/trailers/mala-4.jpeg'
      ]
    },
    {
      icon: 'assets/icons/trailer-large-blue.svg',
      name: 'Velika Prikolica',
      desc: 'Svestrana prikolica za selidbe, prevoz manjih vozila i kabastog tereta. Najpopularniji izbor.',
      nosivost: 'Do 2000 kg',
      bruto:'Do 2500 kg',
      dimenzije: '300 cm × 180 cm',
      features: ['Cerada', 'Udarna ruda', 'Dve osovine' ,'Rampa za utovar'],
      price: '50€',
      popular: true,
      images: [
        'assets/trailers/velika-1.jpeg',
        'assets/trailers/velika-2.jpeg',
        'assets/trailers/velika-3.jpeg'
      ]
    },
    {
      icon: 'assets/icons/truck-tipper-blue.svg',
      name: 'Prevoz kamionom - kiper',
      desc: 'Pružamo uslugu kamionskog prevoza kiperom za rasuti i građevinski teret.',
      nosivost: 'Do 6.5 t',
      bruto:'Do 12 t',
      dimenzije: '400 cm x 240 cm',
      features: ['Cena: 1€ po kilometru', 'Prevoz rasutog tereta', 'Fleksibilan termin', 'Dolazak na adresu'],
      price: '1€',
      priceUnit: '/ km',
      popular: false,
      images: [
        'assets/trailers/kiper-1.jpeg',
        'assets/trailers/kiper-2.jpeg',
        'assets/trailers/kiper-3.jpeg'
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
