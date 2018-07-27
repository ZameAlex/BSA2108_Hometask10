import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Crew  } from './models/crew';
import { CrewService } from './services/crew/crew.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[CrewService]
})
export class SharedModule { }
