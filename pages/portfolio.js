import usePortfolio from "./hooks/usePortfolio"
import Link from "next/link";
import { Fragment } from "react";
import ReactHtmlParser from 'react-html-parser';
import Header from "./header";

function Portfolio(){
    const [portfolio] = usePortfolio()
    return(
        <Fragment>
            <Header></Header>
            <h1 className="mt-5 pt-5 text-center fw-bold">Our Porfolios</h1>
        <div className="portfolio-main mt-5">
        {portfolio.map((portfolio) => (
          <div key={portfolio._id} className="card-port border-0 mb-5">
            <div className="card-front">
              <img
                // width="200px"
                style={{ borderRadius: "20px" }}
                // height="300px"
                src={`data:image/png;base64,${portfolio?.img}`} 
                alt=""
              />
            </div>

            <div className="card-back">
              <img src={`data:image/png;base64,${portfolio?.img}`}  alt="" className="profil-picture" />

              <p className="mb-0 fw-bold">
                {ReactHtmlParser(portfolio?.description?.slice(0,100))}
              </p>
              <h1>{portfolio?.name}</h1>

              <button className="btnFillup anglebg ps-3 pe-3">
                <Link
                  href={{
                    pathname: "/portfolio/[id]",

                    query: { id: portfolio._id },
                  }}
                >
                  Details
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
        </Fragment>
    )
}
export default Portfolio;