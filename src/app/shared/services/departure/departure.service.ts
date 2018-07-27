import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../../../node_modules/@angular/common/http';
import { Departure } from '../../models/departure';
import { Base_Url } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class DepartureService {
  private url='departures/';

  constructor(private http: HttpClient) { }

  getCrews(){
    return this.http.get<Departure[]>(Base_Url + this.url);
  }

  getCrewById(id: number){
    return this.http.get<Departure>(Base_Url + this.url+id);
  }

  createCrew(departure: Departure){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    let body = {
      flight: departure.flight,
      date: departure.date,
      crew: departure.crew,
      plane: departure.plane
    };
    return this.http.post<Departure>(Base_Url + this.url, body, {
      headers
    });
  }

  updateCrew(id:number, departure:Departure){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    let body = {
      flight: departure.flight,
      date: departure.date,
      crew: departure.crew,
      plane: departure.plane
    };
    return this.http.post<Departure>(Base_Url + this.url + id, body, {
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
