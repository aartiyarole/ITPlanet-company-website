import React,{useState} from 'react'
import BreadcrumbSection from '../components/BreadcrumbSection';
import DevTools from '../components/DevTools';
import Accordion from '../components/Accordion';
import Modal from '../components/Modal';
export default function ReactjsDev() {
     const [isModalOpen , setIsModalOpen] = useState(false);
    const breadcrumbItems = [
        { text: 'Home', link: '/' },
        { text: 'React Js/ Native Course' }
    ];

    const accordionItems = [
        {
            id: 'One',
            title: 'React.js Fundamentals',
            content: 'Master the core concepts of React.js such as components, state, props, and the virtual DOM to build powerful, interactive web applications'
        },
        {
            id: 'Two',
            title: 'React Hooks',
            content: 'Learn to manage state and side effects in functional components using React Hooks like useState, useEffect, and more'
        },
        {
            id: 'Three',
            title: 'Routing with React Router',
            content: 'Understand how to implement dynamic, multi-page web applications using React Router'
        },
        {
            id: 'Four',
            title: 'React Native',
            content: 'Extend your knowledge of React to mobile development by learning how to build cross-platform mobile apps with React Native.'
        },
        {
            id: 'Five',
            title: 'Native Mobile Features',
            content: 'Learn to integrate native features such as camera, GPS, and push notifications into your mobile apps'
        }
    ];

    

    return (
        <>
            <BreadcrumbSection title="React Js / Native Course" breadcrumbItems={breadcrumbItems}/>
            <div className="service-details-page pt-120 mb-120" id="service-details-section">
                <div className="container">
                    <div className="service-details-top-area mb-80">
                        <div className="row g-lg-4 gy-5 align-items-center">
                            <div className="col-lg-6 order-lg-1 order-2 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="service-details-top-content">
                                    <h2>Reactjs / Native course <span>In Navi Mumbai</span></h2>
                                    <p>Unlock the power of React.js and React Native to build dynamic web and mobile applications with a single JavaScript codebase. At IT Planet Solutions, our React.js and React Native course provides a comprehensive introduction to front-end web development and cross-platform mobile app development. Whether you're looking to build robust websites or mobile apps, this course will help you master React.js for the web and React Native for mobile devices.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-2 order-1 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="service-details-img">
                                    <img 
                                        src="/assets/img/React-Native-framework.gif" 
                                        alt="app-development-in-navi-mumbai" 
                                        name="app-development-in-navi-mumbai"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="service-details-faq-area wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="row g-lg-4 gy-5 align-items-xl-center">
                            <div className="col-lg-6">
                                <div className="service-details-faq-img">
                                    <img 
                                        src="/assets/img/react1.jpg" 
                                        alt="react" 
                                        name="reactjs-development-in-navi-mumbai"
                                    />
                                </div>
                            </div>
                            <Accordion items={accordionItems} />
                            <div className="col-md-12 d-flex justify-content-center">
                                <button 
                                    type="button" 
                                    className="btn btn-primary" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="#exampleModal"
                                    onClick={()=>setIsModalOpen(true)}
                                >
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-details-tools-section mb-120">
                <DevTools />
            </div>
            <Modal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}