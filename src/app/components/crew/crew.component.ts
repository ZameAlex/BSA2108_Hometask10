import { Component, OnInit } from '@angular/core';
import { CrewService } from '../../shared/services/crew/crew.service';
import { Crew } from '../../shared/models/crew';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css'],
  providers:[CrewService]
})
export class CrewComponent implements OnInit {

  crews: Crew[]=[];

  constructor(private service: CrewService) { }

  ngOnInit() {
    this.service.getCrews().subscribe((data: Crew[])=>
    this.crews=data);
  }

}
