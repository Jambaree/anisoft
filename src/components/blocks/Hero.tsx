import Image from 'next/image';
import Link from 'next/link';

export default function Hero({ data }) {
	const { headline, subHeadline, button1, button2, image } = data;
	return (
		<div className='bg-lightGreen'>
			<h1 className=''>{headline}</h1>
			<p>{subHeadline}</p>
			<Link href={button1?.url}>{button1?.title}</Link>
			<Link href={button2?.url}>{button2?.title}</Link>
			<Image
				src={image?.sourceUrl}
				// src={heroImage}
				alt={image?.altText}
				width={350}
				height={350}
			/>
		</div>
	);
}
