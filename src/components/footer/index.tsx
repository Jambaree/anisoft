import React from "react";
import FooterMenuItems from "./footerMenu/FooterMenuItems";
import { getMenuItems } from "@jambaree/next-wordpress";
import Edges from "../Edges";
import Link from "next/link";
import InvertedLogo from "../logos/invertedlogo";
import Facebook from "../../../public/facebook.svg";
import Linkedin from "../../../public/linkedin.svg";
import { getData } from "@jambaree/next-wordpress";

export default async function Footer() {
  const {
    themeOptions: {
      options: {
        footer: { contactInformation, copyrightText, link1, link2 },
      },
    },
    menu: { menuItems },
  } = await getData({ query });
  const productMenuItems = await getMenuItems({
    id: "SingleProduct",
  });

  return (
    <div className="w-full primaryRadialBg">
      <Edges size="lg">
        <div className="flex flex-col pt-[80px]">
          <div className="flex flex-col md:flex-row md:justify-between pb-[100px] ">
            <div>
              <div className="mb-[32px]">
                <Link href="/" aria-label="logo-home-link">
                  <InvertedLogo />
                </Link>
              </div>
              <div className="flex flex-col mb-[27px] p-footer">
                <p className="text-white">{contactInformation.phoneNumber}</p>
                <p className="text-white">{contactInformation.email}</p>
              </div>
              <div className="flex flex-row">
                {contactInformation?.socials.map((link, index) => (
                  <a
                    aria-label="social link"
                    key={index}
                    href={link?.url || "/"}
                    className="mr-[22px]"
                  >
                    {link.icon === "facebook" && (
                      <Facebook className="hover:fill-lightGreen  fill-white" />
                    )}
                    {link.icon === "linkedin" && (
                      <Linkedin
                        id="linkedin"
                        className="hover:fill-lightGreen fill-white"
                      />
                    )}
                  </a>
                ))}
              </div>
            </div>
            <div className=" mt-[30px] md:mt-0">
              <FooterMenuItems
                menuItems={menuItems.nodes}
                productMenuItems={productMenuItems}
              />
            </div>
          </div>
          <div className="bg-white w-full h-[1px] mb-[32px]"></div>
          <div className=" text-white mb-[43px] flex flex-col-reverse sm:flex-row flex-wrap-reverse justify-between p-footer">
            <div>{copyrightText}</div>
            <div className="flex flex-col sm:flex-row sm:mb-0 mb-[15px]">
              <Link
                href={link1?.url || "/"}
                className="sm:ml-[24px] hover:text-lightGreen"
              >
                {link1?.title}
              </Link>
              <Link
                href={link2?.url || "/"}
                className="sm:ml-[24px] hover:text-lightGreen"
              >
                {link2?.title}
              </Link>
            </div>
          </div>
        </div>
      </Edges>
    </div>
  );
}

const query = /* GraphQL */ `
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
      }
    }
    menu(id: "footer", idType: NAME) {
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
