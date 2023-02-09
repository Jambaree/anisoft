'use client';
import React from 'react';
// import ReactMapboxGl, { Marker, ZoomControl } from "react-mapbox-gl";
import Map, { Marker, NavigationControl } from 'react-map-gl';
import MarkerIcon from '../../public/marker.svg';

const Mapbox = (props: any) => {
	const { locations } = props;

	return (
		<>
			<Map
				initialViewState={{
					latitude: 49.741015932602835,
					longitude: -106.11014797030543,
					zoom: 2,
				}}
				style={{
					maxHeight: '572px',
					height: '100%',
					width: '100%',
					minHeight: '300px',
				}}
				mapStyle='mapbox://styles/mapbox/light-v10'
				mapboxAccessToken={
					'pk.eyJ1IjoiYmFyZWFkdmVydGlzaW5nIiwiYSI6ImNqaWRmdDMxZDAxdWw0MW9jYXRjYWRqZ3QifQ.DPR-gLvJOZzyf4X-Yk3V0g'
				}
			>
				{locations.length > 0 &&
					locations.map((location, index) => (
						<Marker
							key={index}
							longitude={location.longitude}
							latitude={location.latitude}
						>
							<MarkerIcon />
						</Marker>
					))}

				<NavigationControl position={'top-left'} />
			</Map>
		</>
	);
};

export default Mapbox;
