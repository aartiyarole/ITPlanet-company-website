import React from 'react'
import BreadcrumbSection from '../components/BreadcrumbSection';
import DevTools from '../components/DevTools';
import Accordion from '../components/Accordion';

export default function GraphicDes() {
    const breadcrumbItems = [
        { text: 'Home', link: '/' },
        { text: 'Graphic Designing Course' }
    ];

    const accordionItems = [
        {
            id: 'One',
            title: 'Design Fundamentals',
            content: 'Understand the principles of design, including color theory, typography, layout, and composition.'
        },
        {
            id: 'Two',
            title: 'Adobe Creative Suite',
            content: 'Master industry-leading design software such as Adobe Photoshop, Illustrator, and InDesign for creating stunning visuals.'
        },
        {
            id: 'Three',
            title: 'Digital Illustration',
            content: 'Learn how to create original vector graphics and illustrations with precision and creativity.'
        },
        {
            id: 'Four',
            title: 'Logo & Branding Design',
            content: 'Develop brand identity through logo creation, business cards, and other branding materials.'
        },
        {
            id: 'Five',
            title: 'Web & App Design',
            content: 'Create responsive, user-friendly web designs and app interfaces using tools like Adobe XD or Figma.'
        }
    ];

    const handleApplyNow = () => {
        // Handle apply now button click
        // You can add your modal logic here
    };

    return (
        <>
            <BreadcrumbSection title="Graphic Designing Course" breadcrumbItems={breadcrumbItems}/>
            <div className="service-details-page pt-120 mb-120" id="service-details-section">
                <div className="container">
                    <div className="service-details-top-area mb-80">
                        <div className="row g-lg-4 gy-5 align-items-center">
                            <div className="col-lg-6 order-lg-1 order-2 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="service-details-top-content">
                                    <h2>Graphic Designing Course <span>In Navi Mumbai</span></h2>
                                    <p>Design is at the heart of every brand, and great visuals communicate powerful messages. At IT Planet Solutions, our comprehensive Graphic Designing course provides you with the skills and knowledge to create visually appealing designs for both print and digital media. Whether you're new to design or seeking to enhance your creativity, this course will help you master design tools and concepts used by professionals.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-2 order-1 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="service-details-img">
                                    <img 
                                        src="/assets/img/graphic-designing-course.png" 
                                        alt="graphic-designing-course" 
                                        name="graphic-designing-course"
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
                                        alt="graphic-designing" 
                                        name="graphic-designing-in-navi-mumbai"
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