import React from "react"
import restaurant from "../images/restaurant-2.jpg"

const Features = () => {
  return (
    <>
      <section>
        <div>
          <img src={restaurant} alt="" className="block mx-auto lg:w-9/12" />
          <h4 className="px-5 mt-2 mb-3 text-2xl text-primary lg:text-5xl xl:px-48">
            Restaurant, meeting & conference center
          </h4>
        </div>
        <div className="px-5 pb-10 md:flex md:justify-end xl:px-32">
          <ul>
            <li className="my-2 md:text-xl">
              Located in the outskirts of Nairobi city
            </li>
            <li className="my-2 md:text-xl">8 bars and restaurants</li>
            <li className="my-2 md:text-xl">600 acre land</li>
            <li className="my-2 md:text-xl">
              202 beautiful and spacious rooms
            </li>
            <li className="my-2 md:text-xl">10 penthouse suites</li>
            <li className="my-2 md:text-xl">Rooftop pool</li>
            <li className="my-2 md:text-xl">Indoor pools for select suites</li>
            <li className="my-2 md:text-xl">Meeting & conference centers</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Features
