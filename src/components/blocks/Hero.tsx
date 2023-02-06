'use client';

import Image from 'next/image';
import Button from '../Button';
import Edges from '../Edges';
import Tilt from 'react-parallax-tilt';
import FadeInUp from '../FadeInUp';

export default function Hero({ data }) {
	const { headline, subHeadline, button1, button2, image } = data;
	return (
		<div className='primaryRadialBg py-[100px] md:py-[150px]'>
			<Edges size='lg'>
				<div className='flex w-full h-full flex-wrap-reverse text-white items-center justify-center'>
					<div>
						<FadeInUp>
							<h1 className='heroHeadline max-w-[985px] text-[40px]  sm:text-[60px]'>
								{headline}
							</h1>
						</FadeInUp>
						<FadeInUp>
							<p className='max-w-[575px] pt-[40px]'>{subHeadline}</p>
						</FadeInUp>
						<FadeInUp>
							<div className='pt-[50px] flex wrap gap-[30px] flex-wrap-reverse w-auto mr-[50px]'>
								<Button
									variant='large'
									href={button1?.url}
									reverse={true}
								>
									{button1?.title}
								</Button>
								<Button
									variant='basicWhite'
									href={button2?.url}
									reverse={true}
									className='heroButton'
								>
									{button2?.title}
								</Button>
							</div>
						</FadeInUp>
					</div>
					<div>
						<FadeInUp className='flex items-center justify-center '>
							<Tilt>
								<div className='relative w-[350px] h-[350px] cursor-pointer'>
									<Image
										className='p-[50px]'
										src={image?.sourceUrl}
										// src={heroImage}
										alt={image?.altText}
										fill
									/>
								</div>
							</Tilt>
						</FadeInUp>
					</div>
				</div>
			</Edges>
		</div>
	);
}
