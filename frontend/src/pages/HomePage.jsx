import { useEffect, useState } from "react"

import Clips from "../components/Clips"
import Navbar from "../components/NavBar"

import { getAllClips, addNewClip, deleteClip } from "../services/api"

const clipArr = ['Error fetching clips from clipboard']

const HomePage = () => {
  const [input, setInput] = useState('')
  const [clips, setClips] = useState([])

  useEffect(() => {
    loadClips()
  }, [])

  const handleDelete = async (key) => {
    const newClips = await deleteClip(key)

    setClips([...newClips])
  }

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

    const newClips = await addNewClip(input)

    if (!newClips || newClips.length === 0) {
      console.log('err to add')
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
          {clips.map((clip, index) => <Clips key={index} clip={clip} index={index} handleDelete={handleDelete} />)}
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