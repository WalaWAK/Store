const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
const videoGames = require('./models/video-games')

// Set up middleware
app.use(methodOverride('_method'))
app.use((req, res, next) => {
    console.log('I run for all routes')
    next()
})

app.use(express.urlencoded({extended:false}))

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Setting up Mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})
mongoose.set('strictQuery', true)

app.listen(port, function () {
    console.log("listening")
});