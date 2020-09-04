import React from "react";
import loadSkinPhoto from "../../../../Common-files/Images/loadSkinPhoto.png";
import styles from "./SmallBox.module.css";
import add from "../../../../Common-files/Images/add.png";


type BoxPropsType = {
    photoLoaded: boolean
}


export const SmallBox: React.FC<BoxPropsType> = ({photoLoaded}) => {
    return <>
        {
            photoLoaded ?
                <img
                    src={loadSkinPhoto}
                    className={styles.colorBox}
                    alt='load'
                /> :
                <div className={styles.boxComponent}>
                    <img src={add} className={styles.box} alt='load'/>
                    <div className={styles.text}>Build hinzufugen</div>
                </div>
        }</>
}
