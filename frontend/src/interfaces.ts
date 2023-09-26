import { TEAM_TYPE } from './constants';

export interface IMatch {
  [TEAM_TYPE.HOME]: ITeam;
  [TEAM_TYPE.AWAY]: ITeam;
}

interface ITeam {
  id: number,
  name: string,
  score: number
}