import React from 'react'
import BreadcrumbSection from '../components/BreadcrumbSection'
import Accordion from '../components/Accordion';


export default function AnimationSer() {
  const breadcrumbItems = [
    { text: 'Home', link: '/' },
    { text: 'Service Details' }
];
const accordionItems = [
  {
      id: 'One',
      title:'2D Animation for Commercials',
      content: "Create impactful 2D animations for your commercials that convey your message clearly and creatively."
  },
  {
      id: 'Two',
      title: '3D Animation for Product Demos',
      content: "Utilize 3D animation to create realistic product demos that highlight the features and functionality of your products."
  },
  {
      id: 'Three',
      title: 'Explainer Videos with Animation',
      content: 'Enhance your business communications with animated explainer videos that break down complex ideas into simple, digestible concepts.'
  },
  {
      id: 'Four',
      title: ' Animated TV & Film Production',
      content: "Bring your animated characters and stories to life for television shows and feature films with top-tier animation techniques."
  },
  {
      id: 'Five',
      title: '3D Modeling and Animation',
      content:"Create immersive 3D environments and characters that offer rich visual experiences for your videos and games."
  }
];
  return (
    <>
      <BreadcrumbSection title="2D/3D Animation Services" breadcrumbItems={breadcrumbItems}/>
      <div className="service-details-page pt-120 mb-120" id="service-details-section">
          <div className="container">
              <div className="service-details-top-area mb-80">
                  <div className="row g-lg-4 gy-5 align-items-center">
                      <div className="col-lg-6 order-lg-1 order-2 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                          <div className="service-details-top-content">
                              <h2>2D/3D Animation Video Production Services  <span>In Navi Mumbai</span></h2>
                              <h3><a href="/contact">Contact Us</a></h3>
                              <p>At IT Planet Solutions, we provide exceptional 2D and 3D animation video production services. Our team of skilled animators and storytellers work together to craft animations that captivate audiences and communicate your message effectively. Whether it’s for an advertisement, explainer video, or animated film, we bring your ideas to life with cutting-edge animation technology.</p>
                              <p>From character animation to motion graphics and 3D modeling, we handle all aspects of animation to ensure your project stands out. Our animation services cater to a wide range of industries, including marketing, entertainment, education, and more. Let us help you elevate your video production with our professional animation services.</p>
                          </div>
                      </div>
                      <div className="col-lg-6 order-lg-2 order-1 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                          <div className="service-details-img">
                          <img src="assets/img/animation-navi-mumbai.jpg" alt="2d-3d-animation-video-production-in-navi-mumbai" name="2d-3d-animation-video-production-in-navi-mumbai" />
                          </div>
                      </div>
                  </div>
              </div>
              
              <div className="service-details-faq-area wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <div className="row g-lg-4 gy-5 align-items-xl-center">
                      <div className="col-lg-6">
                          <div className="service-details-faq-img">
                          <img src="assets/img/animation-in-vashi.jpg" alt="2d-3d-animation-video-production-services-in-navi-mumbai" name="2d-3d-animation-video-production-services-in-navi-mumbai" />
                          </div>
                      </div>
                      <Accordion items={accordionItems} />
                      
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}


