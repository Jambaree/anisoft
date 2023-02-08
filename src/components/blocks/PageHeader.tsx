'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const PageHeader = () => {
	const pathname = usePathname();
	const paths = pathname.split('/').filter(Boolean);

	return (
		<nav className='flex items-center justify-between py-2 font-medium text-sm text-gray-500'>
			<div className='flex items-center'>
				<Link
					className='text-gray-700 hover:text-gray-900'
					href={`/`}
				>
					<span className='p-details'>Home</span>
				</Link>
				{paths.map((path, index) => (
					<Link
						className='text-gray-700 hover:text-gray-900'
						key={index}
						href={`/${paths.slice(0, index + 1).join('/')}`}
					>
						<span className='mx-2 text-gray-400'>/</span>
						<span className='p-details'>{path}</span>
					</Link>
				))}
			</div>
		</nav>
	);
};

export default PageHeader;
