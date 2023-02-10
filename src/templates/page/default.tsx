import { notFound } from 'next/navigation';
import Hero from '../../components/blocks/Hero';
import data from '../../components/blocks/data.json';
import { getData } from '@jambaree/next-wordpress';
import Anisoft from '../../components/blocks/Anisoft';
import ProductsSlider from '../../components/blocks/ProductsSlider';
import LogoModule from '../../components/blocks/LogoModule';
import PageHeader from '../../components/blocks/PageHeader';
import PageHeader2 from '../../components/blocks/PageHeader2';
import InfoCallout from '../../components/blocks/InfoCallout';
import Contact from '../../components/blocks/Contact';

export default async function DefaultPageTemplate({ uri }) {
	const { page } = await getData({ uri, query });
	if (!page) {
		notFound();
	}
	const { title } = page;

	return (
		<>
			<Contact data={data.contact} />
			<PageHeader2 data={data.pageHeader2} />
			<PageHeader data={data.pageHeader} />
			<Hero data={data.hero} />
			<Anisoft data={data.anisoft} />
			<ProductsSlider data={data.productsSlider} />
			<LogoModule data={data.logoModule} />
			<InfoCallout data={data.infoCallout} />
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
