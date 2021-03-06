const express = require('express')
const router = express.Router()
const cocktailsCtrl = require('../../controllers/api/cocktails')

// GET /api/cocktails
router.get('/', cocktailsCtrl.index)
// DELETE /api/cocktails
router.delete('/', cocktailsCtrl.deleteCocktail)

module.exports = router;