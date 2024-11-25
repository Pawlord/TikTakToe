import clsx from "clsx";
import React from "react";

//Комопоненты
import { GameSymbol } from './'
import { UiButton } from "../uikit/ui-button";

export function GameField({ className, playersCount, cells, nextMove, currentMove, handleCellClick, winnerSequence }) {

    const actions = <>
        <UiButton size="md" variant="primary">Ничья</UiButton>
        <UiButton size="md" variant="outline">Сдаться</UiButton>
    </>

    return (
        <GameFieldLayout className={className}>
            <GameMoveInfo actions={actions} currentMove={currentMove} nextMove={nextMove} />
            <GameGrid>
                {cells.map((symbol, i) =>
                    <GameCell onClick={() => handleCellClick(i)} key={i} isWinner={winnerSequence?.includes(i)}>
                        {symbol && <GameSymbol symbol={symbol} className='w-5 h-5' />}
                    </GameCell>)}
            </GameGrid>
        </GameFieldLayout>
    )
}

function GameFieldLayout({ children, className }) {
    return (
        <div className={clsx(className, 'bg-white rounded-2xl shadow-md px-8 pt-5 pb-7')}>
            {children}
        </div>
    )
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
    return (
        <div className="flex gap-3 items-center">
            <div className="mr-auto">
                <div className="flex items-center gap-1 text-xl leading-tight font-semibold">
                    Ход: <GameSymbol symbol={currentMove} className='w-4 h-4' />
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400">
                    Следующий: <GameSymbol symbol={nextMove} className='w-3 h-3' />
                </div>
            </div>

            {actions}
        </div>
    )
}

function GameGrid({ children }) {
    return (
        <div className="grid grid-rows-[repeat(19,30px)] grid-cols-[repeat(19,30px)] pl-px pt-px mt-3">
            {children}
        </div>
    )
}

function GameCell({ children, onClick, isWinner }) {
    return (
        <button
            onClick={onClick}
            className={clsx("border border-slate-200 -ml-px -mt-px flex items-center justify-center", isWinner && 'bg-lime-500/20')}
        >
            {children}
        </button>
    )
}