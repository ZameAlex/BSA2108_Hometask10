import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouteModule } from './route/route.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule }   from '@angular/forms';
import { PilotListComponent } from './components/pilot/pilot-list/pilot-list.component';
import { PilotDetailsComponent } from './components/pilot/pilot-details/pilot-details.component';
import { StewardessListComponent } from './components/stewardess/stewardess-list/stewardess-list.component';
import { StewardessDetailsComponent } from './components/stewardess/stewardess-details/stewardess-details.component';
import { CrewListComponent } from './components/crew/crew-list/crew-list.component';
import { CrewDetailsComponent } from './components/crew/crew-details/crew-details.component';
import { TicketListComponent } from './components/ticket/ticket-list/ticket-list.component';
import { TicketDetailsComponent } from './components/ticket/ticket-details/ticket-details.component';
import { PlaneListComponent } from './components/plane/plane-list/plane-list.component';
import { PlaneDetailsComponent } from './components/plane/plane-details/plane-details.component';
import { TypeListComponent } from './components/type/type-list/type-list.component';
import { TypeDetailsComponent } from './components/type/type-details/type-details.component';
import { FlightListComponent } from './components/flight/flight-list/flight-list.component';
import { FlightDetailsComponent } from './components/flight/flight-details/flight-details.component';
import { DepartureListComponent } from './components/departure/departure-list/departure-list.component';
import { DepartureDetailsComponent } from './components/departure/departure-details/departure-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PilotListComponent,
    PilotDetailsComponent,
    StewardessListComponent,
    StewardessDetailsComponent,
    CrewListComponent,
    CrewDetailsComponent,
    TicketListComponent,
    TicketDetailsComponent,
    PlaneListComponent,
    PlaneDetailsComponent,
    TypeListComponent,
    TypeDetailsComponent,
    FlightListComponent,
    FlightDetailsComponent,
    DepartureListComponent,
    DepartureDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouteModule,
    SharedModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
