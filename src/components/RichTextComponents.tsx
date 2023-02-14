import React from 'react';

function RichTextComponents({ html }) {

	return (
		<div
			className='richText pt-[50px] md:pt-[70px]'
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	);
}

export default RichTextComponents;
