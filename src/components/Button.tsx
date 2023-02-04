'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { motion } from 'framer-motion';

interface IButtonProps {
	children: React.ReactNode;
	reverse?: boolean;
	variant?: 'large' | 'medium' | 'basic' | 'basicWhite';
	href: string;
	className?: string;
}

const Button: React.FC<IButtonProps> = ({
	reverse,
	children,
	variant,
	href,
}) => {
	const [isHovered, setHovered] = useState(false);
	return (
		<Link
			href={href}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className={classNames(
				reverse && 'text-white border-white',
				!reverse && variant === 'large' && 'text-darkPurple border-darkPurple',
				!reverse && variant === 'medium' && 'text-lightBlue border-lightBlue',
				variant === 'large'
					? 'p  w-[199px] h-[48px] rounded-full border-[1px] flex items-center text-[18px] justify-center uppercase font-mukta leading-[150%] font-light pt-1'
					: variant === 'medium'
					? '  ml-[16px] lg:mr-0 mr-[26px] rounded-full border-[1px] w-[145px] h-[35px] flex items-center justify-center uppercase font-maven text-[14px] '
					: variant === 'basicWhite'
					? 'text-white flex flex-row items-center justify-center font-mukta text-[18px] font-light pt-1'
					: 'text-darkPurple flex flex-row items-center justify-center font-mukta text-[18px] font-light pt-1',
				'relative '
			)}
		>
			{!variant.includes('basic') && (
				<motion.div
					initial={{ right: '25%' }}
					animate={{ right: isHovered ? '56%' : '25%' }}
					transition={{ duration: 0.3 }}
					className='absolute bg-lightGreen -top-[4px] w-[18%] h-[17%] rounded-sm'
				></motion.div>
			)}
			{children}

			{variant.includes('basic') && (
				<motion.div
					className='absolute -right-[20px]'
					animate={{ right: isHovered ? '-32px' : '-20px' }}
					transition={{ duration: 0.3 }}
				>
					{variant === 'basicWhite' ? (
						<Image
							src='/chevron-right-white.svg'
							alt='chevron-right'
							width='8'
							height='13'
							className=' pb-1'
						/>
					) : (
						<Image
							src='/chevron-right.svg'
							alt='chevron-right'
							width='8'
							height='13'
							className=' pb-1'
						/>
					)}
				</motion.div>
			)}
		</Link>
	);
};

export default Button;
