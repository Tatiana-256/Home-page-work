import React from 'react';
import style from './styles.module.css'
import {changeResponse, changeSuccess, sendData} from "../store/actions";
import {connect} from "react-redux";
import {api, tryCatch} from "./RequestAPI";
import Preloader from "../Preloader/Preloader";

const SentBox = (props) => {

    const request = () => {
        props.sendData(true)
        tryCatch(api.changePriority(props.success)).then(res => {
            props.changeResponse()
            props.sendData(false)
        })
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
            <label for='input'/>
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

const mapStateToProps = (state) => {
    return {
        success: state.style.success,
        sendingData: state.loading.sendingData,
        responseServer: state.style.responseServer
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        changeSuccess: () => {
            dispatch(changeSuccess())
        },
        sendData: (send) => {
            dispatch(sendData(send))
        },
        changeResponse: () => {
            dispatch(changeResponse())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SentBox)