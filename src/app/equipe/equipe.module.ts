import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipeRoutingModule } from './equipe-routing.module';
import { ListeEquipeComponent } from './liste-equipe/liste-equipe.component';


@NgModule({
  declarations: [
    ListeEquipeComponent
  ],
  imports: [
    CommonModule,
    EquipeRoutingModule
  ]
})
export class EquipeModule { }
