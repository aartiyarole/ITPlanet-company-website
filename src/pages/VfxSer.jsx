import React from 'react'
import BreadcrumbSection from '../components/BreadcrumbSection'
import Accordion from '../components/Accordion';

export default function VfxSer() {
  const breadcrumbItems = [
    { text: 'Home', link: '/' },
    { text: 'Service Details' }
];
const accordionItems = [
  {
      id: 'One',
      title:'Corporate VFX Production',
      content: " Enhance corporate videos with professional VFX that help communicate your message powerfully and engagingly."
  },
  {
      id: 'Two',
      title: 'VFX for Commercials',
      content: "Add cinematic flair to your commercials with VFX that captures attention and delivers a lasting impression."
  },
  {
      id: 'Three',
      title: 'Music Video VFX',
      content: 'Bring music videos to life with dynamic VFX that complement the music and enhance the visual experience.'
  },
  {
      id: 'Four',
      title: ' Film & TV VFX',
      content: "Create high-quality VFX for movies and TV shows that captivate audiences and enhance storytelling."
  },
  {
      id: 'Five',
      title: 'Interactive VFX for Web & Games',
      content:"Bring your web content or games to life with interactive VFX that improve user experience and engagement."
  }
];
  return (
    <>
      <BreadcrumbSection title="VFX Video Production Services" breadcrumbItems={breadcrumbItems}/>
      <div className="service-details-page pt-120 mb-120" id="service-details-section">
          <div className="container">
              <div className="service-details-top-area mb-80">
                  <div className="row g-lg-4 gy-5 align-items-center">
                      <div className="col-lg-6 order-lg-1 order-2 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                          <div className="service-details-top-content">
                              <h2>VFX Video Production Services  <span>In Navi Mumbai</span></h2>
                              <h3><a href="/contact">Contact Us</a></h3>
                              <p>At IT Planet Solutions, we offer top-tier VFX video production services to bring your creative vision to life. Our VFX artists and video editors work hand-in-hand to craft visually stunning effects that can transform ordinary footage into something extraordinary. From CGI elements to visual enhancements, we deliver results that are both realistic and imaginative.</p>
                              <p>We specialize in everything from compositing and green screen effects to motion tracking and 3D modeling. Whether you're creating an advertisement, a music video, a feature film, or a corporate video, our VFX services will elevate your production value, making it more compelling and engaging.</p>
                          </div>
                      </div>
                      <div className="col-lg-6 order-lg-2 order-1 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                          <div className="service-details-img">
                          <img src="assets/img/vfx-in-navi-mumbai.jpg" alt="vfx-video-production-in-navi-mumbai" name="vfx-video-production-in-navi-mumbai" />
                          </div>
                      </div>
                  </div>
              </div>
              
              <div className="service-details-faq-area wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <div className="row g-lg-4 gy-5 align-items-xl-center">
                      <div className="col-lg-6">
                          <div className="service-details-faq-img">
                          <img src="assets/img/vfx-vashi.png" alt="vfx-video-production-services-in-navi-mumbai" name="vfx-video-production-services-in-navi-mumbai" />
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

