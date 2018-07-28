import { Component, OnInit } from '@angular/core';
import { Departure } from '../../../shared/models/departure';
import { DepartureService } from '../../../shared/services/departure/departure.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-departure-list',
  templateUrl: './departure-list.component.html',
  styleUrls: ['./departure-list.component.css']
})
export class DepartureListComponent implements OnInit {

  departures: Departure[]=[];

  isAdd: boolean = false;

  newDeparture: Departure = {
    id: 0,
    crew:0,
    date:'',
    number:'',
    plane:0
  };

  constructor(private service: DepartureService, private router: Router) { }

  ngOnInit() {
    this.service.getDepartures().subscribe((data: Departure[])=>
    this.departures=data);
  }

  createNewDeparture() {
    this.isAdd = !this.isAdd;
  }

  addDeparture(form) {
    if (form.valid) {
      this.service.createDeparture(this.newDeparture).subscribe(result => console.log(result));
      this.isAdd = false;
    } else {
      console.log("not valid");
    }
  }

  navigateToDetail(id: number) {
    this.router.navigate([`/departures/${id}`]);

  }

}
