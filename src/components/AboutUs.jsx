import React from 'react'
import BannerButton from './BannerButton'
export default function AboutUs() {
    const stats = [
        {
          value: 1000,
          unit: "Projects",
          description: "We Have Completed"
        },
        {
          value: 98,
          unit: "%",
          description: "Customer Satisfaction"
        },
        {
          value: 3,
          unit: "Mins",
          description: "Average Answer Time"
        }
      ];
  return (
    <div className="home5-about-section mb-120">
          <div className="container">
            <div className="row mb-40">
              <div 
                className="col-lg-6 wow animate fadeInDown" 
                data-wow-delay="400ms" 
                data-wow-duration="1500ms"
              >
                <div className="section-title5 two">
                  <span className="sub-title5 two">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                      <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
                      </svg>
                      ABOUT US
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                      <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
                      </svg>
                  </span>
                  <h2>Welcome To <span>IT Planet</span></h2>
                  </div>
    
                <div className="about-content">
                  <p>Welcome to IT Planet Software Solution, your trusted partner in digital transformation. Established with a vision to innovate and empower businesses with cutting-edge technology solutions, we specialize in providing a comprehensive suite of services tailored to meet your evolving needs.</p>
                  <p>At IT Planet, we believe in harnessing the power of technology to drive business growth and enhance customer experiences. With a team of dedicated professionals and years of industry experience, we are committed to delivering high-quality solutions that exceed expectations.</p>
    
                  <div className="about-countdown-area">
                    <ul>
                      {stats.map((stat, index) => (
                        <li key={index} className="single-countdown">
                          <div className="content">
                            <div className="number">
                              <h5 className="counter">{stat.value}</h5>
                              <span>{stat.unit}</span>
                            </div>
                            <p>{stat.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
    
              <div className="col-lg-6">
                <div className="about-right">
                  <div 
                    className="about-img wow animate zoomIn" 
                    data-wow-delay="400ms" 
                    data-wow-duration="1500ms"
                  >
                    <img src="assets/img/about3.png" alt="About" />
                  </div>
                  <BannerButton />
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
