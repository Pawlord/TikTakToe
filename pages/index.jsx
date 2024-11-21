import React from "react";

// --- Компоненты ---
import { Header } from "../src/components/header";
import { GameTitle, GameInfo, GameField } from "../src/components/game";

export default function () {
    return (
        <div className="bg-slate-50 min-h-screen">
            <Header />
            <main className="pt-6 mx-auto w-max">
                <GameTitle />
                <GameInfo className='mt-4' />
                <GameField className='mt-6' />
            </main>
        </div>
    )
}
