import { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import Link from "next/link";
import ReactHtmlParser from 'react-html-parser';
 
function Blogs(){
    const [blogs , setBlogs] = useState([])
    useEffect(()=>{
      fetch('http://localhost:5000/blogs')
      .then(res=>res.json())
      .then(data => {
        setBlogs(data)
        // console.log(data[17].data.description)
        // console.log(data[17].data.img)
        // console.log(data[17].data.name)
      })
    },[blogs])
    // const aj = JSON.parse(blogs[7]?.description)
    // console.log(blogs[7]?.description, aj)
   
    
 
    return (
 <div className="blogs">
     <Header></Header>
        <h1 className="text-center mt-5 pt-5 mb-5">Blogs</h1>
      
       <div className="blog">
        {/* <p contentEditable={false}  suppressContentEditableWarning={false} dangerouslySetInnerHTML={{__html:blogs}}></p> */}
      
       {
         blogs.map(blog =>  <div key={blog._id} className="mt-5">
         <div className="blog-cards m-auto">
             <img className="blog-img" src={blog.img} alt="" />
             <h2>{blog.title}</h2>
             <small>{blog.date}</small>
             <div>
             {ReactHtmlParser(blog.description?.slice(0,80))}
             </div>
             <button className="btnFillup anglebg bg-white m-2">
             <Link
             
                  href={{
                    pathname: "/blogs/[id]",

                    query: { id: blog._id },
                  }}
                >
                  Details
                </Link>
             </button>
         </div>
         </div>)
       }
       </div>
       <Footer></Footer>
    </div>
    )
}
export default Blogs;