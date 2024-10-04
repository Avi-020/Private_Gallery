import React from 'react'
import vlog1 from "../videos/vlog1.mp4"

function Videos() {
  return (
    <div>
      <video controls width="70%" className="videoPlayer" src={vlog1}></video>

    </div>
  )
}

export default Videos
