import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../footer";
import Header from "../header";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import ReactHtmlParser from "react-html-parser";
import { ScaleLoader } from "react-spinners";
import Image from "next/image";
import { Spinner } from "react-bootstrap";

function PortfolioDetails({ title = "" }) {
  const router = useRouter();
  const id = router.query.id;
  const [portfolio, setPortfolio] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://intense-crag-46696.herokuapp.com/portfolio/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false)
        setPortfolio(data);
      });
  }, [router]);

  const customTitle = portfolio.name;
  title = customTitle;



  return (

    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={portfolio.metaDescription}></meta>

        <meta name="keywords" content={portfolio.metaKeywords} />
      </Head>
      <Header></Header>
      {
        isLoading ? <Spinner className="spinner" animation="border" variant="info" /> : <div className="portfolio-details">
          <h1 className="fw-bold text-center">{portfolio.name} Gallery</h1>
          <div className="port-gallery">
            <div className="port-images">
              <img className="thumb" src={`data:image/png;base64,${portfolio.img}`} />
            </div>
            <div className="port-images">
              <img
                className="thumb"
                src={`data:image/png;base64,${portfolio.img2}`}
              // src={portfolio.img2 ? portfolio.img2 : portfolio.img}
              />
            </div>
            <div className="port-images">
              <img
                className="thumb"
                src={`data:image/png;base64,${portfolio.img3}`}
              />
            </div>
          </div>
          <div className="port-content px-5">
            <h1 className="text-center">
              <a href={portfolio.siteLink}>Live Preview {portfolio.name}</a>
            </h1>
            <br />
            <br />
            <br />
            <h4 className="m-2">Description</h4>
            {ReactHtmlParser(portfolio?.description)}
            <br />
            <br />
            <h4 className="m-2">Feature</h4>
            <p>
              <FontAwesomeIcon className="text-info fs-6" icon={faCheckDouble} />{" "}
              {portfolio.features?.split(".")[0]}
            </p>
            <p>
              <FontAwesomeIcon className="text-info fs-6" icon={faCheckDouble} />{" "}
              {portfolio.features?.split(".")[1]}
            </p>
          </div>
        </div>
      }

      <Footer></Footer>
    </div>
  );
}
export default PortfolioDetails;
