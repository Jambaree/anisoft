import React from "react";

export default function ZohoChatWidget(props) {
  return (
    <div className="z-50 relative">
      <script>
        {`window.$zoho = window.$zoho || {}; $zoho.salesiq = $zoho.salesiq || {ready: function(){}};`}
      </script>
      <script
        defer
        id="zsiqscript"
        src="https://salesiq.zohopublic.ca/widget?wc=9eb7f9e1f9f1fec6c3fe90f6124bcd95580d9d18d9aaeaa22e2d9f2594c86de1"
      />
    </div>
  );
}
