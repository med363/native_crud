const express = require('express')
const {GetUsers, GetUsersByID ,AddUsers, UpdateUsers }= require('../controllers/users')
const router = express.Router()

// router.get('/users',GetUsers)
// router.get('/users/:id',GetUsersByID)
// router.put('/users/:id',UpdateUsers)

// router.post('/users',AddUsers)
// on remarque que get all et post sont commun par url

router.route('/users').get(GetUsers).post(AddUsers)
router.route('/users/:id').get(GetUsersByID).put(UpdateUsers)
module.exports= router