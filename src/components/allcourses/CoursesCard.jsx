import React, { useState } from "react";
import { coursesCard } from "../../data";
import "./courses.css";

const CoursesCard = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {coursesCard.map((val) => (
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''>(5.0)</label>
                  </div>
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <>
                        <div className='box'>
                          <div className='dimg'>
                            <img src={details.dcover} alt='' />
                          </div>
                          <div className='para'>
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className='price'>
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              <button onClick={toggleModal} className='outline-btn'><h4> ENROLL NOW !</h4></button>
              {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <span>HTML, CSS, And Javascript For Web Developers</span>
            <hr style={ {marginBottom: "20px",} }/>
            <img src="./images/sample.png" style={{ width: '400px', height: '300px', }} alt="" />
            <h1 style={ {textDecoration: 'underline'} }>Course Details</h1>
            <p>
              Introduction to HTML,HTML Elements and Tags: Text Formatting and Links :Formatting text using HTML tags (e.g., headings, paragraphs, emphasis) ,Creating hyperlinks to navigate between web pages,Lists and Tables, Working with Images and Multimedia, HTML Forms, Exploring the new features introduced in HTML5 (e.g., video, audio, canvas), Working with HTML tags to structure web pages (e.g., headers, footers, navigation)
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CoursesCard