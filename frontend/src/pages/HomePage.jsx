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
        <h3>Welcome to Cloud Clipboard</h3>
        <p>Your cloud clipboard. Save snippets, links and notes, then copy them on any device.</p>

        <div className="clip-container">
          <div className="clip-header">
            <h4>Your Clips</h4>
            <button title="Refresh" onClick={loadClips}>REFRESH</button>
          </div>
          <div className="clip-body">
            {!clips || clips.length === 0 && <p>You dont have any clip yet.</p>}
            {clips.map((clip, index) => <Clips key={index} clip={clip} index={index} handleDelete={handleDelete} />)}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <input type="text"
            placeholder="Add a new clip..."
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
              // console.log(e.target.value)
            }}
          />
          <button title="paste"> PASTE </button>
          <button title="send" type="submit"> UPLOAD </button>
        </form>
      </main>

      <div className="footer-container">
        <footer>
          <p>@ 2026 Clip Online. All right reserved</p>
          <p>Built by Purple Dragon Official. v1.0.0</p>
        </footer>

        <div className="socials">
          <div>
            <a>
              <i>Logo</i>
              <p>Text</p>
            </a>
          </div>
          <div>
            <a>
              <i>Logo</i>
              <p>Text</p>
            </a>
          </div>
          <div>
            <a>
              <i>Logo</i>
              <p>Text</p>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage