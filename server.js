const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('morgan')

const AppRouter = require('./routes/AppRouter')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.get('/', (req, res) => res.send('I am root'))
app.use('/api', AppRouter)
app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
