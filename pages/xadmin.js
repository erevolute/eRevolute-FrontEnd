import { faSignOut } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import DashboardNav from "./components/dashboard";

const Admin = ({ title = "Admin" }) => {

  const router = useRouter();
  const [dropdown, setDropdown] = useState(false);
  const [dropdownBlog, setDropdownBlog] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };

  const handleDropdown = (event) => {
    setDropdown(event);
  };
  const handleDropdownBlog = (event) => {
    setDropdownBlog(event);
  };

  useEffect(() => {
    if (!user) {
      router.push("/xlogin");
    }
  });

  if (loading) {
    return <Spinner className="spinner" animation="border" variant="info" />;
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="dashboard">
        <div className="side-nav">
          <Link href='/'>
          <img
            width={200}
            className="m-2"
            src="https://i.ibb.co/2nXZjsY/final.png"
            alt=""
          /></Link>
          <hr />

          <li>
            <Link href="/xadmin">Dashboard</Link>{" "}
          </li>

          <label htmlFor="touch2">
            <span className="span">Blogs</span>
          </label>
          <input type="checkbox" id="touch2" />
          <ul className="slide2">
            <li>
              {" "}
              <Link href="/admin/add-blog">Add Blog</Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/admin/blog-list">Blog List</Link>
            </li>
          </ul>

          <label htmlFor="touch">
            <span className="span">Portfolio</span>
          </label>
          <input type="checkbox" id="touch" />
          <ul className="drop">
            <li>
              {" "}
              <Link href="/admin/add-portfolio">Add Portfolio</Link>
            </li>
            <li>
              <Link href="/admin/portfolio-list">Portfolio List</Link>
            </li>
          </ul>

          <li className="log-out" onClick={logout}>
            Log Out <FontAwesomeIcon className="ps-2" icon={faSignOut} />
          </li>
        </div>
        <div className="nav-content">
          <DashboardNav></DashboardNav>

          <Container fluid={true} className="container-padding">
            <Row>
              <Col sm="12">
                <Card className="mt-5">
                  <>
                    <h1>Dashboard </h1>
                  </>
                  <div>
                  
               
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>

          <div
            className="offcanvas offcanvas-start"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <img
                width={150}
                className="m-2"
                src="https://i.ibb.co/2nXZjsY/final.png"
                alt=""
              />
              <hr />
            </div>
            <div className="offcanvas-body">
              <li>
                <Link href="/xadmin">Dashboard</Link>{" "}
              </li>
              <li onClick={() => handleDropdownBlog(!dropdownBlog)}>
                Blog<small>▼</small>
              </li>
              {dropdownBlog && (
                <ul>
                  {" "}
                  <li>
                    <Link href="/admin/add-blog">Add Blog</Link>
                  </li>
                  <li>
                    <Link href="/admin/blog-list">Blog List</Link>
                  </li>
                </ul>
              )}

              <li onClick={() => handleDropdown(!dropdown)}>
                Portfolio<small>▼</small>
              </li>
              {dropdown && (
                <ul>
                  {" "}
                  <li>
                    <Link href="/admin/add-portfolio">Add Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/admin/portfolio-list">Portfolio List </Link>
                  </li>
                </ul>
              )}

              <li className="log-out" onClick={logout}>
                Log Out <FontAwesomeIcon className="ps-2" icon={faSignOut} />
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
