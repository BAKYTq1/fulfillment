import React from 'react'
import './YoutubeCard.scss'

const YoutubeCard = ({video}) => {
  return (
    <div className="youtube-card">
      <div className="logo-overlay">
      </div>
      <div className="video-wrapper">
        <iframe
          src={video}
          title="ПРИЕМ ТОВАРА"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default YoutubeCard
