import React from 'react'
import { Carousel} from "react-bootstrap";

const  Carousels = ()=> {
  return (
    <div>
        <Carousel fade className="banner pt-5">
        <Carousel.Item>
        <div className="banner-container">
          <div className="banner-content">
            <p
              
              className="text-white animate__animated animate__fadeInRight"
            >
              ● We Develop World-Class Smartphone Applications
            </p>
            <h1 className="text-white banner-title animate__animated animate__fadeInLeft">
              AWESOME <br /> MOBILE APP
            </h1>
          </div>
          <div className="banner-image animate__animated animate__fadeInRight">
            <img
              width={500}
              height={600}
              src="https://i.ibb.co/Q8QSHJ3/imgbin-blue-aqua-turquoise-pattern-png.png"
              alt=""
            />
          </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="banner-container">
          <div className="banner-content">
            <p
              
              className="text-white animate__animated animate__fadeInRight"
            >
             ● Build Websites for Your Business that stands out
            </p>
            <h1 className="text-white banner-title animate__animated animate__fadeInLeft">
            RESPONSIVE <br /> WEBSITES
            </h1>
          </div>
          <div className="banner-image animate__animated animate__backInRight animate__slow	5s">
            <img
              width={500}
              height={600}
              src="https://i.ibb.co/mC8b4T8/imgbin-mobile-phone-case-mobile-phone-accessories-red-pink-magenta-png.png"
              alt=""
            />
          </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="banner-container">
          <div className="banner-content">
            <p
             
              className="text-white animate__animated animate__fadeInRight"
            >
              ● Wait No More Create your Online Store Now
            </p>
            <h1 className="text-white banner-title animate__animated animate__fadeInLeft">
            ECOMMERCE <br /> WEBSITES
            </h1>
          </div>
          <div className="banner-image animate__animated animate__rotateInDownRight animate__slow	2s">
            <img
              width={500}
              height={600}
              src="https://i.ibb.co/5FddSXX/imgbin-mobile-phone-case-mobile-phone-gadget-communication-device-mobile-phone-accessories-png.png"
              alt=""
            />
          </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Carousels;