import { Mukta, Maven_Pro } from "@next/font/google";

import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
// import { getData } from "@jambaree/next-wordpress";
import useMenuItems from "../components/useMenuItems";

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
  // const {
  //   themeOptions: {
  //     options: { header },
  //   },
  // } = await getData({ uri: "", query });

  const headerMenuItems = await useMenuItems({
    name: "header",
  });

  // const headerMenuItems = [
  //   {
  //     id: "1",
  //     label: "Home",
  //     url: "/",
  //   },
  //   {
  //     id: "2",
  //     label: "About",
  //     url: "/about",
  //   },
  //   {
  //     id: "3",
  //     label: "Services",
  //     url: "/services",
  //   },
  //   {
  //     id: "4",
  //     label: "Contact",
  //     url: "/contact",
  //   },
  // ];

  return (
    <html lang="en" className={`${maven.variable} ${mukta.variable}`}>
      <body>
        <Header menuItems={headerMenuItems} />

        {children}
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
