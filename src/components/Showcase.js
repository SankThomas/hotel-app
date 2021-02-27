import React from "react"

const Showcase = () => {
  return (
    <>
      <section className="showcase">
        <div className="overlay flex flex-col items-center justify-center px-5">
          <div className="text p-5">
            <h1 className="text-primary text-center text-3xl mb-2 md:text-4xl lg:text-6xl">
              Luxurious Rooms
            </h1>
            <div className="bg-primary h-1 w-20 mx-auto"></div>
            <p className="text-center text-lg mt-2 md:text-2xl">
              Book a room in one of Kenya's top-rated hotels
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Showcase
