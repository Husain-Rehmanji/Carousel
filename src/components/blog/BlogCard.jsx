import React from 'react'
import { Link } from 'react-router-dom'
import { blog } from '../../data'
import "./blog.css"

const BlogCard = () => {
  return (
    <>
       
       {blog.map((val)=>{
        return(
        <div className="items shadow">
            <div className="img">
                <img src={val.cover} alt='' />
            </div>
            <div className="text">
                <div className="admin flexSB">
                    <span>
                        <i className='fa fa-user'></i>
                        <label htmlFor=''>{val.type}</label>
                    </span>
                    <span>
                        <i className='fa fa-calendar-alt'></i>
                        <label htmlFor=''>{val.date}</label>
                    </span>
                    <span>
                        <i className='fa fa-comments'></i>
                        <label htmlFor=''>{val.com}</label>
                    </span>
                </div>
                <h1><Link to={{ pathname: "https://medium.com/@davidpogue/my-first-immersion-in-apple-vision-pro-heavy-man-d99f0a940c7c" }} target="_blank">{val.title}</Link></h1>
                <p>{val.desc}</p>
            </div>
        </div>
        )
       })} 
    </>
  )
}

export default BlogCard
