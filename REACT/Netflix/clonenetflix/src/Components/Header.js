import React from "react";
import './Header.css';

export function Header({hide}) {
    return(

        <header className={hide ? 'hide' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netlfix-Logo" />

                </a>

            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="User-Logo" />

                </a>

            </div>
        </header>
    );

}

export default Header