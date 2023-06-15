import React from 'react'
import { team } from '../../data'

const TeamCard = () => {
  return (
    <>
     {team.map((val) => (
        <div className='items shadow'>
            <div className='img'>
                <img src={val.cover} alt='' />
                <div className="overlay">
                    <i className='fab fa-facebook-f icon'></i>
                    <i className='fab fa-github icon'></i>
                    <i className='fab fa-twitter icon'></i>
                    <i className='fab fa-linkedin icon'></i>
                </div>
            </div>
            <div className="details">
                <h3>{val.name}</h3>
                <p>{val.work}</p>
            </div>
        </div>
     ))}
    </>
  )
}

export default TeamCard
