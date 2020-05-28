import {SENDING_DATA, SET_LOADING} from "./loading-reducer";
import {CHANGE_RESPONSE, CHANGE_SUCCESS, SET_BLACK_STYLE, SET_PINK_STYLE, SET_REGULAR_STYLE} from "./style-reducer";


export const changeLoading = () => {
    return {
        type: SET_LOADING,
        loading: false
    }
}

export const changeOnBlack = () => {
    return {
        type: SET_BLACK_STYLE
    }
}
export const changeOnPink = () => {
    return {
        type: SET_PINK_STYLE
    }
}
export const changeOnRegular = () => {
    return {
        type: SET_REGULAR_STYLE
    }
}
export const changeSuccess = () => {
    return {
        type: CHANGE_SUCCESS
    }
}
export const changeResponse = () => {
    return {
        type: CHANGE_RESPONSE
    }
}

export const sendData = (send) => {
    return {
        type: SENDING_DATA,
        send: send
    }
}