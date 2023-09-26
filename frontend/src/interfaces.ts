export interface IMatch {
  homeTeam: ITeam;
  awayTeam: ITeam;
}

interface ITeam {
  id: number,
  name: string,
  score: number
}