import React from 'react';
import './Match.css';
import { IMatch } from './interfaces';

const Match: React.FC<IMatch> = ({ homeTeam, awayTeam }) => {
  return (
    <div className="matchContainer">
      <div>
        <span className="teams">{`${homeTeam.name} vs ${awayTeam.name}`}</span>
      </div>
      <div>
        <span className="scores">{`${homeTeam.score}:${awayTeam.score}`}</span>
      </div>
    </div>
  );
};

export default Match;