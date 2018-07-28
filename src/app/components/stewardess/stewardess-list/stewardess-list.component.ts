import { Component, OnInit } from '@angular/core';
import { Stewardess } from '../../../shared/models/stewardess';
import { StewardessService } from '../../../shared/services/stewardess/stewardess.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-stewardess-list',
  templateUrl: './stewardess-list.component.html',
  styleUrls: ['./stewardess-list.component.css']
})
export class StewardessListComponent implements OnInit {

  stewardesses: Stewardess[]=[];

  isAdd: boolean = false;

  newStewardess: Stewardess = {
    id: 0,
    firstName:'',
    lastName:'',
    birthday:'',
  };

  constructor(private service: StewardessService, private router: Router) { }

  ngOnInit() {
    this.service.getStewardesss().subscribe((data: Stewardess[])=>
    this.stewardesses=data);
  }

  createNewStewardess() {
    this.isAdd = !this.isAdd;
  }

  addStewardess(form) {
    debugger;
    if (form.valid) {
      this.service.createStewardess(this.newStewardess).subscribe(result => console.log(result));
      this.isAdd = false;
    } else {
      console.log("not valid");
    }
  }

  navigateToDetail(id: number) {
    this.router.navigate([`/stewardesses/${id}`]);
  }

}
