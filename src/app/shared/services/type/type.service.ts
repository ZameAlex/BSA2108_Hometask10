import { Injectable } from '@angular/core';
import { Base_Url } from '../../config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Type } from '../../models/type';


@Injectable({
  providedIn: 'root'
})
export class TypeService {

  private url='types/';
  
  constructor(private http: HttpClient) { }

  getTypes(){

    return this.http.get<Type[]>(Base_Url + this.url);
  }

  getTypeById(id: number){
    return this.http.get<Type>(Base_Url + this.url+id);
  }

  createType(type: Type){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    let body = {
      model: type.model,
      places: type.places,
      speed: type.speed,
      maxHeight: type.maxHeight,
      maxMass: type.maxMass,
      fleightLength: type.fleightLength
    };
    return this.http.post<Type>(Base_Url + this.url, body, {
      headers
    });
  }

  updateType(id:number, type:Type){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    let body = {
      model: type.model,
      places: type.places,
      speed: type.speed,
      maxHeight: type.maxHeight,
      maxMass: type.maxMass,
      fleightLength: type.fleightLength
    };
    return this.http.post<Type>(Base_Url + this.url + id, body, {
      headers
    });
  }

  deleteType(id:number){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.delete(Base_Url + this.url + id, {
      headers
    });
  }
}
