import style from '../Styles/styles.module.css'

export const SET_BLACK_STYLE = 'SET_BLACK_STYLE'
export const SET_PINK_STYLE = 'SET_PINK_STYLE'
export const SET_REGULAR_STYLE = 'SET_REGULAR_STYLE'


const initialState =
    {
        style: style.regular
    }

const styleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BLACK_STYLE:
            return {...state, style: style.black}
        case SET_PINK_STYLE:
            return {...state, style: style.pink}
        case SET_REGULAR_STYLE:
            return {...state, style: style.regular}
    }
    return state;
};


export default styleReducer;