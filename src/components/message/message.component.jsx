import React from "react";
import styles from './message.module.css';
import avatar from "../../common/header.JPG";


const Message = () => {

    let characteristics = [
        {character: "responsible", id: 1},
        {character: "friendly", id: 2},
        {character: "active", id: 3}]


    let today = new Date();
    let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    let date = `${today.getFullYear()}/${(today.getMonth() + 1)}/${today.getDate()}`;

    return <div className={styles.general}>
        <div className={styles.box}><img src={avatar} alt='photo'/>
            <h2>My characteristics</h2>
            <div>
                {
                    characteristics.map(a => {
                            if (a.id == 2) {
                                return <div className={styles.bold} key={a.id}>{a.character}</div>
                            } else {
                                return <div key={a.id}>{a.character}</div>
                            }
                        }
                    )
                }
            </div>
        </div>
        <div className={styles.data}>
            <div>
                <a>Матвиенко Татьяна Юрьевна</a>
            </div>
            <textarea className={styles.text} placeholder='Your message'></textarea>
            <div className={styles.time}>
                <div>{date}</div>
                <div>{time}</div>
            </div>
        </div>

    </div>
}

export default Message


