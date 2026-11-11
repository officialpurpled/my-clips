const express = require('express')
const router = express.Router()

const { getClips, updateClips } = require('../controllers/clipboard.controller')

router.get('/get-clips', getClips)
router.post('/update-clips', updateClips)

// to be added
// router.delete('/delete-clip/:id', deleteClip)

module.exports = router