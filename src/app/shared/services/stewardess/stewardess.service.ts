import { Injectable } from '@angular/core';
import { Base_Url } from '../../config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stewardess } from '../../models/stewardess';

@Injectable({
  providedIn: 'root'
})
export class StewardessService {

  private url='tewardesss/';
  
  constructor(private http: HttpClient) { }

  getStewardesss(){

    return this.http.get<Stewardess[]>(Base_Url + this.url);
  }

  getStewardessById(id: number){
    return this.http.get<Stewardess>(Base_Url + this.url+id);
  }

  createStewardess(stewardess: Stewardess){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    let body = {
      firstName: stewardess.firstName,
      lastName: stewardess.lastName,
      birthday: stewardess.birthday
    };
    return this.http.post<Stewardess>(Base_Url + this.url, body, {
      headers
    });
  }

  updateStewardess(id:number, stewardess:Stewardess){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    let body = {
      firstName: stewardess.firstName,
      lastName: stewardess.lastName,
      birthday: stewardess.birthday
    };
    return this.http.post<Stewardess>(Base_Url + this.url + id, body, {
      headers
    });
  }

  deleteStewardess(id:number){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.delete(Base_Url + this.url + id, {
      headers
    });
  }
}
