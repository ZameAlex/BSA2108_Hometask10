import { Component, OnInit } from '@angular/core';
import { Departure } from '../../../shared/models/departure';
import { DepartureService } from '../../../shared/services/departure/departure.service';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-departure-details',
  templateUrl: './departure-details.component.html',
  styleUrls: ['./departure-details.component.css']
})
export class DepartureDetailsComponent implements OnInit {

  departure: Departure;
  id: number;
  isReadonly: boolean = true;

  constructor(private service: DepartureService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.service.getDepartureById(this.id).subscribe((data :Departure)=> this.departure = data);
  }

  deleteDeparture() {
    this.service.deleteDeparture(this.id).subscribe(result => console.log(result));
  }

  editDeparture() {
    if (this.isReadonly == true) {
      this.isReadonly = false;
    }
  }

  updateDeparture(id: number) {
    this.service.updateDeparture(id, this.departure).subscribe(result => console.log(result));
    this.isReadonly = true;
  }

}
