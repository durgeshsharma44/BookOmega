import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-light text-center py-4 mt-5">
      <div className="container">
        <div className="row align-items-center">
          {/* About Section */}
          

          {/* Quick Links */}
          <div className="col-md-4 d-flex justify-content-center mb-3 mb-md-0">
            <div>
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/terms-of-service">Terms of Service</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/contact-us">Contact Us</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4 d-flex justify-content-center justify-content-md-end">
            <div>
              <h5>Follow Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-square fa-2x" style={{ marginRight: '10px' }}></i> Facebook
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter-square fa-2x" style={{ marginRight: '10px' }}></i> Twitter
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram-square fa-2x" style={{ marginRight: '10px' }}></i> Instagram
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin fa-2x" style={{ marginRight: '10px' }}></i> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-dark text-white py-3 mt-4">
        <p className="mb-0">© {new Date().getFullYear()} BookSwap. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
