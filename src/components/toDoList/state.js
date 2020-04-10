import React from 'react';


export const saveState = (key, state) => {
    localStorage.setItem(key, JSON.stringify(state))
}


export const restoreState = (key, defaultState, nextTaskId) => {
    let state = {
        task: [],
        filterValue: "All"
    }
    let stateAsString = localStorage.getItem(key)
    if (stateAsString) {
        state = JSON.parse(stateAsString)
    }

    this.setState(state, () => {
        defaultState.tasks.forEach(task => {
            if (task.id >= nextTaskId) {
                nextTaskId = task.id + 1
            }
        })
    })
}