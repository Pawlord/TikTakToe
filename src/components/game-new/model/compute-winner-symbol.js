export function computeWinnerSymbol(gameState, { winnerSequence, nextMove }) {
    const winnerSymbol = gameState.currentMove === nextMove ? gameState.currentMove : gameState.cells[winnerSequence?.[0]];
    return winnerSymbol;
}