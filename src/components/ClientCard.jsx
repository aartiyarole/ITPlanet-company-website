import React from 'react'

export default function ClientCard({ imageSrc, altText , customClass }) {
  return (
    <div className="col-lg-2 col-6 p-2 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1600ms">
      <div className="card">
        <div className={`card-body p-3 ${customClass}`} >
          <img src={imageSrc} className="img-fluid" alt={altText} name={altText} />
        </div>
      </div>
    </div>
  )
}
