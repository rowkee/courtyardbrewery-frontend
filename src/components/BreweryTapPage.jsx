import LocationMap from "./LocationMap"; 

export default function BreweryTapPage() {
  const position = {lat: 51.934475, lng: 0.593539}

  return (
    <>
      <LocationMap position={position} />
      <h1>The Brewery Taproom </h1>
    </>
  );
}
