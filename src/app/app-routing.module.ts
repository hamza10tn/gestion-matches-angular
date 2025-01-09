import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "equipe", loadChildren: () => import('./equipe/equipe.module').then(m => m.EquipeModule) },
  { path: "match", loadChildren: () => import('./match/match.module').then(m => m.MatchModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
