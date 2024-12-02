import React from 'react';

export function useNow(interval, enabled) {
    const [now, setNow] = React.useState()

    React.useEffect(() => {
        if (!enabled) {
            setNow(undefined)
            return;
        }

        const int = setInterval(() => {
            setNow(Date.now())
        }, interval)

        return () => clearInterval(int)
    }, [interval, enabled])

    return now;
}

export function useInterval(interval, enabled, cb) {
    React.useEffect(() => {
        if (!enabled) {
            return;
        }

        const int = setInterval(() => {
            cb(Date.now())
        }, interval)

        return () => clearInterval(int)
    }, [interval, enabled])
}