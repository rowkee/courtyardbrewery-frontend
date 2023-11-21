import {APIProvider, Map, AdvancedMarker, Pin, InfoWindow} from '@vis.gl/react-google-maps'

export default function LocationMap({position}) {
    

    return (
    <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <div style={{height:"30vh"}}>
            <Map zoom={14} center={position} mapId={process.env.REACT_APP_GOOGLE_MAPS_ID}> 
            </Map>
        </div>
    </APIProvider>

    );
  }
  