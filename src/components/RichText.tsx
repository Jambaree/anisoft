'use client';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichText = ({ content }) => {
	return (
		<div className='rich-text'>
			<ReactQuill
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
