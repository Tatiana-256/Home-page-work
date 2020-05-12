import React from "react";
import {NavLink} from "react-router-dom";
import styles from './navigation.module.css'
import Wednesday from "../Styles/Wednesday_Styles";

const Navigation = () => {
    return (<div className={styles.navigation}>
        <div className={styles.nav}><NavLink activeClassName={styles.activeLink} to="/monday">
            Monday
        </NavLink>
        </div>
        <div className={styles.nav}>
            <NavLink activeClassName={styles.activeLink} to="/tuesday">
                Tuesday
            </NavLink>
        </div>
        <div className={styles.nav}>
            <NavLink activeClassName={styles.activeLink} to="/wednesday">
                Wednesday
            </NavLink>
        </div>
    </div>)
}

export default Navigation

