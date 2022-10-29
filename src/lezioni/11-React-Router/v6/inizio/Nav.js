import React from 'react'

import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='row justify-content-center'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/products'>Products</Link>
    </div>
  )
}

export default Nav