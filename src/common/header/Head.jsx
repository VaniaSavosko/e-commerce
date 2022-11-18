import React from 'react'
import './header.css'

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label> +38063 020 2900</label>
            <i className='fa fa-envelope'></i>
            <label> support@gmail.com</label>
          </div>
          <div className='right row RText'>
            <label>Theme FAQ's</label>
            <label>Need Help?</label>
            <span>🏳️‍⚧️</span>
            <label>EN</label>
            <span>🏳️‍⚧️</span>
            <label>USD</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
