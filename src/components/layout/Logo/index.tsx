import * as React from 'react'

import './index.scss'

import { NavLink } from 'react-router-dom'

export function Logo(): JSX.Element {
    return (
        <div className="logo">

            <NavLink to="/">
                <div style={{ "display": "flex" }}>
                    <img className="NavImg" src="https://i.postimg.cc/d342vD86/Logo.png" />
                    <div className="navbar-brand">Demeter</div>
                </div>
            </NavLink>
        </div>
    )
}
