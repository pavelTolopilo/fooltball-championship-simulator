import React, { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import { useInterval } from 'usehooks-ts';
import Match from './Match';
import './Championship.css';
import { IMatch } from './interfaces';
import {
    DEFAULT_MATCHES,
    DEFAULT_CHAMPIONSHIP_TITLE,
    CHAMPIONSHIP_EXPIRATION,
    DELAY,
    STATUS,
    TEAM_TYPE
} from './constants';

const Championship: React.FC = () => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [status, setStatus] = useState<STATUS>(STATUS.START);
    const [matches, setMatches] = useState<IMatch[]>(DEFAULT_MATCHES);
    const [isPlaying, setPlaying] = useState<boolean>(false)

    const handleStatus = (value: string): void => {
        switch (value) {
            case STATUS.START:
                startMatch();
                break;
            case STATUS.RESTART:
                restartMatch();
                break;
            case STATUS.FINISH:
                finishMatch();
                break;
        }
    }

    const updateMatches = (value: IMatch[]): void => {
        socket?.emit('matches', value)
    }
    useEffect((): void => {
        const newSocket = io('http://localhost:8001');
        setSocket(newSocket);
    }, [setSocket]);

    const statusListener = (status: STATUS): void => {
        setStatus(status);
    }
    const matchesListener = (updatedMatches: IMatch[]): void => {
        setMatches(updatedMatches);
    }
    useEffect(() => {
        socket?.on('status', statusListener)
        return () => {
            socket?.off('status', statusListener);
        }
    }, [statusListener]);

    useEffect(() => {
        socket?.on('matches', matchesListener)
        return () => {
            socket?.off('matches', matchesListener);
        }
    }, [matchesListener]);

    const addScoreToRandomTeam = (): void => {
        const randomMatch: IMatch = matches[Math.floor(Math.random() * matches.length)];
        const randomTeam: TEAM_TYPE = Math.random() < 0.5 ? TEAM_TYPE.HOME : TEAM_TYPE.AWAY;

        const updatedMatches: IMatch[] = matches.map(match => {
            if (match === randomMatch) {
                return {
                    ...match,
                    [randomTeam]: {
                        ...match[randomTeam],
                        score: match[randomTeam].score + 1
                    }
                };
            }
            return match;
        });
        updateMatches(updatedMatches);
    };

    useInterval(
        (): void => {
            addScoreToRandomTeam()
        },
        isPlaying ? DELAY : null,
    );

    const calculateTotalGoals = (): number => {
        let totalGoals: number = 0;
        matches.forEach((match: IMatch): void => {
            totalGoals += match.homeTeam.score + match.awayTeam.score;
        });
        return totalGoals;
    };
    const totalGoals: number = calculateTotalGoals();

    const startMatch = (): void => {
        setPlaying(true);
        socket?.emit('status', STATUS.FINISH);
        setTimeout((): void => {
            handleStatus(STATUS.FINISH);
        }, CHAMPIONSHIP_EXPIRATION);
    };

    const finishMatch = (): void => {
        socket?.emit('status', STATUS.RESTART);
        setPlaying(false);
    };

    const restartMatch = (): void => {
        setMatches(DEFAULT_MATCHES);
        startMatch();
    };

    const statusCopy: string = status.charAt(0).toUpperCase() + status.slice(1);

    return (
        <div className="container">
            <div className="title">{DEFAULT_CHAMPIONSHIP_TITLE}</div>
            <div className="buttonContainer">
                <button onClick={() => handleStatus(status)}>{statusCopy}</button>
            </div>

            {matches.map((match: IMatch, index: number) => (
                <Match
                    key={index}
                    homeTeam={match[TEAM_TYPE.HOME]}
                    awayTeam={match[TEAM_TYPE.AWAY]}
                />
            ))}
            <div className="totalScores">{`Total goals: ${totalGoals}`}</div>
        </div>
    );
};

export default Championship;
