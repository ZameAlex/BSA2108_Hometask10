import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../shared/models/ticket';
import { TicketService } from '../../../shared/services/ticket/ticket.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  tickets: Ticket[]=[];

  isAdd: boolean = false;

  newTicket: Ticket = {
    id: 0,
    price:0,
    number:''
  };

  constructor(private service: TicketService, private router: Router) { }

  ngOnInit() {
    this.service.getTickets().subscribe((data: Ticket[])=>
    this.tickets=data);
  }

  createNewTicket() {
    this.isAdd = !this.isAdd;
  }

  addTicket(form) {
    debugger;
    if (form.valid) {
      this.service.createTicket(this.newTicket).subscribe(result => console.log(result));
      this.isAdd = false;
    } else {
      console.log("not valid");
    }
  }

  navigateToDetail(id: number) {
    this.router.navigate([`/tickets/${id}`]);
  }

}
