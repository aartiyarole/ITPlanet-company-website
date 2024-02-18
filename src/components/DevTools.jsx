import React from 'react'

export default function DevTools() {
    const tools = [
        { name: 'HTML', image: 'html-website-designer-in-navi-mumbai.png' },
        { name: 'CSS', image: 'css-designer-in-navi-mumbai.png' },
        { name: 'Java Script', image: 'java-script-developer-in-navi-mumbai.png' },
        { name: 'Ajax', image: 'ajax-developer-in-navi-mumbai.png' },
        { name: 'Jquery', image: 'jquery-developer-in-navi-mumbai.png' },
        { name: 'Mongo DB', image: 'mongo-db-developer-in-navi-mumbai.png' },
        { name: 'Flutter', image: 'flutter-developer-in-navi-mumbai.png' },
        { name: 'Firebase', image: 'fire-base-developer-in-navi-mumbai.png' },
        { name: 'Google App Engine', image: 'google-app-engine-developer-in-navi-mumbai.png' },
        { name: 'Photoshop', image: 'photoshop-designer-in-navi-mumbai.png' },
        { name: 'Bootstrap', image: 'bootstrap-designer-in-navi-mumbai.png' },
        { name: 'Figma', image: 'innerpage/icon/figma-icon.svg' },
        { name: 'Visual Studio', image: 'innerpage/icon/vs-icon.svg' },
        { name: 'Git', image: 'innerpage/icon/git-icon.svg' },
        { name: 'React', image: 'innerpage/icon/react-icon.svg' },
        { name: 'PHP', image: 'innerpage/icon/php-icon.svg' },
        { name: 'MySQL', image: 'innerpage/icon/mysql-icon.svg' },
        { name: 'GitLab', image: 'innerpage/icon/gitlab-icon.svg' },
        { name: 'AWS', image: 'innerpage/icon/aws-icon.svg' },
        { name: 'Many More...', image: '', isLast: true }
    ];

    const StarIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
            <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z"></path>
        </svg>
    );

    return (

            <div className="container">
                <div className="row mb-60">
                    <div className="col-lg-12 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="section-title5">
                            <span className="sub-title5 two">
                                <StarIcon />
                                Our Tools
                                <StarIcon />
                            </span>
                            <h2>Our Development <span>Technology</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row g-4">
                    {tools.map((tool, index) => (
                        <div 
                            key={index} 
                            className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" 
                            data-wow-delay={`${Math.min(index * 200, 800)}ms`} 
                            data-wow-duration="1500ms"
                        >
                            <div className="tools-card">
                                {!tool.isLast && (
                                    <div className="tools-icon">
                                        <img 
                                            src={`/assets/img/${tool.image}`} 
                                            alt={`${tool.name.toLowerCase()}-developer-in-navi-mumbai`} 
                                            name={`${tool.name.toLowerCase()}-developer-in-navi-mumbai`}
                                        />
                                    </div>
                                )}
                                <div className="tools-name">
                                    {tool.isLast ? (
                                        <b><span>{tool.name}</span></b>
                                    ) : (
                                        <span>{tool.name}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        
    )
}