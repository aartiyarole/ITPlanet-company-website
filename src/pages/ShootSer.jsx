import React from 'react'
import BreadcrumbSection from '../components/BreadcrumbSection'
import Accordion from '../components/Accordion';

export default function ShootSer() {
  const breadcrumbItems = [
    { text: 'Home', link: '/' },
    { text: 'Service Details' }
];
const accordionItems = [
  {
      id: 'One',
      title:'Product Photography',
      content: " Capture stunning images of your products to highlight their features and appeal."
  },
  {
      id: 'Two',
      title: 'E-commerce Shoots',
      content: "High-quality product images designed for online stores to boost sales."
  },
  {
      id: 'Three',
      title: 'Lifestyle Photography',
      content: 'Showcase your products in real-life settings to create engaging visuals.'
  },
  {
      id: 'Four',
      title: ' Flat Lay Photography',
      content: "Capture clean, organized flat lay shots to highlight product details."
  },
  {
      id: 'Five',
      title: '360° Product Shoots',
      content:"Showcase your products with interactive 360-degree photography for a better view."
  }
];
  return (
    <>
      <BreadcrumbSection title="Product Shooting Services" breadcrumbItems={breadcrumbItems}/>
      <div className="service-details-page pt-120 mb-120" id="service-details-section">
          <div className="container">
              <div className="service-details-top-area mb-80">
                  <div className="row g-lg-4 gy-5 align-items-center">
                      <div className="col-lg-6 order-lg-1 order-2 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                          <div className="service-details-top-content">
                              <h2>Product Shooting Services  <span>In Navi Mumbai</span></h2>
                              <h3><a href="/contact">Contact Us</a></h3>
                              <p>At IT Planet Solutions, we offer a wide range of professional product shooting services tailored to meet your business or personal needs. Whether you need high-quality product images for e-commerce, promotional materials, or branding, we deliver exceptional results with precision and attention to detail. Our state-of-the-art photography equipment ensures vibrant colors, sharp images, and visually appealing photos that make a lasting impression.</p>
                              <p>We understand the importance of professional product photography in creating a strong brand presence. Whether for online stores, catalogs, or marketing campaigns, our advanced equipment ensures crisp, high-quality images. From small product shoots to large commercial projects, we bring your products to life with stunning visuals.</p>
                          </div>
                      </div>
                      <div className="col-lg-6 order-lg-2 order-1 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                          <div className="service-details-img">
                              <img 
                                  src="/assets/img/product-shooting-in-vashi.webp" 
                                  alt="shooting-service-company-in-navi-mumbai" 
                                  name="shooting-service-development-company-in-navi-mumbai"
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
                                  src="/assets/img/product-shooting-in-vashi-navi-mumbai.jpg" 
                                  alt="shooting-service-company-in-navi-mumbai" 
                                  name="shooting-service-company-in-navi-mumbai"
                              />
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
