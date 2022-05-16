import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Accordian from "../components/accordian";
import Footer from "../footer";
import Header from "../header";
import Contact from "../home/contact";

function Ecommerce({ title = "eCommerce Development" }) {
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
      <div className="ecommerce-banner">
        <img src="https://i.ibb.co/z52b9SL/e-Commerce.png" alt="" />
      </div>
      <div className="ecommerce-content container mt-5 pt-5">
        <h1>E-commerce Development</h1>
        <p>
          Are you facing any difficulties to deal with e-commerce web designing?
          If so, then fill yourself lucky to be here because we support our
          clients immensely in accomplishing their functions of trading products
          and services by including the system of the World Wide Web.
          <br />
          <br />
          As e-commerce website possess your personal details and
          information,you probably ready to expand a lot to secure this issue.
          But we offer you a extensive means of protection at a very reasonable
          rate.
          <br />
          <br />
          “Quality and commitment is our principal”
          <br />
          <br />
          We confirm the quality of our work and commitment through the whole
          development life-cycle.Our detailed and personalised guidance will
          make your work easier.
        </p>
        <li><FontAwesomeIcon className="text-info fs-6"  icon={faCheckDouble} /> Develop different kinds of e-commerce site.</li>
        <li> <FontAwesomeIcon className="text-info fs-6"  icon={faCheckDouble} /> Set up CMS for your site.</li>
        <li> <FontAwesomeIcon className="text-info fs-6"  icon={faCheckDouble} /> Manage technicalities.</li>
        <li> <FontAwesomeIcon className="text-info fs-6"  icon={faCheckDouble} /> Customised design according to your requirement.</li>
        <br />
        <br />
        <p>We work dedicatedly to present a comprehensive platform to meet the needs of your business and your customer at the same time. Woo commerce, Ecwid, Shopify, Magento.</p>
      </div>
     
      <Contact></Contact>
    <Accordian></Accordian>
            <Footer></Footer>
          
    </>
  );
}
export default Ecommerce;
