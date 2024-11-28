import { CrossIcon } from "../ui/icons/cross-icon";
import { ZeroIcon } from "../ui/icons/zero-icon";
import { TriangleIcon } from '../ui/icons/triangle-icon';
import { SquareIcon } from '../ui/icons/square-icon';

import { GAME_SYMBOLS } from "../constans";

export function GameSymbol({ symbol, className }) {

    const Icon = {
        [GAME_SYMBOLS.CROSS]: CrossIcon,
        [GAME_SYMBOLS.ZERO]: ZeroIcon,
        [GAME_SYMBOLS.TRIANGLE]: TriangleIcon,
        [GAME_SYMBOLS.SQUARE]: SquareIcon,
    }[symbol] ?? CrossIcon

    return <Icon className={className} />
}