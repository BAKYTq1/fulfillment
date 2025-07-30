import React from 'react'
import './ServiceCards.scss'


function ProcessingCard({children}) {
  return (
    <div className="service-cards container">
      {children.map((service, index) => (
        <div key={index} className="service-card">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ProcessingCard
