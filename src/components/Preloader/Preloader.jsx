import React from "react";
import loadingPage from "./loading.svg";
import styles from './loader.module.css'

let Preloader = () => {
    return (
        <div>
            <img src={loadingPage} className={styles.loader}/>
        </div>
    );
};

export default Preloader;
