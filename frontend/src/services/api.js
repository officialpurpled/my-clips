// const BASE_URI = "http://localhost:3000/api/v1"
const PRODUCTION_URI = "https://my-clips-backend.onrender.com/api/v1"

export const getAllClips = async () => {
  try {
    const response = await fetch(`${PRODUCTION_URI}/get-clips`)

    if (!response.ok) {
      throw new Error('Response Err')
    }

    const data = await response.json()

    return data.clips

  } catch (error) {
    console.log(error.message)
  }
}

export const updateClips = async (newClip) => {
  try {
    if (newClip.trim() === "") {
      throw new Error('Input a value')
    }

    const formatedClip = newClip.trim()

    const response = await fetch(`${PRODUCTION_URI}/update-clips`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ newClip: formatedClip })
    })

    if (!response.ok) {
      throw new Error('Response Err')
    }

    const data = await response.json()

    return data.clips
  } catch (error) {
    console.log('Error:', error.message)
  }
}

