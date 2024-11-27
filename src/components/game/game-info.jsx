import clsx from "clsx";
import React from 'react';

// --- Компоненты ---
import { Profile } from "../profile";
import { GameSymbol } from './game-symbol';
import { GAME_SYMBOLS } from "./constans";

// --- Картинки ---
import avatarSrc1 from './images/avatar-1.png'
import avatarSrc2 from './images/avatar-2.png'
import avatarSrc3 from './images/avatar-3.png'
import avatarSrc4 from './images/avatar-4.png'


const players = [
    {
        id: 1,
        name: 'Pawlord',
        rating: 1230,
        avatar: avatarSrc1,
        symbol: GAME_SYMBOLS.CROSS
    },
    {
        id: 2,
        name: 'VereIntedinglapotur',
        rating: 850,
        avatar: avatarSrc2,
        symbol: GAME_SYMBOLS.ZERO
    },
    {
        id: 3,
        name: 'Lara',
        rating: 1400,
        avatar: avatarSrc3,
        symbol: GAME_SYMBOLS.TRIANGLE
    },
    {
        id: 4,
        name: 'Додик',
        rating: 760,
        avatar: avatarSrc4,
        symbol: GAME_SYMBOLS.SQUARE
    }
]

export function GameInfo({ className, playersCount, currentMove, isWinner, onPlayerTimeOver }) {
    return (
        <div className={clsx(className, 'bg-white rounded-2xl shadow-md px-8 py-4 justify-between grid grid-cols-2 gap-3 ')}>
            {players.slice(0, playersCount).map(player => (
                <PlayerInfo
                    key={player.id}
                    playerInfo={player}
                    isRight={player.id % 2 === 0}
                    isTimerRunning={currentMove === player.symbol && !isWinner}
                    onTimeOver={() => onPlayerTimeOver(player.symbol)}
                />
            ))}
        </div >
    )
}

function PlayerInfo({ playerInfo, isRight, isTimerRunning, onTimeOver }) {
    const [seconds, setSeconds] = React.useState(30);

    const minutesString = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secondsString = String(Math.floor(seconds % 60)).padStart(2, '0');

    const isDanger = seconds < 10;

    React.useEffect(() => {
        if (isTimerRunning) {
            const interval = setInterval(() => {
                setSeconds(s => Math.max(s - 1, 0))
            }, 1000)

            return () => {
                clearInterval(interval)
                setSeconds(30)
            }
        }
    }, [isTimerRunning])

    React.useEffect(() => {
        if (seconds === 0) {
            onTimeOver()
        }
    }, [seconds])

    return (
        <div className="flex items-center gap-3">
            <div className={clsx('relative', isRight && 'order-3')}>
                <Profile
                    className='w-44'
                    name={playerInfo.name}
                    rating={playerInfo.rating}
                    avatar={playerInfo.avatar}
                />
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1">
                    <GameSymbol symbol={playerInfo.symbol} />
                </div>
            </div>
            <div className={clsx("h-6 w-px bg-slate-200", isRight && 'order-2')}></div>
            <div className={clsx(
                "w-16 text-lg font-semibold",
                isRight && 'order-1',
                isTimerRunning || "text-gray-400",
                isDanger ? "text-orange-600" : "text-slate-900",)}>
                {minutesString}:{secondsString}
            </div>
        </div >
    )
}