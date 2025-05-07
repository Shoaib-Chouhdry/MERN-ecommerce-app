import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const reviews = [
    {
      quote:
        "The tailored services and exceptional customer support are what I like the most about HelloMds.",
      name: "Angela Carter",
      role: "M.D",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      quote:
        "Choosing HelloMds was the right decision for me. Super quick and easy.",
      name: "James Mateo",
      role: "D.O",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
    },
    {
      quote:
        "I previously used billing services from another company. However, I was not very satisfied due to their poor integration. The experience with HelloMds is pretty satisfying though.",
      name: "Evelyn",
      role: "D.M.S",
      image: "https://randomuser.me/api/portraits/women/46.jpg",
      rating: 4,
    },
    {
      quote:
        "Excellent experience! Highly recommend HelloMds for smooth billing services.",
      name: "Robert Smith",
      role: "M.B.B.S",
      image: "https://randomuser.me/api/portraits/men/47.jpg",
      rating: 5,
    },
  ];

  let settings = {
    dots: true,
    infinite: true,  // Disable infinite scrolling to fix layout shifting
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,  // Ensure no extra space is added
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

  return (
    <section className=" bg-[#09243C] pt-10 pb-10 m-4 rounded-xl ">
  <div className="h-full w-3/4 m-auto  ">
  {/* [400px] */}
    <Slider {...settings} className="gap-x-4">
      {reviews.map((data, index) => (
        <div key={index} className="bg-white h-full text-black rounded-xl mx-2 flex flex-col">
          {/* Top Section (Image) */}
          <div className="h-36 rounded-t-xl bg-[#09A8D4] flex justify-center items-center">
            <img src={data.image} alt={data.name} className="h-20 w-20 object-contain rounded-full" />
          </div>

          {/* Content Section (Fixed Height Applied) */}
          <div className="flex flex-col flex-1 items-center p-4 justify-between">
            <p className="text-xl font-semibold">{data.name}</p>

            {/* Fix: Restrict text length to prevent height mismatch */}
            <p className="text-center text-sm overflow-hidden flex-1 line-clamp-2">
              {data.quote}
            </p>

            {/* Fix: Button stays at the bottom */}
            <div className="w-full flex justify-center py-8">
              <button className="bg-[#09A8D4] text-lg text-white px-6 py-1 rounded-xl">
                Read More
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</section>

  
  );
}
