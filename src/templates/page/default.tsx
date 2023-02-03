import getPageData from './getPageData';
import { notFound } from 'next/navigation';
import Hero from '../../components/blocks/Hero';
import data from '../../components/blocks/data.json';

export default async function DefaultPageTemplate({ uri }) {
	const pageData = await getPageData({ uri });
	if (!pageData) {
		notFound();
	}
	const { title } = pageData;

	return (
		<>
			<h1>Default Page Template for {title}</h1>
			<Hero data={data.hero} />
		</>
	);
}
