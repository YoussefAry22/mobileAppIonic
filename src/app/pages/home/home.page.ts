import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  goToAppareils() {
    this.router.navigate(['/appareils']);
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }
}
