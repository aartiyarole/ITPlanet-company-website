import React from 'react'
const formatFeature = (feature) => {
    return feature.split(/(1|2.5 GB|5|Unlimited)/i).map((part, index) =>
      ["1", "2.5 GB", "5", "Unlimited"].includes(part) ? <b key={index}>{part}</b> : part
    );
  };
export default function PriceCard({plan}) {
    
  return (
    <div className="col-xl-4 col-md-6 wow animate fadeInUp">
    <div className={`pricing-card ${plan.badge ? "two" : ""}`}>
      <div className="pricing-top">
        <span>{plan.name}</span>
        <h2>
          {plan.price} <sub>{plan.duration}</sub>
        </h2>
      </div>
      <div className="pricing-content">
        <ul>
          {plan.features.map((feature, index) => (
            <li key={index}>{formatFeature(feature)}</li>
          ))}
        </ul>
        <b>{plan.discount}</b>
        <div className="pay-btn-area">
          <a href={plan.link} className="pay-btn">
            <span>Pick This Package</span>
          </a>
        </div>
      </div>
      {plan.badge && (
        <div className="batch">
          <span>
            <strong>{plan.badge}</strong> Off
          </span>
        </div>
      )}
    </div>
  </div>
  )
}
