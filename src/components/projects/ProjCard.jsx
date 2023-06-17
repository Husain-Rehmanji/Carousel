import React, { useState } from 'react';
import { Projects } from "../../data";
import "./Proj.css";

const ProjCard = () => {
  const javaProjects = Projects.filter((project, index) => index < 3);
  const pythonProjects = Projects.filter((project, index) => index >= 3 && index < 6);
  const cppProjects = Projects.filter((project, index) => index >= 6);

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {/* Java Projects */}
          {javaProjects.map((val) => (
            <div className='items'>
              {/* Card content */}
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>Java {val.coursesName}</h1>
                  {/* Teacher details */}
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <div className='box'>
                        <div className='dimg'>
                          <img src={details.dcover} alt='' />
                        </div>
                        <div className='para'>
                          <h4>{details.name}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Price and View button */}
              <div className='price'>
                <h3>{val.priceAll}</h3>
              </div>
              <button
                className='outline-btn'
                onClick={() => openModal(val)}
                style={{
                  backgroundColor: '#1eb2a6'
                }}
              >
                <h4>View</h4>
              </button>
            </div>
          ))}

          {/* Python Projects */}
          {pythonProjects.map((val) => (
            <div className='items'>
              {/* Card content */}
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>Python {val.coursesName}</h1>
                  {/* Teacher details */}
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <div className='box'>
                        <div className='dimg'>
                          <img src={details.dcover} alt='' />
                        </div>
                        <div className='para'>
                          <h4>{details.name}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Price and View button */}
              <div className='price'>
                <h3>{val.priceAll}</h3>
              </div>
              <button
                className='outline-btn'
                onClick={() => openModal(val)}
                style={{
                  backgroundColor: '#1eb2a6'
                }}
              >
                <h4>View</h4>
              </button>
            </div>
          ))}

          {/* C/C++ Projects */}
          {cppProjects.map((val) => (
            <div className='items'>
              {/* Card content */}
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>C/C++ {val.coursesName}</h1>
                  {/* Teacher details */}
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <div className='box'>
                        <div className='dimg'>
                          <img src={details.dcover} alt='' />
                        </div>
                        <div className='para'>
                          <h4>{details.name}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Price and View button */}
              <div className='price'>
                <h3>{val.priceAll}</h3>
              </div>
              <button
                className='outline-btn'
                onClick={() => openModal(val)}
                style={{
                  backgroundColor: '#1eb2a6'
                }}
              >
                <h4>View</h4>
              </button>
            </div>
          ))}
        </div>

        {/* Modal window */}
        {showModal && selectedProject && (
          <div className='modal'>
            <div className='modal-content'>
              <span className='close' onClick={closeModal}>&times;</span>
              <img src={selectedProject.image} alt='Project' />
              <div>
                <h2>Date Completed: {selectedProject.dateCompleted}</h2>
                <p>{selectedProject.description}</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ProjCard;