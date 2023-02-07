import Image from 'next/image';
import Button from '../Button';
import Edges from '../Edges';
import FadeInUp from '../FadeInUp';

function Anisoft({ data }) {
	const { headline, tag, button, text } = data;

	return (
		<div className='relative primaryRadialBg pb-[100px] pl-[50px] md:pl-[100px]'>
			<div className='absolute left-[10px] md:left-[15px] top-0 w-[40px] md:w-[100px] h-auto flex'>
				<Image
					src='/anisoft-module.svg'
					alt='anisoft'
					width='200'
					height='100'
					className='max-h-[472px]'
				/>
			</div>
			<div className='bg-white pb-[50px] md:pb-[80px] min-h-[472px] overflow-hidden'>
				<Edges size='lg'>
					<div className='flex w-full h-full flex-wrap text-darkPurple items-start justify-evenly'>
						<div className='max-w-[500px] pt-[50px] md:pt-[70px]'>
							{tag && <p className='max-w-[575px] pt-[40px]'>{tag}</p>}

							{headline && (
								<FadeInUp className='delay-200'>
									<h1 className='heroHeadline max-w-[985px] text-[32px]  sm:text-[48px]'>
										{headline}
									</h1>
								</FadeInUp>
							)}
						</div>
						<div className='max-w-[500px] flex flex-col pt-[50px] md:pt-[150px]'>
							{text && <p>{text}</p>}
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
