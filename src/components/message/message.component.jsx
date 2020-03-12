import React from "react";
import styles from './message.module.css';
import avatar from "../../common/header.JPG";


const Message = () => {

    let characteristics = [
        {character: "responsible", id: 1},
        {character: "friendly", id: 2},
        {character: "active", id: 3}]
    // let classForCharacter = character[1] ? '' : "styles.bold"

    let today = new Date();
    let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    let date = `${today.getFullYear()}/${(today.getMonth() + 1)}/${today.getDate()}`;

    return <div className={styles.general}>
        <div className={styles.box}> <img src={avatar} alt='photo'/>
            <div>My characteristics</div>
            <div>
                {
                    characteristics.map(a => (<div className={styles.bold} key={a.id}>{a.character}</div>))
                }
            </div>
        </div>
        <div className={styles.data}>
            <div>
                <a>Матвиенко Татьяна Юрьевна</a>
            </div>
            <textarea className={styles.text} placeholder='Your massage'></textarea>
            <div className={styles.time}>
                <div>{date}</div>
                <div>{time}</div>
            </div>
        </div>

    </div>
}

export default Message


