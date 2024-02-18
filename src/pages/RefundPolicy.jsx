import React from 'react'
import BreadcrumbSection from '../components/BreadcrumbSection';

export default function RefundPolicy() {
    const breadcrumbItems = [
        { text: 'Home', link: '/' },
        { text: 'Refund Policy' }
    ];

    return (
        <>
            <BreadcrumbSection title="Refund Policy" breadcrumbItems={breadcrumbItems} />
            <div className="service-details-page pt-120 mb-120" id="service-details-section">
                <div className="container">
                    <div className="service-details-top-area mb-80">
                        <div className="card row g-4" id="contact">
                            <div className="card-body row">
                                <div>
                                    <p>Last Updated: 08/02/2024</p>
                                    <p>
                                        Thank you for choosing IT Planet Software Solutions. This Refund Policy outlines the terms and conditions under which we issue refunds for our services. By engaging with our services, you agree to the terms outlined below.
                                    </p>
                                    
                                    <h4>1. Refund Eligibility</h4>
                                    <p>Refunds may be considered under the following circumstances:</p>
                                    <ul>
                                        <li>
                                            <strong>Project Cancellation: </strong> 
                                            If you decide to cancel a project before it is initiated, a full refund may be provided, minus any non-recoverable costs incurred by IT Planet Software Solutions up to that point.
                                        </li>
                                        <li>
                                            <strong>Service Unavailability: </strong>
                                            In the event that we are unable to fulfill our service obligations due to unforeseen circumstances or technical issues on our end, you may be eligible for a full or partial refund.
                                        </li>
                                    </ul>
                                    
                                    <h4>2. Non-Refundable Items and Services</h4>
                                    <p>Certain items and services are non-refundable, including but not limited to:</p>
                                    <ul>
                                        <li>
                                            <strong>Third-Party Services: </strong>
                                            Any fees paid for third-party services such as hosting, domain registration, or other external services are non-refundable.
                                        </li>
                                        <li>
                                            <strong>Freelancer Services: </strong>
                                            Payments made for services provided by freelancers are non-refundable. Any concerns or disputes related to freelancer services should be addressed directly with the freelancer.
                                        </li>
                                        <li>
                                            <strong>Custom Development Work: </strong>
                                            Payments for custom development work that has been completed according to the project specifications are non-refundable.
                                        </li>
                                    </ul>
                                    
                                    <h4>3. Refund Process</h4>
                                    <p>
                                        To request a refund, you must contact us at the email address provided below within [X days] of the issue or project cancellation. Refund requests will be reviewed on a case-by-case basis.
                                    </p>
                                    
                                    <h4>4. Payment Reversals</h4>
                                    <p>
                                        If a refund is approved, the refund will be processed using the original payment method. Please note that the time it takes for the refund to be reflected in your account may vary depending on the payment provider.
                                    </p>
                                    
                                    <h4>5. Changes to the Refund Policy</h4>
                                    <p>
                                        IT Planet Software Solutions reserves the right to update and modify this Refund Policy. Any changes will be communicated to you through our website or via email.
                                    </p>
                                    
                                    <h4>6. Contact Information</h4>
                                    <p>
                                        If you have any questions or concerns regarding this Refund Policy, please contact us at:
                                        <br />
                                        <strong>Email: </strong>
                                        <a href="mailto:info@itplanet.in">info@itplanet.in</a>
                                    </p>
                                    
                                    <p>
                                        By engaging with our services, you acknowledge that you have read, understood, and agreed to this Refund Policy. Thank you for choosing IT Planet Software Solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}