import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Accordian from "../components/accordian";
import Footer from "../footer";
import Header from "../header";
import Contact from "../home/contact";
import Image from "next/image";

function Creativ({ title = "Creative Design" }){
    return(
        <>
         <Head>
        <title>{title}</title>
        <meta name="description" content="Graphic design is the art of visual communication and problem-solving. It's a creative process that uses applied art, design, and the principles of communication and semiotics to solve complex problems."></meta>
        <meta name="keywords" content="graphic design service,  graphic design service near me,  monthly graphic design service,  graphic design service provider, logo design, flyer design" />
      </Head>
            <Header></Header>
            <div className="webdevelop-banner">
            <img src="https://i.ibb.co/Dz4QRjT/Creative-Design.png" alt="" />
            </div>
            

            <div className="webdevelop-content container mt-5 pt-5">
                <h1>Creative Design</h1>
                <p>We offer the most superior web development service to maximize your business revenue. Our company able to deliver creative, optimistic and customized SEO friendly website. Our aim to offer you a high quality web development solution. We are working here to maximize your ROI and to propagandize your business. We value your choice and try to come within timeliness.</p>
                <h1 className="mt-5"> Our Web Development Service work on different phases until completion of the contract-</h1>
                <li> <FontAwesomeIcon className="text-info fs-6"  icon={faCheckDouble} /> Idea Generation and Planning</li>
                <li> <FontAwesomeIcon className="text-info fs-6"  icon={faCheckDouble} /> Analysis</li>
                <li> <FontAwesomeIcon className="text-info fs-6"  icon={faCheckDouble} /> Development</li>
                <li> <FontAwesomeIcon className="text-info fs-6"  icon={faCheckDouble} /> Release</li>
                <li> <FontAwesomeIcon className="text-info fs-6"  icon={faCheckDouble} /> Testing and Optimization</li>
                <li> <FontAwesomeIcon className="text-info fs-6"  icon={faCheckDouble} /> Maintenance</li>
                <br />
                <br />
                <p>We consign you with a wonderful easy navigation and customer friendly web portal optimize by Google Optimize or Optimizely. Your prospective and targeted customers will be able to navigate your company‘s products and services. This is the reason why we are renowned.</p>
            </div>
            
            <Contact></Contact>
            
            <Accordian></Accordian>
            <Footer></Footer>
        </>
    )
}
export default Creativ;