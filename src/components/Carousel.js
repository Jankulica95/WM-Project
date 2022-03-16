import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import Item from "./Carousel_item";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings} className="slider-container">
        <div>
          <Item />
        </div>
        <div>
          <Item />
        </div>
        <div>
          <Item />
        </div>
      </Slider>
    </>
  );
};

export default Carousel;
