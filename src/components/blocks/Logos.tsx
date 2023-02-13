import React from 'react';
import Edges from '../Edges';
import Image from 'next/image';
import FadeInUp from '../FadeInUp';

const LogoModule = ({ header, logos }) => {
	const half = Math.ceil(logos.length / 2);

	return (
		<div className='w-full h-auto'>
			<Edges size='md'>
				<div className='flex flex-col justify-center items-center py-[115px]'>
					<FadeInUp>
						<h1 className='mb-[48px]'>{header}</h1>
					</FadeInUp>
					<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-rows-2 gap-[24px] gap-y-[48px]'>
						{logos?.map(({ logo }, index) => {
							const isFirstHalf = index < half;
							return (
								logo?.sourceUrl && (
									<FadeInUp
										key={index}
										className={isFirstHalf ? 'delay-100' : 'delay-300'}
									>
										<Image
											src={logo?.sourceUrl}
											alt={logo?.altText || 'logo-image'}
											width='195'
											height='85'
											className=' object-contain'
										/>
									</FadeInUp>
								)
							);
						})}
					</div>
				</div>
			</Edges>
		</div>
	);
};

export default LogoModule;
