import React, { useState } from 'react';
import Match from './Match';
import './Championship.css';
import { IMatch } from './interfaces';
import {
    DEFAULT_MATCHES,
    DEFAULT_CHAMPIONSHIP_TITLE,
    START
} from './constants';

const Championship: React.FC = () => {
    const [status, setStatus] = useState<string>(START);
    const [matches, setMatches] = useState<IMatch[]>(DEFAULT_MATCHES);
    const [championshipTitle, setChampionshipTitle] = useState<string>(DEFAULT_CHAMPIONSHIP_TITLE);

    const calculateTotalGoals = () => {
        let totalGoals = 0;
        matches.forEach((match) => {
            totalGoals += match.homeTeam.score + match.awayTeam.score;
        });
        return totalGoals;
    };

    const totalGoals = calculateTotalGoals();
    const statusCopy = status.charAt(0).toUpperCase() + status.slice(1);

    return (
        <div className="container">
            <div className="title">{championshipTitle}</div>
            <div className="buttonContainer">
                <button>{statusCopy}</button>
            </div>

            {matches.map((match, index) => (
                <Match
                    key={index}
                    homeTeam={match.homeTeam}
                    awayTeam={match.awayTeam}
                />
            ))}
            <div className="totalScores">{`Total goals: ${totalGoals}`}</div>
        </div>
    );
};

export default Championship;