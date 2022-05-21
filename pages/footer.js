import { faFacebookF, faInstagram, faPinterest, faSkype } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-container container">
        <div className="footer-services">
          <h4 className="text-dark fw-bold">Our Services - </h4>
          <Link href="/services/webdevelopment">Web Development</Link> <br />
          <Link href="/services/ecommerce-development">
            eCommerce Development
          </Link>
          <br />
          <Link href="/services/digital-marketing">Digital Marketing</Link>
          <br />
          <Link href="/services/webdevelopment">Funnel Development</Link>
          <br />
          <Link href="/services/webdevelopment">SEO, SEM And SMM</Link>
          <br />
          <Link href="/services/webdevelopment">Creative Design</Link>
          <br />
          <Link href="/services/webdevelopment">Content Writing</Link>
          <br />
          <Link href="/services/webdevelopment">
            Tools And Apps Development
          </Link>
          <br />
          <Link href="/services/webdevelopment">Course And Consultancy</Link>
        </div>

        <div className="footer-projects">
          <h4 className="text-dark fw-bold">Our Projects - </h4>
          <Link href="/services/webdevelopment">Web and SEO </Link> <br />
          <Link href="/services/ecommerce-development">Comparison Pool</Link>
          <br />
          <Link href="/services/digital-marketing">Meetup Search </Link>
          <br />
          <Link href="/services/webdevelopment">Test Development</Link>
          <br />
        </div>

        <div className="footer-tools">
          <h4 className="text-dark fw-bold">Our Tools and Apps - </h4>
          <Link href="/services/webdevelopment">Bulk Email Marketing </Link> <br />
          <Link href="/services/ecommerce-development">Email Validation </Link>
          <br />
          <Link href="/services/digital-marketing">Smart Offer Management</Link>
          <br />
          <Link href="/services/webdevelopment">URL shortener</Link>
          <br />
         
        </div>
        <div className="vl"></div>
        <hr className="foot" />
        <div className="footer-logo">
        <img width={200} className="footer-image" src="https://i.ibb.co/2nXZjsY/final.png" alt="" />
            <h6 className="text-center">Copyright @ 2022</h6>
            <br />
            <br />
            <br />
         <div className="social-icons ">
          <div className="insta-bg bg-secondary text-white">
          <FontAwesomeIcon className="icon" icon={faInstagram} />
          </div>
          <div className="fb-bg bg-secondary text-white">
          <FontAwesomeIcon className="icon" icon={faFacebookF} />
          </div>
          <div className="pinta-bg bg-secondary text-white">
          <FontAwesomeIcon className="icon" icon={faPinterest} />
          </div>
          <div className="skype-bg bg-secondary text-white">
          <FontAwesomeIcon className="icon" icon={faSkype} />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
