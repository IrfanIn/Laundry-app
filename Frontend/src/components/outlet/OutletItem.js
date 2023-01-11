import React from 'react'

const OutletItem = ({ name, telepon, alamat }) => {
    return (
        <div>
            <p>{name} <span>{telepon}</span></p>
            <small><i>{alamat}</i></small>
        </div>
    )
}

export default OutletItem