import { notFound } from 'next/navigation';
import Hero from '../../components/blocks/Hero';
import data from '../../components/blocks/data.json';
import { getData } from '@jambaree/next-wordpress';
import Anisoft from '../../components/blocks/Anisoft';
import ProductsSlider from '../../components/blocks/ProductsSlider';
import LogoModule from '../../components/blocks/LogoModule';
import PageHeader from '../../components/blocks/PageHeader';

export default async function DefaultPageTemplate({ uri }) {
	const { page } = await getData({ uri, query });
	if (!page) {
		notFound();
	}
	const { title } = page;

	return (
		<>
			<Hero data={data.hero} />
			<PageHeader/>
			<Anisoft data={data.anisoft} />
			<ProductsSlider data={data.productsSlider} />
			<LogoModule data={data.logoModule} />
		</>
	);
}
const query = `
  query PageQuery($uri: ID!) {
    page(id: $uri, idType: URI) {
      __typename
      id
      title
      uri
      slug
    }
  }`;
