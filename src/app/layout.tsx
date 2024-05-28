import "./globals.css";
import { Mukta, Maven_Pro } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { getMenuItems, getOptionsPage } from "@nextwp/core";
import type { WpLink } from "@nextwp/core";
import { TriggerPageView } from "@/components/trigger-gtm-pageview";
import ZohoChatWidget from "@/components/zoho-chat-widget";
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

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeOptions = (await getOptionsPage({
    slug: "theme-options",
  })) as {
    header?: {
      button?: WpLink;
    };
  };

  const button = themeOptions.header?.button;

  const menuItems = await getMenuItems({
    slug: "header",
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
        <Header button={button} menuItems={menuItems} />
        <Providers>{children}</Providers>
        <Footer />
        <ZohoChatWidget />
      </body>
      <GoogleTagManager gtmId="GTM-5NP3J68" />
      <TriggerPageView />
    </html>
  );
}
