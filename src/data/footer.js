import { v4 as uuidv4 } from "uuid"
import { GrFacebook, GrInstagram, GrTwitter } from "react-icons/gr"

export const footer = [
  {
    id: uuidv4(),
    title: "Home",
    navLink: "/",
  },
  {
    id: uuidv4(),
    title: "Rooms",
    navLink: "/rooms",
  },
  {
    id: uuidv4(),
    title: "Book Now",
    navLink: "/book-now",
  },
]

export const icons = [
  {
    id: uuidv4(),
    icon: <GrFacebook />,
    link: "https://facebook.com/tsbsankara",
  },
  {
    id: uuidv4(),
    icon: <GrInstagram />,
    link: "https://instagram.com/tsbsankara",
  },
  {
    id: uuidv4(),
    icon: <GrTwitter />,
    link: "https://twitter.com/TSBSankara",
  },
]
