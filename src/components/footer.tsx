import React from "react";
import FooterMenuItems from "./footerMenu/FooterMenuItems";
import Edges from "./Edges";
import Image from "next/image";
import Link from "next/link";
import InvertedLogo from "./logos/invertedlogo";

const socialInfo = {
  phone: "123-456-7890",
  email: "info@anisoftgroup.com",
};

const socialLinks = [
  {
    name: "Facebook",
    url: "/",
    icon: "/facebook.svg",
    width: 10,
    height: 18,
  },
  {
    name: "Linkedin",
    url: "/",
    icon: "/linkedin.svg",
    width: 18,
    height: 18,
  },
];

const copyrightLinks = [
  {
    name: "Privacy Policy",
    url: "/",
  },
  {
    name: "Terms of Service",
    url: "/",
  },
];

const Footer = () => {
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
                <p className="text-white">{socialInfo.phone}</p>
                <p className="text-white">{socialInfo.email}</p>
              </div>
              <div className="flex flex-row">
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.url} className="mr-[22px]">
                    <Image
                      src={link.icon}
                      alt="social-icon"
                      width={link.width}
                      height={link.height}
                    ></Image>
                  </a>
                ))}
              </div>
            </div>
            <div className="max-w-[384px] mt-[30px] md:mt-0">
              <FooterMenuItems />
            </div>
          </div>
          <div className="bg-white w-full h-[1px] mb-[32px]"></div>
          <div className=" text-white mb-[43px] flex flex-col-reverse sm:flex-row flex-wrap-reverse justify-between p-footer">
            <div>2023 Anisoft Group Inc. All right reserved.</div>
            <div className="flex flex-col sm:flex-row sm:mb-0 mb-[15px]">
              {copyrightLinks.map((link, index) => (
                <Link key={index} href={link?.url} className="sm:ml-[24px] ">
                  {link?.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Edges>
    </div>
  );
};

export default Footer;
