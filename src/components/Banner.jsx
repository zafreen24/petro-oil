import React from 'react'


const Banner = () => {
  return (
    <section className='bg-ban bg-n0-repeat bg-center bg-cover lg:py-[257px] py-[150px] relative z-[1] after:absolute after:content-[""] after:top-[0] after:left-[0] after:h-full after:w-full after:bg-[#00000063] after:z-[-1]'>
        <div className="mx-auto max-w-container">
            <h1 className="text-white font-pops text-center font-bold lg:text-start  pb-[30px] lg:pr-[400px] lg:text-[64px]">We exist since 1975 on the oil and gas industry.</h1>
            <div className="text-center lg:text-start">
            <a href="#" className='py-[13px] px-[40px] bg-[red] text-white text-[16px]'>LEARN MORE</a>
            </div>
            
        </div>
    </section>
  )
}

export default Banner