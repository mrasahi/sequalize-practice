const router = require('express').Router()
const { User, Pet } = require('../models')

// GET all users
router.get('/users', (req, res) => {
  User.findAll()
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

// GET one user
router.get('/users/:id', (req, res) => {
  User.findOne({ where: { id: req.params.id }, include: [Pet] })
    .then(user => res.json(user))
    .catch(err => console.log(err))
})

// POST one user
router.post('/users', (req, res) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(err => console.log(err))
})

// PUT one user
router.put('/users/:id', (req, res) => {
  User.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// DELETE one user
router.delete('/users/:id', (req, res) => {
  User.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

router.post('/users/login', (req, res) => {
  User.findOne({ where: req.body })
    .then(user => res.json(user))
    .catch(err => console.log(err))
})

module.exports = router