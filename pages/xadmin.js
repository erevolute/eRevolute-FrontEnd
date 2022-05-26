import { signOut } from "firebase/auth";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import {
  Card,
  Col,
  Container,
  Row,

} from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import DashboardNav from "./components/dashboard";

const  Admin = ({ title = "Admin" }) => {
  const router = useRouter()
  const [user , loading , error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
 

  useEffect(()=>{
    if(!user){
      router.push('/login')
    }
  })
  if(loading){
    return <div>
      loading
    </div>
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="dashboard">
        <div className="side-nav">
          <img
            width={200}
            className="m-2"
            src="https://i.ibb.co/2nXZjsY/final.png"
            alt=""
          />
          <hr />

          <li>
            <Link href="/xadmin">Dashboard</Link>{" "}
          </li>
          <li>
            <Link href="/admin/add-blog">Add Blog</Link>
          </li>
          <li>
            <Link href="/admin/blog-list">Blog List</Link>
          </li>
          <li>
            <Link href="/admin/add-portfolio">Add Portfolio</Link>
          </li>
          <li>
            <Link href="/admin/portfolio-list">Portfolio List</Link>
          </li>
          <li className="log-out" onClick={logout}>
            <>Log Out </>
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
          <li>
            <Link href="/admin/add-blog">Add Blog</Link>
          </li>
          <li>
            <Link href="/admin/blog-list">Blog List</Link>
          </li>
          <li>
            <Link href="/admin/add-portfolio">Add Portfolio</Link>
          </li>
          <li>
            <Link href="/admin/portfolio-list">Portfolio List</Link>
          </li>
          <li className="log-out" onClick={logout}>
            <>Log Out </>
          </li>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
