import { Component } from '@angular/core';
import { EquipeService } from 'src/app/services/equipe.service';

import { Equipe } from 'src/app/models/models/equipe.model';

@Component({
  selector: 'app-liste-equipe',
  templateUrl: './liste-equipe.component.html',
  styleUrls: ['./liste-equipe.component.css']
})
export class ListeEquipeComponent {

  equipe: Equipe[] = [];
  constructor(private equipeService: EquipeService) { }
  ngOnInit(): void {
    this.equipeService.getAllEquipe().subscribe(
      (data) => {
        this.equipe = data;
      }
    )
  }
}
