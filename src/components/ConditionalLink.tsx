// ConditionalLink.js
"use client";
import React, { useState, useEffect } from "react";
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
  const currentPathname = usePathname();
  const [isOptInPath, setIsOptInPath] = useState(false);

  useEffect(() => {
    const optInPaths = [
      "anisoft-ibmi",
      "anisoft-cyber-resilience-framework",
      "ibm-cyber-resilience-framework",
      "netapp-cyber-resilience-framework",
    ];
    const checkIfOptInPath = optInPaths.some((path) =>
      currentPathname.includes(path)
    );
    setIsOptInPath(checkIfOptInPath);
  }, [currentPathname]); // Depend on currentPathname to re-evaluate when it changes

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
