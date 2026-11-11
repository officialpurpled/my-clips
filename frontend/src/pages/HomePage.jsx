import { useEffect, useState } from "react"

import Clips from "../components/Clips"
import Navbar from "../components/NavBar"

import { getAllClips, updateClips } from "../services/api"

const clipArr = ['Error fetching clips from clipboard']

const HomePage = () => {
  const [input, setInput] = useState('')
  const [clips, setClips] = useState([])

  useEffect(() => {
    loadClips()
  }, [])

  const loadClips = async () => {
    const fetchClip = await getAllClips()

    if (!fetchClip) {
      setClips([...clips, ...clipArr])
    }

    console.log(fetchClip)
    setClips([...clips, ...fetchClip])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newClips = await updateClips(input)

    if (!newClips || newClips.length === 0) {
      console.log('err to update')
      return
    }

    setClips([...newClips])
    setInput('')
  }

  return (
    <>
      <Navbar />
      <main>
        <div className="clip-container">
          {clips.map((clip, index) => <Clips key={index} clip={clip} />)}
        </div>

        <form onSubmit={handleSubmit}>
          <input type="text"
            placeholder="Enter your clip here..."
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
              // console.log(e.target.value)
            }}
          />
          <button type="submit"> UPLOAD </button>
        </form>
      </main>
    </>
  )
}

export default HomePage