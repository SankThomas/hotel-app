import React from "react"
import restaurant from "../images/restaurant-2.jpg"

const Features = () => {
  return (
    <>
      <section>
        <div>
          <img src={restaurant} alt="" />
          <h4>Restaurant, meeting & conference center</h4>
        </div>
        <div>
          <ul>
            <li>Located in the outskirts of Nairobi city</li>
            <li>8 bars and restaurants</li>
            <li>600 acre land</li>
            <li>202 beautiful and spacious rooms</li>
            <li>10 penthouse suites</li>
            <li>Rooftop pool</li>
            <li>Indoor pools for select suites</li>
            <li>Meeting & conference centers</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Features
