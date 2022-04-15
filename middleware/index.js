const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SALT_ROUNDS = process.env.SALT_ROUNDS
const APP_SECRET = process.env.APP_SECRET

const hashPassword = async (password) => {
    let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
    return hashedPassword
}

const comparePassword = async (passWord, storedPassword) => {
    let passwordMatch = await bcrypt.compare(passWord, storedPassword)
    return passwordMatch
}

const createToken = (payload) => {
    let token = jwt.sign(payload, APP_SECRET)
    return token
}

const stripToken = (req, res, next) => {
    try {
        const token = req.headers['authorization'].split(' ')
        if(token) {
            res.locals.token = token
            return next()
        }
    } catch (error) {
        res.status(401).send({status: 'Error', msg: 'Unauthorized'})
    }
}

const verifyToken = (req, res, next) => {
    const { token } = res.locals
    let payload = jwt.verify(token, APP_SECRET)
    if(payload) {
        res.locals.payload = payload
        return next()
    }
    res.status(401).send({status: 'Error', msg: 'Unauthorized'})
}
module.exports = {
    stripToken,
    verifyToken,
    createToken,
    comparePassword,
    hashPassword
}