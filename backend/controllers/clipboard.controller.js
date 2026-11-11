const { clips } = require('../config/mockDB')

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

const updateClips = (req, res) => {
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

module.exports = {
  getClips,
  updateClips
}