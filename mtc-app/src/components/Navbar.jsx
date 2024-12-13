import React from 'react';
import {NavLink} from 'react-router-dom';
import "../componentsStyle/Navbar.css"

const Navbar = () => {
    return (
        <div className={"navigation"}>
            <button>
                <NavLink to="/" exact className={"button"} activeClassName="active">Главная</NavLink>
            </button>
            <button className={"separator"}> | </button>
            <button>
                <NavLink to="/employees" className={"button"} activeClassName="active">Поиск</NavLink>
            </button>
        </div>
    );
};

export default Navbar;