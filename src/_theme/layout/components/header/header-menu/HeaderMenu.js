/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { checkIsActive } from "../../../../_helpers";

export function HeaderMenu({ layoutProps }) {
    const location = useLocation();
    const getMenuItemActive = (url) => {
        return checkIsActive(location, url) ? "menu-item-active" : "";
    }

    return <div
        id="kt_header_menu"
        className={`header-menu header-menu-mobile ${layoutProps.ktMenuClasses}`}
        {...layoutProps.headerMenuAttributes}
    >
        <ul className={`menu-nav ${layoutProps.ulClasses}`}>
            <li className={`menu-item menu-item-rel ${getMenuItemActive('/dati')}`}>
                <NavLink className="menu-link" to="/dati">
                    <span className="menu-text">Dati</span>
                </NavLink>
            </li>
            <li className={`menu-item menu-item-rel ${getMenuItemActive('/statistiche')}`}>
                <NavLink className="menu-link" to="/statistiche">
                    <span className="menu-text">Statistiche</span>
                    {layoutProps.rootArrowEnabled && (<i className="menu-arrow" />)}
                </NavLink>
            </li>
            <li className={`menu-item menu-item-rel ${getMenuItemActive('/progetto')}`}>
                <NavLink className="menu-link" to="/progetto">
                    <span className="menu-text">Progetto</span>
                </NavLink>
            </li>
        </ul>
    </div>;
}
