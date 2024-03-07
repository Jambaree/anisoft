import type { WpImage, WpLink } from "@nextwp/core";
import type { LinkProps } from "next/link";
import Link from "next/link";
import Image from "next/image";
import { stripWpUrl } from "@/utils/strip-wp-url";
import Edges from "../Edges";

interface GridProps {
  headline?: string;
  subline?: string;
  items?: {
    headline?: string;
    subline?: string;
    image?: WpImage;
    link?: WpLink;
  }[];
}

export function Grid({ headline, subline, items }: GridProps) {
  return (
    <Edges className="my-12">
      {headline ? (
        <h1 className="heroHeadline text-[2rem]  sm:text-[3rem] mb-5">
          {headline}
        </h1>
      ) : null}

      {subline ? <p className="mb-5">{subline}</p> : null}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-16">
        {items?.map(({ headline, subline, image, link }, index) => {
          return (
            <DynamicLinkOrDiv
              className="w-full bg-darkPurple p-[30px] flex flex-col gap-4 items-start justify-between"
              href={link?.url ? stripWpUrl(link.url) : undefined}
              // eslint-disable-next-line react/no-array-index-key -- we don't have a unique ID
              key={index}
              target={link?.target}
            >
              <div className="">
                {headline ? (
                  <h4
                    className="text-white w-auto sm:w-fit text-[1.45rem] mb-5"
                    dangerouslySetInnerHTML={{
                      __html: headline,
                    }}
                  />
                ) : null}

                {subline ? (
                  <div
                    className="text-white archiveText overflow-hidden overflow-ellipsis mb-4"
                    dangerouslySetInnerHTML={{
                      __html: subline,
                    }}
                  />
                ) : null}
              </div>
              {image?.url ? (
                <div className="relative w-full h-[220px]">
                  <Image alt={image.alt || ""} fill src={image.url} />
                </div>
              ) : null}
            </DynamicLinkOrDiv>
          );
        })}
      </div>
    </Edges>
  );
}

interface DynamicLinkOrDivProps extends Omit<LinkProps, "href"> {
  href?: string;
  target?: string;
  children: React.ReactNode;
  className?: string;
}

function DynamicLinkOrDiv({
  href,
  target,
  children,
  onClick,
  onMouseEnter,
  onTouchStart,
  ...rest
}: DynamicLinkOrDivProps) {
  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onTouchStart={onTouchStart}
        target={target}
        {...rest}
      >
        {children}
      </Link>
    );
  }
  return <div {...rest}>{children}</div>;
}
