import React, { useEffect, useState } from 'react'
import OutletForm from './OutletForm';
import OutletItem from './OutletItem';

const Outlet = () => {
    const [show, setShow] = useState(false);
    const [outlet, setOutlet] = useState([]);

    useEffect(() => {
        // fetch('http://localhost:8000/outlet')
        //     .then(response => response.json())
        //     .then(result => setOutlet(result.outlet))
        fetchOutlet();
    }, []);

    const showFormHandler = () => {
        setShow(prev => !prev);
    }

    const fetchOutlet = async () => {
        const outlet = await fetch('http://localhost:8000/outlet');
        const response = await outlet.json();
        setOutlet(response.outlet);
    }

    const submitOutletHandler = async (outlet) => {
        const outletInput = {
            nama: outlet.nama,
            alamat: outlet.alamat,
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
            console.log(response);
        } catch (err) {
            throw new Error('Outlet gagal dibuat');
        }
    }

    return (
        <div>
            <p>outlet list</p>
            {outlet.map(item => (
                <OutletItem
                    key={item._id.toString()}
                    name={item.nama}
                    alamat={item.alamat}
                    telepon={item.telepon}
                />
            ))}
            <button onClick={showFormHandler}>buat outlet</button>
            {show && <OutletForm submitOutlet={submitOutletHandler} />}
        </div>
    )
}

export default Outlet