import React from "react";
import image1 from "../../assets/shirt.png";
import image2 from "../../assets/shirt2.png";
import image3 from "../../assets/shirt3.png";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: image1,
    title: "Casual Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde placeat ex minus voluptas delectus, cupiditate numquam a recusandae ut architecto aliquid voluptatem perferendis labore illo iusto vitae! Harum, veritatis non.",
  },
  {
    id: 2,
    img: image2,
    title: "Printed Shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde placeat ex minus voluptas delectus, cupiditate numquam a recusandae ut architecto aliquid voluptatem perferendis labore illo iusto vitae! Harum, veritatis non.",
  },
  {
    id: 3,
    img: image3,
    title: "Women Shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde placeat ex minus voluptas delectus, cupiditate numquam a recusandae ut architecto aliquid voluptatem perferendis labore illo iusto vitae! Harum, veritatis non.",
  },
];

const TopProducts = ({ handleorderPopup }) => {
  return (
    <>
      <div className="container">
        <div className="text-left mb-24 ">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products For You
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quis
            perspiciatis adipisci molestiae illo nulla facilis facere tempore
            veniam exercitationem temporibus nemo, officiis inventore explicabo
            quam est voluptatem alias eos!
          </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {ProductsData.map((data) => (
              <div
                data-aos="zoom-in"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary  hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={data.img}
                    alt="Image"
                    className="max-w-[140px] mx-auto block transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                  />
                </div>
                <div className="text-center p-4">
                  <div className="w-full flex justify-center items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold">{data.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {data.description}
                  </p>
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                    onClick={handleorderPopup}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
     
    </>
  );
};

export default TopProducts;
