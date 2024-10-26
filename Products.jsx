import React from "react";
import image1 from "../../assets/women.png";
import image2 from "../../assets/women2.jpg";
import image3 from "../../assets/women3.jpg";
import image4 from "../../assets/women4.jpg";
import image5 from "../../assets/women5.jpg";
import image6 from "../../assets/women6.jpg";
import image7 from "../../assets/women7.jpg";
import image8 from "../../assets/women8.jpg";
import image9 from "../../assets/women9.jpg";
import image10 from "../../assets/women10.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: image1,
    title: "Women Western",
    rating: 4.1,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: image2,
    title: "Women Ethnic",
    rating: 4.9,
    color: "white",
    aosDelay: "100",
  },
  {
    id: 3,
    img: image3,
    title: "Goggles",
    rating: 4.5,
    color: "Black",
    aosDelay: "200",
  },
  {
    id: 4,
    img: image4,
    title: "Women Saree",
    rating: 4.7,
    color: "All",
    aosDelay: "300",
  },
  {
    id: 5,
    img: image5,
    title: "Women Kurti",
    rating: 4.2,
    color: "All",
    aosDelay: "400",
  },
  {
    id: 6,
    img: image6,
    title: "Women Tops",
    rating: 4.7,
    color: "All",
    aosDelay: "500",
  },
  {
    id: 7,
    img: image7,
    title: "Women Jens",
    rating: 4.5,
    color: "All",
    aosDelay: "600",
  },
  {
    id: 8,
    img: image8,
    title: "Women Saree",
    rating: 4.7,
    color: "All",
    aosDelay: "300",
  },
  {
    id: 9,
    img: image9,
    title: "Women Saree",
    rating: 4.7,
    color: "All",
    aosDelay: "300",
  },
  {
    id: 10,
    img: image10,
    title: "Women Saree",
    rating: 4.7,
    color: "All",
    aosDelay: "300",
  },
];

const Products = () => {
  return (
    <>
      <div className="mt-14 mb-12">
        <div className="container">
          <div className="text-center m-10 max-w-[600px] mx-auto ">
            <p data-aos="fade-up" className="text-sm text-primary">
              Top Selling Products for you
            </p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Products
            </h1>

            <p data-aos="fade-up" className="text-xs  text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              numquam neque iure accusantium itaque deserunt in vitae laborum
              nesciunt a, ea nobis beatae harum, molestiae veniam quaerat, id
              maiores tenetur.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-5">
              {ProductsData.map((data) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={data.id}
                  className="space-y-3"
                >
                  <img
                    src={data.img}
                    alt="Image"
                    className="h-[220px] w-[150px] object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold text-blue-900 ">{data.title}</h3>
                    <p className="text-sm text-gray-600">{data.color}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
                View All Buttons{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
