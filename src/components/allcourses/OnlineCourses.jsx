import React from 'react'
import { online } from '../../data'
import "./courses.css"

const OnlineCourses = () => {
  return (
    <>
    <section className='online'>
        <div className='container'>
            <h2>Courses</h2>
            <h1>Browse Our Online Courses </h1>
            <div className="content grid3">
              {online.map((val) => (
                <div className='box'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <img src={val.hoverCover} alt='' className='show' />
                  </div>  
                  <h1>{val.courseName}</h1>
                  <span>{val.course}</span>
                 </div> 
              ))}
            </div>
        </div>
    </section>
    </>
  )
}

export default OnlineCourses
