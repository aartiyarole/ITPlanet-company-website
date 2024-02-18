import React from 'react'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import ServiceSection from '../components/ServiceSection';
import ClientSection from '../components/ClientSection';
import TestimonialSection from '../components/TestimonialSection';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
export default function Home() {
  const services = [
    "Website Development",
    "Mobile Application Development",
    "Graphic Designing",
    "Digital Marketing",
    "Website Hosting Services",
    "Video Production",
    "Product Shooting Services",
    "Video Editing Services",
    "VFX Video Production Services",
    "2D/3D Animation Services",
    "Printing Services"
  ];
  return (
    <div>
      <Hero />
      <div className="home1-banner-bottom mb-120">
        <div className='marquee_text'>
          <Marquee items={services} />
        </div>
        
      </div>
      <div className="home2-service-section two scroll-margin mb-120" id="service-section" style={{ paddingTop: 0 }}>
        <ServiceSection />
      </div>
      <div className="partnership-area mb-120" id="partnership-section">
        <ClientSection />
      </div>

      <AboutUs />
    
      
      <section className="testimonialSection gradiantBlock mb-50">
        <TestimonialSection />
      </section>
      
      <div className="partnership-area mb-120" id="partnership-section">
        <ContactUs />
      </div>
    </div>
  )
}
