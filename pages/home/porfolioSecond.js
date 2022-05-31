
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Link from "next/link";
import usePortfolio from "../hooks/usePortfolio";
import ReactHtmlParser from 'react-html-parser';
import { Spinner } from "react-bootstrap";

function PorfolioSecond() {
 
  const [portfolio , loading] = usePortfolio([])

  //  latest portfolio
  const latestPorfolioFind = portfolio.slice(-6);
  const latestPortfolio = latestPorfolioFind.reverse();

  // by catagory
  const web = "web";
  const webCatagory = portfolio
    .filter((port) => port.catagory == web)
    .slice(0, 10);

  const eCommerce = "ecommerce";
  const eCommerceCatagory = portfolio
    .filter((port) => port.catagory == eCommerce)
    .slice(0, 4);

  const Funel = "funel";
  const funelCatagory = portfolio
    .filter((port) => port.catagory == Funel)
    .slice(0, 5);

  return (
    <div className="mt-5 text-center">
      <h1>Portfolio</h1>
      <Tabs>
        <TabList className="m-5 tabList">
          <Tab>All</Tab>
          <Tab>Web</Tab>
          <Tab>eCommerce</Tab>
          <Tab>Funnel</Tab>
     
        </TabList>

        <TabPanel>
          {
            loading ? <Spinner className="spinner" animation="border" variant="info" /> : <div className="tabs">
            {latestPortfolio.map((latest) => (
              <div key={latest._id} className="card-port border-0 mb-5">
                <div className="card-front">
                  <img
                    // width="200px"
                    style={{ borderRadius: "20px" }}
                    // height="300px"
                    src={`data:image/png;base64,${latest?.img}`}
                    alt=""
                  />
                </div>

                <div className="card-back">
                  <img  src={`data:image/png;base64,${latest?.img}`} alt="" className="profil-picture" />

                  <p className="mb-0 fw-bold">
                    {ReactHtmlParser(latest?.description?.slice(0, 100))}
                  </p>
                  <h1>{latest?.name}</h1>

                  <button className="btnFillup anglebg ps-3 pe-3">
                    <Link
                      href={{
                        pathname: "/portfolio/[id]",

                        query: { id: latest._id },
                      }}
                    >
                      Details
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
          }
        </TabPanel>
        <TabPanel>
          <div className="tabs">
            {webCatagory.map((web) => (
              <div key={web._id} className="card-port border-0 mb-5">
                <div className="card-front">
                  <img
                    // width="200px"
                    style={{ borderRadius: "20px" }}
                    // height="300px"
                    src={`data:image/png;base64,${web?.img}`}
                    alt=""
                  />
                </div>

                <div className="card-back">
                  <img  src={`data:image/png;base64,${web?.img}`} alt="" className="profil-picture" />

                  <p className="mb-0 fw-bold">
                  {ReactHtmlParser(web?.description?.slice(0, 100))}
                  </p>
                  <h1>{web?.name}</h1>

                  <button className="btnFillup anglebg ps-3 pe-3">
                    <Link 
                      href={{
                        pathname: "/portfolio/[id]",

                        query: { id: web._id },
                      }}
                    >
                      Details
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tabs">
            {eCommerceCatagory.map((ecommerce) => (
              <div key={ecommerce._id} className="card-port border-0 mb-5">
                <div className="card-front">
                  <img
                    // width="200px"
                    style={{ borderRadius: "20px" }}
                    // height="300px"
                    src={`data:image/png;base64,${ecommerce?.img}`}
                    alt=""
                  />
                </div>

                <div className="card-back">
                  <img src={`data:image/png;base64,${ecommerce?.img}`} alt="" className="profil-picture" />

                  <p className="mb-0 fw-bold">
                    {ecommerce?.description?.slice(0, 100)}
                  </p>
                  <h1>{ecommerce?.name}</h1>  

                  <button className="btnFillup anglebg ps-3 pe-3">
                    <Link
                      href={{
                        pathname: "/portfolio/[id]",

                        query: { id: ecommerce._id },
                      }}
                    >
                      Details
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="tabs">
            {funelCatagory.map((funel) => (
              <div key={funel._id} className="card-port border-0 mb-5">
                <div className="card-front">
                  <img
                    // width="200px"
                    style={{ borderRadius: "20px" }}
                    // height="300px"
                    src={`data:image/png;base64,${funel?.img}`}
                    alt=""
                  />
                </div>

                <div className="card-back">
                  <img src={`data:image/png;base64,${funel?.img}`} alt="" className="profil-picture" />

                  <p className="mb-0 fw-bold">
                    {funel?.description?.slice(0, 100)}
                  </p>
                  <h1>{funel?.name}</h1>  

                  <button className="btnFillup anglebg ps-3 pe-3">
                    <Link
                      href={{
                        pathname: "/portfolio/[id]",

                        query: { id: funel._id },
                      }}
                    >
                      Details
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
export default PorfolioSecond;
