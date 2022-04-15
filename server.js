const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const UserRouter = require('./routes/UserRouter')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.get('/', (req, res) => res.send('I am root'))
app.use('/user', UserRouter)
app.use('/trail', TrailRouter)
app.use('/state', StateRouter)
app.use('/comment', CommentRouter)

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
