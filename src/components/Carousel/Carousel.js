import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import rev1 from "../../images/1.jpg";
import rev2 from "../../images/2.jpg";
import rev3 from "../../images/3.jpg";
import rev4 from "../../images/4.jpg";
import rev5 from "../../images/5.jpg";
import rev6 from "../../images/6.jpg";
import rev7 from "../../images/7.jpg";
import rev8 from "../../images/8.jpg";
import "../../App.css";

const carouselProps = {
  thumbWidth: 40,
};

class DemoCarousel extends Component {
  render() {
    return (
      <div className="carousel-div">
        <Carousel {...carouselProps}>
          <div>
            <img src={rev1} alt="reviews" />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div>
            <img src={rev2} alt="reviews" />
            {/* <p className="legend">Legend 2</p> */}
          </div>
          <div>
            <img src={rev3} alt="reviews" />
            {/* <p className="legend">Legend 3</p> */}
          </div>
          <div>
            <img src={rev4} alt="reviews" />
            {/* <p className="legend">Legend 2</p> */}
          </div>
          <div>
            <img src={rev5} alt="reviews" />
            {/* <p className="legend">Legend 3</p> */}
          </div>
          <div>
            <img src={rev6} alt="reviews" />
            {/* <p className="legend">Legend 2</p> */}
          </div>
          <div>
            <img src={rev7} alt="reviews" />
            {/* <p className="legend">Legend 3</p> */}
          </div>
          <div>
            <img src={rev8} alt="reviews" />
            {/* <p className="legend">Legend 3</p> */}
          </div>
        </Carousel>
      </div>
    );
  }
}

export default DemoCarousel;

// ReactDOM.createRoot(<DemoCarousel />, document.querySelector(".demo-carousel"));
