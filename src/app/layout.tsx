import { Mukta, Maven_Pro } from "next/font/google";

import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

import { getData } from "@jambaree/next-wordpress";
import Providers from "../components/Providers";
import Script from "next/script";

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
      options: { header },
    },
    menu: { menuItems },
  } = await getData({ query });

  const headerMenuItems = menuItems?.nodes?.filter((item) => {
    return item?.parentDatabaseId === 0;
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
        <script
          async
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5NP3J68');`,
          }}
        />
      </head>
      <body id="top">
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5NP3J68" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <Header data={header} menuItems={headerMenuItems} />
        <Providers>{children}</Providers>
        {/* @ts-expect-error Server Component */}
        <Footer />
      </body>
    </html>
  );
}
// menuItems(first: 1000)
const query = /* GraphQL */ `
  query MenuQuery {
    themeOptions {
      options {
        header {
          button {
            title
            url
          }
        }
      }
    }
    menu(id: "header", idType: NAME) {
      id
      slug
      locations
      menuItems(first: 100) {
        nodes {
          path
          url
          label
          target
          parentDatabaseId
          cssClasses
          childItems {
            nodes {
              id
              label
              url
              childItems {
                nodes {
                  id
                  label
                  url
                  description
                }
              }
            }
          }
        }
      }
    }
  }
`;
