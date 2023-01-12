import React from 'react'
import classes from './Laundry.module.css';

const laundry = () => {
    return (
        <div className={`${classes.wrapper}`}>
            <div className={classes.demo}>
                <h3>Laun<span>drf</span>an</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum officia voluptates cum nemo nisi, aspernatur at eius error vel aliquid, necessitatibus facilis velit magnam natus consequatur sapiente porro facere rerum.</p>
            </div>
            <div className={classes.icon}>
                <img src='/images/laundry-icon.png' alt="icon laundry" width='350' />
            </div>
        </div>
    )
}

export default laundry