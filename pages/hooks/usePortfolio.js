import { useEffect, useState } from "react";
function usePortfolio(){

    const [portfolio, setPortfolio] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/portfolio")
        .then((res) => res.json())
        .then((data) =>{
          setTimeout(() => {
            setPortfolio(data)
          }, 2000);
        });
      
    }, []);
    
    return [portfolio]
}
export default usePortfolio;