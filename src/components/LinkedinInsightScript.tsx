"use client";
import React, { useEffect } from "react";

export default function LinkedinInsightScript() {
  useEffect(() => {
    const partnerId = "6170148";
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(partnerId);

    (function (l) {
      if (!l) {
        window.lintrk = function (a, b) {
          window.lintrk.q.push([a, b]);
        };
        window.lintrk.q = [];
      }
      const s = document.getElementsByTagName("script")[0];
      const b = document.createElement("script");
      b.type = "text/javascript";
      b.async = true;
      b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
      s.parentNode.insertBefore(b, s);
    })(window.lintrk);
  }, []);

  return (
    <div>
      <noscript>
        <img
          alt=""
          height="1"
          src="https://px.ads.linkedin.com/collect/?pid=6170148&fmt=gif"
          style={{ display: "none" }}
          width="1"
        />
      </noscript>
    </div>
  );
}
