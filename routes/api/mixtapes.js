const express = require('express')
const router = express.Router()
const mixtapesCtrl = require('../../controllers/api/mixtapes')

// GET /api/mixtapes
router.get('/', mixtapesCtrl.index)
router.get("/:id", mixtapesCtrl.show)
router.post("/update/:id", mixtapesCtrl.addMood)

module.exports = router;