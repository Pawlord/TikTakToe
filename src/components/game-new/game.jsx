import React from 'react'
import { GameLayout } from './ui/game-layout'

// --- Компоненты ---
import { BackLink } from './ui/back-link';
import { GameInfo } from './ui/game-info';
import { GameTitle } from './ui/game-title'
import { PLAYERS } from './constans';
import { PlayerInfo } from './ui/player-info';

export function Game() {
    return (
        <GameLayout
            backLink={<BackLink />}
            gameTitle={<GameTitle />}
            gameInfo={<GameInfo isRatingGame playersCount={4} timeMode={'1 мин на ход'} />}
            playersList={PLAYERS.map((player, index) => <PlayerInfo
                key={player.id}
                name={player.name}
                avatar={player.avatar}
                rating={player.rating}
                symbol={player.symbol}
                seconds={60}
                isRight={index % 2 === 1}
            />)}
        />
    )
}