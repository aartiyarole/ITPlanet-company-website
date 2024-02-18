import React from 'react'
import ServiceCard from './ServiceCard'
export default function ServiceSection() {
    const services = [
        {
          image: "assets/img/layout.gif",
          title: "Website Development",
          description: "Transform your online presence with custom-built websites that showcase your brand and engage your audience.",
          link: "/website-development"
        },
        {
          image: "assets/img/online-shopping.gif",
          title: "Ecommerce Website Development",
          description: "Launch your online store and reach customers worldwide with our scalable and secure ecommerce solutions.",
          link: "/ecommerce-development"
        },
        {
          image: "assets/img/mobile-apps.gif",
          title: "Mobile Application Development",
          description: "Stay ahead of the curve with intuitive and feature-rich mobile apps designed to elevate your business.",
          link: "/app-development"
        },
        {
          image: "assets/img/data-cloud.gif",
          title: "Web Hosting",
          description: "Secure and reliable hosting solutions tailored to your specific requirements, ensuring maximum uptime and performance.",
          link: "/one-domain-hosting"
        },
        {
          image: "assets/img/promotion.gif",
          title: "Digital Marketing",
          description: "Amplify your brand reach and drive targeted traffic to your website through our strategic digital marketing services.",
          link: "/digital-marketing"
        },
        {
          image: "assets/img/logo-design.gif",
          title: "Graphic Designing",
          description: "Bring your brand to life with visually stunning graphics and designs that leave a lasting impression.",
          link: "/graphic-designing"
        },
        {
          image: "assets/img/printer.gif",
          title: "Printing Services",
          description: "Bring your ideas to life with high-quality prints and designs that make a lasting impact.",
          link: "/printing-services"
        },
        {
          image: "assets/img/film-shooting.gif",
          title: "Video Production",
          description: "Bring your vision to life with captivating videos and productions that leave a lasting impression.",
          link: "/video-production"
        }
      ];
  return (
    <div className="container">
        <div className="row mb-40">
        <div className="col-lg-12 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="500ms">
            <div className="section-title5 two">
            <span className="sub-title5 two">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
                </svg>
                Our Services
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
                </svg>
            </span>
            <h2>Explore Our Services</h2>
            </div>
        </div>
        </div>

        <div className="row g-4">
        {services.map((service, index) => (
            <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
            link={service.link}
            />
        ))}
        </div>
    </div>
  )
}
