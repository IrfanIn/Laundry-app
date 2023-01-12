const Outlet = require('../models/Outlet');

exports.getOutlet = async (req, res, next) => {
    try {
        const outlet = await Outlet.find();
        res.status(200).json({ message: 'fetch data outlet', outlet })
    } catch (err) {
        throw new Error('failed to fetch.');
    }
}

exports.createOutlet = async (req, res, next) => {
    const outlet = new Outlet({
        nama: req.body.nama,
        alamat: req.body.alamat,
        deskripsi: req.body.deskripsi,
        telepon: req.body.telepon
    })
    try {
        await outlet.save();
        res.status(201).json({
            message: 'Outlet created.',
            outlet
        })
    } catch (err) {
        throw new Error('created outlet failed');
    }
}

exports.deleteOutlet = async (req, res, next) => {
    const outletId = req.params.outletId;
    try {
        // const outlet = await Outlet.findById(outletId);
        await Outlet.findByIdAndRemove(outletId);
        res.status(200).json({ message: 'delete outlet success.' })
    } catch (err) {
        throw new Error('Delete outlet failed.');
    }
}