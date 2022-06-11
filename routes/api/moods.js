const express = require('express')
const router = express.Router()
const moodsCtrl = require('../../controllers/api/moods')

// GET /api/moods
router.get('/', moodsCtrl.show)

module.exports = router;