import React from 'react'

const Footer = () => {
  return (
    <footer >
      <div className="banner">
        <div className="title">
          <h1>FESTIVA</h1>
          <p>Event and Weddings</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input type="text" placeholder='E-Mail' />
            <button>Subscribe</button>
          </div>
          <p>Sign up with yoyr email address to receive news and updates!</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer