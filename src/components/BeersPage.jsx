import { useEffect, useState } from "react";
import BeerCard from "./BeerCard";

export default function BeersPage() {
  const [beers, setBeers] = useState([]);

  async function getBeers() {
    try {
      const response = await fetch("http://localhost:8000/beers/");
      const data = await response.json();
      setBeers(data);
    } catch (error) {
      console.log(error);
    }
  }
  
 
  useEffect(() => {
    getBeers();
  }, []);
  
  console.log(beers)
  return (
    <>
      <h1>Beers</h1>
      <div className="card-list">
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
