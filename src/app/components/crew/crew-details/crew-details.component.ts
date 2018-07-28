import { Component, OnInit } from '@angular/core';
import { CrewService } from '../../../shared/services/crew/crew.service';
import { Crew } from '../../../shared/models/crew';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-crew-details',
  templateUrl: './crew-details.component.html',
  styleUrls: ['./crew-details.component.css']
})
export class CrewDetailsComponent implements OnInit {

  crew: Crew;
  id: number;
  isReadonly: boolean = true;

  constructor(private service: CrewService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.service.getCrewById(this.id).subscribe((data :Crew)=> this.crew = data);
  }

  deleteCrew() {
    this.service.deleteCrew(this.id).subscribe(result => console.log(result));
  }

  editCrew() {
    if (this.isReadonly == true) {
      this.isReadonly = false;
    }
  }

  updateCrew(id: number) {
    this.service.updateCrew(id, this.crew).subscribe(result => console.log(result));
    this.isReadonly = true;
  }

}
