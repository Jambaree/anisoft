'use client';
import React, { useRef } from 'react';

import { useInView } from 'framer-motion';
import classNames from 'classnames';

const SideIn = (props) => {
	const {
		children,
		alwaysVisible = false,
		playOnce = true,
		className,
		right = true,
	} = props;

	const ref = useRef(null);
	const isInView = useInView(ref, { once: playOnce });

	return (
		<div
			ref={ref}
			className={classNames(
				'overflow-x-hidden  transition-[opacity, transform] delay-100 duration-[1500ms] ease-in-out',
				isInView
					? 'overflow-x-hidden translate-x-0 opacity-100'
					: right
					? 'overflow-x-hidden translate-x-full opacity-0'
					: 'overflow-x-hidden translate-x-[-100%] opacity-0',
				alwaysVisible && 'opacity-100',
				className
			)}
		>
			{children}
		</div>
	);
};

export default SideIn;
