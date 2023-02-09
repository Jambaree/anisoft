import React from 'react';
import parse from 'html-react-parser';
import Edges from '../Edges';
import Mapbox from '../MapBox';

const Contact = ({ data }) => {
	const { headline, tag, text, locations } = data;
	return (
		<div className='bg-white py-[50px] md:py-[90px] h-full '>
			<Edges size='lg'>
				<div className='w-full h-full flex flex-col md:flex-row md:gap-0 gap-[30px]'>
					<div className='w-full md:w-[40%] flex flex-col gap-[30px]'>
						{headline && <h2 className='text-black  '>{headline}</h2>}
						{text && (
							<p className='text-black max-w-[300px] mb-[25px]'>{text}</p>
						)}
						{locations.length > 0 &&
							locations.map((location, index) => {
								return (
									<div
										key={index}
										className=' cursor-pointer flex flex-col gap-[15px] border-l-[2px] border-[#ADADAD] pl-[30px] hover:border-lightGreen'
									>
										<h3 className='text-black'>{location.title}</h3>
										<p className='text-black'>{location.address}</p>
										<a href={`tel:${location.phone}`}>Tel: {location.phone}</a>
									</div>
								);
							})}
					</div>
					<div className='md:w-[60%] w-full '>
						<Mapbox locations={locations} />
					</div>
				</div>
			</Edges>
		</div>
	);
};

export default Contact;
