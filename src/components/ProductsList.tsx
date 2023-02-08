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
				className={'flex flex-col w-full md:h-[550px] justify-evenly '}
			>
				{products.map((product: any, index: number) => {
					return (
						<div
							key={product?.id}
							onMouseEnter={() => setActiveProduct(index)}
							className={classNames(
								' h-full md:min-w-[30%] relative before:content[""] before:absolute before:top-0 before:h-full before-h-full hidden md:flex items-center pr-[100px] cursor-pointer  transition-all ease-in-out overflow-hidden',
								activeProduct === index
									? 'md:before:bg-lightGreen before:w-[4px] before:right-[2.5px] '
									: 'md:before:bg-[#ADADAD] before:w-[1px] before:right-[4px] '
							)}
						>
							{product?.title && (
								<h3 className='text-black align-middle '>{product.title}</h3>
							)}
						</div>
					);
				})}
			</SideIn>

			<SideIn
				className={
					'bg-darkPurple flex flex-col md:ml-[100px] justify-center md:h-[550px] overflow-hidden'
				}
			>
				{products.map((product: any, idx: number) => {
					return (
						<FadeInUp
							playOnce={false}
							key={product?.id}
							className={`
								${activeProduct === idx ? 'block' : ' mb-[30px] md:mb-0 block md:hidden '}
								  p-[20px] md:p-[50px] flex flex-col h-full border-b-[10px] border-b-white md:border-b-0`}
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
							<div className='relative w-full mt-[30px] h-full bg-cover'>
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
