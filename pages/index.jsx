import React from "react";

// --- Компоненты ---
import { Header } from "../src/components/header";
import { GameTitle, GameInfo, GameField, useGameState } from "../src/components/game";

export default function HomePage() {
    const [playersCount] = React.useState(2)

    const { cells, currentMove, nextMove, handleCellClick, winnerSequence } = useGameState(playersCount);

    return (
        <div className="bg-slate-50 min-h-screen">
            <Header />
            <main className="pt-6 mx-auto w-max">
                <GameTitle playersCount={playersCount} />
                <GameInfo
                    playersCount={playersCount}
                    className='mt-4'
                    currentMove={currentMove}
                />
                <GameField
                    playersCount={playersCount}
                    className='mt-6'
                    cells={cells}
                    currentMove={currentMove}
                    nextMove={nextMove}
                    handleCellClick={handleCellClick}
                    winnerSequence={winnerSequence}
                />
            </main>
        </div>
    )
}
