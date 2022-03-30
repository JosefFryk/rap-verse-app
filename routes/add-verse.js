const express = require('express')
const router = express.Router()
const versesController = require('../controllers/add-verse') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')


router.get('/', ensureAuth, versesController.getVerse)

router.post('/createVerse', versesController.createVerse)

router.delete('/deleteVerse', versesController.deleteVerse)

module.exports = router



