import React from 'react'
import BreadcrumbSection from '../components/BreadcrumbSection';
import ServiceCard from '../components/ServiceCard';
export default function VideoProductionSer() {
  const breadcrumbItems = [
    { text: 'Home', link: '/' },
    { text: 'Service Details' }
];

  const services =[
    {
      image: "assets/img/video-camera.gif",
      title: "Product Shooting Services",
      description: "Enhance your product's appeal with professional product shooting services that highlight its features and quality.",
      link: "/shooting-services"
    },
    {
      image: "assets/img/video-editor.gif",
      title: "Video Editing Services",
      description: "Bring your vision to life with our expert video editing services that ensure captivating and seamless results.",
      link: "/editing-services"
    },
    {
      image: "assets/img/video.gif",
      title: "VFX Video Production Services",
      description: "Stay ahead of the curve with immersive and cutting-edge VFX designed to elevate your visual storytelling.",
      link: "/vfx-services"
    },
    {
      image: "assets/img/laptop.gif",
      title: "2D/3D Animation Services",
      description: "Stay ahead of the curve with dynamic and creative 2D/3D animation services designed to elevate your visual storytelling.",
      link: "/animation-services"
    }
  ]
  return (
    <>
    <BreadcrumbSection title="Video Production Services" breadcrumbItems={breadcrumbItems}/>
    <div className="container">
      <div className="row g-4 mt-50 mb-50 justify-content-center">
        {services.map((service,index)=>(
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
    </>
  )
}
