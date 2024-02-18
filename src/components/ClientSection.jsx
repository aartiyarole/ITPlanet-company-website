import React from 'react'
import ClientCard from './ClientCard';
import {Link} from 'react-router-dom'
export default function ClientSection() {
    const clients = [
        {
          imageSrc: "assets/img/website-development-in-chembur.png",
          altText: "website-development-in-chembur"
        },
        {
          imageSrc: "assets/img/cheap-web-service.png",
          altText: "cheap-web-service"
        },
        {
          imageSrc: "assets/img/cheap-website-service.png",
          altText: "cheap-website-service"
        },
        {
          imageSrc: "assets/img/website-development-in-vashi.png",
          altText: "website-development-in-vashi"
        },
        {
          imageSrc: "assets/img/website-development-in-turbhe.png",
          altText: "website-development-in-turbhe"
        },
        {
          imageSrc: "assets/img/website-development-in-koparkhairane.png",
          altText: "website-development-in-koparkhairane"
        },
        {
          imageSrc: "assets/img/website-development-in-navi-mumbai.png",
          altText: "website-development-in-navi-mumbai"
        },
        {
          imageSrc: "assets/img/website-development-in-sanpada.png",
          altText: "website-development-in-sanpada"
        },
        {
          imageSrc: "assets/img/website-develoment-in-nerul.png",
          altText: "website-develoment-in-nerul"
        },
        {
          imageSrc: "assets/img/website-development-in-mumbai.png",
          altText: "website-development-in-mumbai"
        },
        {
          imageSrc: "assets/img/website-development-in-belapur.png",
          altText: "website-development-in-belapur"
        },
        {
          imageSrc: "assets/img/website-development-in-khargar.png",
          altText: "website-development-in-khargar"
        },
        {
          imageSrc: "assets/img/website-development-in-panvel.png",
          altText: "website-development-in-panvel"
        },
        {
          imageSrc: "assets/img/website-development-in-nerul.png",
          altText: "website-development-in-nerul"
        },
        {
          imageSrc: "assets/img/website-development-in-airoli.png",
          altText: "website-development-in-airoli"
        },
        {
          imageSrc: "assets/img/website-development-turbhe-MIDC.png",
          altText: "website-development-turbhe-MIDC"
        },
        {
          imageSrc: "assets/img/web-development-vashi.png",
          altText: "web-development-vashi"
        },
        {
          imageSrc: "assets/img/web-design-vashi.png",
          altText: "web-design-vashi"
        }
      ];
  return (
    <div className="container">
      <div className="row mb-40">
        <div className="col-lg-12 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
          <div className="section-title5 two">
            <span className="sub-title5 two">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
              </svg>
              Our Journey Success
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
              </svg>
            </span>
            <h2>Our Happy <span>Clients</span></h2>
          </div>
        </div>
      </div>
      <div className="row g-4">
        {clients.map((client, index) => (
          <ClientCard
            key={index}
            imageSrc={client.imageSrc}
            altText={client.altText}
          />
        ))}
      </div>
      <center>
      <Link to="/clients" className="primary-btn1 mt-4">
        View All Clients
      </Link>
      </center>
    </div>
    
  )
}


