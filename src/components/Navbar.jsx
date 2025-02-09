import React from 'react'

function Navbar() {
  return (
    <>
      <nav>
        <div className="navbar">
            <div className="logo">KUNAL</div>
            <div className="menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Photos</a></li>
                    <li><a href="#">Videos</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
