import { useEffect, useState } from "react";
import Link from "next/link"
import ReactHtmlParser from 'react-html-parser';

function Blogs() {
  // const date = new Date().toLocaleDateString();
  // const time = new Date().toLocaleTimeString();

  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch('https://intense-crag-46696.herokuapp.com/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])
  console.log(blogs)
  const latestBlogsFind = blogs.slice(-3);
  const latestBlogs = latestBlogsFind.reverse();


  return (
    <div className="blogs mt-5">
      <h1 className="text-center mb-5">Blogs</h1>

      <div className="blog">
        {latestBlogs.map(blog => <div key={blog._id} className="">
          <div className="blog-cards m-auto p-2">
            <img className="blog-img" src={`data:image/png;base64,${blog.img}`} alt="" />
            <hr />
            <h4>{blog.title?.slice(0, 30)}</h4>
            <small>{blog.date}</small>
            <br />
            <span>{ReactHtmlParser(blog?.description?.slice(0, 100))}...</span>
            <br />
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

