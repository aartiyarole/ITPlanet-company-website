import React from 'react'
import BreadcrumbSection from '../components/BreadcrumbSection';
import Accordion from '../components/Accordion';

export default function PrintingServ() {
    const breadcrumbItems = [
        { text: 'Home', link: '/' },
        { text: 'Service Details' }
    ];

    const accordionItems = [
        {
            id: 'One',
            title: 'Business Cards',
            content: 'Make a memorable first impression with custom-designed business cards.'
        },
        {
            id: 'Two',
            title: 'Flyers & Brochures',
            content: 'Promote your business with professionally printed marketing materials.'
        },
        {
            id: 'Three',
            title: 'Posters & Banners',
            content: 'Get large-format prints for events, promotions, or corporate branding'
        },
        {
            id: 'Four',
            title: 'Custom Invitations',
            content: 'Create beautiful invitations for weddings, parties, or corporate events.'
        },
        {
            id: 'Five',
            title: 'Labels & Stickers',
            content: 'High-quality custom labels and stickers for products or promotions.'
        }
    ];

    return (
        <>
            <BreadcrumbSection title="Printing" breadcrumbItems={breadcrumbItems}/>
            <div className="service-details-page pt-120 mb-120" id="service-details-section">
                <div className="container">
                    <div className="service-details-top-area mb-80">
                        <div className="row g-lg-4 gy-5 align-items-center">
                            <div className="col-lg-6 order-lg-1 order-2 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="service-details-top-content">
                                    <h2>Printing Company <span>In Navi Mumbai</span></h2>
                                    <h3><a href="/contact">Contact Us</a></h3>
                                    <p>At IT Planet Solutions, we offer a wide range of high-quality printing services tailored to meet your business or personal needs. Whether you need marketing materials, custom prints, or corporate branding products, we deliver professional results with precision and attention to detail. Our state-of-the-art printing technology ensures vibrant colors, sharp images, and durable prints that make a lasting impression.</p>
                                    <p>we understand the impact of professional printing in making a strong impression. Whether for business promotion, events, or personal projects, our advanced technology ensures vibrant, high-quality prints. From small orders to large corporate needs, we deliver flawless results with attention to detail, bringing your ideas to life.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-2 order-1 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="service-details-img">
                                    <img 
                                        src="/assets/img/printing-company-in-vashi.jpg" 
                                        alt="graphic-designing-copmany-in-navi-mumbai" 
                                        name="graphic-designing-copmany-in-navi-mumbai"
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
                                        src="/assets/img/printing-company-in-vashi1.jpg" 
                                        alt="digital-marketing-copmany-in-navi-mumbai" 
                                        name="digital-marketing-copmany-in-navi-mumbai"
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