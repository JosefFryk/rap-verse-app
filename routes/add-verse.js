const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const versesController = require('../controllers/add-verse') 

router.get('/', ensureAuth, versesController.getVerse)

router.post('/createVerse', versesController.createVerse)

router.delete('/deleteVerse', versesController.deleteVerse)

module.exports = router