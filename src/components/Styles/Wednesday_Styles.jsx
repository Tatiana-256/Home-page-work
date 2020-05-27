import React from 'react';
import style from './styles.module.css'
import {connect} from "react-redux";
import {changeOnBlack, changeOnPink, changeOnRegular} from "../store/actions";
import RequestAPI from "./SentBox";


const Wednesday = (props) => {
    const changeOnBlack = () => {
        props.changeOnBlack()
    }
    const changeOnPink = () => {
        props.changeOnPink()
    }
    const changeOnRegular = () => {
        props.changeOnRegular()
    }
    return <div className={props.style}>
        <div>
            <h3>Choose style</h3>
            <div className={style.btn}>
                <button className={style.b} onClick={changeOnBlack}>black</button>
                <button className={style.p} onClick={changeOnPink}>pink</button>
                <button className={style.r} onClick={changeOnRegular}>regular</button>
            </div>
        </div>
        <div>
            There is Wednesday page
            <RequestAPI/>
        </div>
    </div>
}

const mapStateToProps = (state) => {
    return {
        style: state.style.style
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeOnBlack: () => {
            dispatch(changeOnBlack())
        },
        changeOnPink: () => {
            dispatch(changeOnPink())
        },
        changeOnRegular: () => {
            dispatch(changeOnRegular())
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wednesday)