import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeEquipeComponent } from './liste-equipe/liste-equipe.component';

const routes: Routes = [
  { path: "", component: ListeEquipeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipeRoutingModule { }
