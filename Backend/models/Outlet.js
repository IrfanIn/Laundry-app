const mongoose = require('mongoose');
const { Schema } = mongoose;

const OutletSchema = new Schema({
    nama: {
        type: String,
        required: true
    },
    alamat: {
        type: String,
        required: true
    },
    deskripsi: {
        type: String,
        required: true
    },
    telepon: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Outlet', OutletSchema)