const BASE_URI = "http://localhost:3000/api/v1"

export const getAllClips = async () => {
  try {
    const response = await fetch(`${BASE_URI}/get-clips`)

    if (!response.ok) {
      throw new Error('Response Err')
    }

    const data = await response.json()

    return data.clips

  } catch (error) {
    console.log(error.message)
  }
}

// export const updateClips = async (newClip) => {
//   try {
//   } catch (error) {
//   }
// }

