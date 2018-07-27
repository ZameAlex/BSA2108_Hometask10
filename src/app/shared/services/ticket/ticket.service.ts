import { Injectable } from '@angular/core';
import { Base_Url } from '../../config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ticket } from '../../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private url='tickets/';
  
  constructor(private http: HttpClient) { }

  getTickets(){

    return this.http.get<Ticket[]>(Base_Url + this.url);
  }

  getTicketById(id: number){
    return this.http.get<Ticket>(Base_Url + this.url+id);
  }

  createTicket(ticket: Ticket){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    let body = {
      price: ticket.price,
      flight: ticket.flight
    };
    return this.http.post<Ticket>(Base_Url + this.url, body, {
      headers
    });
  }

  updateTicket(id:number, ticket:Ticket){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    let body = {
      price: ticket.price,
      flight: ticket.flight
    };
    return this.http.post<Ticket>(Base_Url + this.url + id, body, {
      headers
    });
  }

  deleteTicket(id:number){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.delete(Base_Url + this.url + id, {
      headers
    });
  }
}
