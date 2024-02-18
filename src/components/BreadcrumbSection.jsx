import React from 'react'
import { Link } from 'react-router-dom';
export default function BreadcrumbSection({ title, breadcrumbItems }){
  return (
    <div style={{ paddingTop: '81px' }}>
      <div 
        className="breadcrumb-section" 
        style={{
          backgroundImage: "url(/assets/img/innerpage/breadcrumb-bg1.png), linear-gradient(180deg, #121212 0%, #121212 100%)",
          paddingTop: "100px"
          
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-wrapper">
                <div className="banner-content">
                  <ul className="breadcrumb-list">
                    {breadcrumbItems.map((item, index) => (
                      <li key={index}>
                        {item.link ? (
                          <Link to={item.link}>{item.text}</Link>
                        ) : (
                          item.text
                        )}
                      </li>
                    ))}
                  </ul>
                  <h1>{title}</h1>
                </div>
                <div className="scroll-down-btn">
                  <a href="#service-details-section">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="29" viewBox="0 0 19 29">
                      <path d="M9.5 0V28M9.5 28C10 24.3333 12.4 17.1 18 17.5M9.5 28C8.5 24.1667 5.4 16.7 1 17.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}