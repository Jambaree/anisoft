import Image from 'next/image';
import Link from 'next/link';

export default function Hero({ data }) {
	const { headline, subHeadline, button1, button2, image } = data;
	return (
		<div className='primaryRadialBg '>
			<div className='flex w-full h-full flex-wrap text-white'>
				<div>
					<h1 className='heroHeadline'>{headline}</h1>
					<p>{subHeadline}</p>
					<Link
						className='text-white'
						href={button1?.url}
					>
						{button1?.title}
					</Link>
					<Link
						className='text-white'
						href={button2?.url}
					>
						{button2?.title}
					</Link>
				</div>
				<div>
					<Image
						src={image?.sourceUrl}
						// src={heroImage}
						alt={image?.altText}
						width={350}
						height={350}
					/>
				</div>
			</div>
		</div>
	);
}
