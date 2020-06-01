import {ActionsType} from "./actions";

export const SET_LOADING = 'SET_LOADING'
export const SENDING_DATA = 'SENDING_DATA'


type initialStateType = typeof initialState


const initialState =
    {
        loading: true,
        sendingData: false
    }

const loadingReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case SET_LOADING:
            return {...state, loading: action.loading}
        case SENDING_DATA:
            return {...state, sendingData: action.send}
        default:
            return state
    }
    return state;
};


export default loadingReducer;