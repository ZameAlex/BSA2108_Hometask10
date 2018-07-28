import { Component } from '@angular/core';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router){}

  goToCrews() {
    this.router.navigate(['/crews']);
  }

    goToDepartures() {
      this.router.navigate(['/departures']);
  }

  goToFlights() {
    this.router.navigate(['/flights']);
  }

  goToTickets() {
    this.router.navigate(['/tickets']);
  }

  goToPilots() {
    this.router.navigate(['/pilots']);
  }
  goToPlanes() {
      this.router.navigate(['/planes']);
  }

  goToTypes() {
      this.router.navigate(['/types']);
  }
  goToStewardesses() {
      this.router.navigate(['/stewardesses']);
  }
}
