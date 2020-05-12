import {SET_LOADING} from "./loading-reducer";
import {SET_BLACK_STYLE, SET_PINK_STYLE, SET_REGULAR_STYLE} from "./style-reducer";


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