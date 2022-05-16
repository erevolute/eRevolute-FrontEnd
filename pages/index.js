import Head from "next/head";
import { Card, Carousel, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Header from "./header";
import Blogs from "./home/blog";
import Contact from "./home/contact";
import Countup from "./home/countUp";
import Footer from "./home/footer";
import GetInTouch from "./home/getInTouch";
import PorfolioSecond from "./home/porfolioSecond";
import Portfolio from "./components/portfolio";
import Products from "./home/products";
import Subcribe from "./home/subcribe";
// import CountUp from 'react-countup';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function Home({ title = "Home" }) {


  return (

        <div className="">
        <Head>
          <title>{title}</title>
        </Head>
      <Header></Header>

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
  
        <div className="wave pt-5">
        </div>
        <br />
        <br />
       
      <Products></Products>
      <Countup></Countup>
      <PorfolioSecond></PorfolioSecond>
      <div className="ms-5 fs-3" >
      <Link href='/portfolio'> View More Portfolio </Link><FontAwesomeIcon className="text-primary" icon={faArrowRight} />
      </div>
      {/* <Portfolio></Portfolio> */}
      <hr  className="w-25 m-auto mt-5"/>
      <Blogs></Blogs>
      <Subcribe></Subcribe>
      <Contact></Contact>
      <GetInTouch></GetInTouch>
      <Footer></Footer>
      
    </div>
   
  );
}
