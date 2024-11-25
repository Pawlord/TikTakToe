import { MOVE_ORDER } from "./constans";


export const getNextMove = (currentMove, playersCount) => {
    const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount)
    const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;
    return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0]
}

export const computeWinner = (cells, sequenceSize = 5, fieldSize = 19) => {
    const gap = Math.floor(sequenceSize / 2); // нужный пробел от символа для расчета

    function compareIndexes(indexes) {
        let result = true;

        for (let i = 1; i < indexes.length; i++) {
            result &&= !!cells[indexes[i]];
            result &&= cells[indexes[i]] === cells[indexes[i - 1]]
        }
        return result;
    }

    function getSequenceIndexes(i) {
        const res = [
            [], // - (результат по горизонтали)
            [], // \ (результат по диагонали влево)
            [], // / (результат по диагонали вправо)
            [], // | (результат по вертикали)
        ];

        for (let j = 0; j < sequenceSize; j++) {
            res[0].push(j - gap + i) //Расчет для горизонтали
            res[1].push(fieldSize * (j - gap) + (j - gap) + i) //Расчет для диагонали влево
            res[2].push(-fieldSize * (j - gap) + (j - gap) + i) //Расчет для диагонали вправо
            res[3].push(fieldSize * (j - gap) + i) //Расчет для вертикали
        }

        const x = i % fieldSize;
        if (x < gap || x >= fieldSize - gap) {
            res.shift()
            res.shift()
            res.shift()
        }

        return res;
    }

    for (let i = 0; i < cells.length; i++) {
        if (cells[i]) {
            const indexRows = getSequenceIndexes(i);
            const winnerIndexes = indexRows.find(row => compareIndexes(row))

            if (winnerIndexes) {
                return winnerIndexes;
            }
        }
    }

    return undefined;
}