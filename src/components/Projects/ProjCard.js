import React from "react";
import { Projects } from "../../data";
import "./Proj.css";

const ProjCard = () => {
  // Filter the projects based on their categories
  const javaProjects = Projects.filter((project, index) => index < 3);
  const pythonProjects = Projects.filter((project, index) => index >= 3 && index < 6);
  const cppProjects = Projects.filter((project, index) => index >= 6);

  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {/* Java Projects */}
          {javaProjects.map((val) => (
            // Render project card
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>Java {val.coursesName}</h1>
                  
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
              <button className='outline-btn' style={{
                backgroundColor: '#1eb2a6'
              }}><h4>View</h4></button>
            </div>
          ))}

          {/* Python Projects */}
          
          {pythonProjects.map((val) => (
            // Render project card
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>Python {val.coursesName}</h1>
                  
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
              <button className='outline-btn' style={{
                backgroundColor: '#1eb2a6'
              }}><h4>View</h4></button>
            </div>
          ))}

          {/* C/C++ Projects */}
         
          {cppProjects.map((val) => (
            // Render project card
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>C/C++ {val.coursesName}</h1>
                  
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
              <button className='outline-btn' style={{
                backgroundColor: '#1eb2a6'
              }}><h4>View</h4></button>
            </div>
          ))}
        </div>
      </section>
      
    </>
  );
};
export default ProjCard;