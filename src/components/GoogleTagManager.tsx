"use client";
import React, { useEffect } from "react";

const GoogleTagManager = () => {
  useEffect(() => {
    const initGtm = () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        "gtm.start": new Date().getTime(),
        event: "gtm.js",
      });
    };

    const gtmScript = document.getElementById("google-tag-manager");
    if (gtmScript) {
      gtmScript.addEventListener("load", initGtm);
    }

    return () => {
      if (gtmScript) {
        gtmScript.removeEventListener("load", initGtm);
      }
    };
  }, []);

  return (
    <script
      async
      id="google-tag-manager"
      src="https://www.googletagmanager.com/gtm.js?id=GTM-5NP3J68"
    />
  );
};

export default GoogleTagManager;
