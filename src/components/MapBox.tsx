import Map, { Marker } from "react-map-gl";
import MarkerIcon from "../../public/marker.svg";

function Mapbox(props: any) {
  const { locations, mapRef } = props;

  return (
    <Map
      boxZoom={false}
      doubleClickZoom={false}
      dragPan={false}
      dragRotate={false}
      initialViewState={{
        latitude: 47.5,
        longitude: -97.357024,
        zoom: 3,
      }}
      keyboard={false}
      mapStyle="mapbox://styles/mapbox/light-v9"
      mapboxAccessToken={process.env.NEXT_MAPBOX}
      ref={mapRef}
      scrollZoom={false}
      style={{
        height: "100%",
        width: "100%",
        minHeight: "300px",
      }}
      touchPitch={false}
      touchZoomRotate={false}
    >
      {locations.length > 0 &&
        locations.map((location, index) => (
          <Marker
            key={index}
            latitude={location.latitude}
            longitude={location.longitude}
          >
            <MarkerIcon className="translate-y-[-25px]" />
          </Marker>
        ))}
    </Map>
  );
}

export default Mapbox;
