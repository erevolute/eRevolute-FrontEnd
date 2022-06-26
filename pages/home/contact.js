import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faSkype } from '@fortawesome/free-brands-svg-icons'


function Contact() {
  return (
    <div>
      <span className="d-flex justify-content-center mt-5"> <hr className="p-1 me-3 w-25 bg-info rounded" /><h1 className="text-info me-1 animate__animated animate__fadeInRight animate__delay-2s">Contact</h1> <h1 className="text-primary animate__animated animate__fadeInLeft animate__delay-2s">Us!</h1><hr className="p-1 ms-3 w-25 bg-primary rounded" /></span>
      <div className="contact container">

       <div>
       <div className="icon-background">
          <FontAwesomeIcon className="icon"  icon={faPhone} />
          
        </div>
        <br />
        <h3 className="text-dark fw-bold">Phone</h3>
        <p className="">
         +880 1676 777000
<br />
            Sat-web: 10:00Am - 8:00Pm
        </p>
        
       </div>
        <div>
        <div className="icon-background">
          <FontAwesomeIcon className="icon" icon={faLocationPin} />
          
        </div>
        <br />
        <h3 className="text-dark p-0  fw-bold">Address</h3>
        <p>House: 1331 , Road# 11, Mirpur DOHS, Dhaka <br />
        Banladesh
        </p>
        </div>
       <div>
           
        <div className="icon-background">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
          
        </div>
        <br />
        <h3 className="text-dark fw-bold">Mail</h3>
         
          <p className="">info@erevolute.com<br />
          Sat-web: 10:00Am - 8:00Pm</p>
       </div>
      </div>
        <hr className="w-75 m-auto" />
        <br />
        <div className="social-icons">
          <div className="insta-bg">
          <FontAwesomeIcon className="icon" icon={faInstagram} />
          </div>
          <div className="fb-bg">
          <FontAwesomeIcon className="icon" icon={faFacebookF} />
          </div>
          <div className="pinta-bg">
          <FontAwesomeIcon className="icon" icon={faPinterest} />
          </div>
          <div className="skype-bg">
          <FontAwesomeIcon className="icon" icon={faSkype} />
          </div>
        </div>
    </div>
  );
}
export default Contact;
