import React from "react"
import { Projects } from "../../data"
import "./Proj.css"

const ProjCard = () => {
  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {Projects.map((val) => (
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  
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
                       
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className='price'>
                <h3>
                  {val.priceAll}
                </h3>
              </div>
              <button className='outline-btn'><h4>View</h4></button>
            </div>
          ))}
        </div>
      </section>
      {/* Import all info in form of array from data.js file */}
    </>
  )
}

export default ProjCard