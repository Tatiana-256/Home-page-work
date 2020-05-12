import {combineReducers, createStore} from "redux";
import loadingReducer from "./loading-reducer";
import styleReducer from "./style-reducer";


let reducers = combineReducers({
    loading: loadingReducer,
    style: styleReducer
})

const store = createStore(reducers);

export default store;
