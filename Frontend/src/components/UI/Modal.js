import React, { Fragment } from 'react'
import ReactDom from 'react-dom';
import classes from './Modal.module.css';

const portalElement = document.querySelector('#overlays');

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}

const ModalOverlays = props => {
    return (
        <div className={`${classes.modal} ${props.class}`}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const Modal = props => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {ReactDom.createPortal(
                <ModalOverlays onClose={props.onClose}>{props.children}</ModalOverlays>, portalElement
            )}
        </Fragment>
    )
}

export default Modal