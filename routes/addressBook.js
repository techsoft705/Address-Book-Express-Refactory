var express = require('express')
var router = express.Router()
var addressBookModel = require('../models/addressBook')

/* GET todos results. */
router.get('/books', async function (req, res, next) {
  const biodata = await addressBookModel.find({}, { __v: 0 })
  res.status(200).json({ message: 'biodata berhasil ditampilkan', biodata })
})

/* POST todos add. */
router.post('/book', async function (req, res, next) {
  const { name, address, phone } = req.body
  await addressBookModel.create({ name, address, phone })
  res.status(200).json({ message: 'biodata berhasil ditambahkan' })
})

/* GET biodata result. */
router.get('/book/:id', async function (req, res, next) {
  const { id } = req.params
  const biodata = await addressBookModel.findById(id)
  res.status(200).json({ message: 'biodata berhasil ditampilkan', biodata })
})

/* DELETE biodata delete. */
router.delete('/book/:id', async function (req, res, next) {
  const { id } = req.params
  const todo = await addressBookModel.findByIdAndDelete(id)
  if (!todo) {
    res.status(200).json({ message: 'biodata tidak ditemukan' })
  }

  res.status(200).json({ message: 'biodata berhasil dihapus' })
})

/* PUT biodata delete. */
router.put('/book/:id', async function (req, res, next) {
  const { id } = req.params
  const { name, address, phone } = req.body

  const biodata = await addressBookModel.findByIdAndUpdate(id, { name, address, phone })
  if (!biodata) {
    res.status(200).json({ message: 'biodata tidak ditemukan' })
  }

  res.status(200).json({ message: 'biodata berhasil diperbarui' })
})

module.exports = router
