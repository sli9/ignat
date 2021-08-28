import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes"
import style from './pages/pages.module.css'

function Header() {
    return (
        <div className={style.menu}>
            <NavLink to={PATH.PRE_JUNIOR} activeClassName={style.active}> Pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} activeClassName={style.active}> Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} activeClassName={style.active}> Junior+</NavLink>
            <div className={style.btn}/>
        </div>

    )
}

export default Header
