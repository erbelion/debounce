type MultiArgsFunction = (...args: any[]) => any

interface DebouncedFunction {
    (...args: any[]): DebouncedFunction
    invoke: DebouncedFunction
    invokeNow: () => DebouncedFunction
    cancel: () => DebouncedFunction
    overwrite: (
        newCallback?: (...args: any[]) => any,
        newDelay?: number
    ) => DebouncedFunction
    reset: () => DebouncedFunction
}

export default (
    initialCallback?: MultiArgsFunction,
    initialDelay?: number
): DebouncedFunction => {
    let callback = initialCallback || (() => {})
    let delay = initialDelay || 0
    let timeout: null | ReturnType<typeof setTimeout> = null

    const debouncedFn: DebouncedFunction = function (
        ...args: any[]
    ): DebouncedFunction {
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => {
            callback(...args)
        }, delay)
        return debouncedFn
    } as DebouncedFunction

    debouncedFn.invoke = debouncedFn

    debouncedFn.cancel = (): DebouncedFunction => {
        if (timeout) clearTimeout(timeout)
        return debouncedFn
    }

    debouncedFn.invokeNow = (): DebouncedFunction => {
        debouncedFn.cancel()
        callback()
        return debouncedFn
    }

    debouncedFn.overwrite = (
        newCallback?: (...args: any[]) => any,
        newDelay?: number
    ): DebouncedFunction => {
        debouncedFn.cancel()
        callback = newCallback || (() => {})
        delay = newDelay || 0
        return debouncedFn
    }

    debouncedFn.reset = (): DebouncedFunction => {
        debouncedFn.overwrite()
        return debouncedFn
    }

    return debouncedFn
}
