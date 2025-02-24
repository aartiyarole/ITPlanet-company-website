import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Santosh Deshmukh",
    feedback:
      "IT Planet provided exceptional service with 24/7 support. Mr. Manoj Pote addressed all queries. Highly recommend them!",
  },
  {
    name: "Gaurav Avghade",
    feedback:
      "Great experience with IT Planet. Delivered the project on time with a cooperative team. Very satisfied with their services!",
  },
  {
    name:"Milan Bamaniya",
    feedback:"IT Planet offers great service at an affordable price. Continued support after website delivery is an added benefit!",
  },
  {
    name:"Dr. Uttkarsh Shah",
    feedback:"Mr. Manoj from IT Planet did an outstanding job on our website. His support was invaluable. Highly recommend their services!",
  },
  {
    name:"Yadav Shubham",
    feedback:"IT Planet is fantastic. They built a website that looks great and performs even better. Highly skilled developers!",
  },
  {
    name:"Anand Gawde",
    feedback:"Thank you, Manoj sir. It's been a pleasure working with you. My website has been running smoothly for the past two years!",
  }
];

const TestimonialSection = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 1000,
    dots: true,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="testimonialSection gradiantBlock mb-50">
      <div className="container overflow-hidden">
        <div className="row">
          <div className="col-lg-12 mb-70 d-flex flex-wrap gap-3 align-items-center justify-content-between">
            <div className="section-title5 wow animate fadeInLeft">
              <span className="sub-title5 two">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                    <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z">
                    </path>
                </svg>
                Client Testimonial
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                    <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z">
                    </path>
                </svg>
                </span>
              <h2>
                Inspiring Words from <span>Our Clients</span>
              </h2>
            </div>
            <a href="/contact" className="details-button  wow animate fadeInRight">
              Become a Client
              <svg viewBox="0 0 13 20">
                        <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5"></polyline>
                    </svg>
            </a>
          </div>
        </div>
        
        <Slider {...settings} className="testimCarousel animateThis fadeIn">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimHolder">
              <div className="testimBox">
                <div className="testimDots"></div>
                <div className="testimContentBox d-flex align-items-center justify-content-center">
                  <div className="testimContent">
                    <div className="content">
                      <p>{testimonial.feedback}</p>
                      <p className="rating">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} color="gold" />
                        ))}
                      </p>
                      <div className="author-name-desig">
                        <div className="content">
                          <h6>{testimonial.name}</h6>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimDots"></div>
              </div>
            </div>
          ))}
        </Slider>
        </div>
    
    </section>
  );
};

export default TestimonialSection;
