import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CrewService } from '../shared/services/crew/crew.service';
import { CrewListComponent } from './crew/crew-list/crew-list.component';
import { CrewDetailsComponent } from './crew/crew-details/crew-details.component';
import { DepartureDetailsComponent } from './departure/departure-details/departure-details.component';
import { DepartureListComponent } from './departure/departure-list/departure-list.component';
import { FlightListComponent } from './flight/flight-list/flight-list.component';
import { FlightDetailsComponent } from './flight/flight-details/flight-details.component';
import { PlaneDetailsComponent } from './plane/plane-details/plane-details.component';
import { TypeDetailsComponent } from './type/type-details/type-details.component';
import { TypeListComponent } from './type/type-list/type-list.component';
import { StewardessListComponent } from './stewardess/stewardess-list/stewardess-list.component';
import { StewardessDetailsComponent } from './stewardess/stewardess-details/stewardess-details.component';
import { TicketDetailsComponent } from './Ticket/ticket-details/ticket-details.component';
import { TicketListComponent } from './Ticket/ticket-list/ticket-list.component';
import { PilotListComponent } from './pilot/pilot-list/pilot-list.component';
import { PilotDetailsComponent } from './pilot/pilot-details/pilot-details.component';

@NgModule ({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [CrewDetailsComponent, CrewListComponent, PilotDetailsComponent, PlaneDetailsComponent, TypeListComponent, TicketListComponent, StewardessListComponent, 
                FlightDetailsComponent, FlightListComponent, CrewListComponent, CrewDetailsComponent, DepartureDetailsComponent,  DepartureListComponent, FlightListComponent,
                FlightDetailsComponent, PlaneDetailsComponent, TypeDetailsComponent, TypeListComponent, StewardessListComponent, StewardessDetailsComponent, 
                TicketDetailsComponent, TicketListComponent, PilotListComponent, PilotDetailsComponent],
  providers:[CrewService]
})

export class ComponentsModule { }
