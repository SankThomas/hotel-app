import React from "react"
import { NavLink } from "react-router-dom"

const Error = () => {
  return (
    <>
      <section className="text-center my-20">
        <h1>Error 404, this page does not exist</h1>
        <NavLink
          to="/"
          className="bg-primary text-white py-2 px-4 rounded-lg transition-all duration-300 border-2 hover:bg-gray-200"
        >
          Back Home
        </NavLink>
      </section>
    </>
  )
}

export default Error
