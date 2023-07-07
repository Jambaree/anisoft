import React from "react";
import { Partytown } from "@builder.io/partytown/react";
import Script from "next/script";

export default function Scripts() {
  return (
    <>
      <Partytown debug={true} forward={["dataLayer.push"]} />
      <Script
        type="text/partytown"
        strategy="lazyOnload"
        id="google-tag-manager"
      >
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5NP3J68');
      `}
      </Script>
    </>
  );
}
