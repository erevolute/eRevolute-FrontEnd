import Accordian from "./components/accordian";
import Footer from "./footer";
import Header from "./header";
import Contact from "./home/contact";
import Head from "next/head";
import Image from "next/image";

function AboutUs({ title = "About Us" }){
    return(
        <div>
             <Head>
          <title>{title}</title>
        </Head>
            <Header></Header>
            <img className="about-image" src="https://www.impactbnd.com/hubfs/blog-image-uploads/best-about-us-pages.jpg" alt="" />
            <br />
            <br />
            <br />
            <h1 className="text-center">About Us</h1>
             <span className="d-flex justify-content-center "> <hr className="p-1 me-3 w-25 bg-info rounded" /><h3 className="text-info me-1 animate__animated animate__fadeInRight animate__delay-2s">Our</h3> <h3 className="text-primary animate__animated animate__fadeInLeft animate__delay-2s">Story</h3><hr className="p-1 ms-3 w-25 bg-primary rounded" /></span>
             <p className="container fs-4 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ut minus ipsum perspiciatis, modi voluptatem veritatis, accusantium dolor aut eos optio recusandae cupiditate at eius similique necessitatibus quae labore temporibus dolore numquam totam unde voluptatibus placeat. Corrupti cupiditate nostrum ducimus maxime sed similique autem corporis veritatis provident quam necessitatibus, <br /> iste numquam blanditiis illo repellendus, sequi minima illum commodi placeat quasi voluptates recusandae. Voluptates natus, omnis explicabo hic magni perspiciatis eaque, totam assumenda iusto neque odit doloremque sed officiis quasi enim consequatur eligendi? Magnam laborum numquam perspiciatis, sit ex nihil ab autem fugiat possimus molestiae assumenda. Nulla id cupiditate facilis deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tenetur quia optio architecto praesentium consectetur a veritatis ducimus natus corrupti similique aut dolorem suscipit numquam velit laudantium molestias, sequi magnam quaerat libero voluptate aperiam? Consequuntur perspiciatis aspernatur sunt ab! Vitae, amet iste maiores eos quo quae commodi temporibus tempora illo?</p>
             <br /><br />
            <div className="whyUs-container p-5">
            <div className="whyUs d-flex justify-content-evenly container">
                 <div className="w-100">
                 <span className="d-flex justify-content-center "> <hr className="p-1 me-3 w-25 bg-info rounded" /><h3 className="text-info me-1"  data-aos="fade-right">Why</h3> <h3 className="text-primary " data-aos="fade-left">Us!</h3><hr className="p-1 ms-3 w-25  bg-primary rounded" /></span>
                    <p className="fs-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nesciunt quaerat quam cum fugit quisquam fuga molestiae ut assumenda doloribus magnam illo odio ex, atque, nobis facere quis! Corporis nesciunt laboriosam sapiente voluptatum amet numquam ut beatae, quo commodi doloremque perferendis vitae quaerat placeat illum laudantium aspernatur, aperiam itaque magnam?</p>
                 </div>
                 <div>
                        <img className="whyus-image " src="https://res.cloudinary.com/practicaldev/image/fetch/s--V0ekZaVJ--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/h68x0up43hmknl5tjcww.jpg" alt="" />
                 </div>
             </div>

            </div>
            <Contact></Contact>
            
            <Accordian></Accordian>
            <Footer></Footer>
        </div>
    )
}
export default AboutUs;