import React, { useState } from "react"
import { offers } from "../data/offers"

const Offers = () => {
  // eslint-disable-next-line
  const [cards, setCards] = useState(offers)

  return (
    <>
      <h3 className="bg-gray-100 text-center text-2xl pt-10 pb-4">On offer</h3>
      <section className="bg-gray-100 grid grid-cols-1 gap-5 px-5 pb-20 sm:grid-cols-2 lg:grid-cols-3 xl:px-32">
        {cards.map((card) => {
          const { id, title, desc, image } = card

          return (
            <article
              key={id}
              className="p-5 bg-white shadow-lg transition-all duration-300 hover:shadow-sm"
            >
              <img src={image} alt={title} className="w-full lg:h-64" />
              <h4 className="mt-3 mb-1">{title}</h4>
              <p>{desc}</p>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default Offers
