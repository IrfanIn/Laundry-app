import React, { useRef } from 'react'
import classes from './OutletForm.module.css';
import Button from '../UI/Button';

const OutletForm = props => {
    const namaRef = useRef();
    const alamatRef = useRef();
    const teleponRef = useRef();
    const deskripsiRef = useRef();

    const submitOutletHandler = event => {
        event.preventDefault();
        const outletInput = {
            nama: namaRef.current.value,
            alamat: alamatRef.current.value,
            deskripsi: deskripsiRef.current.value,
            telepon: teleponRef.current.value
        }
        props.submitOutlet(outletInput);
    }

    return (
        <form onSubmit={submitOutletHandler}>
            <h3>tambah outlet</h3>
            <div className={classes.input_wrap}>
                <label htmlFor="nama">nama outlet</label>
                <input type="text" name='nama' id='nama' ref={namaRef} />
            </div>
            <div className={classes.input_wrap}>
                <label htmlFor="alamat">alamat outlet</label>
                <input type="text" name='alamat' id='alamat' ref={alamatRef} />
            </div>
            <div className={classes.input_wrap}>
                <label htmlFor="deskripsi">deskripsi outlet</label>
                <input type="text" name='deskripsi' id='deskripsi' ref={deskripsiRef} />
            </div>
            <div className={classes.input_wrap}>
                <label htmlFor="telepon">telepon outlet</label>
                <input type="text" name='telepon' id='telepon' ref={teleponRef} />
            </div>
            <div className={classes.button_wrap}>
                <Button type="submit">create</Button>
                <Button color='#ff3636' onClick={props.onClose}>close</Button>
            </div>
        </form>
    )
}

export default OutletForm