import React from "react"
import { NavLink } from "react-router-dom"
import BookNow from "./BookNow"

const Header = () => {
  return (
    <>
      <header className="flex flex-col items-center justify-between px-5 py-6 sm:flex-row">
        <div>
          <NavLink to="/" className="flex items-end">
            <h3 className="ml-2 text-2xl">Luxe</h3>
          </NavLink>
        </div>

        <nav className="mt-2 sm:mt-0">
          <ul className="flex items-center">
            <li className="mx-2">
              <NavLink
                to="/"
                exact
                className="px-3 py-2 rounded-lg border-2"
                activeClassName="bg-gray-300 text-white"
              >
                Home
              </NavLink>
            </li>
            <li className="mx-2">
              <NavLink
                to="/rooms"
                className="px-3 py-2 rounded-lg border-2"
                activeClassName="bg-gray-300 text-white"
              >
                Rooms
              </NavLink>
            </li>
            <li>
              <BookNow />
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
