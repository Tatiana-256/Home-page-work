import {createStore} from "redux";
import style from '../Styles/styles.module.css'

export const SET_LOADING = 'SET_LOADING'
export const SET_BLACK_STYLE = 'SET_BLACK_STYLE'
export const SET_PINK_STYLE = 'SET_PINK_STYLE'
export const SET_REGULAR_STYLE = 'SET_REGULAR_STYLE'


const initialState =
    {
        loading: true,
        style: style.regular
    }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {...state, loading: action.loading}
        case SET_BLACK_STYLE:
            return {...state, style: style.black}
        case SET_PINK_STYLE:
            return {...state, style: style.pink}
        case SET_REGULAR_STYLE:
            return {...state, style: style.regular}
    }
    return state;
};

const store = createStore(reducer);

export default store;