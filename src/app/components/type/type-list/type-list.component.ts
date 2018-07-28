import { Component, OnInit } from '@angular/core';
import { TypeService } from '../../../shared/services/type/type.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { Type } from '../../../shared/models/type';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {

  types: Type[]=[];

  isAdd: boolean = false;

  newType: Type = {
    id: 0,
    fleightLength:0,
    maxHeight:0,
    maxMass:0,
    model:'',
    places:0,
    speed:0
  };

  constructor(private service: TypeService, private router: Router) { }

  ngOnInit() {
    this.service.getTypes().subscribe((data: Type[])=>
    this.types=data);
  }

  createNewType() {
    this.isAdd = !this.isAdd;
  }

  addType(form) {
    debugger;
    if (form.valid) {
      this.service.createType(this.newType).subscribe(result => console.log(result));
      this.isAdd = false;
    } else {
      console.log("not valid");
    }
  }

  navigateToDetail(id: number) {
    this.router.navigate([`/types/${id}`]);
  }

}
