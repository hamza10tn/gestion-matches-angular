import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchRoutingModule } from './match-routing.module';
import { ListeMatchsComponent } from './liste-matchs/liste-matchs.component';
import { MatchComponent } from './match/match.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListeMatchsComponent,
    MatchComponent
  ],
  imports: [
    CommonModule,
    MatchRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MatchModule { }
