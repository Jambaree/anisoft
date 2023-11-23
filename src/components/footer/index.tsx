import React from "react";
import { getMenuItems, getOptionsPage } from "@jambaree/next-wordpress";
import Link from "next/link";
import { deepCamelCase } from "@/utils/deep-camel-case-helper";
import Edges from "../Edges";
import InvertedLogo from "../logos/invertedlogo";
import Facebook from "../../../public/facebook.svg";
import Linkedin from "../../../public/linkedin.svg";
import FooterMenuItems from "./footerMenu/FooterMenuItems";

type FooterOptions = {
  footer: {
    contactInformation: {
      phoneNumber: string;
      email: string;
      socials: {
        icon: string;
        url: string;
      }[];
    };
    copyrightText?: string;
    link1?: {
      title: string;
      url: string;
    };
    link2?: {
      title: string;
      url: string;
    };
  };
};

export default async function Footer() {
  const {
    footer: { contactInformation, copyrightText, link1, link2 },
  } = deepCamelCase(
    await getOptionsPage({
      slug: "theme-options",
    })
  ) as FooterOptions;

  const menuItems = await getMenuItems({
    slug: "footer",
  });

  return (
    <div className="w-full primaryRadialBg">
      <Edges size="lg">
        <div className="flex flex-col pt-[80px]">
          <div className="flex flex-col md:flex-row md:justify-between pb-[100px] ">
            <div>
              <div className="mb-[32px]">
                <Link aria-label="logo-home-link" href="/">
                  <InvertedLogo />
                </Link>
              </div>
              <div className="flex flex-col mb-[27px] p-footer">
                <p className="text-white">{contactInformation.phoneNumber}</p>
                <p className="text-white">{contactInformation.email}</p>
              </div>
              <div className="flex flex-row">
                {contactInformation.socials.length > 0 &&
                  contactInformation.socials.map((link, index) => (
                    <a
                      aria-label="social link"
                      className="mr-[22px]"
                      href={link.url || "/"}
                      key={index}
                    >
                      {link.icon === "facebook" && (
                        <Facebook className="hover:fill-lightGreen  fill-white" />
                      )}
                      {link.icon === "linkedin" && (
                        <Linkedin
                          className="hover:fill-lightGreen fill-white"
                          id="linkedin"
                        />
                      )}
                    </a>
                  ))}
              </div>
            </div>
            <div className=" mt-[30px] md:mt-0">
              <FooterMenuItems menuItems={menuItems} />
            </div>
          </div>
          <div className="bg-white w-full h-[1px] mb-[32px]" />
          <div className=" text-white mb-[43px] flex flex-col-reverse sm:flex-row flex-wrap-reverse justify-between p-footer">
            <div>{copyrightText}</div>
            <div className="flex flex-col sm:flex-row sm:mb-0 mb-[15px]">
              {link1 ? (
                <Link
                  className="sm:ml-[24px] hover:text-lightGreen"
                  href={link1.url || "/"}
                >
                  {link1.title}
                </Link>
              ) : null}
              {link2 ? (
                <Link
                  className="sm:ml-[24px] hover:text-lightGreen"
                  href={link2.url || "/"}
                >
                  {link2.title}
                </Link>
              ) : null}
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
