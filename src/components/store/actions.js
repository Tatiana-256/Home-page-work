import {SET_LOADING} from "./store";

export const changeLoading = () => {
    return {
        type: SET_LOADING,
        loading: false
    }
}