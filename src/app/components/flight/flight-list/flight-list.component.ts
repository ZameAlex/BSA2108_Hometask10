import { Component, OnInit } from '@angular/core';
import { Flight } from '../../../shared/models/flight';
import { FlightService } from '../../../shared/services/flight/flight.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  flights: Flight[]=[];

  isAdd: boolean = false;

  newFlight: Flight = {
    id: 0,
    number:'',
    departurePoint:'',
    departureTime:'',
    destination:'',
    destinationTime:'',
    tickets:null
  };

  constructor(private service: FlightService, private router: Router) { }

  ngOnInit() {
    this.service.getFlights().subscribe((data: Flight[])=>
    this.flights=data);
  }

  createNewFlight() {
    this.isAdd = !this.isAdd;
  }

  addFlight(form) {
    debugger;
    if (form.valid) {
      this.service.createFlight(this.newFlight).subscribe(result => console.log(result));
      this.isAdd = false;
    } else {
      console.log("not valid");
    }
  }

  navigateToDetail(id: number) {
    this.router.navigate([`/flights/${id}`]);

  }
}
