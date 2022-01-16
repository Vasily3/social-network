import React from "react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";


const Header = ({location}) => {
    const isAuth = useSelector((state) => state.auth.isAuth);

    if (isAuth) {
        return (
            <header className="header">
                <div className="header__container container">
                    {location.pathname === "/" ?
                        <div className="header__logo header__logo--no-hover">Social Network</div>
                        : <NavLink className="header__logo" to="/">Social Network</NavLink>
                    }
                    {location.pathname === "/settings" ?
                        <div className="header__links">
                            <NavLink className="header__link" to="/">--> Users</NavLink>
                        </div>
                        :
                        <div className="header__links">
                            <NavLink className="header__link" to="/settings">Settings</NavLink>
                        </div>
                    }

                </div>
            </header>
        );
    } else {
        return (
            <header className="header">
                <div className="header__container container">
                    <NavLink className="header__logo" to="/">Social Network</NavLink>
                    <div className="header__links">
                        <NavLink className="header__link" to="/signin">Sign In</NavLink>
                    </div>
                </div>
            </header>
        );
    }
};

export default Header;
