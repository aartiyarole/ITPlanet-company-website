import React from 'react'
import BreadcrumbSection from '../components/BreadcrumbSection';
import DevTools from '../components/DevTools';
import Accordion from '../components/Accordion';
export default function MernStack() {
    const breadcrumbItems = [
        { text: 'Home', link: '/' },
        { text: 'Mern Stack' }
      ];

      const accordionItems = [
        {
          id: 'One',
          title: 'MongoDB',
          content: 'Understand NoSQL databases, create schemas, and perform CRUD operations using MongoDB.',
        },
        {
          id: 'Two',
          title: 'Express.js',
          content: 'Learn how to create a server using Express.js, handle routing, and work with middleware to build a strong backend.'
        },
        {
          id: 'Three',
          title: 'React.js',
          content: 'Master the essentials of React, including components, hooks, state management, and front-end development'
        },
        {
          id: 'Four',
          title: 'Node.js',
          content: 'Learn server-side JavaScript using Node.js, handle asynchronous programming, and manage APIs and web services.'
        },
        {
          id: 'Five',
          title: 'Integration',
          content: 'How to integrate MongoDB, Express.js, React, and Node.js into one cohesive full-stack application.'
        }
      ];

      const handleApplyNow = () => {
        // Handle apply now button click
        // You can add your modal logic here
    };

      
  return (
    <>
        <BreadcrumbSection title="Mern Stack" breadcrumbItems={breadcrumbItems}/>
        <div className="service-details-page pt-120 mb-120" id="service-details-section">
            <div className="container">
                <div className="service-details-top-area mb-80">
                <div className="row g-lg-4 gy-5 align-items-center">
                    <div className="col-lg-6 order-lg-1 order-2 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="service-details-top-content">
                        <h2>Mern Stack Course <span>In Navi Mumbai</span></h2>
                        <p>The MERN Stack (MongoDB, Express.js, React, and Node.js) is one of the most popular web development stacks, enabling developers to build full-stack web applications with JavaScript from front to back. This course will guide you through the essentials of the MERN stack, helping you develop dynamic, scalable, and high-performance web applications</p>
                    </div>
                    </div>
                    <div className="col-lg-6 order-lg-2 order-1 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="service-details-img">
                        <img 
                        src="/assets/img/mern.jpg" 
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
                        <Accordion  items={accordionItems} />
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


