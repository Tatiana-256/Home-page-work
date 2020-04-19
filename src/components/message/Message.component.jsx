import React from "react";
import styles from './message.module.css';
import avatar from "../../common/header.JPG";
import TextMessage from "../textMessage/TextMessage.component";


const Message = () => {

    return <div className={styles.general}>
        <div className={styles.box}><img src={avatar} alt='photo'/>
        </div>
        <div className={styles.data}>
            <div>
                <a>Матвиенко Татьяна Юрьевна</a>
            </div>
            <TextMessage/>
        </div>

    </div>
}

export default Message


