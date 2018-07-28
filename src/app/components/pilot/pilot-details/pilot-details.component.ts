import { Component, OnInit } from '@angular/core';
import { Pilot } from '../../../shared/models/pilot';
import { PilotService } from '../../../shared/services/pilot/pilot.service';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-pilot-details',
  templateUrl: './pilot-details.component.html',
  styleUrls: ['./pilot-details.component.css']
})
export class PilotDetailsComponent implements OnInit {

    pilot: Pilot;
    id: number;
    isReadonly: boolean = true;
  
    constructor(private service: PilotService, private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.id = this.route.snapshot.params['id'];
      this.service.getPilotById(this.id).subscribe((data :Pilot)=> this.pilot = data);
    }
  
    deletePilot() {
      this.service.deletePilot(this.id).subscribe(result => console.log(result));
    }
  
    editPilot() {
      if (this.isReadonly == true) {
        this.isReadonly = false;
      }
    }
  
    updatePilot(id: number) {
      this.service.updatePilot(id, this.pilot).subscribe(result => console.log(result));
      this.isReadonly = true;
    }

}
