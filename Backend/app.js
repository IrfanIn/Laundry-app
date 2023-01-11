
//dependency
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

// rooutes
const laundryRoutes = require('./routes/OutletRoutes');

const uri = "mongodb+srv://vermouth:QVzecHx76LrDA2Kl@cluster0.xmat8lz.mongodb.net/laundry?retryWrites=true&w=majority"

app.use(bodyparser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.use(laundryRoutes);

mongoose
    .connect(uri)
    .then(() => {
        app.listen(8000)
    })
    .catch(err => console.log(err))
