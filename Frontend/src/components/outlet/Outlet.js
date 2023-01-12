import React, { useEffect, useState } from 'react'
import OutletForm from './OutletForm';
import OutletItem from './OutletItem';
import Modal from '../UI/Modal';
import Button from '../UI/Button';
import classes from './Outlet.module.css';

const Outlet = () => {
    const [show, setShow] = useState(false);
    const [outlet, setOutlet] = useState([]);

    const fetchOutlet = async () => {
        const outlet = await fetch('http://localhost:8000/outlet');
        const response = await outlet.json();
        setOutlet(response.outlet);
    }

    useEffect(() => {
        fetchOutlet();
    }, [])

    const showFormHandler = () => {
        setShow(prev => !prev);
    }

    const submitOutletHandler = async (outlet) => {
        const outletInput = {
            nama: outlet.nama,
            alamat: outlet.alamat,
            deskripsi: outlet.deskripsi,
            telepon: outlet.telepon
        };
        try {
            const outlet = await fetch('http://localhost:8000/outlet', {
                method: 'POST',
                body: JSON.stringify(outletInput),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const response = await outlet.json();
            fetchOutlet();
            setShow(false);
            console.log(response);
        } catch (err) {
            throw new Error('Outlet gagal dibuat');
        }
    }

    const hideModalHandler = () => {
        setShow(prev => !prev);
    }

    const deleteItemHandler = async (id) => {
        await fetch('http://localhost:8000/outlet/' + id, {
            method: 'DELETE',
        })
        fetchOutlet();
    }

    const showOutletHandler = async (id) => { }

    return (
        <div className={classes.outlet}>
            <h3>outlet list</h3>
            {!show && <Button onClick={showFormHandler}>buat outlet</Button>}
            <div className={classes.outlet_item}>
                {outlet.map(item => (
                    <OutletItem
                        key={item._id.toString()}
                        name={item.nama}
                        alamat={item.alamat}
                        deskripsi={item.deskripsi}
                        telepon={item.telepon}
                        onShow={showOutletHandler.bind(this, item._id)}
                        onDelete={deleteItemHandler.bind(this, item._id)}
                    />
                ))}
            </div>
            {show &&
                <Modal onClose={hideModalHandler}>
                    <OutletForm submitOutlet={submitOutletHandler} onClose={hideModalHandler} />
                </Modal>
            }
        </div>
    )
}

export default Outlet