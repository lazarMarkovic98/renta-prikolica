import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.scss']
})
export class TrailersComponent implements AfterViewInit {
  @ViewChildren('animCard') cards!: QueryList<ElementRef>;

  trailers = [
    {
      icon: '📦',
      name: 'Mala Prikolica',
      desc: 'Idealna za prevoz manjih tereta, nameštaja ili opreme. Laka za upravljanje i parkiranje.',
      nosivost: 'Do 500 kg',
      dimenzije: '2.5m × 1.3m',
      features: ['Zaključavanje', 'LED svetla', 'Rezervni točak', 'Gumena podloga'],
      price: '25€',
      popular: false
    },
    {
      icon: '🚛',
      name: 'Srednja Prikolica',
      desc: 'Svestrana prikolica za selidbe, prevoz vozila ili veće terete. Najpopularniji izbor.',
      nosivost: 'Do 1.200 kg',
      dimenzije: '3.5m × 1.8m',
      features: ['Zaključavanje', 'LED svetla', 'Rezervni točak', 'Rampa za utovar', 'Cerada'],
      price: '40€',
      popular: true
    },
    {
      icon: '🏗️',
      name: 'Velika Prikolica',
      desc: 'Profesionalna prikolica za teška vozila, građevinski materijal ili industrijske potrebe.',
      nosivost: 'Do 3.500 kg',
      dimenzije: '5.0m × 2.2m',
      features: ['Zaključavanje', 'LED svetla', 'Hidraulična rampa', 'Cerada', 'Bočna vrata'],
      price: '65€',
      popular: false
    },
    {
      icon: '🚗',
      name: 'Prikolica za Automobile',
      desc: 'Specijalna prikolica za transport automobila i motocikala. Opremljena fiksnim vezovima.',
      nosivost: 'Do 2.000 kg',
      dimenzije: '4.5m × 2.0m',
      features: ['Fiksni vezovi', 'LED svetla', 'Niska rampa', 'Anti-klizna površina', 'Zaštita točkova'],
      price: '55€',
      popular: false
    }
  ];

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
}
