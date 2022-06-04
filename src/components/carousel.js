import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import cert1 from "../img/png/1.png";
import cert2 from "../img/png/2.png";
import cert3 from "../img/png/3.png";
import cert4 from "../img/png/4.png";
import cert5 from "../img/png/5.png";
import cert6 from "../img/png/6.png";
import cert7 from "../img/png/7.png";
import cert8 from "../img/png/8.png";
import cert9 from "../img/png/9.png";
import cert10 from "../img/png/10.png";
import cert11 from "../img/png/11.png";
import cert12 from "../img/png/12.png";
import cert13 from "../img/png/13.png";
import cert14 from "../img/png/14.png";
import cert15 from "../img/png/15.png";
import cert16 from "../img/png/16.png";
import cert17 from "../img/png/17.png";
import cert18 from "../img/png/18.png";
import cert19 from "../img/png/19.png";
import cert20 from "../img/png/20.png";
import cert21 from "../img/png/21.png";
import cert22 from "../img/png/22.png";
import cert23 from "../img/png/23.png";
import cert24 from "../img/png/24.png";
import cert25 from "../img/png/25.png";
import cert26 from "../img/png/26.png";
import cert27 from "../img/png/27.png";
import cert28 from "../img/png/28.png";
import cert29 from "../img/png/29.png";
import cert30 from "../img/png/30.png";
import { Carousel } from "react-responsive-carousel";

const CertCarousel = () => {
  return (
    <Carousel
      autoPlay
      useKeyboardArrows
      interval={2000}
      showIndicators={false}
      dynamicHeight
      infiniteLoop
      emulateTouch
      swipeable
      autoFocus
    >
      <div>
        <img src={cert1} />
      </div>
      <div>
        <img src={cert2} />
      </div>
      <div>
        <img src={cert3} />
      </div>
      <div>
        <img src={cert4} />
      </div>
      <div>
        <img src={cert5} />
      </div>
      <div>
        <img src={cert6} />
      </div>
      <div>
        <img src={cert7} />
      </div>
      <div>
        <img src={cert19} />
      </div>
      <div>
        <img src={cert9} />
      </div>
      <div>
        <img src={cert10} />
      </div>
      <div>
        <img src={cert11} />
      </div>
      <div>
        <img src={cert12} />
      </div>
      <div>
        <img src={cert13} />
      </div>
      <div>
        <img src={cert14} />
      </div>
      <div>
        <img src={cert15} />
      </div>
      <div>
        <img src={cert16} />
      </div>
      <div>
        <img src={cert17} />
      </div>
      <div>
        <img src={cert18} />
      </div>
      <div>
        <img src={cert8} />
      </div>
      <div>
        <img src={cert20} />
      </div>
      <div>
        <img src={cert21} />
      </div>
      <div>
        <img src={cert22} />
      </div>
      <div>
        <img src={cert23} />
      </div>
      <div>
        <img src={cert24} />
      </div>
      <div>
        <img src={cert25} />
      </div>
      <div>
        <img src={cert26} />
      </div>
      <div>
        <img src={cert27} />
      </div>
      <div>
        <img src={cert28} />
      </div>
      <div>
        <img src={cert29} />
      </div>
      <div>
        <img src={cert30} />
      </div>
    </Carousel>
  );
};
export default CertCarousel;
