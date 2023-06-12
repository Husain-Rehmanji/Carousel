import React from 'react';

const AboutCard = () => {
  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img src="./images/about.jpg" alt="Profile" style={imageStyle} />
      </div>
      <div style={contentContainerStyle}>
        <h1 style={headingStyle}>Experienced Educator With 17+ Years Teaching Experience</h1>
        <div style={descriptionContainerStyle}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae tortor vestibulum, semper lacus eget, tempor ligula. Nulla bibendum risus lectus, at posuere lectus interdum et.</p>
          <p>Phasellus aliquam, tellus vel condimentum eleifend, elit nisi ullamcorper massa, eget scelerisque massa ex vel metus. Fusce a est vel nulla placerat venenatis.</p>
        </div>
      </div>
    </div>
  );
};

// Inline CSS styles
const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  background: '#f2f2f2',
};

const imageContainerStyle = {
  flex: '0 0 50%',
  paddingRight: '0px',
  paddingLeft: '100px',
};

const imageStyle = {
  width: '82%',
  height: 'auto',
};

const contentContainerStyle = {
  flex: '0 0 50%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  paddingLeft: '0px',
  paddingRight: '45px',
};

const headingStyle = {
  color: '#1eb2a6',
  marginTop: '40px',
};

const descriptionContainerStyle = {
  textAlign: 'left',
  marginTop: '20px',
};

export default AboutCard;
