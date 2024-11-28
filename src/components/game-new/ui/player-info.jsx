import React from 'react';
import clsx from 'clsx';

// --- Компоненты ---
import Image from 'next/image';
import { GameSymbol } from './game-symbol';

export function PlayerInfo({
    isRight,
    name,
    rating,
    avatar,
    symbol,
    isTimerRunning,
    seconds
}) {

    const minutesString = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secondsString = String(Math.floor(seconds % 60)).padStart(2, '0');

    const isDanger = seconds < 10;

    return (
        <div className="flex items-center gap-3">
            <div className={clsx('relative', isRight && 'order-3')}>
                <div className={'flex items-center gap-2 w-44 text-start text-teal-600'}>
                    <Image src={avatar} alt='avatar' unoptimized width={48} height={48} />
                    <div className='overflow-hidden'>
                        <div className='text-lg leading-tight truncate'>{name}</div>
                        <div className='text-slate-400 text-xs leading-tight'>Рейтинг: {rating}</div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1">
                    <GameSymbol symbol={symbol} />
                </div>
            </div>
            <div className={clsx("h-6 w-px bg-slate-200", isRight && 'order-2')}></div>
            <div className={clsx(
                "w-16 text-lg font-semibold",
                isRight && 'order-1',
                isTimerRunning || "text-gray-400",
                isDanger ? "text-orange-600" : "text-slate-900",)}>
                {minutesString}:{secondsString}
            </div>
        </div >
    )
}