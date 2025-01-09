import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Equipe } from 'src/app/models/models/equipe.model';
import { Match } from 'src/app/models/models/match.model';
import { EquipeService } from 'src/app/services/equipe.service';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent {


  match!: Match;
  teams: Equipe[] = [];

  constructor(private matchService: MatchService, private equipeService: EquipeService) { }
  fg = new FormGroup({
    Date: new FormControl('', [Validators.required, this.dateValidator]),
    Heure: new FormControl('', [Validators.required]),
    Lieu: new FormControl('', [Validators.required]),
    EquipeA: new FormControl('', [Validators.required]),
    EquipeB: new FormControl('', [Validators.required]),
  });

  dateValidator(control: FormControl): { [key: string]: boolean } | null {
    const today = new Date();
    const selectedDate = new Date(control.value);
    if (selectedDate < today) {
      return { 'invalidDate': true };
    }
    return null;
  }
  ngOnInit(): void {
    this.equipeService.getAllEquipe().subscribe(
      (data) => {
        this.teams = data;
      }
    );
  }
  addmatch(f: any) {
    this.match = f;
    this.match.date = f.Date;
    this.match.heure = f.Heure;
    this.match.lieu = f.Lieu;
    this.match.equipeA = f.EquipeA.nom;
    this.match.equipeB = f.EquipeB.nom;

    this.matchService.addMatch(this.match).subscribe(
      (data) => {
        console.log('match added')
        alert('match added success')
        this.fg.reset();
      },
      (error) => {
        console.log('error adding match');
      }
    );
  }



}
