import React from 'react';
import Button from './Button';

function ProductsSlide({ products }) {
	return (
		<div className='flex items-center justify-between flex-wrap'>
			<div className='flex flex-col'>
				{products.map((product) => {
					<div
						key={product?.id}
						className='py-[35px] border-r-[#ADADAD] border-r-[1px]'
					>
						{product?.title && <h3 className='text-black'>{product.title}</h3>}
					</div>;
				})}
			</div>

			{products.map((product) => {
				<div
					key={product?.id}
					className='bg-darkPurple p-[20px] md:p-[50px] flex flex-col'
				>
					<div className='flex flex-col md:flex-row justify-between w-full pb-[30px]'>
						{product?.title && <h2 className='text-white'>{product.title}</h2>}
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
					<div className='w-full'>{product?.text && <p>{product.text}</p>}</div>
				</div>;
			})}
		</div>
	);
}

export default ProductsSlide;
