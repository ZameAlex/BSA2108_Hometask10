import { Component, OnInit } from '@angular/core';
import { Stewardess } from '../../../shared/models/stewardess';
import { StewardessService } from '../../../shared/services/stewardess/stewardess.service';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-stewardess-details',
  templateUrl: './stewardess-details.component.html',
  styleUrls: ['./stewardess-details.component.css']
})
export class StewardessDetailsComponent implements OnInit {

  stewardess: Stewardess;
  id: number;
  isReadonly: boolean = true;

  constructor(private service: StewardessService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.service.getStewardessById(this.id).subscribe((data :Stewardess)=> this.stewardess = data);
  }

  deleteStewardess() {
    this.service.deleteStewardess(this.id).subscribe(result => console.log(result));
  }

  editStewardess() {
    if (this.isReadonly == true) {
      this.isReadonly = false;
    }
  }

  updateStewardess(id: number) {
    this.service.updateStewardess(id, this.stewardess).subscribe(result => console.log(result));
    this.isReadonly = true;
  }
}
