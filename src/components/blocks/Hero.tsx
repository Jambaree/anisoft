'use client';

import Image from 'next/image';
import Button from '../Button';
import Edges from '../Edges';
import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from '../../utils/motion';
import Tilt from 'react-parallax-tilt';

export default function Hero({ data }) {
	const { headline, subHeadline, button1, button2, image } = data;
	return (
		<div className='primaryRadialBg py-[100px] md:py-[150px]'>
			<Edges size='lg'>
				<motion.div
					variants={staggerContainer()}
					initial='hidden'
					whileInView='show'
					viewport={{ once: false, amount: 0.25 }}
					className='flex w-full h-full flex-wrap-reverse text-white items-center justify-center'
				>
					<div>
						<motion.h1
							variants={textVariant(0.6)}
							className='heroHeadline max-w-[985px] text-[40px]  sm:text-[60px]'
						>
							{headline}
						</motion.h1>
						<motion.p
							variants={textVariant(0.8)}
							className='max-w-[575px] pt-[40px]'
						>
							{subHeadline}
						</motion.p>
						<motion.div
							variants={textVariant(1)}
							className='pt-[50px] flex wrap gap-[30px] flex-wrap-reverse w-auto mr-[50px]'
						>
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
						</motion.div>
					</div>
					<motion.div
						variants={textVariant(0.8)}
						className='flex items-center justify-center '
					>
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
					</motion.div>
				</motion.div>
			</Edges>
		</div>
	);
}
