import React from "react";

//Константы
import { GAME_SYMBOLS, GAME_ORDER } from "./constans";

const getNextMove = (currentMove, playersCount) => {
    const slicedMoveOrder = GAME_ORDER.slice(0, playersCount)
    const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;
    return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0]
}

export function useGameState(playersCount) {
    const [{ cells, currentMove }, setGameState] = React.useState(() => ({
        cells: Array(19 * 19).fill(null),
        currentMove: GAME_SYMBOLS.CROSS
    }))

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
        handleCellClick
    }
}