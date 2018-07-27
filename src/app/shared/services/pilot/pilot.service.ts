import { Injectable } from '@angular/core';
import { Pilot } from '../../models/pilot';
import { Base_Url } from '../../config';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PilotService {
    private url='pilots/';
  
    constructor(private http: HttpClient) { }
  
    getPilots(){

      return this.http.get<Pilot[]>(Base_Url + this.url);
    }
  
    getPilotById(id: number){
      return this.http.get<Pilot>(Base_Url + this.url+id);
    }
  
    createPilot(pilot: Pilot){
      const headers = new HttpHeaders().set('content-type', 'application/json');
      let body = {
        firstName: pilot.firstName,
        lastName: pilot.lastName,
        birthday: pilot.birthday,
        experience: pilot.experience
      };
      return this.http.post<Pilot>(Base_Url + this.url, body, {
        headers
      });
    }
  
    updatePilot(id:number, pilot:Pilot){
      const headers = new HttpHeaders().set('content-type', 'application/json');
      let body = {
        firstName: pilot.firstName,
        lastName: pilot.lastName,
        birthday: pilot.birthday,
        experience: pilot.experience
      };
      return this.http.post<Pilot>(Base_Url + this.url + id, body, {
        headers
      });
    }
  
    deletePilot(id:number){
      const headers = new HttpHeaders().set('content-type', 'application/json');
      return this.http.delete(Base_Url + this.url + id, {
        headers
      });
    }
}
