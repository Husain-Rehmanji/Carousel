import React from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1> OGGN TECH</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>

          <div className='social'>
            <div>
                <div className="star"><Link to="/login" style={{ color: '#FFF' }}> LOG IN </Link> </div>
                <div className="star">SIGN UP</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head