const express = require('express');
const router = express.Router();

const OutletController = require('../controllers/OutletController')

router.get('/outlet', OutletController.getOutlet);

router.post('/outlet', OutletController.createOutlet);

module.exports = router