export const SET_LOADING = 'SET_LOADING'


const initialState =
    {
        loading: true,
    }

const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {...state, loading: action.loading}
    }
    return state;
};


export default loadingReducer;