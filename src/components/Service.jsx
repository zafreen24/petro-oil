import React from 'react'

const Service = () => {
  return (
    <section>
        <div className="mx-auto ">
            <div className="flex">
                 <div className="lg:w-1/2 pl-60 lg:pt-[95px] pt-[45px] lg:text-start">
                 <h2 className="font-pops font-bold lg:text-[54px] text-[37px] lg:text-start ">Our Services</h2>
                 <p className="text-black font-pops lg:font-medium text-[16px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                 </div>
                <div className="lg:w-1/2 ">
                    <div className="bg-back bg-no-repeat bg-center bg-cover lg:py-[157px] py-[50px]  relative z-[1] after:absolute after:content-[''] after:top-[0] after:left-[0] after:h-full after:w-full after:bg-[#22222296] after:z-[-1]">
                        <h3 className="text-white font-pops font-bold lg:text-[24px] text-[18px] lg:pl-[160px] pb-6">Modern natural oil and gas refineries</h3>
                    <div className="pl-[160px]">
                    <a href="#" className="lg:py-[13px] py-[5px] lg:px-[40px] bg-[red] font-pops  text-[16px] text-white  font-semibold">Learn More</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
       
    </section>
  )
}

export default Service