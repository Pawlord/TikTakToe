import React from "react";

// --- Компоненты ---
import { Header } from "../src/components/header";
import { Game } from "../src/components/game-new";

export default function HomePage() {

    return (
        <HomePageLayout header={<Header />}>
            <Game />
        </HomePageLayout>
    )
}

function HomePageLayout({ header, children }) {
    return (
        <div className="bg-slate-50 min-h-screen">
            {header}
            <main className="pt-6 mx-auto w-max">
                {children}
            </main>
        </div>
    )
}