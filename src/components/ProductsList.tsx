'use client';
import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import Button from './Button';

function ProductsList({ products }) {
	const [activeProduct, setActiveProduct] = React.useState(null);

	React.useEffect(() => {
		setActiveProduct(0);
	}, []);

	return (
		<div className='flex flex-col items-center md:flex-row  w-full h-full pt-[60px] basis-full relative productCard'>
			<div
				className={classNames(
					'flex flex-col h-full transform transition-all duration-[1500ms] ease-in-out',
					activeProduct === null && 'translate-x-[-100vw]'
				)}
			>
				{products.map((product: any, index: number) => {
					return (
						<div
							onMouseEnter={() => setActiveProduct(index)}
							key={product?.id}
							className={`relative before:content[""] before:absolute  before:right-0 before:top-0    before:h-full before-h-full hidden md:block  pr-[100px]  cursor-pointer py-[35px]
								${
									activeProduct === index
										? 'md:before:bg-lightGreen before:w-[3px] before:translate-x-[1px]'
										: 'md:before:bg-[#ADADAD] before:w-[1px] '
								} transition-all ease-in-out`}
						>
							{product?.title && (
								<h3 className='text-black'>{product.title}</h3>
							)}
						</div>
					);
				})}
			</div>

			<div className='flex flex-col md:ml-[100px] grow flex-auto  justify-center relative  self-stretch z-0 overflow-x-hidden overflow-y-clip'>
				{products.map((product: any, idx: number) => {
					return (
						<div
							key={product?.id}
							className={`
								${
									activeProduct === idx
										? ' z-10 transition-all duration-[1500ms] ease-in-out'
										: 'translate-x-0 mb-[30px] md:mb-0 md:block md:translate-x-[100vw] md:z-[-1] md:opacity-0 md:transition-none '
								}
								productCard bg-darkPurple p-[20px] md:p-[50px] flex flex-col  top-0 relative md:absolute right-0`}
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
							<div className='w-full  md:max-h-[55px]'>
								{product?.text && (
									<p className=' overflow-hiden text-white'>{product.text}</p>
								)}
							</div>
							<div className='relative w-100 my-[50px] h-[220px] bg-cover'>
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
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ProductsList;
