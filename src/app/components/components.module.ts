import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewComponent } from './crew/crew.component';

@NgModule ({
  imports: [
    CommonModule
  ],
  declarations: [CrewComponent],
  exports:[CrewComponent]
})

export class ComponentsModule { }
