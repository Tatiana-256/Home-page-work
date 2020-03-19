import React from "react";
import styles from './character.module.css';


const Characteristics = () => {

    let characteristics = [
        {character: "responsible", id: 1},
        {character: "friendly", id: 2},
        {character: "active", id: 3}]

    let skills = characteristics.map(a => {
            if (a.id === 2) {
                return <div className={styles.bold} key={a.id}>{a.character}</div>
            } else {
                return <div key={a.id}>{a.character}</div>
            }
        }
    )

    return <div className={styles.page}>
        <div className={styles.general}>
            <h2>My characteristics</h2>
            <div>
                {skills}
            </div>
        </div>
    </div>
}

export default Characteristics


