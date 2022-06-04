import Head from "next/head";
import Link from "next/link";
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2";
import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import DashboardNav from "../components/dashboard";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { Editor } from "@tinymce/tinymce-react";
import { signOut } from "firebase/auth";

function AddPortfolio({ title = "Admin" }) {
  const [description, setDescription] = useState("");
  const [name, setName] = useState('')
  const [siteLink, setSiteLink] = useState('')
  const [img, setImag] = useState('')
  const [img2, setImag2] = useState('')
  const [img3, setImg3] = useState('')
  const [catagory, setCatagory] = useState('')
  const [metaKeywords, setMetaKeywords] = useState('')
  const [metaDescription, setMetaDescription] = useState('')
  const editorRef = useRef(null);
  const [isLoading, setIsLoading] = useState();
  const router = useRouter()
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  const [dropdownBlog, setDropdownBlog] = useState(false);
  const handleDropdownBlog = (event) => {
    setDropdownBlog(event);
  };


  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      setDescription(editorRef.current.getContent());
    }
  };
  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = (event) => {
    setDropdown(event);
  };
  useEffect(() => {
    if (!user) {
      router.push('/xlogin')
    }
  })
  if (loading) {
    return <div className="spin">
      <Spinner className="spinner" animation="border" variant="info" />
    </div>;
  }

  //	image upload

  const handleValidSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true)
    const date = new Date().toLocaleDateString()

    const formData = new FormData()
    formData.append('img3', img3)
    formData.append('description', description)
    formData.append('name', name);
    formData.append('catagory', catagory);
    formData.append('siteLink', siteLink);
    formData.append('date', date);
    formData.append('img', img);
    formData.append('img2', img2);
    formData.append('metaKeywords', metaKeywords);
    formData.append('metaDescription', metaDescription);

    await fetch("https://intense-crag-46696.herokuapp.com/add-portfolio", {
      method: "POST",
      body: formData
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        if (result.insertedId) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        }
        else (
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        )
      });
    event.target.reset();
    setIsLoading(false)
    // setDescription(" ");
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


          <label htmlFor="touch2"><span className="span">Blogs</span></label>
          <input type="checkbox" id="touch2" />
          <ul className="slide2">
            <li>  <Link href="/admin/add-blog">Add Blog</Link> </li>
            <li>    <Link href="/admin/blog-list">Blog List</Link></li>
          </ul>

          <label htmlFor="touch"><span className="span">Portfolio</span></label>
          <input type="checkbox" id="touch" />
          <ul className="drop">
            <li> <Link href="/admin/add-portfolio">Add Portfolio</Link></li>
            <li><Link href="/admin/portfolio-list">Portfolio List</Link></li>
          </ul>

          <li className="log-out" onClick={logout}>
            Log Out  <FontAwesomeIcon className="ps-2" icon={faSignOut} />
          </li>
        </div>
        <div className="nav-content">
          <DashboardNav></DashboardNav>

          <Container fluid={true} className="container-padding">
            <Row>
              <Col sm="12">
                <Card className="form-card">
                  <>
                    <h1>Add Porfolio</h1>
                  </>
                  <div>
                    <div className="product-adding " lg={6}>
                      <Col xl="7">
                        <Form
                          className="needs-validation add-product-form"
                          onSubmit={handleValidSubmit}
                        >
                          <div className="form2 form-label-center">
                            <FormGroup className="form-group mb-3 row">
                              <label className="col-xl-3 col-sm-4 mb-0">
                                Portfolio Name :

                              </label>
                              <div className="col-xl-8 col-sm-7">
                                <input
                                  className="form-control"
                                  onChange={e => setName(e.target.value)}
                                  id="validationCustom01"
                                  type="text"
                                  required
                                />
                              </div>

                            </FormGroup>


                            <FormGroup className="form-group mb-3 row">
                              <label className="col-xl-3 col-sm-4 mb-0">
                                Meta Description :

                              </label>
                              <div className="col-xl-8 col-sm-7">
                                <input
                                  className="form-control"
                                  onBlur={e => setMetaDescription(e.target.value)}
                                  id="validationCustom01"
                                  type="text"
                                  required
                                />
                              </div>

                            </FormGroup>
                            <FormGroup className="form-group mb-3 row">
                              <label className="col-xl-3 col-sm-4 mb-0">
                                Meta Keywords :

                              </label>
                              <div className="col-xl-8 col-sm-7">
                                <input
                                  className="form-control"
                                  onBlur={e => setMetaKeywords(e.target.value)}
                                  id="validationCustom01"
                                  type="text"
                                  required
                                />
                              </div>

                            </FormGroup>

                            <FormGroup className="form-group mb-3 row">
                              <label className="col-xl-3 col-sm-4 mb-0">
                                Portfolio Catagory :
                              </label>
                              <div className="col-xl-8 col-sm-7">
                                <select
                                  className="form-control "
                                  onBlur={e => setCatagory(e.target.value)}

                                  required
                                >
                                  <option value="web">Web</option>
                                  <option value="ecommerce">Ecommerce</option>
                                  <option value="funel">Funel</option>
                                </select>
                              </div>

                            </FormGroup>
                            <FormGroup className="form-group mb-3 row">
                              <label className="col-xl-3 col-sm-4 mb-0">
                                Site Link :
                              </label>
                              <div className="col-xl-8 col-sm-7">
                                <input
                                  className="form-control "
                                  onBlur={e => setSiteLink(e.target.value)}


                                  required
                                />
                              </div>

                            </FormGroup>
                            <FormGroup className="form-group mb-3 row">
                              <label className="col-xl-3 col-sm-4 mb-0">
                                Image
                              </label>
                              <div className="d-flex  col-xl-8 col-sm-7">

                                <input
                                  className=" me-5  "
                                  name="img"
                                  id="validationCustomImg"


                                />


                                <div className="form-file">
                                  <input className="" name="img" onBlur={e => setImag(e.target.files[0])} placeholder="select" type="file" id="" />
                                </div>
                              </div>
                            </FormGroup>
                            <FormGroup className="form-group mb-3 row">
                              <label className="col-xl-3 col-sm-4 mb-0">
                                Image 2
                              </label>
                              <div className="d-flex  col-xl-8 col-sm-7">

                                <input
                                  className=" me-5  "
                                  name="img2"
                                  id="validationCustomImg"


                                />


                                <div className="form-file">
                                  <input className="" name="img2" onBlur={e => setImag2(e.target.files[0])} placeholder="select" type="file" id="" />
                                </div>

                              </div>

                            </FormGroup>
                            <FormGroup className="form-group mb-3 row">
                              <label className="col-xl-3 col-sm-4 mb-0">
                                Image 3
                              </label>
                              <div className="d-flex  col-xl-8 col-sm-7">

                                <input
                                  className=" me-5  "
                                  name="img3"
                                  id="validationCustomImg"


                                />


                                <div className="form-file">
                                  <input className="" name="img3" onChange={e => setImg3(e.target.files[0])} placeholder="select" type="file" id="" />
                                </div>

                              </div>
                            </FormGroup>

                          </div>

                          <FormGroup className="form-group row">
                            <label className="col-xl-3 col-sm-4">
                              Add Description :
                            </label>
                            <div className="col-xl-8 col-sm-7 description-sm">

                              <Editor
                                onBlur={log}

                                apiKey="xmj2nso1m4q3nawunaj3v7i36tumphzicdcukaq3ks2zpnha"
                                onInit={(evt, editor) => (editorRef.current = editor)}
                                initialValue=""
                                init={{
                                  height: 500,
                                  menubar: false,
                                  plugins: [
                                    "advlist",
                                    "autolink",
                                    "lists",
                                    "link",
                                    "image",
                                    "charmap",
                                    "preview",
                                    "anchor",
                                    "searchreplace",
                                    "visualblocks",
                                    "code",
                                    "fullscreen",
                                    "insertdatetime",
                                    "media",
                                    "table",
                                    "code",
                                    "help",
                                    "wordcount",
                                  ],
                                  toolbar:
                                    "insertfile image media pageembed template link anchor codesample | bold italic forecolor | alignleft aligncenter " +
                                    "undo redo | blocks | " +
                                    "alignright alignjustify | bullist numlist outdent indent | " +
                                    "removeformat | help",
                                  image_caption: true,
                                  image_advtab: true,
                                  content_style:
                                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px ;  }",
                                  relative_urls: true,
                                }}
                              />



                            </div>
                          </FormGroup>
                          <br />
                          <div className="offset-xl-3  offset-sm-4">
                            <button type="submit" className="btnFillup anglebg bg-white w-50" >
                              {
                                isLoading ? <Spinner animation="border" variant="dark" /> : "Add Portfolio"
                              }
                            </button>

                          </div>
                        </Form>
                      </Col>
                    </div>
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
              <button type="button" className="btn-close  text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              <hr />


            </div>
            <div className="offcanvas-body">
              <li>
                <Link href="/xadmin">Dashboard</Link>{" "}
              </li>
              <li onClick={() => handleDropdownBlog(!dropdownBlog)}>Blog <small>▼</small></li>
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

              <li onClick={() => handleDropdown(!dropdown)}>Portfolio <small>▼</small></li>
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

export default AddPortfolio;
