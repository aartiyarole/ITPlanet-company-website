import React, { useState } from 'react'

export default function Accordion({  items =[] }) {
  
  const [activeId, setActiveId] = useState(items?.[0]?.id || 'One'); // Default to first item if exists

  const handleAccordionClick = (itemId) => {
    setActiveId(activeId === itemId ? null : itemId); // Toggle active state
  };

  return (
    
        <div className="col-lg-6">
          <div className="faq-content">
            <div className="accordion" id="accordionTravel">
              <h4>What You Will Get?</h4>
              {items?.map((item) => (
                <div className="accordion-item" key={item.id}>
                  <h2 className="accordion-header" id={`faqheading${item.id}`}>
                    <button 
                      className={`accordion-button ${activeId !== item.id ? 'collapsed' : ''}`}
                      type="button" 
                      onClick={() => handleAccordionClick(item.id)}
                      aria-expanded={activeId === item.id} 
                      aria-controls={`faqcollapse${item.id}`}
                    >
                      {item.title}
                    </button>
                  </h2>
                  <div 
                    id={`faqcollapse${item.id}`} 
                    className={`accordion-collapse collapse ${activeId === item.id ? 'show' : ''}`}
                    aria-labelledby={`faqheading${item.id}`} 
                  >
                    <p className="accordion-body">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      
  )
}