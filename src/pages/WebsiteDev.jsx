import React from 'react'
import BreadcrumbSection from '../components/BreadcrumbSection'
import Accordion from '../components/Accordion';
import DevTools from '../components/DevTools';
export default function WebsiteDev() {
  const breadcrumbItems = [
    { text: 'Home', link: '/' },
    { text: 'Website Development Course' }
];

const accordionItems = [
  {
      id: 'One',
      title: 'HTML & CSS',
      content: 'Master the building blocks of the web, from basic page structure to advanced styling techniques'
  },
  {
      id: 'Two',
      title: 'Bootstrap',
      content: 'Accelerate front-end design with Bootstrap, a powerful framework for creating responsive, mobile-first websites'
  },
  {
      id: 'Three',
      title: 'JavaScript',
      content: 'Add interactivity and dynamic elements to your websites, enhancing user experience.'
  },
  {
      id: 'Four',
      title: 'PHP',
      content: 'Learn how to build dynamic, server-side applications with PHP, one of the most widely-used web development languages'
  },
  {
      id: 'Five',
      title: 'Responsive Design',
      content: 'Design websites that adapt seamlessly to different devices and screen sizes.'
  }
];

const handleApplyNow = () => {
  // Handle apply now button click
  // You can add your modal logic here
};
  return (
    
      <>
                  <BreadcrumbSection title="Website Development Course" breadcrumbItems={breadcrumbItems}/>
                  <div className="service-details-page pt-120 mb-120" id="service-details-section">
                      <div className="container">
                          <div className="service-details-top-area mb-80">
                              <div className="row g-lg-4 gy-5 align-items-center">
                                  <div className="col-lg-6 order-lg-1 order-2 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                      <div className="service-details-top-content">
                                          <h2>Website Development Course <span>In Navi Mumbai</span></h2>
                                          <p>In the digital age, a well-designed website is essential for any business. At IT Planet Solutions, we offer a comprehensive Website Development course designed to equip you with the knowledge and skills required to build modern, responsive, and user-friendly websites. Whether you're a beginner or looking to enhance your web development expertise, this course will take you through every stage of the process.</p>
                                      </div>
                                  </div>
                                  <div className="col-lg-6 order-lg-2 order-1 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                                      <div className="service-details-img">
                                          <img 
                                              src="/assets/img/web-design-course.png" 
                                              alt="app-development-in-navi-mumbai" 
                                              name="app-development-in-navi-mumbai"
                                          />
                                      </div>
                                  </div>
                              </div>
                          </div>
                          
                          <div className="service-details-faq-area wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                              <div className="row g-lg-4 gy-5 align-items-xl-center">
                                  <div className="col-lg-6">
                                      <div className="service-details-faq-img">
                                          <img 
                                              src="/assets/img/mobile-application-development-company-in-navi-mumbai.jpg" 
                                              alt="mobile-application-development-company-in-navi-mumbai" 
                                              name="mobile-application-development-company-in-navi-mumbai"
                                          />
                                      </div>
                                  </div>
                                  <Accordion items={accordionItems} />
                                  <div className="col-md-12 d-flex justify-content-center">
                                      <button 
                                          type="button" 
                                          className="btn btn-primary" 
                                          data-bs-toggle="modal" 
                                          data-bs-target="#exampleModal"
                                          onClick={handleApplyNow}
                                      >
                                          Apply Now
                                      </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="service-details-tools-section mb-120">
                      <DevTools />
                  </div>
              </>
      
        
  )
}
