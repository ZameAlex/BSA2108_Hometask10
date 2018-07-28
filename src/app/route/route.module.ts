import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PilotListComponent } from '../components/pilot/pilot-list/pilot-list.component';
import { PilotDetailsComponent } from '../components/pilot/pilot-details/pilot-details.component';
import { StewardessListComponent } from '../components/stewardess/stewardess-list/stewardess-list.component';
import { StewardessDetailsComponent } from '../components/stewardess/stewardess-details/stewardess-details.component';
import { CrewListComponent } from '../components/crew/crew-list/crew-list.component';
import { CrewDetailsComponent } from '../components/crew/crew-details/crew-details.component';
import { TicketListComponent } from '../components/ticket/ticket-list/ticket-list.component';
import { TicketDetailsComponent } from '../components/ticket/ticket-details/ticket-details.component';
import { PlaneListComponent } from '../components/plane/plane-list/plane-list.component';
import { PlaneDetailsComponent } from '../components/plane/plane-details/plane-details.component';
import { TypeListComponent } from '../components/type/type-list/type-list.component';
import { TypeDetailsComponent } from '../components/type/type-details/type-details.component';
import { FlightListComponent } from '../components/flight/flight-list/flight-list.component';
import { FlightDetailsComponent } from '../components/flight/flight-details/flight-details.component';
import { DepartureListComponent } from '../components/departure/departure-list/departure-list.component';
import { DepartureDetailsComponent } from '../components/departure/departure-details/departure-details.component';



const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'pilots',
        children: [
          {
            path: '',
            component: PilotListComponent
          },
          {
            path: ':id',
            component: PilotDetailsComponent 
          }
        ]
      },
      {
        path: 'stewardesses',
        children: [
          {
            path: '',
            component: StewardessListComponent
          },
          {
            path: ':id',
            component: StewardessDetailsComponent 
          }
        ]
      },
      {
        path: 'crews',
        children: [
          {
            path: '',
            component: CrewListComponent
          },
          {
            path: ':id',
            component: CrewDetailsComponent 
          }
        ]
      },
      {
        path: 'tickets',
        children: [
          {
            path: '',
            component: TicketListComponent
          },
          {
            path: ':id',
            component: TicketDetailsComponent 
          }
        ]
      },
      {
        path: 'planes',
        children: [
          {
            path: '',
            component: PlaneListComponent
          },
          {
            path: ':id',
            component: PlaneDetailsComponent 
          }
        ]
      },
      {
        path: 'types',
        children: [
          {
            path: '',
            component: TypeListComponent
          },
          {
            path: ':id',
            component: TypeDetailsComponent 
          }
        ]
      },
      {
        path: 'flights',
        children: [
          {
            path: '',
            component: FlightListComponent
          },
          {
            path: ':id',
            component: FlightDetailsComponent 
          }
        ]
      },
      {
        path: 'departures',
        children: [
          {
            path: '',
            component: DepartureListComponent
          },
          {
            path: ':id',
            component: DepartureDetailsComponent 
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []})

export class RouteModule { }
