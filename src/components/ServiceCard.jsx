import React from 'react'

export default function ServiceCard({ image, title, description, link }) {
  return (
    <div className="col-lg-4 p-3 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
      <div className="card it-planet-website-development-services">
        <div className="card-body p-2">
          <center>
            <img src={image} className="img-fluid" alt={title} name={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <a className="explore-btn" href={link}>
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
              </svg>
            </a>
          </center>
        </div>
      </div>
    </div>
  )
}
