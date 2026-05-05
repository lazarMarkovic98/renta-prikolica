import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements AfterViewInit {
  @ViewChildren('animEl') animElements!: QueryList<ElementRef>;

  features = [
    { icon: '✅', title: 'Registrovane Prikolice', desc: 'Sve naše prikolice su tehnički ispravne, registrovane i pogodne za carinjenje.' },
    { icon: '⏰', title: 'Dostupno 24/7', desc: 'Fleksibilno radno vreme – možete rezervisati u bilo koje doba dana.' },
    { icon: '💳', title: 'Povoljne Cene', desc: 'Transparentne cene bez skrivenih troškova. Plaćate samo ono što koristite.' },
    { icon: '🚚', title: 'Dostava na Adresu', desc: 'Besplatna dostava i preuzimanje prikolice na Vašoj adresi unutar grada.' },
    { icon: '📞', title: 'Stručna Podrška', desc: 'Tu smo da Vam pomognemo u odabiru prave prikolice.' }
  ];

  stats = [
    { value: '50+', label: 'Zadovoljnih Klijenata' },
    { value: '2', label: 'Tipa Prikolica' },
    { value: '5★', label: 'Prosečna Ocena' },
    { value: '10g', label: 'Iskustva' }
  ];

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    this.animElements.forEach(el => observer.observe(el.nativeElement));
  }
}
