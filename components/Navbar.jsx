import { ShoppingCart } from 'lucide-react'
import { Menu } from 'lucide-react'
import React from 'react'

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <Menu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-medium">
              <NavbarLinks />
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">AnasMart</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavbarLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <ShoppingCart />
            </button>
        </div>
      </div>
    </>
  )
}

function NavbarLinks() {
  return (
    <>
      <li><a>Home</a></li>
      <li><a>Products</a></li>
      <li><a>About</a></li>
      <li><a>Contact</a></li>
    </>
  )
}

