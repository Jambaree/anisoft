'use client';
import React from 'react';
import DOMPurify from 'dompurify';

function RichTextComponents({ html }) {
	const sanitizedHtml = DOMPurify.sanitize(html);

	return (
		<div
			className='richText pt-[50px] md:pt-[70px]'
			dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
		/>
	);
}

export default RichTextComponents;
