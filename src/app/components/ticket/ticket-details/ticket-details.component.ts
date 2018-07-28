import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../shared/models/ticket';
import { TicketService } from '../../../shared/services/ticket/ticket.service';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {

  ticket: Ticket;
  id: number;
  isReadonly: boolean = true;

  constructor(private service: TicketService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.service.getTicketById(this.id).subscribe((data :Ticket)=> this.ticket = data);
  }

  deleteTicket() {
    this.service.deleteTicket(this.id).subscribe(result => console.log(result));
  }

  editTicket() {
    if (this.isReadonly == true) {
      this.isReadonly = false;
    }
  }

  updateTicket(id: number) {
    this.service.updateTicket(id, this.ticket).subscribe(result => console.log(result));
    this.isReadonly = true;
  }

}
