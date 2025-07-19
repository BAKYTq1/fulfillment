import React from 'react'
import './H1.scss'

function H1({ h1, color, height, size, items }) {
  return (
    <div style={{ height }} className="h1">
      <h1
        style={{ color, fontSize: size, textAlign: items }}
        dangerouslySetInnerHTML={{ __html: h1 }}
      />
    </div>
  )
}

export default H1
