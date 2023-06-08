const express = require('express')
const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({ extended: true }))

const db = require('../db');

router.get('/', (req, res) => {
  res.send('hellaljksdflkajdskljoworld')
})

//if success, returns uid, else returns -1
router.post('/login', (req, res) => {
  let { uid,pwd } = req.body
  console.log(req.body);
  db.query('SELECT * FROM users WHERE username = ? AND password = ?', [uid , pwd], (err, data) => {
    console.log(uid);
    console.log(data)
    if (data.length) {
      console.log(data)
      res.send({
        token: true,
        user_id: data[0].id
      })
    }else console.log("密码错误");
  })
})
// else  db.query('SELECT * FROM users WHERE username = ?' , [uid], (err, data) =>{
//   if (data.length) {
//     console.log(data)
//     res.send({
//       error_type = "uid_mis"
//     })
// }else res.send({
//   error_type = "pwd_mis"})
// console.log("密码错误");
// })
// })

router.post('/like', (req, res) => {
  let { content_id } = req.body  // true false
  // to db
  res.send(is_success)
})


router.get('/detail/:id', (req, res) => {
  let post_id = req.params.id
  res.send(db.get_detail(post_id));
})

router.post('/post', (req, res) => {
  let {uid, title, tag, content} = req.body;
  let result = db.post(uid, title,tag, content);
  res.send(result);
})
module.exports = router