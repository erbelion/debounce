type VoidCallbackType = (...args: any[]) => void | any

interface DebouncedFunction {
    (...args: any[]): void
    invoke: DebouncedFunction
    invokeNow: () => void
}

export default (
    callback: VoidCallbackType,
    delay: number
): DebouncedFunction => {
    let timeout: null | ReturnType<typeof setTimeout> = null
    const debouncedFn: DebouncedFunction = function (...args: any[]) {
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => {
            callback(...args)
        }, delay)
    } as DebouncedFunction

    debouncedFn.invoke = debouncedFn

    debouncedFn.invokeNow = () => {
        if (timeout) clearTimeout(timeout)
        callback()
    }

    return debouncedFn
}
