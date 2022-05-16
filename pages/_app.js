
import '/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import AOS from 'aos';
import Script from "next/script"
import 'aos/dist/aos.css';
import 'animate.css';
import "quill/dist/quill.snow.css";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {


  useEffect(() => {
    AOS.init({});
  }, []);



  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></Script>
     <Component {...pageProps} /></>
  )
  
  
}

export default MyApp
