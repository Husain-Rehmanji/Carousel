import React from 'react';
import Back from '../common/back/Back';
import BlogCard from './BlogCard';
import "./blog.css";

const Blog = () => {
  return (
    <> 
       <Back title='Blogs ' />
       <section className='blog padding'>
       <h1 style={{ textAlign: 'center', fontSize: 50, marginTop: -110 }}>RECENT BLOGS</h1>
        <div className='container grid2'>
          
          <BlogCard />
        </div>
       </section>
    </>
  )
}

export default Blog
