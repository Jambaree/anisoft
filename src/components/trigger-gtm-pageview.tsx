"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {}
}
export function TriggerPageView() {
  const pathname = usePathname();

  useEffect(() => {
    window?.dataLayer.push?.({
      event: "page_view",
      page: window.location.href,
    });
  }, [pathname]);

  return null;
}
