import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../footer";
import Header from "../header";
import Head from "next/head";
import ReactHtmlParser from 'react-html-parser';

function BlogsDetails({ title = "" }) {
  const router = useRouter();
  const id = router.query.id;
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const customTitle = (blogs.title);
  title = customTitle;

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header></Header>
      <div className="blog-details container">
        <img src={blogs.img} alt="" />
        <div>
        <h1>{blogs.title}</h1>
        <p>Posted : {blogs.date}</p>
        </div>
      </div>
      <p className="container">{ReactHtmlParser(blogs.description)} </p>
    
      <Footer></Footer>
    </div>
  );
}
export default BlogsDetails;
