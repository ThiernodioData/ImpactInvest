const express = require('express');
const router = express.Router();
const investmentController = require('../controllers/investmentController');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, investmentController.makeInvestment);
router.get('/', authMiddleware, investmentController.getInvestments);

module.exports = router;