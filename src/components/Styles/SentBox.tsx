import React from 'react';
import {connect} from "react-redux";

import style from './styles.module.css'
import {actions} from "../store/actions";
import Preloader from "../Preloader/Preloader";
import {sentDataRequest} from "../store/style-reducer";
import {AppStateType} from "../store/redux-store";


type mapStateToPropsType={
    success: boolean
    sendingData: boolean,
    responseServer: boolean
}

type mapDispatchToPropsType =
    {
        sentDataRequest: (s: boolean)=>void
        changeSuccess: ()=>void
    }

type OwnProps = {}

type PropsType = mapStateToPropsType & mapDispatchToPropsType & OwnProps

const SentBox = (props: PropsType) => {

    const request = () => {
        props.sentDataRequest(props.success)
    }
    return <div>

        <div className={style.sentBox}>
            <input
                type="checkbox"
                className={style.checkbox}
                checked={props.success}
                onChange={() => props.changeSuccess()}
                id='input'
            />
            <label htmlFor='input'/>
            <button
                disabled={props.sendingData}
                className={style.r}
                onClick={request}>Send
            </button>
            {props.sendingData ? <Preloader/> : null}
        </div>
        {props.responseServer ? props.success ? <div className={style.resultSucces}>Задание выполнено</div> :
            <div className={style.resultError}>Something wrong. Try again</div> :
            null
        }
    </div>
}

const mapStateToProps = (state: AppStateType) => {
    return {
        success: state.style.success,
        sendingData: state.loading.sendingData,
        responseServer: state.style.responseServer
    }
}


export default connect<mapStateToPropsType, mapDispatchToPropsType, OwnProps, AppStateType>(mapStateToProps, {sentDataRequest, changeSuccess: actions.changeSuccess})(SentBox)