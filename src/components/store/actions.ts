import {SENDING_DATA, SET_LOADING} from "./loading-reducer";
import {CHANGE_RESPONSE, CHANGE_SUCCESS, SET_BLACK_STYLE, SET_PINK_STYLE, SET_REGULAR_STYLE} from "./style-reducer";


// _________________________type of actions_________________________

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>

export type ActionsType = InferActionsTypes<typeof actions>


// ___________________________actions_______________________________


export const actions = {
    changeLoading: () => ({type: SET_LOADING, loading: false} as const),
    changeOnBlack: () => ({type: SET_BLACK_STYLE} as const),
    changeOnPink: () => ({type: SET_PINK_STYLE} as const),
    changeOnRegular: () => ({type: SET_REGULAR_STYLE} as const),
    changeSuccess: () => ({type: CHANGE_SUCCESS} as const),
    changeResponse: () => ({type: CHANGE_RESPONSE} as const),
    sendData: (send: boolean) => ({type: SENDING_DATA, send} as const)
}