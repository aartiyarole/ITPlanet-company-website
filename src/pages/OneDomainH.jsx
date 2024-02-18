import React from 'react'
import BreadcrumbSection from '../components/BreadcrumbSection'
import PriceCard from '../components/PriceCard';
export default function OneDomainH() {
  const plans = [
    {
      name: "Basic Plan",
      price: "₹2000",
      duration: "/ Year (Including Taxes)",
      features: [
        "Website Hosting 1",
        "FAST NVME SSD DISK SPACE 2.5 GB",
        "Bandwidth & Traffic Unlimited",
        "E-Mail Accounts 5",
        "Database & Sub Domain 5",
        "Free SSL Certificate",
        "Softaculous + cPanel + Wordpress",
      ],
      discount: "EXTRA 20% OFF ON 3 Yrs",
      link: "/contact",
    },
    {
      name: "Standard Plan",
      price: "₹3000",
      duration: "/ Year (Including Taxes)",
      features: [
        "Website Hosting 1",
        "FAST NVME SSD DISK SPACE Unlimited",
        "Bandwidth & Traffic Unlimited",
        "E-Mail Accounts Unlimited",
        "Database & Sub Domain Unlimited",
        "Free SSL Certificate",
        "Softaculous + cPanel + Wordpress",
      ],
      discount: "EXTRA 20% OFF ON 3 Yrs",
      link: "/contact",
      badge: "30%",
    },
  ];
  
  
  const breadcrumbItems = [
    { text: 'Home', link: '/' },
    { text: 'Service Details' }
];
  return (
    <>
    <BreadcrumbSection title="One Domain Hosting" breadcrumbItems={breadcrumbItems}/>
    <div className="home2-pricing-plan-section scroll-margin pt-120 mb-120" id="pricing-plan-section">
      <div className="container">
        <div className="pricing-plan-tab-area">
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel">
              <div className="row g-xl-3 gy-4 align-items-center justify-content-center">
                {plans.map((plan, index) => (
                  <PriceCard key={index} plan={plan} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}


