import React from 'react'

export default function ContactUs() {
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
    <div className="container">
      <div className="row mb-40">
        <div className="col-lg-12 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
          <div className="section-title5 two">
            <span className="sub-title5 two">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
              </svg>
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
              </svg>
            </span>
            <h2>Get in <span>Touch</span></h2>
          </div>
        </div>
      </div>
      <div className="row g-4" id="contact">
        {locations.map((location, index) => (
          <LocationCard key={index} location={location} />
        ))}
      </div>
    </div>
  )
}
