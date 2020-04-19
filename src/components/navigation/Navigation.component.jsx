import React from "react";
import {NavLink} from "react-router-dom";
import styles from './navigation.module.css'

const Navigation = () => {
    return (<div>
        <div className={styles.nav}><NavLink activeClassName={styles.activeLink} to="/monday">
            Monday
        </NavLink>
        </div>
        <div className={styles.nav}>
            <NavLink activeClassName={styles.activeLink} to="/tuesday">
                Tuesday
            </NavLink>
        </div>
    </div>)
}

export default Navigation

