import React, { useState } from 'react';
import { faq } from '../../data';
import Back from '../common/back/Back';
import './faqs.css';

const Faqs = () => {
    const [click, setClick] = useState(false)

    const toggle = (index) => {
        if(click === index){
            return setClick(null)
        }
        setClick(index)
    }
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
      };

    const head ={
        color: '#54f4e7',
    fontSize: '70px',
    fontWeight: 'bold',
    };
    
  return (
    <>
     <Back title='FAQS' />
     <div style={containerStyle}>
       <h1 style={head}>FAQS</h1>
     </div>
     <h3 style={containerStyle}> FREQUENTLY ASKED QUESTIONS</h3>
     <section className='faq'>
        <div className="container">
            {faq.map((val,index)  =>(
                <div className="box">
                    <button className='accordion' onClick={ () => toggle(index)} key={index}>
                        <h3>{val.title}</h3>
                        <span>{ click===index? <i className='fa fa-chevron-down'> </i> : <i className='fa fa-chevron-right'> </i>}</span>
                    </button>
                    {click === index ?(
                        <div className="text">
                        <p>{val.desc}</p>
                    </div>
                    ): null}
                </div>
            ))}
        </div>
     </section>
    </>
  )
}

export default Faqs
