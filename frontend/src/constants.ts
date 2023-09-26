import { IMatch } from './interfaces';

export const DEFAULT_MATCHES: IMatch[] = [
  { homeTeam: { id: 1, name: 'Germany', score: 0 }, awayTeam: { id: 2, name: 'Poland', score: 0 } },
  { homeTeam: { id: 3, name: 'Brazil', score: 0 }, awayTeam: { id: 4, name: 'Mexico', score: 0 } },
  { homeTeam: { id: 5, name: 'Argentina', score: 0 }, awayTeam: { id: 6, name: 'Uruguay', score: 0 } },
];

export const DEFAULT_CHAMPIONSHIP_TITLE: string = 'Katar 2023';
export const START: string = 'start';
export const RESTART: string = 'restart';
export const FINISH: string = 'finish';
