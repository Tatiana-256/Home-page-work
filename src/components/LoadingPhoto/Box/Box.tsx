import React from "react";
import styles from "./Box.module.css";

interface BoxPropsType {
    openCamera: () => void
}

export const Box: React.FC<BoxPropsType> = ({openCamera}) => {
    return <>
        <div className={styles.boxComponent}>
            <div onClick={openCamera} style={{width: '100px', height: '100px'}}>ff</div>
            <div className={styles.text}>Build hinzufugen</div>
        </div>
    </>
}
