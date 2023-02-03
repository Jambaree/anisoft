import Image from "next/image";
import Edges from "./Edges";

const menuItems = {
  nodes: [
    {
      name: "Solutions & Products",
      link: "/",
      childItems: {
        nodes: [
          {
            name: "Data Management",
            link: "/",
          },
          {
            name: "Security & Data Protection",
            link: "/",
          },
          {
            name: "Enterprise Servers",
            link: "/",
          },
          {
            name: "Networking Technology",
            link: "/",
          },
          {
            name: "High Performance Solutions",
            link: "/",
          },
        ],
      },
    },
    {
      name: "Services & Support",
      link: "/",
      childItems: {
        nodes: [
          {
            name: "Data Management",
            link: "/",
          },
          {
            name: "Security & Data Protection",
            link: "/",
          },
          {
            name: "Enterprise Servers",
            link: "/",
          },
          {
            name: "Networking Technology",
            link: "/",
          },
          {
            name: "High Performance Solutions",
            link: "/",
          },
        ],
      },
    },
    {
      name: "About Us",
      link: "/",
      childItems: {
        nodes: [
          {
            name: "Data Management",
            link: "/",
          },
          {
            name: "Security & Data Protection",
            link: "/",
          },
          {
            name: "Enterprise Servers",
            link: "/",
          },
          {
            name: "Networking Technology",
            link: "/",
          },
          {
            name: "High Performance Solutions",
            link: "/",
          },
        ],
      },
    },
    {
      name: "Contact Us",
      link: "/",
      childItems: {
        nodes: [
          {
            name: "Data Management",
            link: "/",
          },
          {
            name: "Security & Data Protection",
            link: "/",
          },
          {
            name: "Enterprise Servers",
            link: "/",
          },
          {
            name: "Networking Technology",
            link: "/",
          },
          {
            name: "High Performance Solutions",
            link: "/",
          },
        ],
      },
    },
  ],
};
console.log(menuItems);
export default function Header() {
  return (
    <Edges size="lg">
      <div className="flex flex-row justify-between ">
        <Image
          src="/anisoft-logo.svg"
          alt="logo"
          width="271"
          height="41"
        ></Image>
      </div>
    </Edges>
  );
}
