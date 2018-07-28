import { Component, OnInit } from '@angular/core';
import { Plane } from '../../../shared/models/plane';
import { PlaneService } from '../../../shared/services/plane/plane.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-plane-list',
  templateUrl: './plane-list.component.html',
  styleUrls: ['./plane-list.component.css']
})
export class PlaneListComponent implements OnInit {

  planes: Plane[]=[];

  isAdd: boolean = false;

  newPlane: Plane = {
    id: 0,
    name:'',
    created:'',
    expires:'',
    type:null
  };

  constructor(private service: PlaneService, private router: Router) { }

  ngOnInit() {
    this.service.getPlanes().subscribe((data: Plane[])=>
    this.planes=data);
  }

  createNewPlane() {
    this.isAdd = !this.isAdd;
  }

  addPlane(form) {
    debugger;
    if (form.valid) {
      this.service.createPlane(this.newPlane).subscribe(result => console.log(result));
      this.isAdd = false;
    } else {
      console.log("not valid");
    }
  }

  navigateToDetail(id: number) {
    this.router.navigate([`/planes/${id}`]);
  }

}
