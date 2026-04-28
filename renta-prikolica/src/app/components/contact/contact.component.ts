import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  form: FormGroup;
  submitted = false;
  success = false;

  contactInfo = [
    { icon: '📞', label: 'Telefon', value: '+381 60 123 45 67', href: 'tel:+381601234567', isLink: true },
    { icon: '📧', label: 'Email', value: 'info@rentaprikolica.rs', href: 'mailto:info@rentaprikolica.rs', isLink: true },
    { icon: '📍', label: 'Lokacija', value: 'Beograd, Srbija', isLink: false },
    { icon: '🕐', label: 'Radno Vreme', value: 'Pon–Ned: 07:00–22:00', isLink: false }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern(/^(\+381|0)[0-9]{8,9}$/)]],
      email: ['', [Validators.required, Validators.email]],
      trailer: ['', Validators.required],
      dateFrom: ['', Validators.required],
      dateTo: ['', Validators.required],
      message: ['']
    });
  }

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched || this.submitted));
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.valid) {
      this.success = true;
    }
  }

  resetForm(): void {
    this.form.reset();
    this.submitted = false;
    this.success = false;
  }
}
