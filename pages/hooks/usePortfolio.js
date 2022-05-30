import { useEffect, useState } from "react";
function usePortfolio(){

    const [portfolio, setPortfolio] = useState([]);
    useEffect(() => {
      fetch("https://gentle-everglades-88789.herokuapp.com/portfolio")
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