import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import img from "./logo.png";
const App = () => {
  const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1200,
    arrows: true,
    responsive: [
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 3, // Number of slides to show for screens >= 1024px wide
        },
      },
      {
        breakpoint: 411,
        settings: {
          slidesToShow: 2, // Number of slides to show for screens >= 768px wide
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1, // Number of slides to show for screens >= 640px wide
        },
      },
    ],
  };

  return (
    <div className="flex justify-center p-2  md:p-16">
      <Slider
        {...settings}
        className="slider-container w-[150px] sm:w-[320px] mdsm:w-[500px] md:w-[800px]  lg:w-[1000px] "
      >
        <div>
          <img src={img} className=" h-32 w-32 " alt="logo" />
        </div>
        <div>
          <img src={img} className=" h-32 w-32 " alt="logo" />
        </div>
        <div>
          <img src={img} className=" h-32 w-32 " alt="logo" />
        </div>
        <div>
          <img src={img} className=" h-32 w-32 " alt="logo" />
        </div>
        <div>
          <img src={img} className=" h-32 w-32 " alt="logo" />
        </div>
        <div>
          <img src={img} className=" h-32 w-32 " alt="logo" />
        </div>
        <div >
        <img src= {img} className=" h-32 w-32 " alt="logo" />
        </div>
        <div >
        <img src= {img} className=" h-32 w-32 " alt="logo" />
        </div>
      </Slider>
    </div>
  );
};

export default App;
