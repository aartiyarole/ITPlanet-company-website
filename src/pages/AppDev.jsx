import React from 'react'
import BreadcrumbSection from '../components/BreadcrumbSection';
import Accordion from '../components/Accordion';

export default function AppDev() {
    const breadcrumbItems = [
        { text: 'Home', link: '/' },
        { text: 'Service Details' }
    ];

    const accordionItems = [
        {
            id: 'One',
            title: 'Cross-Platform Compatibility',
            content: "We understand the importance of reaching users on multiple platforms. That's why we utilize the latest cross-platform development frameworks such as React Native and Flutter to build mobile apps that are compatible with both iOS and Android devices. By leveraging these technologies, we can significantly reduce development time and costs while ensuring a consistent user experience across different platforms."
        },
        {
            id: 'Two',
            title: 'User-Centric Design',
            content: "User experience is at the forefront of everything we do. Our mobile apps are meticulously designed with intuitive interfaces, seamless navigation, and engaging visuals to provide users with an exceptional experience from the moment they download the app. Whether it's a consumer-facing app or an enterprise solution, we prioritize usability and functionality to ensure maximum user satisfaction."
        },
        {
            id: 'Three',
            title: 'Performance and Security',
            content: "Performance and security are non-negotiable when it comes to mobile app development. Our team follows industry best practices and employs robust testing methodologies to ensure that your app performs flawlessly and is resistant to security threats. From optimizing code to implementing encryption techniques, we go above and beyond to deliver mobile apps that are fast, reliable, and secure."
        },
        {
            id: 'Four',
            title: 'Integration with Backend Systems',
            content: "Many mobile apps require seamless integration with backend systems to access data, process transactions, and deliver personalized experiences. Our developers have extensive experience integrating mobile apps with a wide range of backend technologies, including APIs, databases, and cloud services, to ensure seamless communication and interoperability."
        },
        {
            id: 'Five',
            title: 'Continuous Support and Maintenance',
            content: "Our commitment to your success doesn't end after your mobile app is launched. We provide ongoing support and maintenance services to ensure that your app remains up-to-date, secure, and optimized for performance. Whether it's fixing bugs, releasing updates, or providing technical support, we're here to help you every step of the way."
        }
    ];

    const tools = [
        { name: 'HTML', icon: 'html-website-designer-in-navi-mumbai.png' },
        { name: 'CSS', icon: 'css-designer-in-navi-mumbai.png' },
        { name: 'Java Script', icon: 'java-script-developer-in-navi-mumbai.png' },
        { name: 'Ajax', icon: 'ajax-developer-in-navi-mumbai.png' },
        { name: 'Jquery', icon: 'jquery-developer-in-navi-mumbai.png' },
        { name: 'Mongo DB', icon: 'mongo-db-developer-in-navi-mumbai.png' },
        { name: 'Flutter', icon: 'flutter-developer-in-navi-mumbai.png' },
        { name: 'Firebase', icon: 'fire-base-developer-in-navi-mumbai.png' },
        { name: 'Firebase', icon: 'google-app-engine-developer-in-navi-mumbai.png' },
        { name: 'Firebase', icon: 'photoshop-designer-in-navi-mumbai.png' },
        { name: 'Bootstrap', icon: 'bootstrap-designer-in-navi-mumbai.png' },
        { name: 'Figma', icon: 'innerpage/icon/figma-icon.svg' },
        { name: 'Visual Studio', icon: 'innerpage/icon/vs-icon.svg' },
        { name: 'Git', icon: 'innerpage/icon/git-icon.svg' },
        { name: 'React', icon: 'innerpage/icon/react-icon.svg' },
        { name: 'Php', icon: 'innerpage/icon/php-icon.svg' },
        { name: 'MySQL', icon: 'innerpage/icon/mysql-icon.svg' },
        { name: 'Gitlab', icon: 'innerpage/icon/gitlab-icon.svg' },
        { name: 'AWS', icon: 'innerpage/icon/aws-icon.svg' }
    ];

    return (
        <>
            <BreadcrumbSection title="Mobile Application Development" breadcrumbItems={breadcrumbItems}/>
            <div className="service-details-page pt-120 mb-120" id="service-details-section">
                <div className="container">
                    <div className="service-details-top-area mb-80">
                        <div className="row g-lg-4 gy-5 align-items-center">
                            <div className="col-lg-6 order-lg-1 order-2 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="service-details-top-content">
                                    <h2>App Development <span>In Navi Mumbai</span></h2>
                                    <p>In today's fast-paced digital world, mobile applications have become a cornerstone of modern business strategy. At IT Planet Software Solution, we specialize in crafting innovative and feature-rich mobile apps that drive engagement, enhance user experiences, and deliver tangible results for businesses across various industries.</p>
                                    <p>Whether you're a startup looking to disrupt the market or an established enterprise seeking to extend your digital reach, we offer customized mobile application development solutions tailored to your specific requirements. Our experienced team of designers and developers will work closely with you to understand your goals, target audience, and unique challenges, ensuring that we deliver a mobile app that exceeds your expectations.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-2 order-1 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="service-details-img">
                                    <img 
                                        src="/assets/img/app-development-in-navi-mumbai.jpg" 
                                        alt="app-development-in-navi-mumbai" 
                                        name="app-development-in-navi-mumbai"
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
                                        src="/assets/img/mobile-application-development-company-in-navi-mumbai.jpg" 
                                        alt="mobile-application-development-company-in-navi-mumbai" 
                                        name="mobile-application-development-company-in-navi-mumbai"
                                    />
                                </div>
                            </div>
                            <Accordion items={accordionItems}  />
                        </div>
                    </div>

                    
                </div>
            </div>
            <div className="service-details-tools-section mb-120">
                        <div className="container">
                            <div className="row mb-60">
                                <div className="col-lg-12 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="section-title5">
                                        <span className="sub-title5 two">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z"></path>
                                            </svg>
                                            Our Tools
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z"></path>
                                            </svg>
                                        </span>
                                        <h2>Our Development <span>Technology</span></h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-4">
                                {tools.map((tool, index) => (
                                    <div key={index} className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                        <div className="tools-card">
                                            <div className="tools-icon">
                                                <img src={`/assets/img/${tool.icon}`} alt={`${tool.name.toLowerCase()}-developer-in-navi-mumbai`} name={`${tool.name.toLowerCase()}-developer-in-navi-mumbai`} />
                                            </div>
                                            <div className="tools-name">
                                                <span>{tool.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="tools-card">
                                        <div className="tools-name">
                                            <b><span>Many More...</span></b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    )
}