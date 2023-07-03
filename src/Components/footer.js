import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'grey', position: 'fixed', bottom: 0, width: '100%' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>About Us</h4>
            <p>Insert your About Us content here.</p>
          </div>
          <div className="col-md-3">
            <h4>Contact</h4>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>Address: Insert your address here</li>
              <li>Phone: Insert your phone number here</li>
              <li>Email: Insert your email address here</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Follow Us</h4>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>
                <a href="https://www.facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://www.twitter.com">Twitter</a>
              </li>
              <li>
                <a href="https://www.instagram.com">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
