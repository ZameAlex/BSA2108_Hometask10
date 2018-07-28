import { Component, OnInit } from '@angular/core';
import { Flight } from '../../../shared/models/flight';
import { FlightService } from '../../../shared/services/flight/flight.service';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {

    flight: Flight;
    id: number;
    isReadonly: boolean = true;
  
    constructor(private service: FlightService, private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.id = this.route.snapshot.params['id'];
      this.service.getFlightById(this.id).subscribe((data :Flight)=> this.flight = data);
    }
  
    deleteFlight() {
      this.service.deleteFlight(this.id).subscribe(result => console.log(result));
    }
  
    editFlight() {
      if (this.isReadonly == true) {
        this.isReadonly = false;
      }
    }
  
    updateFlight(id: number) {
      this.service.updateFlight(id, this.flight).subscribe(result => console.log(result));
      this.isReadonly = true;
    }
  

}
