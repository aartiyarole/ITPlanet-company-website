import React from 'react'

export default function SocialLinks() {
  return (
    <>
        <div className="sideWidget">
        <a 
          href="https://www.facebook.com/profile.php?id=61551099553894" 
          target="_blank" 
          className="one" 
          data-aos="fade-in" 
          data-aos-delay="300"
          rel="noopener noreferrer"
        >
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a 
          href="https://www.instagram.com/itplanet.in/" 
          className="two" 
          target="_blank" 
          data-aos="fade-in" 
          data-aos-delay="500"
          rel="noopener noreferrer"
        >
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a 
          href="https://www.linkedin.com/company/it-planet-software-solution/" 
          target="_blank" 
          className="one" 
          data-aos="fade-in" 
          data-aos-delay="900"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a 
          href="https://wa.me/+919766397512?text=I'm%20interested%20in%20your%20services." 
          target="_blank" 
          className="two" 
          data-aos="fade-in" 
          data-aos-delay="700"
          rel="noopener noreferrer"
        >
          <i className="fa fa-whatsapp" aria-hidden="true"></i>
        </a>
      </div>

      <div id="whatsapp" style={{ backgroundSize: 'cover' }}>
        <a 
          href="https://wa.me/+919766397512?text=I'm%20interested%20in%20your%20services." 
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-whatsapp" aria-hidden="true"></i>
        </a>
      </div>
    </>
  )
}

