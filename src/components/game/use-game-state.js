import React from "react";

//Константы
import { GAME_SYMBOLS } from "./constans";

//Вспомогательные функции
import { getNextMove, computeWinner } from "./model";

export function useGameState(playersCount) {
    const [{ cells, currentMove }, setGameState] = React.useState(() => ({
        cells: Array(19 * 19).fill(null),
        currentMove: GAME_SYMBOLS.CROSS
    }))

    const winnerSequence = computeWinner(cells)

    const nextMove = getNextMove(currentMove, playersCount)

    const handleCellClick = (index) => {
        setGameState(lastGameState => {
            if (lastGameState.cells[index]) {
                return lastGameState;
            }

            return {
                ...lastGameState,
                currentMove: getNextMove(lastGameState.currentMove, playersCount),
                cells: lastGameState.cells.map((cell, i) => i === index ? lastGameState.currentMove : cell)
            }
        })
    }

    return {
        cells,
        currentMove,
        nextMove,
        handleCellClick,
        winnerSequence
    }
}