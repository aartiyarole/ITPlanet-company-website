import React from 'react'
import BreadcrumbSection from '../components/BreadcrumbSection';
import ClientCard from '../components/ClientCard';
export default function Clients() {
  const breadcrumbItems = [
    { text: 'Home', link: '/' },
    { text: 'Our Happy Clients' }
  ];

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
    },
    {
      imageSrc: "assets/img/website-design-vashi.png",
      altText: "website-design-vashi"
    },
    {
      imageSrc: "assets/img/website-design-navimumbai.png",
      altText: "website-design-navimumbai"
    },
    {
      imageSrc: "assets/img/website-design-navi-mumbai.png",
      altText: "website-design-navi-mumbai"
    },
    {
      imageSrc: "assets/img/website-dev-vashi.png",
      altText: "website-dev-vashi"
    },
    {
      imageSrc: "assets/img/web-devlop-vashi.png",
      altText: "web-devlop-vashi"
    },
    {
      imageSrc: "assets/img/web-develop-belapur.png",
      altText: "web-develop-belapur"
    },
    {
      imageSrc: "assets/img/website-development-belapur.png",
      altText: "website-development-belapur"
    },
    {
      imageSrc: "assets/img/website-develop-vashi.png",
      altText: "website-develop-vashi"
    },
    {
      imageSrc: "assets/img/website-develop-navimumbai.png",
      altText: "website-develop-navimumbai"
    },
    {
      imageSrc: "assets/img/website-develop-belapur.png",
      altText: "website-develop-belapur"
    },
    {
      imageSrc: "assets/img/website-develop-sanpada.png",
      altText: "website-develop-sanpada"
    },
    {
      imageSrc: "assets/img/wesite-develop-turbhe.png",
      altText: "wesite-develop-turbhe"
    },
    {
      imageSrc: "assets/img/web-development-kharghar.png",
      altText: "web-development-kharghar"
    },
    {
      imageSrc: "assets/img/web-development-chembur.png",
      altText: "web-development-chembur"
    },
    {
      imageSrc: "assets/img/web-develop-vashi-mumbai.png",
      altText: "web-develop-vashi-mumbai"
    },
    {
      imageSrc: "assets/img/web-design-turbhe.png",
      altText: "web-design-turbhe"
    },
    {
      imageSrc: "assets/img/web-design-sanpada.png",
      altText: "web-design-sanpada"
    },
    {
      imageSrc: "assets/img/website-design-in-vashi.png",
      altText: "website-design-in-vashi"
    },
    {
      imageSrc: "assets/img/website-development-turbhe.png",
      altText: "website-development-turbhe"
    },
    {
      imageSrc: "assets/img/website-design-turbhe-mumbai.png",
      altText: "website-design-turbhe-mumbai"
    },
    {
      imageSrc: "assets/img/website-design-vashi-navi.png",
      altText: "website-design-vashi-navi"
    },
    {
      imageSrc: "assets/img/web-develop-sanpada.png",
      altText: "web-develop-sanpada"
    },
    {
      imageSrc: "assets/img/web-develop-vashi.png",
      altText: "web-develop-vashi"
    },
    {
      imageSrc: "assets/img/web-develop-turbhe.png",
      altText: "web-develop-turbhe"
    },
    {
      imageSrc: "assets/img/web-development-in-sanpada.png",
      altText: "web-development-in-sanpada"
    },
    {
      imageSrc: "assets/img/website-develop-juinagar.jpg",
      altText: "web-develop-juinagar"
    },
    {
      imageSrc: "assets/img/web-develop-mankurd.jpg",
      altText: "web-develop-mankurd"
    }
  ];

  const targetIndex = clients.findIndex(client => 
    client.imageSrc === "assets/img/web-design-vashi.png"
  );
  return (
    <>
      <BreadcrumbSection title="Our Happy Clients" breadcrumbItems={breadcrumbItems}/>
      <div className="partnership-area mb-120 pt-80" id="partnership-section">
        <div className="container">
          <div className="row g-4">
            {clients.map((client, index) => (
              <ClientCard
                key={index}
                imageSrc={client.imageSrc}
                altText={client.altText}
                customClass={index > targetIndex ? 'logo-custome' : ''}
              />
            ))}
          </div>
        </div>
     
      </div>
    </>
  )
}
