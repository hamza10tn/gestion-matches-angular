import { Equipe } from "./equipe.model"
import { Score } from "./score.model"

export class Match {
  id !: string
  date !: string
  heure !: string
  lieu !: string
  equipeA: Equipe = new Equipe()
  equipeB: Equipe = new Equipe()
  score: Score = new Score()
}
