import React from "react"
import comfy from "../images/comfy.jpg"

const Comfy = () => {
  return (
    <>
      <section className="bg-red-900 py-20">
        <div>
          <img src={comfy} alt="" className="block mx-auto lg:w-9/12" />
        </div>
        <div className="lg:flex lg:items-center lg:justify-between px-5 text-white mt-4 lg:w-9/12 lg:mx-auto lg:px-0">
          <div>
            <h4>Wine in class</h4>
            <p>Bars are open from 6pm to 2am</p>
          </div>
          <div>
            <p className="mt-5 lg:w-80 lg:mt-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              ab unde dolorum adipisci expedita.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Comfy
