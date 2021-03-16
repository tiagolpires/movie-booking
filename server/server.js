const express = require('express')
const app = express()
const cors = require('cors')
const theaterRoute = require('./src/routes/theaterRoute')
const userRoute = require('./src/routes/userRoute')
const seatRoute = require('./src/routes/seatRoute')

app.use(cors())
app.use(express.json())

app.use('/theater', theaterRoute)
app.use('/user', userRoute)
app.use('/seat', seatRoute)

app.listen(3001, () => {
    console.log('Server running on 3001')
})
