import { useEffect, useState } from "react"

import Clips from "../components/Clips"
import Navbar from "../components/NavBar"

import { getAllClips } from "../services/api"

const clipArr = ['hell0', 'hell1', 'hell2', 'hell3', 'hell4']

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

  const handleSubmit = (e) => {
    e.preventDefault()

    setClips([...clips, input])
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