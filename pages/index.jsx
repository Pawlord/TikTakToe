import React from "react";

// --- Компоненты ---
import { Header } from "../src/components/header";
import { GameTitle, GameInfo, GameField } from "../src/components/game";

export default function HomePage() {
    const [playersCount] = React.useState(4)

    return (
        <div className="bg-slate-50 min-h-screen">
            <Header />
            <main className="pt-6 mx-auto w-max">
                <GameTitle playersCount={playersCount} />
                <GameInfo playersCount={playersCount} className='mt-4' />
                <GameField playersCount={playersCount} className='mt-6' />
            </main>
        </div>
    )
}
