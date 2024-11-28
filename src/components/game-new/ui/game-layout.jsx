import clsx from 'clsx';
import React from 'react';

export function GameLayout({ backLink, gameTitle, gameInfo, playersList }) {
    return (
        <div>
            <div className='pl-2'>
                {backLink}
                {gameTitle}
                {gameInfo}
            </div>
            <div className={'bg-white rounded-2xl shadow-md mt-4 px-8 py-4 justify-between grid grid-cols-2 gap-3'}>
                {playersList}
            </div>
        </div>
    )
}