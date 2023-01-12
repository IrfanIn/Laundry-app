import React from 'react'
import Button from '../UI/Button'
import classes from './OutletItem.module.css';

const OutletItem = props => {
    return (
        <div className={classes.outlet_item_wrapper}>
            <div className={classes.outlet_image}>
                <img src="https://cdn.langit7.id/foto/750/langit7/berita/2022/07/28/1/19817/kehalalan-produknya-dipertanyakan-begini-jawaban-mixue-tch.jpg" alt="" />
            </div>
            <div className={classes.outlet_item}>
                <h3>{props.name}</h3>
                <small><i>{props.alamat}</i></small>
                <div className={classes.rating}>
                    <i className="fa-solid fa-star"></i>
                </div>
                <div className={classes.button_wrap}>
                    <Button onClick={props.onShow}>Detail</Button>
                    <Button onClick={props.onDelete} color='#ce2323 '>Delete</Button>
                </div>
            </div>
        </div>
    )
}

export default OutletItem