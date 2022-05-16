import Link from "next/link";
import Header from "../header";

function AddPortfolio(){
    return(

       <>
       <Header></Header>
       <div className="dashboard">
        <aside className="sidebar">
        <Link href='/admin/add-portfolio'>Port</Link>
            <Link href='/admin/add-blog'>blog</Link>
        </aside>
          <div className="bg-danger">
              adf
          </div>
       </div></>
    )
}
export default AddPortfolio;