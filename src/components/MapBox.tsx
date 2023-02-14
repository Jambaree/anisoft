import Map, { Marker, NavigationControl } from 'react-map-gl';
import MarkerIcon from '../../public/marker.svg';

const Mapbox = (props: any) => {
	const { locations, onSelectCity, mapRef } = props;

	return (
		<>
			<Map
				ref={mapRef}
				initialViewState={{
					latitude: 49.741015932602835,
					longitude: -106.11014797030543,
					zoom: 2,
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
								onSelectCity(location.longitude, location.latitude, 11, index);
							}}
						>
							<MarkerIcon className='translate-y-[-25px]' />
						</Marker>
					))}

				<NavigationControl position={'top-right'} />
			</Map>
		</>
	);
};

export default Mapbox;
