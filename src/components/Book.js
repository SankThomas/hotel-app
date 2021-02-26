import React from "react"
import BookNow from "./BookNow"

const Book = () => {
  return (
    <>
      <section className="text-center py-20">
        <div className="text-4xl">
          <BookNow />
        </div>
        <h2 className="text-xl text-primary mt-5">
          Book Now to reserve your spot at Kenya's #11 ranked hotel
        </h2>
      </section>
    </>
  )
}

export default Book
