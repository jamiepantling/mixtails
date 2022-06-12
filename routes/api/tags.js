const express = require('express')
const router = express.Router()
const tagsCtrl = require('../../controllers/api/tags')

// GET /api/tags
router.get('/', tagsCtrl.show)

module.exports = router;