import React from 'react';
import BreadcrumbSection from '../components/BreadcrumbSection';
export default function MultiDomainH() {
  const plans = [
    {
      name: "Basic Plan",
      price: "₹3000",
      duration: "/ Year (Including Taxes)",
      features: [
        "Website Hosting <b>2</b>",
        "FAST NVME SSD DISK SPACE <b>2.5 GB</b>",
        "Bandwidth & Traffic <b>Unlimited</b>",
        "E-Mail Accounts <b>5</b>",
        "Database & Sub Domain <b>5</b>",
        "Free SSL Certificate",
        "Softaculous + cPanel + Wordpress",
      ],
      discount: "EXTRA 20% OFF ON 3 Yrs",
      link: "/contact",
    },
    {
      name: "Standard Plan",
      price: "₹5000",
      duration: "/ Year (Including Taxes)",
      features: [
        "Website Hosting <b>10</b>",
        "FAST NVME SSD DISK SPACE <b>20GB</b>",
        "Bandwidth & Traffic <b>Unlimited</b>",
        "E-Mail Accounts <b>Unlimited</b>",
        "Database & Sub Domain <b>Unlimited</b>",
        "Free SSL Certificate",
        "Softaculous + cPanel + Wordpress",
      ],
      discount: "EXTRA 20% OFF ON 3 Yrs",
      link: "/contact",
      badge: "30%",
    },
    {
      name: "Premium Plan",
      price: "₹6500",
      duration: "/ Year (Including Taxes)",
      features: [
        "Website Hosting <b>Unlimited</b>",
        "FAST NVME SSD DISK SPACE <b>Unlimited</b>",
        "Bandwidth & Traffic <b>Unlimited</b>",
        "E-Mail Accounts <b>Unlimited</b>",
        "Database & Sub Domain <b>Unlimited</b>",
        "Free SSL Certificate",
        "Softaculous + cPanel + Wordpress",
      ],
      discount: "EXTRA 20% OFF ON 3 Yrs",
      link: "/contact",
    },
  ];

  const breadcrumbItems = [
    { text: 'Home', link: '/' },
    { text: 'Service Details' }
  ]

  return (

    <>
    <BreadcrumbSection title="Multi Domain Hosting" breadcrumbItems={breadcrumbItems}/>
    <div className="home2-pricing-plan-section scroll-margin pt-120 mb-120" id="pricing-plan-section">
      <div className="container">
        <div className="pricing-plan-tab-area">
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
              <div className="row g-xl-3 gy-4 align-items-center justify-content-center">
                {plans.map((plan, index) => (
                  <div key={index} className={`col-xl-4 col-md-6 wow animate fadeIn${index === 0 ? 'Left' : index === 1 ? 'Up' : 'Right'}`} data-wow-delay={`${200 + index * 200}ms`} data-wow-duration="1500ms">
                    <div className={`pricing-card ${plan.badge ? 'two' : ''}`}> 
                      <div className="pricing-top">
                        <span>{plan.name}</span>
                        <h2>
                          {plan.price} <sub>{plan.duration}</sub>
                        </h2>
                      </div>
                      <div className="pricing-content">
                        <ul>
                          {plan.features.map((feature, idx) => (
                            <li key={idx} dangerouslySetInnerHTML={{ __html: feature }}></li>
                          ))}
                        </ul>
                        <b>{plan.discount}</b>
                        <div className="pay-btn-area">
                          <a href={plan.link} className="pay-btn"><span>Pick This Package</span></a>
                        </div>
                      </div>
                      {plan.badge && (
                        <div className="batch">
                          <span><strong>{plan.badge}</strong></span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
}
