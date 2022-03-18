const mongoose = require('mongoose')

const VerseSchema = new mongoose.Schema({
  verse: {
    type: String,
    required: true,
  },
    name: {
    type: String,
    required: true,
  },
  microsoftId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Verse', VerseSchema)
