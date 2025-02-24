import React,{useState} from 'react'
import BreadcrumbSection from '../components/BreadcrumbSection';
import DevTools from '../components/DevTools';
import Accordion from '../components/Accordion';
import Modal from '../components/Modal';
export default function AppDevelopment() {
     const [isModalOpen , setIsModalOpen] = useState(false);
    const breadcrumbItems = [
        { text: 'Home', link: '/' },
        { text: 'App Development Course' }
    ];

    const accordionItems = [
        {
            id: 'One',
            title: 'Mobile App Fundamentals',
            content: 'Understand the principles of app development, app architecture, and user interface design.'
        },
        {
            id: 'Two',
            title: 'Android Development',
            content: 'Learn how to build native apps for Android using Java or Kotlin, covering Android Studio, layouts, and activities.'
        },
        {
            id: 'Three',
            title: 'UI/UX Design for Mobile',
            content: 'Understand mobile-specific design principles for creating engaging, responsive, and intuitive user interfaces.'
        },
        {
            id: 'Four',
            title: 'APIs & Data Handling',
            content: 'Learn how to integrate third-party APIs and handle data with local storage, databases, and cloud services like Firebase'
        },
        {
            id: 'Five',
            title: 'App Testing & Debugging',
            content: 'Learn best practices for testing, debugging, and optimizing app performance for a flawless user experience.'
        }
    ];

    

    return (
        <>
            <BreadcrumbSection title="App Development Course" breadcrumbItems={breadcrumbItems}/>
            <div className="service-details-page pt-120 mb-120" id="service-details-section">
                <div className="container">
                    <div className="service-details-top-area mb-80">
                        <div className="row g-lg-4 gy-5 align-items-center">
                            <div className="col-lg-6 order-lg-1 order-2 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="service-details-top-content">
                                    <h2>App Development <span>In Navi Mumbai</span></h2>
                                    <p>In today's mobile-first world, app development skills are in high demand. At IT Planet Solutions, our App Development course provides comprehensive training in building dynamic, high-performance mobile applications. Whether you're new to coding or an experienced developer looking to expand into mobile app creation, this course covers both native and cross-platform development, equipping you with the knowledge to create apps for Android and iOS.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-2 order-1 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="service-details-img">
                                    <img 
                                        src="/assets/img/app-development.jpg" 
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
                                        src="/assets/img/app-development1.jpg" 
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