'use client';
import React, { useState, useRef, useCallback } from 'react';
// import ReactMapboxGl, { Marker, ZoomControl } from "react-mapbox-gl";
import Map, { Marker, NavigationControl, MapRef } from 'react-map-gl';
import MarkerIcon from '../../public/marker.svg';

const Mapbox = (props: any) => {
	const { locations } = props;

	const mapRef = useRef<MapRef>();
	const onSelectCity = useCallback((longitude, latitude) => {
		mapRef.current?.flyTo({
			center: [longitude, latitude],
			zoom: 11,
			duration: 2000,
		});
	}, []);

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
					maxHeight: '572px',
					height: '100%',
					width: '100%',
					minHeight: '300px',
				}}
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
							onClick={() => {
								onSelectCity(location.longitude, location.latitude);
							}}
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
