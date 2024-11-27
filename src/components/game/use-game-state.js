import React from "react";

//Константы
import { GAME_SYMBOLS } from "./constans";

//Вспомогательные функции
import { getNextMove, computeWinner } from "./model";

export function useGameState(playersCount) {
    const [{ cells, currentMove, playersTimeOver }, setGameState] = React.useState(() => ({
        cells: Array(19 * 19).fill(null),
        currentMove: GAME_SYMBOLS.CROSS,
        playersTimeOver: [],
    }))

    const winnerSequence = computeWinner(cells)

    const nextMove = getNextMove(currentMove, playersCount, playersTimeOver)

    const winnerSymbol = currentMove === nextMove ? currentMove : winnerSequence?.[0];

    const handleCellClick = (index) => {
        setGameState(lastGameState => {
            if (lastGameState.cells[index]) {
                return lastGameState;
            }

            return {
                ...lastGameState,
                currentMove: getNextMove(lastGameState.currentMove, playersCount, lastGameState.playersTimeOver),
                cells: lastGameState.cells.map((cell, i) => i === index ? lastGameState.currentMove : cell)
            }
        })
    }

    const handleTimeOver = (symbol) => {
        setGameState(lastGameState => {
            return {
                ...lastGameState,
                playersTimeOver: [...lastGameState.playersTimeOver, symbol],
                currentMove: getNextMove(lastGameState.currentMove, playersCount, lastGameState.playersTimeOver),
            }
        })
    }

    return {
        cells,
        currentMove,
        nextMove,
        handleCellClick,
        handleTimeOver,
        winnerSequence,
        winnerSymbol,
    }
}