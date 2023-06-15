import React, { useEffect, useState } from "react";
import data from '../../data';
import Back from '../common/back/Back';
import './review.css';

const Review = () => {
    const [people] = useState(data);
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const lastIndex = people.length - 1;
      if (index < 0) {
        setIndex(lastIndex);
      }
      if (index > lastIndex) {
        setIndex(0);
      }
    }, [index, people]);
  
    useEffect(() => {
      let slider = setInterval(() => {
        setIndex(index + 1);
      }, 5000);
      return () => {
        clearInterval(slider);
      };
    }, [index]);
  

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
      };
      const containerStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
        fontSize: '25px',
      };
    const head ={
        color: '#54f4e7',
    fontSize: '70px',
    fontWeight: 'bold',
    };
  return (
    <>
     <Back title='REVIEWS' /> 
     <div style={containerStyle}>
       <h1 style={head}>Reviews</h1>
     </div>
     <h3 style={containerStyles}> Our successful students </h3>
     <section className="section">
      <div className="title">
        <h2>Top Students</h2>
      </div>
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const { id, image, name, title, quote } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <i className="fas fa-arrow-left" />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <i className="fas fa-arrow-right" />
        </button>
      </div>
    </section>
    </>
  )
}

export default Review
