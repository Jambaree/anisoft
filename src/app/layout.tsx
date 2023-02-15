import { Mukta, Maven_Pro } from "@next/font/google";

import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

import { useMenuItems, getData } from "@jambaree/next-wordpress";
import Providers from "../components/Providers";

const mukta = Mukta({
  variable: "--font-mukta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const maven = Maven_Pro({
  variable: "--font-maven",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    themeOptions: {
      options: { footer, header },
    },
  } = await getData({ query });

  const headerMenuItems = await useMenuItems({
    name: "header",
  });

  return (
    <html lang="en" className={`${maven.variable} ${mukta.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </head>
      <body id="top">
        <Header data={header} menuItems={headerMenuItems} />
        <Providers>{children}</Providers>
        {/* @ts-expect-error Server Component */}
        <Footer
          data={footer}
          // productMenuItems={productMenuItems}
        />
      </body>
    </html>
  );
}

const query = `
  query MenuQuery {
    themeOptions {
      options {
        header {
          button {
            title
            url
          }
        }
        footer {
          link2 {
            title
            url
          }
          link1 {
            title
            url
          }
          copyrightText
          contactInformation {
            email
            phoneNumber
            socials {
              icon
              url
            }
          }
        }
      }
    }
  }`;
