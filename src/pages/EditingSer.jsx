import React from 'react'
import BreadcrumbSection from '../components/BreadcrumbSection'
import Accordion from '../components/Accordion';
export default function EditingSer() {
  const breadcrumbItems = [
    { text: 'Home', link: '/' },
    { text: 'Service Details' }
  ];
  const accordionItems = [
    {
        id: 'One',
        title:'Corporate Video Editing',
        content: "  Create professional corporate videos that communicate your brand values and company message."
    },
    {
        id: 'Two',
        title: 'Promotional Video Editing',
        content: "Edit high-impact promotional videos that grab attention and drive customer engagement."
    },
    {
        id: 'Three',
        title: 'YouTube Video Editing',
        content: ' Enhance your YouTube content with engaging editing that attracts more views and subscribers.'
    },
    {
        id: 'Four',
        title: '  Social Media Video Editing',
        content: "Create attention-grabbing video content for platforms like Instagram, Facebook, and TikTok."
    },
    {
        id: 'Five',
        title: 'Event Video Editing',
        content:"Edit event videos to create memorable highlights and storytelling moments for your brand or occasion."
    }
  ];
  return (
    <>
      <BreadcrumbSection title="Video Editing Services" breadcrumbItems={breadcrumbItems}/>
      <div className="service-details-page pt-120 mb-120" id="service-details-section">
          <div className="container">
              <div className="service-details-top-area mb-80">
                  <div className="row g-lg-4 gy-5 align-items-center">
                      <div className="col-lg-6 order-lg-1 order-2 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                          <div className="service-details-top-content">
                              <h2>Video Editing Services  <span>In Navi Mumbai</span></h2>
                              <h3><a href="/contact">Contact Us</a></h3>
                              <p>At IT Planet Solutions, we offer professional video editing services designed to turn your raw footage into compelling content that engages your audience. Whether you're producing corporate videos, social media content, or promotional material, our team ensures each video is polished and impactful. We use state-of-the-art editing tools to provide high-quality videos that are visually stunning and effectively communicate your message.</p>
                              <p>We understand the importance of captivating video content in today's digital world. Our editing services cover everything from color grading to adding visual effects, sound design, transitions, and titles. We deliver videos that are tailored to meet your specific needs, ensuring your content stands out in a crowded market.</p>
                          </div>
                      </div>
                      <div className="col-lg-6 order-lg-2 order-1 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                      <div class="service-details-img">
                          <img src="assets/img/video-editing-services-in-navi-mumbai.jpg" alt="video-editing-copmany-in-navi-mumbai" name="video-editing-copmany-in-navi-mumbai"/>
                        </div>
                      </div>
                  </div>
              </div>
              
              <div className="service-details-faq-area wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <div className="row g-lg-4 gy-5 align-items-xl-center">
                      <div className="col-lg-6">
                          <div className="service-details-faq-img">
                          <img src="assets/img/video-editing-in-vashi.jpg" alt="digital-marketing-copmany-in-navi-mumbai" name="digital-marketing-copmany-in-navi-mumbai"/>
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

  
