import { useState } from "react"
import { NavLink } from "react-router-dom"
import { footer } from "../data/footer"
import { icons } from "../data/footer"

const Footer = () => {
  // eslint-disable-next-line
  const [links, setLinks] = useState(footer)
  // eslint-disable-next-line
  const [socials, setSocials] = useState(icons)

  return (
    <>
      <section className="bg-primary pt-20 pb-32 text-white px-5">
        <div>
          <NavLink to="/" className="flex items-end">
            <h3 className="text-2xl">Luxe</h3>
          </NavLink>
        </div>
        <footer className="pt-10 md:grid md:grid-cols-2 lg:grid-cols-3">
          <ul>
            {links.map((link) => {
              const { id, title, navLink } = link

              return (
                <li key={id} className="text-lg my-3">
                  <NavLink to={navLink}>{title}</NavLink>
                </li>
              )
            })}
          </ul>

          <ul className="flex items-center pt-10 pb-4 md:pt-0">
            {socials.map((social) => {
              const { id, icon, link } = social

              return (
                <li key={id} className="mr-5">
                  <a href={link} className="text-4xl">
                    {icon}
                  </a>
                </li>
              )
            })}
          </ul>
          <div className="pt-20 lg:pt-10">
            <h6 className="text-sm">© Copyright 2021, TsbDesigns</h6>
          </div>
        </footer>
      </section>
    </>
  )
}

export default Footer
