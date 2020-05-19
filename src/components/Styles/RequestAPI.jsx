import React from 'react';
import style from './styles.module.css'
import axios from "axios";
import {changeSuccess} from "../store/actions";
import {connect} from "react-redux";

const RequestAPI = (props) => {


    const changePriority = (success) => {
       return () => axios.post(`https://neko-cafe-back.herokuapp.com/auth/test`,
            {success: success},
        )
    }


    const tryCatch = async (f) => {
        try {

            let responce = await f()
            console.log('answer: ', responce.data);
            return responce;
        } catch (e) {
            console.log('error: ', {...e});
            return 'error';
        }
    }

    return <div>
        <input
            type="checkbox" checked={props.success} onChange={() => props.changeSuccess()}/>
        <button className={style.r} onClick={() => tryCatch(changePriority(props.success))}>Send</button>
    </div>
}

const mapStateToProps = (state) => {
    return {
        success: state.style.success
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        changeSuccess: () => {
            dispatch(changeSuccess())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestAPI)