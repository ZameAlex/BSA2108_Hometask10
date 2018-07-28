import { Component, OnInit } from '@angular/core';
import { Type } from '../../../shared/models/type';
import { TypeService } from '../../../shared/services/type/type.service';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-type-details',
  templateUrl: './type-details.component.html',
  styleUrls: ['./type-details.component.css']
})
export class TypeDetailsComponent implements OnInit {

   type: Type;
    id: number;
    isReadonly: boolean = true;
  
    constructor(private service: TypeService, private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.id = this.route.snapshot.params['id'];
      this.service.getTypeById(this.id).subscribe((data :Type)=> this.type = data);
    }
  
    deleteType() {
      this.service.deleteType(this.id).subscribe(result => console.log(result));
    }
  
    editType() {
      if (this.isReadonly == true) {
        this.isReadonly = false;
      }
    }
  
    updateType(id: number) {
      this.service.updateType(id, this.type).subscribe(result => console.log(result));
      this.isReadonly = true;
    }

}
