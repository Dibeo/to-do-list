import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  confirmNavigation(url: string) {
    Swal.fire({
      title: 'Attention !',
      text: 'Vous allez quitter la page. Voulez-vous continuer ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, continuer',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(url, '_blank');
      }
    });
  }
}
