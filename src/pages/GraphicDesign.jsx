import React from 'react'
import BreadcrumbSection from '../components/BreadcrumbSection';
import Accordion from '../components/Accordion';

export default function GraphicDesign() {
    const breadcrumbItems = [
        { text: 'Home', link: '/' },
        { text: 'Service Details' }
    ];

    const accordionItems = [
        {
            id: 'One',
            title: 'Logo Design and Branding',
            content: "Your logo is the cornerstone of your brand identity. Our logo design services are tailored to reflect your unique brand personality and values, ensuring that your logo stands out and leaves a memorable impression on your customers. We'll also help you develop comprehensive branding guidelines to maintain consistency across all your marketing materials and touchpoints."
        },
        {
            id: 'Two',
            title: 'Marketing Collateral',
            content: "From business cards and brochures to flyers and posters, we create visually stunning marketing collateral that captivates your audience and reinforces your brand message. Our designers combine eye-catching graphics with compelling copy to create print materials that leave a lasting impression and drive action."
        },
        {
            id: 'Three',
            title: 'Digital Assets',
            content: "In today's digital age, having visually appealing digital assets is essential for engaging your audience online. Whether it's social media graphics, website banners, or email templates, we'll design custom digital assets that grab attention, communicate your message effectively, and drive engagement across digital platforms."
        },
        {
            id: 'Four',
            title: 'UI/UX Design',
            content: "User experience (UX) is a critical factor in the success of any digital product or service. Our UI/UX design experts specialize in creating intuitive and user-friendly interfaces that enhance the usability and functionality of your websites, mobile apps, and other digital products. From wireframing and prototyping to usability testing, we'll ensure that your digital experiences deliver maximum impact and satisfaction."
        },
        {
            id: 'Five',
            title: 'Print and Digital Production',
            content: "In addition to design, we offer comprehensive print and digital production services to bring your vision to life. Whether you need assistance with printing, packaging, or digital asset production, our team will handle every aspect of the production process with precision and attention to detail, ensuring that the final deliverables meet your quality standards and exceed your expectations."
        }
    ];

    return (
        <>
            <BreadcrumbSection title="Graphic Designing" breadcrumbItems={breadcrumbItems}/>
            <div className="service-details-page pt-120 mb-120" id="service-details-section">
                <div className="container">
                    <div className="service-details-top-area mb-80">
                        <div className="row g-lg-4 gy-5 align-items-center">
                            <div className="col-lg-6 order-lg-1 order-2 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="service-details-top-content">
                                    <h2>Graphic Designing Company <span>In Navi Mumbai</span></h2>
                                    <p>In today's visually-driven world, compelling graphics play a vital role in capturing attention, conveying messages, and building brand identity. At IT Planet Software Solution, we offer professional graphic design services to help businesses stand out in a crowded marketplace and leave a lasting impression on their audience.</p>
                                    <p>Our team of talented graphic designers possesses the creativity and expertise to bring your vision to life. Whether you need a new logo, branding materials, marketing collateral, or digital assets, we'll work closely with you to understand your goals and deliver custom-designed solutions that align with your brand identity and resonate with your target audience.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-2 order-1 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="service-details-img">
                                    <img 
                                        src="/assets/img/graphic-designing-copmany-in-navi-mumbai.png" 
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
                                        src="/assets/img/digital-marketing-copmany-in-navi-mumbai.jpg" 
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