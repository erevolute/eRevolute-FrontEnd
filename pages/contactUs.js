import Header from "./header";
import Footer from "./home/footer";
import GetInTouch from "./home/getInTouch";
import Head from "next/head";
import Contact from "./home/contact";
import Image from "next/image";

function ContactUs({ title = "Contact Us" }){
    return(
        <div>
        <Head>
          <title>{title}</title>
        </Head>
            <Header></Header>
            <img className="contact-image" src="https://f.hubspotusercontent00.net/hubfs/399351/contact-us.png" alt="" />
            <br />
            
            <Contact></Contact>
            <GetInTouch></GetInTouch>

            <Footer></Footer>
        </div>
    )
}
export default ContactUs;