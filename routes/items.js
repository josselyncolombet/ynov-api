const express = require('express')
const router = express.Router()
const modelItem = require('../models/item')
const item = require('../models/item')


//Déclaration d'une route http://localhost:3000/api/items 
router.get('/', async (req, res) => {
    const items = await modelItem.find({})
    res.json(items)
})

router.post('/', async (req, res) => {
    const newItem = new modelItem({name: req.body.name})
    await newItem.save()
    res.status(201).json(newItem)
})

module.exports = router

