import React from 'react';
import style from './styles.module.css'
import {changeSuccess, sendData} from "../store/actions";
import {connect} from "react-redux";
import {api, tryCatch} from "./RequestAPI";
import Preloader from "../Preloader/Preloader";

const SentBox = (props) => {

    return <div>
        {props.success ? <div className={style.resultSucces}>Задание выполнено</div> :
            <div className={style.resultError}>Something wrong. Try again</div>}

        <div className={style.sentBox}>
            <input
                type="checkbox" checked={props.success} onChange={() => props.changeSuccess()}/>
            <button
                disabled={props.sendingData}
                className={style.r}
                onClick={() => {
                    props.sendData(true)
                    tryCatch(api.changePriority(props.success)).then(() => {
                        props.sendData(false)
                    })
                }}>Send
            </button>
            {props.sendingData ? <Preloader/> : null}
        </div>
    </div>
}

const mapStateToProps = (state) => {
    return {
        success: state.style.success,
        sendingData: state.loading.sendingData
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        changeSuccess: () => {
            dispatch(changeSuccess())
        },
        sendData: (send) => {
            dispatch(sendData(send))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SentBox)