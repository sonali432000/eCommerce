import React from "react";
import WinterSale from "../../assets/Wintersale.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";


const Banner = () => {
  React.useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div className="min-h-[550px] flex justify-center   items-center py-12 sm:py-0">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div data-aos="zoom-in">
              <img
                className="max-w-[500px] has-[350px] w-full mx-auto object-cover"
                src={WinterSale}
                alt="Banner Image"
              />
            </div>

            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
            
                Winter Sale Upto 60% Off
              </h1>
              <p
                data-aos="fade-up" className="text-sm dark:text-white text-gray-950 tracking-wide leading-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque totam exercitationem illum neque. Pariatur harum molestias animi facilis eius? Possimus quos quasi, perferendis minima aspernatur temporibus eos molestias repellendus maiores esse consectetur aut, animi deleniti id in, non odio! Fugiat.</p>
                
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />

                  <p>Quality Products</p>
                </div>
     <div  className="flex items-center gap-4"> <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
  <p> Fast Delivery</p>
  </div>

  <div  className="flex items-center gap-4"> <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
  <p> Easy Payment</p>
  </div>

  <div  className="flex items-center gap-4"> <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
  <p> Get Offers</p>
  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
