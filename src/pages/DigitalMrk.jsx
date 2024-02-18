import React from 'react'
import BreadcrumbSection from '../components/BreadcrumbSection';
import Accordion from '../components/Accordion';

export default function DigitalMrk() {
    const breadcrumbItems = [
        { text: 'Home', link: '/' },
        { text: 'Service Details' }
    ];

    const accordionItems = [
        {
            id: 'One',
            title: 'Search Engine Optimization (SEO)',
            content: "Ranking high in search engine results is essential for attracting organic traffic to your website. Our SEO specialists will optimize your website for relevant keywords, improve site structure and navigation, and create high-quality content that resonates with your audience and search engines. By implementing white-hat SEO techniques, we'll help you climb the search engine rankings and establish your brand as a trusted authority in your industry."
        },
        {
            id: 'Two',
            title: 'Pay-Per-Click (PPC) Advertising',
            content: "PPC advertising offers a cost-effective way to reach potential customers at the precise moment they're searching for products or services like yours. Our certified PPC specialists will create and manage targeted campaigns across platforms such as Google Ads, Bing Ads, and social media channels to drive qualified traffic to your website and maximize your return on investment (ROI)."
        },
        {
            id: 'Three',
            title: 'Social Media Marketing (SMM)',
            content: 'Social media has become a powerful platform for building brand awareness, engaging with customers, and driving website traffic. Our social media experts will develop a tailored social media strategy to effectively promote your brand, create compelling content, and engage with your audience across platforms such as Facebook, Instagram, Twitter, LinkedIn, and more.'
        },
        {
            id: 'Four',
            title: 'Content Marketing',
            content: "Content is king in the digital world. Our content marketing services encompass creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience. From blog posts and articles to videos and infographics, we'll help you create compelling content that resonates with your target audience and drives engagement and conversions."
        },
        {
            id: 'Five',
            title: 'Analytics and Reporting',
            content:"Measuring the success of your digital marketing efforts is essential for making informed decisions and optimizing your campaigns. We'll provide detailed analytics and regular reporting to track key performance metrics, identify areas for improvement, and ensure that your digital marketing initiatives are delivering the desired results."
        }
    ];

    return (
        <>
            <BreadcrumbSection title="Digital Marketing" breadcrumbItems={breadcrumbItems}/>
            <div className="service-details-page pt-120 mb-120" id="service-details-section">
                <div className="container">
                    <div className="service-details-top-area mb-80">
                        <div className="row g-lg-4 gy-5 align-items-center">
                            <div className="col-lg-6 order-lg-1 order-2 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="service-details-top-content">
                                    <h2>Digital Marketing Company <span>In Navi Mumbai</span></h2>
                                    <p>In today's hyper-connected world, digital marketing has become an indispensable tool for businesses looking to reach and engage with their target audience effectively. At IT Planet Software Solution, we offer comprehensive digital marketing services designed to elevate your online presence, drive traffic to your website, and generate leads that convert into sales.</p>
                                    <p>Success in digital marketing begins with a solid strategy. Our team of digital marketing experts will work closely with you to develop a customized digital marketing plan tailored to your business goals, target audience, and budget. Whether it's increasing brand awareness, driving website traffic, or boosting conversions, we'll identify the most effective strategies and tactics to achieve your objectives.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-2 order-1 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="service-details-img">
                                    <img 
                                        src="/assets/img/digital-marketing-copmany-in-navi-mumbai.png" 
                                        alt="digital-marketing-copmany-in-navi-mumbai" 
                                        name="digital-marketing-copmany-in-navi-mumbai"
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