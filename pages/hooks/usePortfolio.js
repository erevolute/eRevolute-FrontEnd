import { useEffect, useState } from "react";
function usePortfolio(){

    const [portfolio, setPortfolio] = useState([]);
    const [load , setLoad] = useState(false)
    useEffect(() => {
      setLoad(true)
      fetch("http://localhost:5000/portfolio")
        .then((res) => res.json())
        .then((data) =>{
          setPortfolio(data)
          setLoad(false)
          setTimeout(() => {
            setPortfolio(data)
            setLoad(false)
          }, 1000);
        });
      
    }, []);
    
    return [portfolio , load]
}
export default usePortfolio;
