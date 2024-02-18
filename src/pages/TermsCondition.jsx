import React from 'react'
import BreadcrumbSection from '../components/BreadcrumbSection';

export default function TermsCondition() {
    const breadcrumbItems = [
        { text: 'Home', link: '/' },
        { text: 'Terms & Conditions' }
    ];
  return (
    <>
    <BreadcrumbSection title="Terms & Conditions" breadcrumbItems={breadcrumbItems} />
    <div className="service-details-page pt-120  mb-120" id="service-details-section">
        <div className="container">
          <div className="card service-details-top-area mb-80" style={{padding:"20px"}}>
            <div className="card-body row g-4" id="contact">
              <p>Welcome to IT Planet Software Solution! These Terms and Conditions outline the rules and regulations for the use of our website and services.</p>
              <p>By accessing this website and using our services, you accept these Terms and Conditions in full. If you disagree with any part of these terms, please do not use our website or services.</p>
              
              <ol >
                <li>
                  <h2>Intellectual Property Rights</h2>
                  <p>The content, design, and functionality of this website are the property of IT Planet Software Solution and are protected by copyright and other intellectual property laws. You may not reproduce, modify, distribute, or republish any content from this website without our prior written consent.</p>
                </li>
                <li>
                  <h2>Use of Website and Services</h2>
                  <p>You agree to use this website and our services only for lawful purposes and in a manner consistent with these Terms and Conditions. You may not use this website or our services in any way that could damage, disable, overburden, or impair the website or interfere with any other party's use and enjoyment of the website.</p>
                </li>
                <li>
                  <h2>Privacy Policy</h2>
                  <p>Your privacy is important to us. Please review our Privacy Policy, which outlines how we collect, use, and disclose personal information obtained through this website and our services.</p>
                </li>
                <li>
                  <h2>Limitation of Liability</h2>
                  <p>To the fullest extent permitted by law, IT Planet Software Solution shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way related to your use of this website or our services, even if we have been advised of the possibility of such damages.</p>
                </li>
                <li>
                  <h2>Indemnification</h2>
                  <p>You agree to indemnify and hold harmless IT Planet Software Solution, its affiliates, officers, directors, employees, agents, and partners from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or in any way related to your use of this website or our services or your violation of these Terms and Conditions.</p>
                </li>
                <li>
                  <h2>Changes to Terms and Conditions</h2>
                  <p>We reserve the right to modify or replace these Terms and Conditions at any time. It is your responsibility to review these Terms and Conditions periodically for changes. Your continued use of this website or our services following the posting of any changes constitutes acceptance of those changes.</p>
                </li>
                <li>
                  <h2>Governing Law</h2>
                  <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.</p>
                </li>
                <li>
                  <h2>Project Delivery Timeline</h2>
                  <p>Project will be delivered within estimated working days. Due to technical reasons, the project delivery timeline may increase or decrease. In such situations, the company will inform the client about the issue.</p>
                </li>
                <li>
                  <h2>Changes and Chargeable Development</h2>
                  <p>After completing any development stage, changes will be chargeable, and the delivery timeline will be extended as per requirements (changes).</p>
                </li>
                <li>
                  <h2>Project Cancellation</h2>
                  <p>If at any milestone the project is canceled at the client's request, the project development is assumed to be completed, and the client is liable to pay for the project.</p>
                </li>
                <li>
                  <h2>Maintenance Period</h2>
                  <p>The free maintenance period will start from the delivery date as per the final quote or agreement.</p>
                </li>
                <li>
                  <h2>Source Code Handover</h2>
                  <p>After completing development, all source code backups will be handed over to the client in some cases.</p>
                </li>
                <li>
                  <h2>Source Code Destruction</h2>
                  <p>If no requirement for future development arises, after 1 year, the company will destroy all source code and working directories.</p>
                </li>
                <li>
                  <h2>Security Responsibility</h2>
                  <p>The security of backup source code is the client's responsibility.</p>
                </li>
                <li>
                  <h2>Additional Features</h2>
                  <p>Any extra features added beyond the scope document will be chargeable as per discussion.</p>
                </li>
                <li>
                  <h2>Third-party APIs</h2>
                  <p>All third-party APIs will be purchased by the client and provided to the company for integration. Project managers will provide guidance to the client for registering and purchasing third-party APIs. The choice of third-party services for app and website use is the client's decision.</p>
                </li>
                <li>
                  <h2>Hosting Services</h2>
                  <p>We provide third-party hosting services as per the client's requirement and choice. The company is not responsible for:</p>
                  <ol type="a">
                    <li>Guaranteeing free email service backup. The company does not have the rights to interfere and take backup of sensitive email data. The client is responsible for email/webmail related backup and security.</li>
                    <li>Website and data backup, which depends on the hosting plan.</li>
                  </ol>
                </li>
              </ol>
              
              <footer>
                <h2>Contact Us</h2>
                <p>If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:contact@itplanet.in">contact@itplanet.in</a>.</p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

