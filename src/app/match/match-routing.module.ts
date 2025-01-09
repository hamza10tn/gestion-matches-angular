import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeMatchsComponent } from './liste-matchs/liste-matchs.component';
import { MatchComponent } from './match/match.component';

const routes: Routes = [
  { path: "", component: ListeMatchsComponent },
  { path: "ajouter", component: MatchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchRoutingModule { }
