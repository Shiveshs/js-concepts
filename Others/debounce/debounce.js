function debounce (func, delay) {
    clearTimeout()
    return function (...args) {
        setTimeout(()=>{
            func(args)
        }, delay)
    }
}