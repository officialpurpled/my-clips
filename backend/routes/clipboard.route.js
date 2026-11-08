const express = require('express')
const router = express.Router()

const { getClips, updateClips } = require('../controllers/clipboard.controller')

router.get('/get-clips', getClips)
router.post('/update-clips', updateClips)

module.exports = router