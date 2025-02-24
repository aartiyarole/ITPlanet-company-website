import React,{useState} from 'react'
import BreadcrumbSection from '../components/BreadcrumbSection';
import DevTools from '../components/DevTools';
import Accordion from '../components/Accordion';
import Modal from '../components/Modal';

export default function DigitalMarket() {
    const [isModalOpen , setIsModalOpen] = useState(false);
    const breadcrumbItems = [
        { text: 'Home', link: '/' },
        { text: 'Digital Marketing Course' }
    ];

    const accordionItems = [
        {
            id: 'One',
            title: 'Search Engine Optimization (SEO)',
            content: 'Learn how to optimize websites to rank higher on search engines and drive organic traffic.'
        },
        {
            id: 'Two',
            title: 'Content Marketing',
            content: 'Develop compelling content strategies that engage your audience and promote brand awareness.'
        },
        {
            id: 'Three',
            title: 'Social Media Marketing',
            content: 'Master the art of marketing on platforms like Facebook, Instagram, Twitter, and LinkedIn.'
        },
        {
            id: 'Four',
            title: 'Paid Advertising',
            content: 'Explore pay-per-click (PPC) campaigns using Google Ads and social media ad platforms to maximize ROI.'
        },
        {
            id: 'Five',
            title: 'Email Marketing',
            content: 'Craft targeted email campaigns that convert leads into customers'
        }
    ];

    

    return (
        <>
           <BreadcrumbSection title="Digital Marketing Course" breadcrumbItems={breadcrumbItems}/>
            <div className="service-details-page pt-120 mb-120" id="service-details-section">
                <div className="container">
                    <div className="service-details-top-area mb-80">
                        <div className="row g-lg-4 gy-5 align-items-center">
                            <div className="col-lg-6 order-lg-1 order-2 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="service-details-top-content">
                                    <h2>Digital Marketing Course <span>In Navi Mumbai</span></h2>
                                    <p>In today's competitive market, digital marketing is essential for growing businesses and connecting with audiences. At IT Planet Solutions, our comprehensive Digital Marketing course is designed to equip you with the latest strategies and tools to build, execute, and optimize effective online campaigns. From SEO and content marketing to social media and paid ads, this course covers everything you need to become a digital marketing expert.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-2 order-1 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="service-details-img">
                                    <img 
                                        src="/assets/img/Digital-Marketing-course.jpg" 
                                        alt="digital-marketing-course" 
                                        name="digital-marketing-course"
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
                                        src="/assets/img/graphic-designing-course1.png" 
                                        alt="digital-marketing" 
                                        name="digital-marketing-in-navi-mumbai"
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
                                    onClick={()=>setIsModalOpen(true)}
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
            <Modal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}