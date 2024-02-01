import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-appareils',
  templateUrl: './appareils.page.html',
  styleUrls: ['./appareils.page.scss'],
})
export class AppareilsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToSingleAppareil(type: string) {
    // Naviguer vers la page single-appareil avec le type d'appareil en tant que paramètre
    this.router.navigate(['/single-appareil', type]);
  }
  navigateWithParams(deviceName: string) {
    // Using queryParams to pass data
    const navigationExtras: NavigationExtras = {
      queryParams: { name: deviceName }
    };

    this.router.navigate(['/single-appareil'], navigationExtras);
  }

  navigateWithState(deviceName: string) {
    // Using state to pass data
    const navigationExtras: NavigationExtras = {
      state: { name: deviceName }
    };

    this.router.navigate(['/single-appareil'], navigationExtras);
  }
}
