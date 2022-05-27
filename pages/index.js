import Head from "next/head";
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
import Image from "next/image";
import auth from "../firebase.init"
import { useAuthState } from "react-firebase-hooks/auth";
import Carousels from "./components/carousel";

export default function Home({ title = "Home" }) {


  return (

        <div className="">
        <Head>
          <title>{title}</title>
        </Head>
      <Header></Header>
      <Carousels></Carousels>
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
