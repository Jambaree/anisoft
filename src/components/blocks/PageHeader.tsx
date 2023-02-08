'use client';
import Breadcrumbs from 'nextjs-breadcrumbs';

function PageHeader() {
	return (
		<div>
			PageHeader
			<Breadcrumbs
				useDefaultStyle
				rootLabel='Home'
			/>
		</div>
	);
}

export default PageHeader;
