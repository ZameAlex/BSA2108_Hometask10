import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewService } from './services/crew/crew.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CrewService],
  exports:[CrewService]
})
export class SharedModule { }
