let { clips } = require('../config/mockDB')

const getClips = async (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      message: 'Fetched successfully',
      clips: clips
    })
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      error: error.message,
      message: 'Unexpected Error, Please refresh'
    })
  }
}

const addClip = (req, res) => {
  try {
    const { newClip } = req.body

    if (!newClip) {
      return res.status(404).json({
        status: 'failed',
        message: 'No Changes Occured'
      })
    }

    clips.push(newClip)

    return res.status(200).json({
      status: 'success',
      message: 'Updated successfully',
      clips: clips
    })

  } catch (error) {
    res.status(500).json({
      status: 'failed',
      error: error.message,
      message: 'Unexpected error, please refresh'
    })
  }
}

const deleteClip = (req, res) => {
  try {
    const clip = req.params.id

    if (!clip) {
      return res.status(404).json({
        status: 'failed',
        message: 'No Changes Occured'
      })
    }
    const indexNum = Number(req.params.id)

    const newArr = clips.filter((clip, ind) => ind !== indexNum)
    clips = newArr

    return res.status(200).json({
      status: 'success',
      message: 'Deleted successfully',
      clips: clips
    })

  } catch (error) {
    res.status(500).json({
      status: 'failed',
      error: error.message,
      message: 'Unexpected error, please refresh'
    })
  }
}

module.exports = {
  getClips,
  addClip,
  deleteClip
}