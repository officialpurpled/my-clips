const getClips = (req, res) => {
  res.json('get clips')
  // console.log('hello get')
}

const updateClips = (req, res) => {
  res.json('update clips')
}

module.exports = {
  getClips,
  updateClips
}