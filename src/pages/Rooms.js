import { useState } from "react"
import RoomsShowcase from "../components/RoomsShowcase"
import { rooms } from "../data/rooms"

const Rooms = () => {
  // eslint-disable-next-line
  const [cards, setRooms] = useState(rooms)

  return (
    <>
      <RoomsShowcase />
      <section className="bg-gray-100 pt-10 pb-20 px-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:px-32">
        {cards.map((card) => {
          const { id, title, image, desc } = card

          return (
            <article
              key={id}
              className="p-5 bg-white shadow-lg transition-all duration-300 hover:shadow-sm"
            >
              <img src={image} alt={title} />
              <h4 className="pt-2">{desc}</h4>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default Rooms
