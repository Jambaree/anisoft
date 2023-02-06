import Image from 'next/image';
import Button from '../Button';
import Edges from '../Edges';
import Tilt from 'react-parallax-tilt';
import FadeInUp from '../FadeInUp';

function Anisoft({ data }) {
	const { headline, tag, button, text } = data;

	return (
		<div className='primaryRadialBg pb-[100px] pl-[100px]'>
			<div className='bg-white pb-[50px] md:pb-[80px]'>
				<Edges size='lg'>
					<div className='flex w-full h-full flex-wrap text-darkPurple items-start justify-evenly'>
						<div className='max-w-[500px] pt-[50px] md:pt-[70px]'>
							{tag && <p className='max-w-[575px] pt-[40px]'>{tag}</p>}

							{headline && (
								<FadeInUp className='delay-100'>
									<h1 className='heroHeadline max-w-[985px] text-[32px]  sm:text-[48px]'>
										{headline}
									</h1>
								</FadeInUp>
							)}
						</div>
						<div className='max-w-[500px] flex flex-col pt-[50px] md:pt-[150px]'>
							{text && <span>{text}</span>}
							<div className='pt-[50px] flex wrap gap-[30px] flex-wrap-reverse w-auto mr-[50px]'>
								{button?.url && (
									<Button
										variant='large'
										href={button?.url}
									>
										{button?.title}
									</Button>
								)}
							</div>
						</div>
					</div>
				</Edges>
			</div>
		</div>
	);
}

export default Anisoft;
