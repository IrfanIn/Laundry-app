import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = () => {
    return (
        <header>
            <h3>
                <Link to="/">Laundrfan</Link>
            </h3>
            <ul className={classes.list}>
                <li><Link to="/paket">Paket cuci</Link></li>
                <li><Link to="/outlet">Toko kami</Link></li>
                <li><Link to="/tentang">Tentang kami</Link></li>
            </ul>
        </header >
    )
}

export default Navigation