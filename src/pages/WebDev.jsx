import React from 'react'
import BreadcrumbSection from '../components/BreadcrumbSection'
import Accordion from '../components/Accordion';
import DevTools from '../components/DevTools';
export default function WebDev() {
    const breadcrumbItems = [
        { text: 'Home', link: '/' },
        { text: 'Service Details' }
    ];
    const accordionItems = [
        {
            id: 'One',
            title:'Customized Solutions',
            content: "We understand that every business is unique, which is why we take a personalized approach to website development. Our team works closely with you to understand your goals, target audience, and brand identity to create a tailor-made solution that reflects your vision."
        },
        {
            id: 'Two',
            title: 'Responsive Design',
            content: "With the increasing use of mobile devices, it's crucial to ensure that your website is accessible and functional across all screen sizes. Our websites are built using responsive design principles, guaranteeing an optimal viewing experience for users on desktops, tablets, and smartphones."
        },
        {
            id: 'Three',
            title: 'User-Centric Approach',
            content: 'User experience is at the heart of everything we do. We design websites with intuitive navigation, clear messaging, and engaging visuals to ensure that visitors have a seamless and enjoyable browsing experience.'
        },
        {
            id: 'Four',
            title: 'Scalability and Flexibility',
            content: "As your business grows, so should your website. Our scalable and flexible solutions are designed to evolve with your needs, allowing you to add new features, update content, and expand functionality as your business expands."
        },
        {
            id: 'Five',
            title: 'SEO Optimization',
            content:"A beautiful website is only effective if it can be found online. That's why we integrate search engine optimization (SEO) best practices into every website we build, helping you rank higher in search engine results and attract more organic traffic."
        },
        {
            id: 'Six',
            title: 'Maintenance and Support',
            content:"Our commitment to your success doesn't end after the website launch. We provide ongoing maintenance and support services to ensure that your website remains secure, up-to-date, and performing at its best."
        }
    ];
    const StarIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
            <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z"></path>
        </svg>
      );
    

    return (
        <>
            <BreadcrumbSection title="Professional Website Development" breadcrumbItems={breadcrumbItems}/>
            <div className="service-details-page pt-120 mb-120" id="service-details-section">
                <div className="container">
                    <div className="service-details-top-area mb-80">
                        <div className="row g-lg-4 gy-5 align-items-center">
                            <div className="col-lg-6 order-lg-1 order-2 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="service-details-top-content">
                                    <h2>Website Development <span>In Navi Mumbai</span></h2>
                                    <p>In today's digital age, having a strong online presence is essential for businesses to thrive. At IT Planet Software Solution, we specialize in creating dynamic and user-friendly websites that captivate audiences and drive results.</p>
                                    <ul className="key-features">
                                        <li><StarIcon/> Custom Software </li>
                                        <li><StarIcon/> Mobile Application </li>
                                        <li><StarIcon/> Software Consulting</li>
                                        <li><StarIcon/> Web Application</li>
                                        <li><StarIcon/> Enterprise Software</li>
                                        <li><StarIcon/> Maintenance and Support</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-2 order-1 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="service-details-img">
                                    <img 
                                        src="/assets/img/innerpage/website-development-company-in-navi-mumbai.jpg" 
                                        alt="website-development-company-in-navi-mumbai" 
                                        name="website-development-company-in-navi-mumbai"
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
                                        src="/assets/img/innerpage/website-developer-in-navi-mumbai.jpg" 
                                        alt="website-developer-in-navi-mumbai" 
                                        name="website-developer-in-navi-mumbai"
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