const express = require('express');
const { generateInvoice } = require('../controllers/invoiceController');
const router = express.Router();

router.get('/:orderId', generateInvoice);

module.exports = router;
