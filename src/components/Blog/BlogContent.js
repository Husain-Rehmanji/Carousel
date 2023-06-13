import React from 'react';

const BlogContent = () => {
  return (

    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img src="" alt="Img1" style={imageStyle} />
      </div>
      <div style={contentContainerStyle}>
        <h1 style={headingStyle}>Blog1</h1>
        <div style={descriptionContainerStyle}>
          <p><a href=''>Read Here</a></p>
        </div>
      </div>
    </div>

  );
};

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

export default BlogContent;
