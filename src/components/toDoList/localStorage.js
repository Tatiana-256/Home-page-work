export const saveState = (key, state) => {
    localStorage.setItem(key, JSON.stringify(state))
}

export const restoreState = (key, defaultState) => {
    debugger

    let stateAsString = localStorage.getItem(key)
    if (stateAsString) {
        defaultState = JSON.parse(stateAsString)
    }

    return defaultState
}