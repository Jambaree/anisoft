'use client';
import dynamic from 'next/dynamic';
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
	ssr: false,
	loading: () => <p>Loading ...</p>,
});
import 'react-quill/dist/quill.snow.css';

const RichText = ({ content }) => {
	return (
		<div className='rich-text'>
			<QuillNoSSRWrapper
				value={content}
				readOnly={true}
				modules={{
					toolbar: false,
				}}
				className='quill-editor bg-white p-4 border-0 '
			/>
		</div>
	);
};

export default RichText;
