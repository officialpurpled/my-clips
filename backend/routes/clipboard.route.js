const express = require('express')
const router = express.Router()

const { getClips, addClip, deleteClip } = require('../controllers/clipboard.controller')

router.get('/get-clips', getClips)
router.post('/add-clip', addClip)
router.delete('/delete-clip/:id', deleteClip)

module.exports = router