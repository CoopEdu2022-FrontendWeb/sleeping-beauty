const express = require('express')
const router = express.Router()

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

router.get('/', (req, res) => {
  res.send('hellaljksdflkajdskljoworld')
})

router.post('/login', (req, res) => {
  let { uid, pwd } = req.body
  res.send(uid == 'admin' && pwd == 'admin')
})

router.get('/like', (req, res) => {
  let { like } = req.body  // true false
  // to db
  res.send(is_success)
})

module.exports = router