import React from "react";
import styles from "./Box.module.css";

interface BoxPropsType {
    openCamera: () => void
}

export const Box: React.FC<BoxPropsType> = ({openCamera}) => {
    return <>
        <div className={styles.boxComponent}>
            <button onClick={openCamera} style={{width: '100px', height: '50px', backgroundColor: "blue"}}>open camera</button>
        </div>
    </>
}
