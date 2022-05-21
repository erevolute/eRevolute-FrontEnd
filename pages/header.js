
import Link from "next/link";
import Image from "next/image";
// import img from "../pages/images/eRevolute-modified-ah-rgb.png"

function Header(){
    return (
        <header className="nav" fixed="top">
          <nav className="navbar navbar-expand-lg navbar-light position-fixed" fixed="sticky">
          <div className="container">
          <Link href='/'><img width={200} src=
            "https://i.ibb.co/2nXZjsY/final.png" alt="" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item link">
                  <Link className="" href='/'>Home</Link> 
                </li>
                <li className="nav-item link">
                <Link className="text-white link" href='/aboutUs' >About Us</Link>
                </li>

                <li className="nav-item link dropdown">
                  <a className="nav-item dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li className="link"><Link  href='/services/webdevelopment'>Web Development</Link></li>
                    <li className="link"> <Link className="" href='/services/ecommerce-development'>eCommerce Development</Link> </li>
                    <li className="link"><Link className="" href='/services/digital-marketing'>Digital Marketing</Link></li>
                    <li className="link"><Link className="" href='/services/funnel-development'>Funnel Development</Link></li>
                    <li className="link"> <Link className="" href='/services/seo-sem-smm'>SEO,SEM and SMM </Link></li>
                    <li className="link"><Link className="" href='/services/creative-design'>Creative Design </Link></li>
                    <li className="link"><Link className="" href='/services/content-writing'>Content Writing  </Link></li>
                    
                  </ul>
                </li>

                <li className="nav-item link dropdown">
                  <a className="nav-item dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Project
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li className="link"><Link  href='/services/webdevelopment'>Web and SEO</Link></li>
                    <li className="link"> <Link className="" href='/services/ecommerce-development'>Comparison Pool</Link> </li>
                    <li className="link"> <Link className="" href='/services/ecommerce-development'>Meetup Search</Link> </li>
                    <li className="link"> <Link className="" href='/services/ecommerce-development'>Test Development</Link> </li>
                  </ul>
                </li>
                <li className="nav-item link dropdown">
                  <a className="nav-item dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Apps and Tools
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li className="link"><Link  href='/services/webdevelopment'>Email Validation</Link></li>
                    <li className="link"> <Link className="" href='/services/ecommerce-development'>Email Marketing</Link> </li>
                    <li className="link"> <Link className="" href='/services/ecommerce-development'>Smart Offer Management </Link> </li>
                    <li className="link"> <Link className="" href='/services/ecommerce-development'>URL shortener</Link> </li>
                  </ul>
                </li>
                <li className="link nav-item">
                <Link className="" href='/blogs'>Blogs</Link>
                </li>
                <li className="link nav-item">
                <Link className="" href='/contactUs'>Contact Us</Link>
                </li>
              </ul>
             
            </div>
          </div>
        </nav>
        
      </header>
    )
}
export default Header;