import Header from "../header";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import Contact from "../home/contact";
import Footer from "../footer";
import Accordian from "../components/accordian";
import Image from "next/image";

function Digital({ title = "Digital Marketing" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="If you're running an online store, you'll need a website to handle orders and run your business. That's where we come in. Our eCommerce development services can help you set up the perfect solution with WooCommerce or Shopify."
        ></meta>
        <meta
          name="keywords"
          content="eCommerce Development,  ecommerce development company,  ecommerce development services,  magento ecommerce development,  shopify ecommerce development, woocommerce ecommerce development,  ecommerce development agency, wix  ecommerce development agency, shopify  ecommerce development agency, web ecommerce development, custom  ecommerce development, customized  ecommerce development"
        />
      </Head>
      <Header></Header>
      <div className="digital-banner">
          <img src="https://i.ibb.co/hKY7VWf/Digital-Marketing-1.jpg" alt="" />
      </div>
      <div className="digital-content container mt-5 pt-5">
          <h1>Digital Marketing</h1>
          <p>We come up with smart, solid and time-testing digital marketing game plan that goes to the need of your business. Our fully compact digital first approach assure that every dollar of your budget is working forcefully to achieve your goal and also build a unbreakable strong connection with your customers.</p>
          <br /><br />
          <h2>Our Digital Marketing services-</h2>
          <li> <FontAwesomeIcon className="text-info fs-6"  icon={faCheckDouble} /> Search optimisation</li>
          <li> <FontAwesomeIcon className="text-info fs-6"  icon={faCheckDouble} /> Search marketing</li>
          <li> <FontAwesomeIcon className="text-info fs-6"  icon={faCheckDouble} /> Email marketing</li>
          <li> <FontAwesomeIcon className="text-info fs-6"  icon={faCheckDouble} /> Social management</li>
          <li> <FontAwesomeIcon className="text-info fs-6"  icon={faCheckDouble} /> Strategic</li>
          <li> <FontAwesomeIcon className="text-info fs-6"  icon={faCheckDouble} /> Reputation management</li>
      </div>
     
      <Contact></Contact>
     <Accordian></Accordian>
      <Footer></Footer>
    </>
  );
}
export default Digital;
