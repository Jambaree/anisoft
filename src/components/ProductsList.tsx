'use client';
import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import Button from './Button';
import FadeInUp from './FadeInUp';
import SideIn from './SideIn';

function ProductsList({ products }) {
	const [activeProduct, setActiveProduct] = React.useState(null);

	React.useEffect(() => {
		setActiveProduct(0);
	}, []);

	return (
		<div className='flex flex-col items-center md:flex-row  w-full h-full pt-[60px]'>
			<SideIn
				right={false}
				className={'flex flex-col w-full md:h-[550px]'}
			>
				{products.map((product: any, index: number) => {
					return (
						<div
							key={product?.id}
							className={classNames(
								'md:min-w-[30%] relative before:content[""] before:absolute before:right-0 before:top-0 before:h-full before-h-full hidden md:block pr-[100px] cursor-pointer py-[35px] transition-all ease-in-out',
								activeProduct === index
									? 'md:before:bg-lightGreen before:w-[3px] before:translate-x-[1px]'
									: 'md:before:bg-[#ADADAD] before:w-[1px] '
							)}
						>
							{product?.title && (
								<h3
									onMouseEnter={() => setActiveProduct(index)}
									className='text-black'
								>
									{product.title}
								</h3>
							)}
						</div>
					);
				})}
			</SideIn>

			<SideIn
				className={
					'bg-darkPurple flex flex-col md:ml-[100px] justify-center md:h-[550px]'
				}
			>
				{products.map((product: any, idx: number) => {
					return (
						<FadeInUp
							playOnce={false}
							key={product?.id}
							className={`
								${activeProduct === idx ? 'block' : ' mb-[30px] md:mb-0 block md:hidden '}
								  p-[20px] md:p-[50px] flex flex-col h-full`}
						>
							<div className='flex flex-col md:flex-row justify-between w-full pb-[30px]'>
								{product?.title && (
									<h2 className='text-white pr-[20px] py-[30px] md:py-0 '>
										{product.title}
									</h2>
								)}
								{product?.button?.url && (
									<div className='md:block hidden'>
										<Button
											variant='large'
											href={product.button.url}
											reverse={true}
										>
											{product.button.title}
										</Button>
									</div>
								)}
							</div>
							<div className='w-full'>
								{product?.text && <p className='text-white'>{product.text}</p>}
							</div>
							<div className='relative w-100 mt-[30px] h-[220px] bg-cover'>
								{product?.image?.sourceUrl && (
									<Image
										className='bg-cover'
										src={product.image.sourceUrl}
										alt={product.image.altText}
										fill
										object-fit='cover'
									/>
								)}
							</div>

							{product?.button?.url && (
								<div className='md:hidden block my-[20px] md:my-0'>
									<Button
										variant='large'
										href={product.button.url}
										reverse={true}
									>
										{product.button.title}
									</Button>
								</div>
							)}
						</FadeInUp>
					);
				})}
			</SideIn>
		</div>
	);
}

export default ProductsList;
