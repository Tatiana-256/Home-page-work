import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import loadingReducer from "./loading-reducer";
import styleReducer from "./style-reducer";
import thunkMiddleware, { ThunkAction } from "redux-thunk"


let reducers = combineReducers({
    loading: loadingReducer,
    style: styleReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;




// ______type of state___________

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>



// ______type of thunk-creator___________

export type baseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>