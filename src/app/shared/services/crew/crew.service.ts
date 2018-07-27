import { Injectable } from '@angular/core';
import { Base_Url } from '../../config'
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Crew } from '../../models/crew';
import { mapToExpression } from '../../../../../node_modules/@angular/compiler/src/render3/view/util';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrewService {
  private url='crew/';

  constructor(private http: HttpClient) { }

  getCrews(){
    return this.http.get<Crew[]>(Base_Url + this.url);
  }

  getCrewById(id: number){
    return this.http.get<Crew>(Base_Url + this.url+id);
  }

  createCrew(crew: Crew){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    let body = {
      pilot: crew.pilot,
      stewardess: crew.stewardess
    };
    return this.http.post<Crew>(Base_Url + this.url, body, {
      headers
    });
  }

  updateCrew(id:number, crew:Crew){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    let body = {
      pilot: crew.pilot,
      stewardess: crew.stewardess
    };
    return this.http.post<Crew>(Base_Url + this.url + id, body, {
      headers
    });
  }

  deleteCrew(id:number){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.delete(Base_Url + this.url + id, {
      headers
    });
  }




}
