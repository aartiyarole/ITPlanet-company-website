import React from 'react'

export default function Footer() {
  return (
    <div>
    <footer>
      <div className="home4-footer-section style-2">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-xl-12">
              <div className="home4-footer-wrap">
                <div className="footer-top" style={{ background: '#181818' }}>
                  <div className="row g-lg-4 gy-5 justify-content-center">
                    <div className="col-md-3">
                      <div className="footer-widget">
                        <div className="footer-logo">
                          <a href="/" className="logo-dark">
                            <img src="assets/img/w_logo.png" style={{ height: '40px' }} alt="logo dark" />
                          </a>
                          <a href="/" className="logo-light">
                            <img src="assets/img/w_logo.png" style={{ height: '40px' }} alt="logo light" />
                          </a>
                        </div>

                        <div className="social-area">
                          <h6 style={{ color: '#fff' }}>Follow us</h6>
                          <ul className="social-list">
                            <li>
                              <a href="https://www.facebook.com/profile.php?id=61551099553894" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-facebook"></i>
                                <span>Facebook</span>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/itplanet.in/" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-instagram"></i>
                                <span>Instagram</span>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.linkedin.com/company/it-planet-software-solution/" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-linkedin"></i>
                                <span>LinkedIn</span>
                              </a>
                            </li>
                            <li>
                              <a href="https://wa.me/919653322737?text=I'm%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-whatsapp"></i>
                                <span>Whats App</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-2">
                      <div className="footer-widget">
                        <div className="widget-title">
                          <h4>Company</h4>
                        </div>
                        <div className="menu-container">
                          <ul className="widget-list">
                            <li><a href="/about-us">About us</a></li>
                            <li><a href="/clients">Our Clients</a></li>
                            <li><a href="/career">Career</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="footer-widget">
                        <div className="widget-title">
                          <h4>Mumbai</h4>
                        </div>
                        <p>
                          <a href="tel:9766397512"><b><i className="fa fa-phone" aria-hidden="true"></i> </b> +91 97663 97512 / 96533 22737</a><br />
                          <b><i className="fa fa-envelope" aria-hidden="true"></i> </b> itplanetsoftwaresolution@gmail.com<br />
                          <b><i className="fa fa-map-marker" aria-hidden="true"></i> </b> S-31, Haware Fantasia Business Park, sector 30A, Vashi, Navi Mumbai, 400705
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="footer-widget">
                        <div className="widget-title">
                          <h4>Pune</h4>
                        </div>
                        <p>
                          <a href="tel:9766397512"><b><i className="fa fa-phone" aria-hidden="true"></i> </b> +91 77749 54303</a><br />
                          <b><i className="fa fa-envelope" aria-hidden="true"></i> </b> itplanetsoftwaresolution@gmail.com<br />
                          <b><i className="fa fa-map-marker" aria-hidden="true"></i> </b> 402, Jadhavrao Pride, BJS Corner, Wagholi, Pune- 412207
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="footer-bottom" style={{ background: '#000' }}>
                  <div className="copyright-area">
                    <p>Copyright 2024 IT Planet | Official Website | All Rights Reserved</p>
                  </div>
                  <div className="footer-bottom-right">
                    <ul>
                      <li><a href="/refund-policy">Refund Policy</a></li>
                      <li><a href="/term-condition">Terms & Conditions</a></li>
                      <li><a href="/privacy-policy">Privacy Policy</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}
