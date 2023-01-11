import React, { useRef } from 'react'

const OutletForm = props => {
    const namaRef = useRef();
    const alamatRef = useRef();
    const teleponRef = useRef();

    const submitOutletHandler = event => {
        event.preventDefault();
        const outletInput = {
            nama: namaRef.current.value,
            alamat: alamatRef.current.value,
            telepon: teleponRef.current.value
        }
        props.submitOutlet(outletInput);
    }

    return (
        <form onSubmit={submitOutletHandler}>
            <div>
                <label htmlFor="nama">nama outlet</label>
                <input type="text" name='nama' id='nama' ref={namaRef} />
            </div>
            <div>
                <label htmlFor="alamat">alamat outlet</label>
                <input type="text" name='alamat' id='alamat' ref={alamatRef} />
            </div>
            <div>
                <label htmlFor="telepon">telepon outlet</label>
                <input type="text" name='telepon' id='telepon' ref={teleponRef} />
            </div>
            <button type="submit">create</button>
        </form>
    )
}

export default OutletForm