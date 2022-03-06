import React from 'react'
import {Link} from "gatsby"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5">
        <label for="logo">Logo</label>
        <div>
            <Link to="/" className="px-4">Home</Link>
            <Link to="/" className="px-4">Home</Link>
            <Link to="/" className="px-4">Home</Link>
            <Link to="/" className="px-4">Home</Link>
        </div>
    </nav>
  )
}
