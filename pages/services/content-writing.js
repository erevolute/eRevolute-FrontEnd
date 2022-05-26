import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Accordian from "../components/accordian";
import Footer from "../footer";
import Header from "../header";
import Contact from "../home/contact";
import Image from "next/image";

function Content({ title = "Content Writing" }){
    return(
        <>
         <Head>
        <title>{title}</title>
        <meta name="description" content="Content writing is the art and science of communicating your message so that it connects with your target audience."></meta>
        <meta name="keywords" content="content writing service, seo content writing service, blog content writing service,  professional content writing service,  amazon content writing service,  content writing service usa,  quality content writing service,  unlimited content writing service,  website content writing service,  ecommerce content writing service,  professional seo content writing service, copywriting service,  article content writing service,  article writing service" />
      </Head>
            <Header></Header>
            <div className="Content-banner">
            <img src="https://i.ibb.co/6XwVY6S/Content-Writing.jpg" alt="" />
            </div>
            

            
            <div className="Content-content container mt-5 pt-5">
                <h1>Content Writing</h1>
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
export default Content;