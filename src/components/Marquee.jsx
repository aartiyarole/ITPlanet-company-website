import React from 'react'

export default function Marquee({items}) {
    const StarIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
          <path d="M17 8.5L14.6578 6.84722L15.8666 4.25001L13.0051 3.99493L12.75 1.1334L10.1528 2.34215L8.5 0L6.84722 2.34215L4.25001 1.1334L3.99493 3.99493L1.1334 4.25001L2.34215 6.84722L0 8.5L2.34215 10.1528L1.1334 12.75L3.99493 13.0051L4.25001 15.8666L6.84722 14.6578L8.5 17L10.1528 14.6578L12.75 15.8666L13.0051 13.0051L15.8666 12.75L14.6578 10.1528L17 8.5Z" />
        </svg>
      );

      const MarqueeContent = () => (
        <div className="js-marquee" style={{ marginRight: '50px', float: 'left' }}>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <StarIcon />
                    <h6>{item}</h6>
                </React.Fragment>
            ))}
        </div>
        );
  return (
    <>
        <div 
            className="js-marquee-wrapper" 
            style={{
                width: '100000px',
                transform: 'translateX(0px)',
                animation: '28.4565s linear 0s infinite normal none running marqueeAnimation-273695'
            }}
        >
            <MarqueeContent />
            <MarqueeContent /> {/* Duplicate content for continuous scroll */}
        </div>

        
    </>
  )
}
