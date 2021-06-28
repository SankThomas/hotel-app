import React from "react"
import { NavLink } from "react-router-dom"

const BookNow = () => {
  return (
    <>
      <div>
        <NavLink
          to="/book-now"
          className="bg-primary text-white py-2 px-4 rounded-lg transition-all border-2 hover:bg-white hover:text-black"
        >
          Book Now
        </NavLink>
      </div>
    </>
  )
}

export default BookNow
