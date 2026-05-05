import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactInfo = [
    { icon: '📞', label: 'Telefon', value: '+381 62 72 73 43', href: 'tel:+38162727343', isLink: true },
    { icon: '📧', label: 'Email', value: 'lakimar27@gmail.com', href: 'mailto:lakimar27@gmail.com', isLink: true },
    { icon: '📍', label: 'Lokacija', value: 'Buljane, Paraćin', isLink: false },
    { icon: '🕐', label: 'Radno Vreme', value: 'Pon–Ned: 07:00–22:00', isLink: false }
  ];

  constructor() {
   
  }
}
