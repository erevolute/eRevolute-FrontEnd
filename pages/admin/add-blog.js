import Head from "next/head";
import Link from "next/link";
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
import { useEffect, useState } from "react";
import DashboardNav from "../components/dashboard";
import Swal from "sweetalert2";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";


const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <Spinner
  className="spinner"
  animation="border"
  variant="info"
/>,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

function AddBlog({ title = "Add Blogs" }) {
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState();
  const router = useRouter();
  const [user , loading , error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
 

  useEffect(()=>{
    if(!user){
      router.push('/xlogin')
    }
  })

  if(loading){
    return <div>
      loading
    </div>
  }

  const handleValidSubmit = async(event) => {
	  event.preventDefault()
   
    setIsLoading(true)
   const title = event.target.blog.value;
  const catagory = event.target.catagory.value
  const  date = new Date().toLocaleDateString()
  const img = event.target.img.value;
  const metaKeywords = event.target.keywords.value ;
  const metaDescription = event.target.description.value ;

 
      const data = ({ description , date, title , img , catagory , metaDescription , metaKeywords })
    console.log(data)

    await fetch('https://gentle-everglades-88789.herokuapp.com/add' , {
      method: 'POST',
      headers:{
          'content-type' : 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(res=> res.json())
  .then(result => {
    setDescription("");
    setIsLoading(false)
    if(result.insertedId){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    }
    else(
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    )
   
  })
  event.target.reset();

  };


  
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
                  <>
                    <h1>Add Blog</h1>
                  </>
                  <div>
                    <Row className="product-adding">
                      <Col xl="7">
                      <Form
                      className="needs-validation add-product-form"
                      onSubmit={handleValidSubmit}
                    >

                      <div className="form2 form-label-center">
                      <FormGroup className="form-group mb-3 row">
                          <label className="col-xl-3 col-sm-4 mb-0">
                            Blog Title :
                            
                          </label>
                          <div className="col-xl-8 col-sm-7">
                            <input
                              className="form-control"
                              name="blog"
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
                              name="description"
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
                              name="keywords"
                              id="validationCustom01"
                              type="text"
                              required
                            />
                          </div>
                        
                        </FormGroup>
                       
                        
                        <FormGroup className="form-group mb-3 row">
                          <label className="col-xl-3 col-sm-4 mb-0">
                            Blog Catagory :
                          </label>
                          <div className="col-xl-8 col-sm-7">
                            <input
                              className="form-control "
                              name="catagory"
                              
                              
                              required
                            />
                          </div>
                          
                        </FormGroup>
                        <FormGroup className="form-group mb-3 row">
                          <label className="col-xl-3 col-sm-4 mb-0">
                           Image
                          </label>
                          <div className="col-xl-8 col-sm-7">
                            <input
                              className="form-control "
                              name="img"
                              id="validationCustomUsername"
                             
                              required
                            />
                          </div>
                         
                        </FormGroup>
                      </div>
                  
                        <FormGroup className="form-group row">
                          <label className="col-xl-3 col-sm-4">
                            Add Description :
                          </label>
                          <div   className="col-xl-8 col-sm-7 description-sm">
                          
                          <QuillNoSSRWrapper
                              modules={modules}
                              onChange={setDescription}
                              formats={formats}
                            />
                       

                           
                          </div>
                        </FormGroup>
                      
                      <div className="offset-xl-3  offset-sm-4">
                      <button type="submit" className="btnFillup anglebg bg-white w-50" >
                         {
                           isLoading ?  <Spinner  animation="border" variant="dark" /> : "Add Portfolio"
                         }
                        </button>
                      </div>
                    </Form>
                      </Col>
                    </Row>
                  </div>
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
}

export default AddBlog;
