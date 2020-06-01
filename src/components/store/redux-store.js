import {applyMiddleware, combineReducers, createStore} from "redux";
import loadingReducer from "./loading-reducer";
import styleReducer from "./style-reducer";
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
    loading: loadingReducer,
    style: styleReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
