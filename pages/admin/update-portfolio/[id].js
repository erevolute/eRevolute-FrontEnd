import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { Editor } from "@tinymce/tinymce-react";
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
  import Swal from "sweetalert2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faL, faSignOut } from '@fortawesome/free-solid-svg-icons';
import DashboardNav from '../../components/dashboard';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { HashLoader } from 'react-spinners';
import { css } from "@emotion/react";
import usePortfolio from '../../hooks/usePortfolio';


const UpdatePortfolio = ({title = "Update Portfolio"}) => {
    const router = useRouter();
    const id = router.query.id;
    const editorRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingSubmit, setisLoadingSubmit] = useState(false);
    const [user , loading , error] = useAuthState(auth);
    const [description, setDescription] = useState("");
    const [img , setImg] = useState('')

    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
        setDescription(editorRef.current.getContent());
      }
    };
    
    const [portfolio , load] = usePortfolio([])
    // useEffect(()=>{
    //     setIsLoading(true)
    //     fetch('http://localhost:5000/portfolio')
    //     .then(res => res.json())
    //     .then(data => {
    //         setPortfolio(data)
    //         setIsLoading(false)
    //     })
    // },[])
    const findTitle = portfolio.find(port => port._id == id)



    const handleValidSubmit = async (event) => {
        setisLoadingSubmit(true)
        event.preventDefault();
    
        const name = event.target.portfolio.value;
        const catagory = event.target.catagory.value;
        const siteLink = event.target.siteLink.value;
        const metaDes = event.target.metaDes.value;
        const metaKey = event.target.metaKey.value;


        const date = new Date().toLocaleDateString();
    
        const data = {
            name ,
            catagory ,
            siteLink,
            metaDes,
            metaKey
        };
        console.log(data);

        const formData = new FormData()
        formData.append('description', description)
        formData.append('img', img);
        formData.append('date', date);
    
        await fetch(`http://localhost:5000/portfolio/${id}`, {
          method: "PATCH",
          body: formData
        })
          .then((res) => res.json())
        .then((result) => 
        {
            if (result.modifiedCount){
                fetch(`http://localhost:5000/portfolio/${id}`, {
                method: "PUT",
                headers : {
                  'content-type' : 'application/json'
                },
                body: JSON.stringify(data)
              }).then(res => res.json()).then(data => {
                 if (data.modifiedCount) {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Updated Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              } else
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Something went wrong!",
                });
              })
            }
          }
        );
    
        event.target.reset();
        setDescription(" ");
        setisLoadingSubmit(false)
      };

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
      
      const override = css`display: block;
      margin: 0 auto;
      border-color: red;`
    
      
      useEffect(()=>{
        if(!user){
          router.push('/xlogin')
        }
      })
    
      if(loading){
        return <div className="spin">
        <Spinner className="spinner" animation="border" variant="info" />
      </div>
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
     
  
            <label htmlFor="touch2"><span  className="span">Blogs</span></label>               
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
              Log Out  <FontAwesomeIcon  className="ps-2" icon={faSignOut} /> 
            </li>
          </div>
          <div className="nav-content">
          <DashboardNav></DashboardNav>
        <Container fluid={true} className="container-padding">
        <Row>
          <Col sm="12">
            <Card className="form-card">
              {
                  load ? <HashLoader

                  
                  size={50}
                  color={"#35d8ea"}
                  css={override}
                  /> : <>
                  <>
                <h5>Update Portfolio </h5>
                
              </>
              <div>
                <Row className="product-adding">
                <h2 className="text-center text-danger mx-auto">{findTitle?.name}</h2>
                  <Col xl="7">
                    <Form
                      className="needs-validation add-product-form"
                      onSubmit={handleValidSubmit}
                    >
                      <div className="form2 form-label-center">
                        <FormGroup className="form-group mb-3 row">
                          <label className="col-xl-3 col-sm-4 mb-0">
                          Update  Portfolio Name :
                          </label>
                          <div className="col-xl-8 col-sm-7">
                            <input
                               defaultValue={findTitle?.name}
                              className="form-control"
                              name="portfolio"
                              id="validationCustom01"
                              type="text"
                              required
                            />
                          </div>
                        </FormGroup>
                        
                        <FormGroup className="form-group mb-3 row">
                          <label className="col-xl-3 col-sm-4 mb-0">
                          Update Meta Description :
                           
                          </label>
                          <div className="col-xl-8 col-sm-7">
                            <input
                              className="form-control"
                              defaultValue={findTitle?.metaDescription}
                             
                              id="validationCustom01"
                              type="text"
                              name="metaDes"
                              required
                            />
                          </div>
                        
                        </FormGroup>
                        <FormGroup className="form-group mb-3 row">
                          <label className="col-xl-3 col-sm-4 mb-0">
                          Update Meta Keywords :
                            
                          </label>
                          <div className="col-xl-8 col-sm-7">
                            <input
                              className="form-control"
                              defaultValue={findTitle?.metaKeywords}
                    
                              id="validationCustom01"
                              type="text"
                              name="metaKey"
                              required
                            />
                          </div>
                        
                        </FormGroup>
                        <FormGroup className="form-group mb-3 row">
                          <label className="col-xl-3 col-sm-4 mb-0">
                          Update  Portfolio Catagory :
                          </label>
                          <div className="col-xl-8 col-sm-7">
                            <select 
                              className="form-control "
                              defaultValue={findTitle?.catagory}
                              name="catagory"
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
                          Update Site Link :
                          </label>
                          <div className="col-xl-8 col-sm-7">
                            <input
                              className="form-control "
                              defaultValue={findTitle?.siteLink}
                              name="siteLink"
                              required
                            />
                          </div>
                        </FormGroup>
                        <FormGroup className="form-group mb-3 row">
                          <label className="col-xl-3 col-sm-4 mb-0">
                          Update Image
                          </label>
                          <div className="col-xl-8 col-sm-7">
                                
                         <div className="form-file">
                         <input className="" name="img"  onChange={e => setImg(e.target.files[0])} placeholder="select" type="file" id="" />
                         </div>
                          </div>
                        </FormGroup>
                    
                      </div>

                      <FormGroup className="form-group row">
                        <label className="col-xl-3 col-sm-4">
                        Update Description :
                        </label>
                        <div className="col-xl-8 col-sm-7 description-sm">
                        <Editor
                          onBlur={log}
                          name="a"
                      apiKey="xmj2nso1m4q3nawunaj3v7i36tumphzicdcukaq3ks2zpnha"
                      onInit={(evt, editor) => (editorRef.current = editor)}
                      initialValue={findTitle?.description}
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
                           isLoadingSubmit ?  <Spinner  animation="border" variant="dark" /> : "Update Blog"
                         }
                        </button>
                      </div>
                    </Form>
                  </Col>
                </Row>
              </div></>
              }
            </Card>
          </Col>
        </Row>
      </Container>
      <div
              className="offcanvas offcanvas-start"
             
              id="offcanvasExample"
              aria-labelledby="offcanvasExamplelabel"
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
};

export default UpdatePortfolio;