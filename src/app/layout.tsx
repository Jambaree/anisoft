import { Mukta, Maven_Pro } from '@next/font/google';

import './globals.css';
import Header from '../components/header';

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

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			className={`${maven.variable} ${mukta.variable}`}
		>
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
