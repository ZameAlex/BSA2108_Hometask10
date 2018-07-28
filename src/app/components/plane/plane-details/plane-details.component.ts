import { Component, OnInit } from '@angular/core';
import { Plane } from '../../../shared/models/plane';
import { PlaneService } from '../../../shared/services/plane/plane.service';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-plane-details',
  templateUrl: './plane-details.component.html',
  styleUrls: ['./plane-details.component.css']
})
export class PlaneDetailsComponent implements OnInit {
  
  plane: Plane;
  id: number;
  isReadonly: boolean = true;

  constructor(private service: PlaneService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.service.getPlaneById(this.id).subscribe((data :Plane)=> this.plane = data);
  }

  deletePlane() {
    this.service.deletePlane(this.id).subscribe(result => console.log(result));
  }

  editPlane() {
    if (this.isReadonly == true) {
      this.isReadonly = false;
    }
  }

  updatePlane(id: number) {
    this.service.updatePlane(id, this.plane).subscribe(result => console.log(result));
    this.isReadonly = true;
  }
}
