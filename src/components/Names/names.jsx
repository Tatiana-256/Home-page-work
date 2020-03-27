import React from "react";
import styles from './names.module.css';


const Names = ({name}) => {
    return <div className={styles.names}>{name}</div>
}

export default Names