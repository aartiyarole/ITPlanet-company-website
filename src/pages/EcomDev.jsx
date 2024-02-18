import React from 'react'
import BreadcrumbSection from '../components/BreadcrumbSection'
import Accordion from '../components/Accordion';
import DevTools from '../components/DevTools';

export default function EcomDev() {
  const breadcrumbItems = [
    { text: 'Home', link: '/' },
    { text: 'Service Details' }
];
const accordionItems = [
  {
      id: 'One',
      title:'Seamless User Experience',
      content: "We believe that the key to a successful ecommerce website lies in providing a seamless and intuitive user experience. Our team of designers and developers work tirelessly to create user-friendly interfaces, streamlined navigation, and frictionless checkout processes that keep customers coming back for more."
  },
  {
      id: 'Two',
      title: 'Mobile-Friendly Design',
      content: "With the majority of online shopping now taking place on mobile devices, it's essential to ensure that your ecommerce website is fully optimized for mobile use. Our websites are built using responsive design principles, ensuring that they look and perform flawlessly across all devices, from smartphones to tablets to desktops."
  },
  {
      id: 'Three',
      title: 'Secure and Scalable Solutions',
      content: 'User experience is at the heart of everything we do. We design websites with intuitive navigation, clear messaging, and engaging visuals to ensure that visitors have a seamless and enjoyable browsing experience.'
  },
  {
      id: 'Four',
      title: 'Integration with Payment Gateways',
      content: "We understand the importance of offering a variety of payment options to your customers. Our ecommerce websites seamlessly integrate with leading payment gateways, allowing you to accept credit cards, digital wallets, and other payment methods, providing a convenient and secure shopping experience for your customers."
  },
  {
      id: 'Five',
      title: 'Ongoing Support and Maintenance',
      content:"Our commitment to your success doesn't end after your ecommerce website is launched. We provide ongoing support and maintenance services to ensure that your website remains secure, up-to-date, and optimized for performance. From software updates to troubleshooting to technical support, we're here to help you every step of the way."
  }
];
  return (
    <>
            <BreadcrumbSection title="Ecommerce Website Development" breadcrumbItems={breadcrumbItems}/>
            <div className="service-details-page pt-120 mb-120" id="service-details-section">
                <div className="container">
                    <div className="service-details-top-area mb-80">
                        <div className="row g-lg-4 gy-5 align-items-center">
                            <div className="col-lg-6 order-lg-1 order-2 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="service-details-top-content">
                                    <h2>Ecommerce Website Development <span>In Navi Mumbai</span></h2>
                                    <p>In the rapidly evolving digital landscape, having a robust ecommerce platform is crucial for businesses looking to expand their reach and maximize revenue opportunities. At IT Planet Software Solution, we specialize in creating customized ecommerce websites that combine stunning design with powerful functionality to deliver an unparalleled shopping experience for your customers.</p>
                                    <p>We understand that every business has unique requirements and goals. That's why we take a personalized approach to ecommerce website development, crafting solutions that are specifically tailored to meet your needs. Whether you're a small boutique or a large enterprise, we have the expertise to create an ecommerce platform that aligns with your brand identity and business objectives.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-2 order-1 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="service-details-img">
                                    <img 
                                        src="/assets/img/ecommerce-website-developement-in-navi-mumbai.png" 
                                        alt="ecommerce-website-development-company-in-navi-mumbai" 
                                        name="ecommerce-website-development-company-in-navi-mumbai"
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
                                        src="/assets/img/ecommerce-website-developement-in-navi-mumbai.jpg" 
                                        alt="ecommerce-website-developer-in-navi-mumbai" 
                                        name="ecommerce-website-developer-in-navi-mumbai"
                                    />
                                </div>
                            </div>
                            <Accordion items={accordionItems} />
                           
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
