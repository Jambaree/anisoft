import { Mukta, Maven_Pro } from '@next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/header';
import Footer from '../components/footer';

import {
	useMenuItems,
	getYoastData,
	getSeedData,
} from '@jambaree/next-wordpress';
import Providers from '../components/Providers';

const mukta = Mukta({
	variable: '--font-mukta',
	subsets: ['latin'],
	weight: ['300', '400', '500', '700'],
});

const maven = Maven_Pro({
	variable: '--font-maven',
	subsets: ['latin'],
	weight: ['400', '500', '700'],
});

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// temporary fix with getData, must use ` uri: "" ` for it to not break
	// const {
	//   themeOptions: {
	//     options: { header },
	//   },
	// } = await getData({ uri: "", query });

	const headerMenuItems = await useMenuItems({
		name: 'header',
	});

	return (
		<html
			lang='en'
			className={`${maven.variable} ${mukta.variable}`}
		>
			<head>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					href='https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css'
					rel='stylesheet'
				/>
			</head>
			<body>
				<Header menuItems={headerMenuItems} />
				<Providers>{children}</Providers>
				{/* @ts-expect-error Server Component */}
				<Footer

				// productMenuItems={productMenuItems}
				/>
			</body>
		</html>
	);
}

// const query = `
//   query MenuQuery {
//     themeOptions {
//       options {
//         header {
//           buttonText
//         }
//       }
//     }
//   }`;
