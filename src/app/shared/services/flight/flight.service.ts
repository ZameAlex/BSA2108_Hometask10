import { Injectable } from '@angular/core';
import { Flight } from '../../models/flight';
import { Base_Url } from '../../config';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
    private url='flights/';
  
    constructor(private http: HttpClient) { }
  
    getFlights(){

      return this.http.get<Flight[]>(Base_Url + this.url);
    }
  
    getFlightById(id: number){
      return this.http.get<Flight>(Base_Url + this.url+id);
    }
  
    createFlight(flight: Flight){
      const headers = new HttpHeaders().set('content-type', 'application/json');
      let body = {
        number: flight.number,
        departurePoint: flight.departurePoint,
        departureTime: flight.departureTime,
        destination: flight.destination,
        destinationTime: flight.destinationTime,
        tickets: flight.tickets
      };
      return this.http.post<Flight>(Base_Url + this.url, body, {
        headers
      });
    }
  
    updateFlight(id:number, flight:Flight){
      const headers = new HttpHeaders().set('content-type', 'application/json');
      let body = {
        number: flight.number,
        departurePoint: flight.departurePoint,
        departureTime: flight.departureTime,
        destination: flight.destination,
        destinationTime: flight.destinationTime,
        tickets: flight.tickets
      };
      return this.http.post<Flight>(Base_Url + this.url + id, body, {
        headers
      });
    }
  
    deleteFlight(id:number){
      const headers = new HttpHeaders().set('content-type', 'application/json');
      return this.http.delete(Base_Url + this.url + id, {
        headers
      });
    }
  }
