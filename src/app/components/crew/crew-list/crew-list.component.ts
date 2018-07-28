import { Component, OnInit } from '@angular/core';
import { Crew } from '../../../shared/models/crew';
import { CrewService } from '../../../shared/services/crew/crew.service';
import { Router } from '../../../../../node_modules/@angular/router';


@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.css']
})
export class CrewListComponent implements OnInit {

  crews: Crew[]=[];

  isAdd: boolean = false;

  newCrew: Crew = {
    id: 0,
    pilot: null,
    stewardess: []
  };

  constructor(private service: CrewService, private router: Router) { }

  ngOnInit() {
    this.service.getCrews().subscribe((data: Crew[])=>
    this.crews=data);
  }

  createNewCrew() {
    this.isAdd = !this.isAdd;
  }

  addCrew(form) {
    if (form.valid) {
      this.service.createCrew(this.newCrew).subscribe(result => console.log(result));
      this.isAdd = false;
    } else {
      console.log("not valid");
    }
  }

  navigateToDetail(id: number) {
    this.router.navigate([`/crews/${id}`]);

  }

}
