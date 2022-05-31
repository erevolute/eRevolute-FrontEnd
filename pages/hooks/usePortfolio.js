import { useEffect, useState } from "react";
function usePortfolio(){

    const [portfolio, setPortfolio] = useState([]);
    const [loading , setLoading] = useState(false)
    useEffect(() => {
      setIsLoading(true)
      fetch("https://gentle-everglades-88789.herokuapp.com/portfolio")
        .then((res) => res.json())
        .then((data) =>{
          setPortfolio(data)
          setTimeout(() => {
            setPortfolio(data)
            setLoading(false)
          }, 1000);
        });
      
    }, []);
    
    return [portfolio , loading]
}
export default usePortfolio;
