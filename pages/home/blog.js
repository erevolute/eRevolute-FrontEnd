import { useEffect, useState } from "react";
import Link from "next/link"
import ReactHtmlParser from 'react-html-parser';

function Blogs() {
  // const date = new Date().toLocaleDateString();
  // const time = new Date().toLocaleTimeString();

  const [blogs , setBlogs] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/blogs')
    .then(res=>res.json())
    .then(data => setBlogs(data))
  },[])

  const latestBlogsFind = blogs.slice(-3);
  const latestBlogs = latestBlogsFind.reverse();


  return (
    <div className="blogs mt-5">
        <h1 className="text-center mb-5">Blogs</h1>
      
       <div className="blog">
       {latestBlogs.map(blog =>  <div key={blog._id} className="">
         <div className="blog-cards m-auto">
             <img className="blog-img" src={`data:image/png;base64,${blog.img}`}  alt="" />
             <h2>{blog.title}</h2>
             <small>{blog.date}</small>
             {ReactHtmlParser(blog?.description?.slice(0, 100))}
           
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
    </div>
  );
}
export default Blogs;

