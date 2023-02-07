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
		<div className='flex items-center  w-full h-full pt-[60px] basis-full relative'>
			<div className={`flex flex-col h-full`}>
				{products.map((product: any, index: number) => {
					return (
						<div
							onMouseEnter={() => setActiveProduct(index)}
							key={product?.id}
							className={`border-r-[1px] pr-[100px]  cursor-pointer py-[35px]
								${
									activeProduct === index
										? 'border-r-lightGreen border-r-[4px]'
										: 'border-r-[#ADADAD] border-r-[1px]'
								} transition-all ease-in-out`}
						>
							{product?.title && (
								<h3 className='text-black'>{product.title}</h3>
							)}
						</div>
					);
				})}
			</div>

			<div className='flex flex-col  ml-[100px] grow flex-auto  justify-center relative  self-stretch z-0'>
				{products.map((product: any, idx: number) => {
					return (
						<div
							key={product?.id}
							className={`
								${
									activeProduct === idx
										? ' z-10 transition-all duration-[1500ms] ease-in-out'
										: 'translate-x-[200vw] z-[-1]'
								}
								bg-darkPurple p-[20px] md:p-[50px] flex flex-col  top-0 absolute right-0`}
						>
							<div className='flex flex-col md:flex-row justify-between w-full pb-[30px]'>
								{product?.title && (
									<h2 className='text-white pr-[20px]'>{product.title}</h2>
								)}
								{product?.button?.url && (
									<Button
										variant='large'
										href={product.button.url}
										reverse={true}
									>
										{product.button.title}
									</Button>
								)}
							</div>
							<div className='w-full pb-[30px]'>
								{product?.text && <p className='text-white'>{product.text}</p>}
							</div>
							<div className='relative w-100 pb-[30px] h-[220px]'>
								{product?.image?.sourceUrl && (
									<Image
										className=''
										src={product.image.sourceUrl}
										alt={product.image.altText}
										fill
									/>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ProductsList;
