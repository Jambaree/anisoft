import "./globals.css";
import { Mukta, Maven_Pro } from "next/font/google";
import { getData } from "@jambaree/next-wordpress";
import { GoogleTagManager } from "@next/third-parties/google";
import { TriggerPageView } from "@/components/trigger-gtm-pageview";
import Header from "../components/header";
import Footer from "../components/footer";
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
      options: { header },
    },
    menu: { menuItems },
  } = await getData({ query });

  const headerMenuItems = menuItems?.nodes?.filter((item) => {
    return item?.parentDatabaseId === 0;
  });

  return (
    <html className={`${maven.variable} ${mukta.variable}`} lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </head>
      <body id="top">
        <Header data={header} menuItems={headerMenuItems} />
        <Providers>{children}</Providers>
        <Footer />
      </body>
      <GoogleTagManager gtmId="GTM-5NP3J68" />
      <TriggerPageView />
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
