import React from "react";
import MenuItems from "./footerMenu/MenuItems";
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

const Footer = () => {
  return (
    <div className="w-full footerRadial">
      <Edges size="lg">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <div>
              <div className="mb-5">
                <Link href="/">
                  <InvertedLogo />
                </Link>
              </div>
              <div className="flex flex-col mb-[27px]">
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
            <div className="max-w-[384px]">
              <MenuItems />
            </div>
          </div>
          <div className="bg-white w-full h-[1px]"></div>
          <div className=" text-white">Copyright</div>
        </div>
      </Edges>
    </div>
  );
};

export default Footer;
