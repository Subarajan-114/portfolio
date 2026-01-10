import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-page',
  standalone: false,
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  sendEmail() {
    if (this.contactForm.valid) {
      const templateParams = {
        from_name: this.contactForm.value.name,
        from_email: this.contactForm.value.email,
        message: this.contactForm.value.message,
      };

      emailjs.send(
        'service_xrg06r5',      // Replace with EmailJS Service ID
        'template_7dwt1ba',     // Replace with EmailJS Template ID
        templateParams,
        'LESlm-02s-itr3lAh'       // Replace with EmailJS Public Key
      ).then(
      () => {
        Swal.fire('Success 🎉', 'Your email was sent successfully!', 'success');
        this.contactForm.reset();
      },
      (error) => {
        Swal.fire('Oops 😢', 'Failed to send email. Try again later.', 'error');
        console.error('EmailJS error:', error);
      }
    );
  }
}

}
