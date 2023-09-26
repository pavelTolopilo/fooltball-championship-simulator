import { IMatch } from './interfaces';

export enum TEAM_TYPE {
  HOME = 'homeTeam',
  AWAY = 'awayTeam'
}

export const DEFAULT_MATCHES: IMatch[] = [
  { [TEAM_TYPE.HOME]: { id: 1, name: 'Germany', score: 0 }, [TEAM_TYPE.AWAY]: { id: 2, name: 'Poland', score: 0 } },
  { [TEAM_TYPE.HOME]: { id: 3, name: 'Brazil', score: 0 }, [TEAM_TYPE.AWAY]: { id: 4, name: 'Mexico', score: 0 } },
  { [TEAM_TYPE.HOME]: { id: 5, name: 'Argentina', score: 0 }, [TEAM_TYPE.AWAY]: { id: 6, name: 'Uruguay', score: 0 } },
];

export const DEFAULT_CHAMPIONSHIP_TITLE: string = 'Katar 2023';

export enum STATUS {
  START = 'start',
  RESTART = 'restart',
  FINISH = 'finish'
}

export const DELAY: number = 10000;
export const CHAMPIONSHIP_EXPIRATION: number = 90000;