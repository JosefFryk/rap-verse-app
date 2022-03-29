const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const connectDB = require('./config/database')
const authRoutes = require('./routes/auth')
const homeRoutes = require('./routes/home')
const verseRoutes = require('./routes/add-verse')
const flash = require('express-flash')

require('dotenv').config({path: './config/.env'})
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(
    session({
      secret: 'topkek',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ mongoUrl: process.env.DB_STRING, }),
    })
  )

  //passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use('/', homeRoutes)
app.use('/auth', authRoutes)
app.use('/add-verse', verseRoutes)

app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})   