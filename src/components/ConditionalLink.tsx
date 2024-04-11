// ConditionalLink.js
import React from "react";
import Link from "next/link";

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
  if (dangerouslySetInnerHTML) {
    return (
      <Link
        {...rest}
        aria-label={ariaLabel}
        className={className}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      />
    );
  }

  return (
    <Link
      {...rest}
      className={className}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </Link>
  );
}
