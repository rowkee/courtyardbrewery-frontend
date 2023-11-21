import LocationMap from "./LocationMap";

export default function SudburyTapPage() {
  const position = {lat: 52.0379949555127, lng: 0.7266092135060989 }

  return (
    <>
      <LocationMap position={position} />
      <h1>The Sudbury Taproom </h1>
    </>
  );
}
