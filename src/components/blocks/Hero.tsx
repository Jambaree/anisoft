import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button';
import Edges from '../Edges';

export default function Hero({ data }) {
	const { headline, subHeadline, button1, button2, image } = data;
	return (
		<div className='primaryRadialBg py-[100px] md:py-[150px]'>
			<Edges size='lg'>
				<div className='flex w-full h-full flex-wrap text-white items-center justify-center'>
					<div>
						<h1 className='heroHeadline max-w-[985px] text-[40px]  sm:text-[60px]'>
							{headline}
						</h1>
						<p className='max-w-[575px] pt-[40px]'>{subHeadline}</p>
						<div className='pt-[50px] flex wrap gap-[10px]'>
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
					</div>
					<div className='flex items-center justify-center '>
						<Image
							className='p-[50px]'
							src={image?.sourceUrl}
							// src={heroImage}
							alt={image?.altText}
							width={350}
							height={350}
						/>
					</div>
				</div>
			</Edges>
		</div>
	);
}
