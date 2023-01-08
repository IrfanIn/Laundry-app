import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header>
            <h3>Laundrian</h3>
            <ul className={classes.list}>
                <li><a href="/paket">Paket cuci</a></li>
                <li><a href="/tentang">Tentang kami</a></li>
            </ul>
        </header >
    )
}

export default Header