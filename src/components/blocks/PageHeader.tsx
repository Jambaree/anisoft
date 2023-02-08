import BreadCrumbs from '../BreadCrumbs';
import Edges from '../Edges';

const PageHeader = ({ data }) => {
	const { title, text } = data;

	return (
		<div className=' py-[90px]'>
			<Edges size='lg'>
				<div className='flex flex-wrap md:justify-between'>
					<div className='flex flex-col md:w-[30%]'>
						<BreadCrumbs />
						{title && (
							<h1 className='heroHeadline mb-[30px] md:mb-0'>{title}</h1>
						)}
					</div>
					<div className='md:w-[70%]'>
						{text && <div dangerouslySetInnerHTML={{ __html: text }} />}
					</div>
				</div>
			</Edges>
		</div>
	);
};

export default PageHeader;
