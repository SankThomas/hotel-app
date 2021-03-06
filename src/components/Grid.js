import React from "react"
import grid1 from "../images/room-2.jpg"
import grid2 from "../images/room-3.jpg"
import grid3 from "../images/room-5.jpg"

const Grid = () => {
  return (
    <>
      <h3 className="text-center text-3xl font-bold mb-2 text-primary">
        Featured Rooms
      </h3>
      <section className="grid grid-cols-1 gap-5 pt-5 px-5 pb-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-3 xl:px-32">
        <div className="hover:opacity-80 transition-opacity">
          <img src={grid1} alt="" className="sm:h-80 sm:w-full" />
        </div>
        <div className="hover:opacity-80 transition-opacity">
          <img src={grid2} alt="" className="sm:h-80 sm:w-full" />
        </div>
        <div className="hover:opacity-80 transition-opacity">
          <img src={grid3} alt="" className="sm:h-80 sm:w-full" />
        </div>
      </section>
    </>
  )
}

export default Grid
