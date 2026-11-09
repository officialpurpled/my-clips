import { useState } from "react"
import Clips from "../components/Clips"
import Navbar from "../components/NavBar"

const clipArr = ['hell0', 'hell1', 'hell2', 'hell3', 'hell4']

const HomePage = () => {
  const [input, setInput] = useState('')
  const [clips, setClips] = useState(clipArr)

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