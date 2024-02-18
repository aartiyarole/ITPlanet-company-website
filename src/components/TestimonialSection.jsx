import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function TestimonialSection() {
    const testimonialData = [
        {
          id: 1,
          content: "IT Planet provided exceptional service with 24/7 support. Mr. Manoj Pote addressed all queries. Highly recommend them!",
          author: "Santosh Deshmukh",
          rating: 5
        },
        {
          id: 2,
          content: "Great experience with IT Planet. Delivered the project on time with a cooperative team. Very satisfied with their services!",
          author: "Gaurav Avghade",
          rating: 5
        },
        {
          id: 3,
          content: "IT Planet offers great service at an affordable price. Continued support after website delivery is an added benefit!",
          author: "Milan Bamaniya",
          rating: 5
        },
        {
          id: 4,
          content: "Mr. Manoj from IT Planet did an outstanding job on our website. His support was invaluable. Highly recommend their services!",
          author: "Dr. Uttkarsh Shah",
          rating: 5
        },
        {
          id: 5,
          content: "IT Planet is fantastic. They built a website that looks great and performs even better. Highly skilled developers!",
          author: "Yadav Shubham",
          rating: 5
        },
        {
          id: 6,
          content: "Thank you, Manoj sir. It's been a pleasure working with you. My website has been running smoothly for the past two years!",
          author: "Anand Gawde",
          rating: 5
        }
      ];

      const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
    
  return (
    <div className="container overflow-hidden">
      <div className="row">
        <div className="col-lg-12 mb-70 d-flex flex-wrap gap-3 align-items-center justify-content-between">
          <div 
            className="section-title5 wow animate fadeInLeft" 
            data-wow-delay="200ms" 
            data-wow-duration="1500ms"
          >
            <span className="sub-title5 two">
              {[...Array(2)].map((_, index) => (
                <React.Fragment key={index}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                    <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
                  </svg>
                  {index === 0 && "Client Testimonial"}
                </React.Fragment>
              ))}
            </span>
            <h2>Inspiring Words from <span>Our Clients</span></h2>
          </div>
          
          <a 
            href="/contact" 
            className="details-button wow animate fadeInRight"
            data-wow-delay="400ms" 
            data-wow-duration="1500ms"
          >
            Become a Client
            <svg viewBox="0 0 13 20">
              <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
            </svg>
          </a>
        </div>
      </div>

      <div className="testimCarousel animateThis fadeIn">
        <Slider {...sliderSettings}>
          {testimonialData.map((testimonial) => (
            <div key={testimonial.id}>
              <div className="testimHolder">
                <div className="testimBox">
                  <div className="testimDots" />
                  <div className="testimContentBox d-flex align-items-center justify-content-center">
                    <div className="testimContent">
                      <div className="content">
                        <p>{testimonial.content}</p>
                        <p className="rating">
                          {[...Array(testimonial.rating)].map((_, index) => (
                            <i key={index} className="fa fa-star" aria-hidden="true" />
                          ))}
                        </p>
                        <div className="author-name-desig">
                          <div className="content">
                            <h6>{testimonial.author}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimDots" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}



