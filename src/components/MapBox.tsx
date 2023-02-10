import Map, { Marker, NavigationControl } from 'react-map-gl';
import MarkerIcon from '../../public/marker.svg';

const Mapbox = (props: any) => {
	const { locations, onSelectCity, mapRef, initialView } = props;

	return (
		<>
			<Map
				ref={mapRef}
				initialViewState={{
					latitude: initialView.latitude,
					longitude: initialView.longitude,
					zoom: initialView.zoom,
				}}
				mapStyle='mapbox://styles/mapbox/light-v9'
				style={{
					height: '100%',
					width: '100%',
					minHeight: '300px',
				}}
				mapboxAccessToken={process.env.NEXT_MAPBOX}
			>
				{locations.length > 0 &&
					locations.map((location, index) => (
						<Marker
							key={index}
							longitude={location.longitude}
							latitude={location.latitude}
							onClick={() => {
								onSelectCity(location.longitude, location.latitude, index);
							}}
						>
							<MarkerIcon />
						</Marker>
					))}

				<NavigationControl position={'top-right'} />
			</Map>
		</>
	);
};

export default Mapbox;
