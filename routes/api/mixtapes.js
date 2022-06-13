const express = require('express')
const router = express.Router()
const mixtapesCtrl = require('../../controllers/api/mixtapes')

// GET /api/mixtapes
router.get('/', mixtapesCtrl.show)
// POST /api/mixtapes
router.post('/', mixtapesCtrl.update)

module.exports = router;