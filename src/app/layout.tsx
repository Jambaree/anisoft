import { Mukta, Maven_Pro } from "@next/font/google";

import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { getData } from "@jambaree/next-wordpress";
import useMenuItems from "../components/header/headerMenu/useMenuItems";

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
  // temporary fix with getData, must use ` uri: "" ` for it to not break
  const {
    themeOptions: {
      options: { footer, header },
    },
  } = await getData({ uri: "", query });
  const headerMenuItems = await useMenuItems({
    location: "HEADER_MENU",
    slug: "header-menu",
  });

  console.log(headerMenuItems);
  // const productMenuItems = await getMenuItems({
  //   location: "PRODUCT_FOOTER_MENU",
  //   slug: "product-footer-menu",
  // });
  // const footerMenuItems = await getMenuItems({
  //   location: "FOOTER_MENU",
  //   slug: "footer-menu",
  // });

  const footerMenuItems = [
    {
      id: "1",
      label: "About",
      url: "/about",
      childItems: [
        {
          id: "2",
          label: "About",
          url: "/about",
        },
      ],
    },
  ];

  return (
    <html lang="en" className={`${maven.variable} ${mukta.variable}`}>
      <body>
        <Header data={header} menuItems={headerMenuItems} />

        {children}

        <Footer
          data={footer}
          menuItems={footerMenuItems}
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
        header {
          buttonText
        }
      }
    }
  }`;
