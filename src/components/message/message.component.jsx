import React from "react";
import styles from './message.module.css';




const Message=()=>{
    let now = new Date()
    return <div className={styles.main}>
        <div></div>
        <textarea placeholder="Your message"></textarea>
        {/*<div>{now}</div>*/}
    </div>
}

export default Message