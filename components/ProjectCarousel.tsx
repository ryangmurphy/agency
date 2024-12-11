"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <Slider {...settings}>
        <div>
          <Image
            src="/path/to/image1.jpg"
            alt="Project 1"
            width={600}
            height={400}
            className="object-cover"
          />
        </div>
        <div>
          <Image
            src="/path/to/image2.jpg"
            alt="Project 2"
            width={600}
            height={400}
            className="object-cover"
          />
        </div>
        <div>
          <Image
            src="/path/to/image3.jpg"
            alt="Project 3"
            width={600}
            height={400}
            className="object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ProjectCarousel; 