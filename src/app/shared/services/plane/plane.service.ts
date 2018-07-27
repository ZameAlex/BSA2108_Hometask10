import { Injectable } from '@angular/core';
import { Base_Url } from '../../config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Plane } from '../../models/plane';

@Injectable({
  providedIn: 'root'
})
export class PlaneService {

  private url='planes/';
  
  constructor(private http: HttpClient) { }

  getPlanes(){

    return this.http.get<Plane[]>(Base_Url + this.url);
  }

  getPlaneById(id: number){
    return this.http.get<Plane>(Base_Url + this.url+id);
  }

  createPlane(plane: Plane){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    let body = {
      name: plane.name,
      type: plane.type,
      created: plane.created,
      expires: plane.expires
    };
    return this.http.post<Plane>(Base_Url + this.url, body, {
      headers
    });
  }

  updatePlane(id:number, plane:Plane){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    let body = {
      name: plane.name,
      type: plane.type,
      created: plane.created,
      expires: plane.expires
    };
    return this.http.post<Plane>(Base_Url + this.url + id, body, {
      headers
    });
  }

  deletePlane(id:number){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.delete(Base_Url + this.url + id, {
      headers
    });
  }
}
