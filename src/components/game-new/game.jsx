import React from 'react'
import { GameLayout } from './ui/game-layout'

// --- Компоненты ---
import { BackLink } from './ui/back-link';
import { GameInfo } from './ui/game-info';
import { GameTitle } from './ui/game-title'
import { PLAYERS } from './constans';
import { PlayerInfo } from './ui/player-info';
import { GameMoveInfo } from './ui/game-move-info';
import { GameCell } from './ui/game-cell';
import { GameOverModal } from './ui/game-over-modal';

// --- Функции ---
import { GAME_STATE_ACTIONS, initGameState, gameStateReducer } from "./model/game-state-reducer";
import { getNextMove } from './model/get-next-move';
import { computeWinnerSymbol } from './model/compute-winner-symbol';
import { computeWinner } from './model/compute-winner';
import { computePlayerTimer } from './model/compute-player-timer';
import { useInterval } from './lib/timers';

const PLAYERS_COUNT = 2;

export function Game() {

    const [gameState, dispatch] = React.useReducer(
        gameStateReducer,
        {
            playersCount: PLAYERS_COUNT,
            defaultTimer: 10000,
            currentMoveStart: Date.now()
        },
        initGameState
    )

    useInterval(1000, gameState.currentMoveStart, () => {
        dispatch({
            type: GAME_STATE_ACTIONS.TICK,
            now: Date.now(),
        })
    })

    const winnerSequence = computeWinner(gameState.cells)
    const nextMove = getNextMove(gameState.currentMove, gameState.playersCount, gameState.timers)
    const winnerSymbol = computeWinnerSymbol(gameState, { winnerSequence, nextMove })

    const winnerPlayer = PLAYERS.find(player => player.symbol === winnerSymbol)

    const { cells, currentMove } = gameState;
    return (
        <>
            <GameLayout
                backLink={<BackLink />}
                gameTitle={<GameTitle />}
                gameInfo={<GameInfo isRatingGame playersCount={PLAYERS_COUNT} timeMode={'1 мин на ход'} />}

                playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => {
                    const { timer, timerStartAt } = computePlayerTimer(gameState, player.symbol)
                    return (
                        <PlayerInfo
                            key={player.id}
                            name={player.name}
                            avatar={player.avatar}
                            rating={player.rating}
                            symbol={player.symbol}
                            timer={timer}
                            timerStartAt={timerStartAt}
                            isRight={index % 2 === 1}
                        />
                    )
                })}

                gameMoveInfo={<GameMoveInfo currentMove={currentMove} nextMove={nextMove} />}

                gameCells={cells.map((cell, index) => <GameCell
                    key={index}
                    disabled={!!winnerSymbol}
                    onClick={() => dispatch({
                        type: GAME_STATE_ACTIONS.CELL_CLICK,
                        index,
                        now: Date.now(),
                    })}
                    isWinner={winnerSequence?.includes(index)}
                    symbol={cell}
                />)}
            />

            <GameOverModal players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => <PlayerInfo
                key={player.id}
                name={player.name}
                avatar={player.avatar}
                rating={player.rating}
                symbol={player.symbol}
                timer={gameState.timers[player.symbol]}
                isRight={index % 2 === 1}
            />)}
                winnerName={winnerPlayer?.name}
            />
        </>
    )
}