import { Component, OnInit } from '@angular/core';
import { Pilot } from '../../../shared/models/pilot';
import { PilotService } from '../../../shared/services/pilot/pilot.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-pilot-list',
  templateUrl: './pilot-list.component.html',
  styleUrls: ['./pilot-list.component.css']
})
export class PilotListComponent implements OnInit {

  pilots: Pilot[]=[];

  isAdd: boolean = false;

  newPilot: Pilot = {
    id: 0,
    firstName:'',
    lastName:'',
    birthday:'',
    experience:0
  };

  constructor(private service: PilotService, private router: Router) { }

  ngOnInit() {
    this.service.getPilots().subscribe((data: Pilot[])=>
    this.pilots=data);
  }

  createNewPilot() {
    this.isAdd = !this.isAdd;
  }

  addPilot(form) {
    debugger;
    if (form.valid) {
      this.service.createPilot(this.newPilot).subscribe(result => console.log(result));
      this.isAdd = false;
    } else {
      console.log("not valid");
    }
  }

  navigateToDetail(id: number) {
    this.router.navigate([`/pilots/${id}`]);
  }
}
