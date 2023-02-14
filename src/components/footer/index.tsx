import React from "react";
import FooterMenuItems from "./footerMenu/FooterMenuItems";
import { useMenuItems } from "@jambaree/next-wordpress";
import Edges from "../Edges";
import Link from "next/link";
import InvertedLogo from "../logos/invertedlogo";
import Facebook from "../../../public/facebook.svg";
import Linkedin from "../../../public/linkedin.svg";

export default async function Footer({ data }) {
  const { contactInformation, copyrightText, link1, link2 } = data;
  const menuItems = await useMenuItems({
    name: "footer",
  });

  return (
    <div className="w-full primaryRadialBg">
      <Edges size="lg">
        <div className="flex flex-col pt-[80px]">
          <div className="flex flex-col md:flex-row md:justify-between pb-[100px]">
            <div>
              <div className="mb-[32px]">
                <Link href="/">
                  <InvertedLogo />
                </Link>
              </div>
              <div className="flex flex-col mb-[27px] p-footer">
                <p className="text-white">{contactInformation?.phoneNumber}</p>
                <p className="text-white">{contactInformation?.email}</p>
              </div>
              <div className="flex flex-row">
                {contactInformation?.socials.map((link, index) => (
                  <a key={index} href={link?.url || "/"} className="mr-[22px]">
                    {link.icon === "facebook" && <Facebook />}
                    {link.icon === "linkedin" && <Linkedin />}
                  </a>
                ))}
              </div>
            </div>
            <div className="max-w-[384px] mt-[30px] md:mt-0">
              <FooterMenuItems menuItems={menuItems} />
            </div>
          </div>
          <div className="bg-white w-full h-[1px] mb-[32px]"></div>
          <div className=" text-white mb-[43px] flex flex-col-reverse sm:flex-row flex-wrap-reverse justify-between p-footer">
            <div>{copyrightText}</div>
            <div className="flex flex-col sm:flex-row sm:mb-0 mb-[15px]">
              <Link href={link1?.url || "/"} className="sm:ml-[24px] ">
                {link1?.title}
              </Link>
              <Link href={link2?.url || "/"} className="sm:ml-[24px] ">
                {link2?.title}
              </Link>
            </div>
          </div>
        </div>
      </Edges>
    </div>
  );
}
