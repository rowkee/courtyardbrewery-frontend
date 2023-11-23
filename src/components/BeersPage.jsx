import { useEffect, useState } from "react";
import BeerCard from "./BeerCard";

export default function BeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(()=>{
    const getBeers = async () => {
        await fetch(`${process.env.REACT_APP_BACKEND_URL}/beers`)
        .then(result => result.json())
        .then(data => {
          setBeers(data)
        })
    }
    getBeers()
},[])
  
//   console.log(beers)
  return (
    <>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Our Beers</h1>
      <div 
        className="card-list"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'space-around'  
        }}    
      >
        {beers.length > 0 ? (
          beers.map((beer, index) => (
            <BeerCard key={index} beer={beer} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
