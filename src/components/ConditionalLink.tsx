// ConditionalLink.js
"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ConditionalLinkProps {
  href: string;
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: any;
  className?: string;
  rest?: any;
  ariaLabel?: string;
  onClick?: () => void;
}

export default function ConditionalLink({
  href,
  children,
  dangerouslySetInnerHTML,
  className,
  ariaLabel,

  ...rest
}: ConditionalLinkProps) {
  const optInPaths = ["anisoft-ibmi"];
  const isOptInPath = usePathname().includes(optInPaths);

  if (dangerouslySetInnerHTML) {
    return (
      <Link
        {...rest}
        aria-label={ariaLabel}
        className={className}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        href={href}
        rel="noopener noreferrer"
        target={isOptInPath ? "_blank" : "_self"}
      />
    );
  }

  return (
    <Link
      {...rest}
      className={className}
      href={href}
      rel="noopener noreferrer"
      target={isOptInPath ? "_blank" : "_self"}
    >
      {children}
    </Link>
  );
}
