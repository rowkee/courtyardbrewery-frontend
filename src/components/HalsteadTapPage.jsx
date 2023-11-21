import LocationMap from "./LocationMap";

export default function HalsteadTapPage() {
  const position = {lat: 51.943835, lng: 0.632967}

    return (
      <>
        <LocationMap position={position}/>
        <h1>The Halstead Taproom </h1>
      </>
    );
  }
  