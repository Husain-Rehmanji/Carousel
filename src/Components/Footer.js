import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#1eb2a6', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h3>OUR SERVICES</h3>
        <ul style={{ paddingLeft: '0', textAlign: 'left' }}>
          <li>Digital Marketing</li>
          <li>Project Guidance</li>
          <li>Website Development</li>
          <li>Internship</li>
          <li>Workshops on Board</li>
        </ul>
      </div>
      <div>
        <h3>Offices at:</h3>
        <ul style={{ paddingLeft: '0', textAlign: 'center' }}>
          <li>Panvel</li>
          <li>Ulwe</li>
          <li>Chembur</li>
        
        </ul>
      </div>
      <div>
        <div>
          <h3>Join our newsletter:</h3>
          <input type="text" placeholder="Enter your email" style={{ marginRight: '20px' }} />
          <button>Join now</button>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
