import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, Table, Spinner } from "react-bootstrap";
import DashboardNav from "../components/dashboard";
import Swal from "sweetalert2";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { signOut } from "firebase/auth";

function BlogList({ title = "Blog List" }) {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    setError(true);
    fetch("https://intense-crag-46696.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setError(false);
      });
  }, []);
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  const [dropdownBlog, setDropdownBlog] = useState(false);
  const handleDropdownBlog = (event) => {
    setDropdownBlog(event);
  };
  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = (event) => {
    setDropdown(event);
  };

  useEffect(() => {
    if (!user) {
      router.push("/xlogin");
    }
  });
  if (loading) {
    return <div className="spin">
      <Spinner className="spinner" animation="border" variant="info" />
    </div>;
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://intense-crag-46696.herokuapp.com/blogs/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              const remaining = blogs.filter((item) => item._id !== id);
              setBlogs(remaining);
            }
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

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
                <Card>
                  {error ? (
                    <Spinner
                      className="spinner"
                      animation="border"
                      variant="info"
                    />
                  ) : (
                    <>
                      <>
                        <h5>Blog List</h5>
                      </>
                      <div>
                        <div>
                          <Table responsive="lg">
                            <thead>
                              <tr>
                                <th>Blog Title </th>
                                <th>Upload Date</th>
                                <th>Action </th>
                              </tr>
                            </thead>

                            {blogs.map((blog) => (
                              <tbody key={blog._id}>
                                <tr>
                                  <td>{blog.title}</td>
                                  <td>{blog.date}</td>
                                  <td>
                                    <button className="border-0 btn bg-info p-2 m-2 text-white fw-bold">
                                      <Link
                                        href={{
                                          pathname: "/admin/update-blog/[id]",

                                          query: { id: blog._id },
                                        }}
                                      >
                                        Edit
                                      </Link>
                                    </button>

                                    <button
                                      onClick={() => handleDelete(blog._id)}
                                      className="btn border-0 bg-primary ms-3 p-2 text-white fw-bold"
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            ))}
                          </Table>
                        </div>
                      </div>
                    </>
                  )}
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
                Blog <small>▼</small>
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
                Portfolio <small>▼</small>
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
                <>Log Out </>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogList;
