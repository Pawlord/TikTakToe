import clsx from "clsx";
import React from "react";

import { ZeroIcon } from '../game/icons/zero-icon';
import { CrossIcon } from "./icons/cross-icon";
import { UiButton } from "../uikit/ui-button";


const GAME_SYMBOLS = {
    ZERO: 'zero',
    CROSS: 'cross',
    TRIANGLE: 'triangle',
    SQUARE: 'square',
}

export function GameField({ className }) {
    const [cells, setCells] = React.useState(() => new Array(19 * 19).fill(null))
    const [currentMove, setCurrentMove] = React.useState(GAME_SYMBOLS.CROSS)

    const actions = <>
        <UiButton size="md" variant="primary">Ничья</UiButton>
        <UiButton size="md" variant="outline">Сдаться</UiButton>
    </>

    return (
        <GameFieldLayout className={className}>
            <GameMoveInfo actions={actions} />
            <GameGrid>
                {cells.map((_, i) => <GameCell key={i}></GameCell>)}
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

function GameMoveInfo({ actions }) {
    return (
        <div className="flex gap-3 items-center">
            <div className="mr-auto">
                <div className="flex items-center gap-1 text-xl leading-tight font-semibold">
                    Ход: <ZeroIcon className={'w-5 h-5'} />
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400">
                    Следующий: <CrossIcon />
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

function GameCell({ children }) {
    return (
        <button
            className="border border-slate-200 -ml-px -mt-px flex items-center justify-center"
        >
            {children}
        </button>
    )
}