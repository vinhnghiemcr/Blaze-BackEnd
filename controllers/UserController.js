const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      raw: true
    })
    if (
      user &&
      (await middleware.comparePassword(req.body.password, user.passwordDigest))
    ) {
      let payload = {
        id: user.id,
        email: user.email,
        name: user.name,
        trailName: user.trailName
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { email, password, trailName, name } = req.body
    console.log(password, 'PASSWORD')
    let passwordDigest = await middleware.hashPassword(password)
    console.log(passwordDigest, 'PASSWORD DIGEST')
    const user = await User.create({ email, passwordDigest, name, trailName })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const UpdateProfile = async (req, res) => {
  try {
    const { newName, newTrailName } = req.body
    const { password, newPassword } = req.body
    const user = await User.findByPk(req.params.userId)
    if (
      user &&
      (await middleware.comparePassword(
        password,
        user.dataValues.passwordDigest
      ))
    ) {
      if (newPassword) {
        let passwordDigest = await middleware.hashPassword(newPassword)
        await user.update({ passwordDigest })
      }
      if (newName) {
        await user.update({ name: newName })
      }
      if (newTrailName) {
        await user.update({ trailName: newTrailName })
      }
      await user.save()
      return res.send({ status: 'Ok', payload: user })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {}
}

const DeleteUser = async (req, res) => {
  try {
    const { password } = req.body
    const userId = parseInt(req.params.userId)
    console.log(userId, password, 'UserId Password')
    const user = await User.findByPk(userId)
    if (
      user &&
      (await middleware.comparePassword(
        password,
        user.dataValues.passwordDigest
      ))
    ) {
      await User.destroy({ where: { id: userId } })
      return res.send({
        status: 'Ok',
        msg: `User has been deleted with ID: ${userId}`
      })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {}
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Login,
  Register,
  UpdateProfile,
  CheckSession,
  DeleteUser
}
