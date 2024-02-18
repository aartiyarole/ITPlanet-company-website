import React from 'react';
import BreadcrumbSection from '../components/BreadcrumbSection';
export default function Contact() {
  const locations = [
    {
      title: 'Mumbai',
      phone: '+91 97663 97512 / 96533 22737',
      email: 'itplanetsoftwaresolution@gmail.com',
      address: 'S-31, Haware Fantasia Business Park, sector 30A, Vashi, Navi Mumbai, 400705',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30163.109232629136!2d72.9918910695377!3d19.090598455461368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c676989d5beb%3A0xf8710a4bc52a6bbc!2sITPLANET%20WEBSITE%20%26%20MOBILE%20APP%20DEVELOPMENT%20COMPANY!5e0!3m2!1sen!2sin!4v1710572302817!5m2!1sen!2sin'
    },
    {
      title: 'Pune',
      phone: '+91 77749 54303',
      email: 'itplanetsoftwaresolution@gmail.com',
      address: '402, Jadhavrao Pride, BJS Corner, Wagholi, Pune- 412207',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d966433.176423048!2d72.79760132778158!3d18.88133109125348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3bc544bcfd7%3A0x816540c2a95790f9!2sIT%20Planet!5e0!3m2!1sen!2sin!4v1710572377859!5m2!1sen!2sin'
    }
  ];
  const breadcrumbItems = [
    { text: 'Home', link: '/' },
    { text: 'Contact Us' }
  ];
  const LocationCard = ({ location }) => (
    <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
      <div className="card contact-area">
        <div className="card-body address">
          <h4 className="title">{location.title}</h4>
          <p>
            
              <a href={`tel:${location.phone.split('/')[0].trim()}`}>
                <i className="fa fa-phone" aria-hidden="true"></i>
                {location.phone}
              </a>
            <br />
            
              <i className="fa fa-envelope" aria-hidden="true"></i>
              {' '}{location.email}
            <br />
            
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              {' '}{location.address}
            
          </p>
          <iframe
            src={location.mapUrl}
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${location.title} Office Location`}
          />
        </div>
      </div>
    </div>
  );

  return (
   <>
   <BreadcrumbSection title="Contact Us" breadcrumbItems={breadcrumbItems}/>
    <div className="service-details-page pt-120 mb-120" id="service-details-section">
      <div className="container">
        <div className="service-details-top-area mb-80">
        <div className="row g-4" id="contact">
          {locations.map((location, index) => (
            <LocationCard key={index} location={location} />
          ))}
        </div>
        </div>
      </div>
    </div>
   </>
  );
}