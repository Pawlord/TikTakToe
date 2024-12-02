import clsx from 'clsx';
import React from 'react';

export function GameLayout({
    backLink,
    gameTitle,
    gameInfo,
    playersList,
    gameMoveInfo,
    actions,
    gameCells
}) {
    return (
        <div className='pb-10'>
            <div className='pl-2'>
                {backLink}
                {gameTitle}
                {gameInfo}
            </div>
            <div className={'bg-white rounded-2xl shadow-md mt-4 px-8 py-4 justify-between grid grid-cols-2 gap-3'}>
                {playersList}
            </div>
            <div className={'mt-6 bg-white rounded-2xl shadow-md px-8 pt-5 pb-7'}>
                <div className="flex gap-3 items-center">
                    <div className="mr-auto">
                        {gameMoveInfo}
                    </div>
                    {actions}
                </div>

                <div className="grid grid-rows-[repeat(19,30px)] grid-cols-[repeat(19,30px)] pl-px pt-px mt-3">
                    {gameCells}
                </div>
            </div>
        </div>
    )
}