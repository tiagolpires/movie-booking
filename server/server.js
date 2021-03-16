const express = require('express')
const app = express()
const cors = require('cors')
const theaterRoute = require('./src/routes/theaterRoute')
const userRoute = require('./src/routes/userRoute')

app.use(cors())
app.use(express.json())

app.use('/theater', theaterRoute)
app.use('/user', userRoute)

app.listen(3001, () => {
    console.log('Server running on 3001')
})
