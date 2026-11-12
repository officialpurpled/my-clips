const Clips = ({ clip, index, handleDelete }) => {
  return (
    <div className="clip-item">
      <div className="clip-text">
        {clip}
      </div>
      <div className="clip-action">
        <button className="clip-btn copy" onClick={() => navigator.clipboard.writeText(clip)}>COPY</button>
        <button className="clip-btn delete" onClick={() => { handleDelete(index) }}>DELETE</button>
      </div>
    </div>
  )
}

export default Clips