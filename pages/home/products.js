import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import Link from "next/link";
import image from "../images/WebDevelopment.jpg";
import funnel from "../../pages/images/Icon Sales Funnel Development.png";

function Products() {
  return (
    <div className="container">
      <h1 className="text-center pt-5 fw-bold">Services</h1>
      <img
        width={30}
        className="d-block m-auto rotate-image"
        src="https://i.ibb.co/z2K58Z3/settings-778.png"
        alt=""
      />
      <br />
      <p className="text-center">
        List of products & solutions we provide to scale your business online
      </p>

      <div className="products mt-5">
        <Link href="/services/webdevelopment">
          <Card className="card border-0" data-aos="fade-up">
            <Card.Img
              variant="top"
              src="https://i.ibb.co/wcL1D1y/Web-Development.png"
            />
            <Card.Body>
              <Card.Title className="fw-bold">Web Development</Card.Title>
              <Card.Text>
                Custom Web Development for small and medium sized businesses. We
                work with you to establish clear goals and help bring your idea
                to life.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        <Link href="/services/ecommerce-development">
          <Card className="card border-0" data-aos="fade-up">
            <Card.Img
              variant="top"
              src="https://i.ibb.co/dQb66Qn/e-Commerce-L.png"
            />
            <Card.Body>
              <Card.Title className="fw-bold">eCommerce Development</Card.Title>
              <Card.Text>
                If you’re running an online store. Our eCommerce development
                services can help you set up the perfect solution with
                WooCommerce or Shopify.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        <Link href="/services/digital-marketing">
          <Card className="card border-0" data-aos="fade-up">
            <Card.Img
              variant="top"
              src="https://i.ibb.co/p1nprNj/digital-marketing-Logo-1.png"
            />
            <Card.Body>
              <Card.Title className="fw-bold">Digital Marketing</Card.Title>
              <Card.Text>
                Marketing is the process of reaching people with the messages
                that will create value for your customers and build a strong
                brand.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        <Link href="/services/funnel-development">
          <Card className="card border-0" data-aos="fade-up">
            <Card.Img
              variant="top"
              src="https://i.ibb.co/DRnsk8k/Icon-Sales-Funnel-Development.png"
            />
            <Card.Body>
              <Card.Title className="fw-bold">
                Sales Funnel Development
              </Card.Title>
              <Card.Text>
                Web applications are done using high coding skills,proper
                framework and proven cording guidelines. They are user friendly,
                business driven and highly optimized.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        <Link href="/services/seo-sem-smm">
          <Card className="card border-0" data-aos="fade-up">
            <Card.Img
              variant="top"
              src="https://i.ibb.co/rfFL8QF/Icon-SEO-SEM-And-SMM.png"
            />
            <Card.Body>
              <Card.Title className="fw-bold">SEO, SEM And SMM</Card.Title>
              <Card.Text>
                Content Management System also known as CMS is a distinctive
                feature by which manage the contents of your website without
                having no knowledge of coding
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        <Link href="/services/creative-design">
          <Card className="card border-0" data-aos="fade-up">
            <Card.Img
              variant="top"
              src="https://i.ibb.co/Dz4QRjT/Creative-Design.png"
            />
            <Card.Body>
              <Card.Title className="fw-bold">Creative Design</Card.Title>
              <Card.Text>
                Web hosting service is a type of Internet hosting service that
                allows individuals and organizations to make their website
                accessible via World Wide Web.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        <Link href="/services/content-writing">
          <Card className="card border-0" data-aos="fade-up">
            <Card.Img
              variant="top"
              src="https://i.ibb.co/yk9QZGZ/Content-Writing.png"
            />
            <Card.Body>
              <Card.Title className="fw-bold">Content Writing</Card.Title>
              <Card.Text>
                We provide API integrations like SMS and chat and also payment
                gateways(paytm, paypal) for online payment services.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        

        <Card className="card border-0" data-aos="fade-up">
          <Card.Img
            variant="top"
            src="https://i.ibb.co/3syt5hN/content.png"
          />
          <Card.Body>
            <Card.Title className="fw-bold">
              Tools And Apps Development
            </Card.Title>
            <Card.Text>
              Helping business owners to bring organic traffic to their website,
              choose from a wide range of SEO plans that suit your purpose.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card border-0" data-aos="fade-up">
          <Card.Img
            variant="top"
            src="https://i.ibb.co/dPWdYWT/seo.png"
          />
          <Card.Body>
            <Card.Title className="fw-bold">Course And Consultancy</Card.Title>
            <Card.Text>
              Great content always starts with great ideas. No idea is off
              limits to explore with our talented team of content managers. We
              are always searching for good stories that are happening right in
              front of us and how they can make lives better.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default Products;
