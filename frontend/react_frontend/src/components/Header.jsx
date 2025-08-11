import React from 'react'

export default function Header() {
  return (
    <>
    <nav className="navbar container pt-4 pb-4 align-items-start">
        <a className='navbar-brand text-light'>Django + React Auth</a>

        <div>
            <a className='btn btn-outline-info shadow-none' href='#'>Login</a>
            &nbsp;
            <a className='btn btn-info shadow-none' href='#'>Register</a>
        </div>
    </nav>
    </>
  )
}

