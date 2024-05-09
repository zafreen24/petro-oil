import React from 'react'
import Item from "../assets/car.png"
import Item1 from "../assets/pump.png"
import Item2 from "../assets/yell.png"
import Item3 from "../assets/ship.png"


const Gallery = () => {
  return (
    <section>
        <div className="flex justify-between flex-wrap">
           <div className="lg:w-[24%] my-1 w-[49%]">
            <img src={Item} alt="car" />
           </div>
           <div className="lg:w-[24%]  my-1 w-[49%]">
            <img src={Item1} alt="pump" />
           </div>
           <div className="lg:w-[24%]  my-1 w-[49%]">
            <img src={Item2} alt="yell" />
           </div>
           <div className="lg:w-[24%]  my-1 w-[49%]">
            <img src={Item3} alt="ship" />
           </div>
        </div>
    </section>
  )
}

export default Gallery