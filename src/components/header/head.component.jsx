import React from "react";
import styles from './head.module.css';
import {avatar} from '../../common/header.JPG'


const Header = () => {
    return (<div className={styles.head}>
        <div className={styles.ava}><img src={avatar} alt='photo'/></div>
        <div>Матвиенко Татьяна Юрьевна</div>
    </div>)
}

export default Header